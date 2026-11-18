# Configuração de Ambiente

Arquivo que contém as partes necessárias para configuração de ambiente e inicialização de funções.

## Parte 0 — Configuração (execute antes de tudo)

### 0.1 Importações e funções auxiliares

As duas células abaixo preparam o ambiente e definem as funções de apoio mostrar, mostrar_varias, mostrar_resultado (executa uma tarefa e exibe entrada e saída lado a lado) e salvar_resultado.

```ipynb
import os
import glob
import urllib.request

import numpy as np
import cv2
import matplotlib.pyplot as plt
from skimage import data as sk_data

try:
    import google.colab  # só existe dentro do Colab
    EM_COLAB = True
except ImportError:
    EM_COLAB = False

plt.rcParams["figure.dpi"] = 100
os.makedirs("resultados", exist_ok=True)

print("OpenCV:", cv2.__version__, "| NumPy:", np.__version__)
print("Rodando no Google Colab ✅" if EM_COLAB else "Rodando fora do Colab")
```

```ipynb
def mostrar(img, titulo=None, bgr=True, ax=None, tamanho=6, eixos=False):
    """Exibe uma imagem com Matplotlib (cinza, BGR ou BGRA)."""
    sozinha = ax is None
    if sozinha:
        _, ax = plt.subplots(figsize=(tamanho, tamanho))
    if img.ndim == 2:
        ax.imshow(img, cmap="gray", vmin=0, vmax=255) if img.dtype == np.uint8 else ax.imshow(img, cmap="gray")
    else:
        if bgr and img.shape[2] == 3:
            img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        elif bgr and img.shape[2] == 4:
            img = cv2.cvtColor(img, cv2.COLOR_BGRA2RGBA)
        ax.imshow(img)
    if titulo:
        ax.set_title(titulo)
    if not eixos:
        ax.axis("off")
    if sozinha:
        plt.show()


def mostrar_varias(imagens, titulos=None, bgr=True, colunas=3, tamanho=4, eixos=False):
    """Exibe várias imagens lado a lado em uma grade."""
    n = len(imagens)
    colunas = min(colunas, n)
    linhas = int(np.ceil(n / colunas))
    fig, axs = plt.subplots(linhas, colunas, figsize=(tamanho * colunas, tamanho * linhas), squeeze=False)
    for k, ax in enumerate(axs.flat):
        if k < n:
            mostrar(imagens[k], titulos[k] if titulos else None, bgr=bgr, ax=ax, eixos=eixos)
        else:
            ax.axis("off")
    plt.tight_layout()
    plt.show()


def limitar_tamanho(img, maior_lado=1024):
    """Reduz a imagem para que o maior lado tenha no máximo `maior_lado` pixels."""
    h, w = img.shape[:2]
    escala = maior_lado / max(h, w)
    if escala < 1:
        img = cv2.resize(img, (int(w * escala), int(h * escala)), interpolation=cv2.INTER_AREA)
    return img


def mostrar_resultado(funcao, *args, **kwargs):
    """Executa uma função das tarefas e mostra a entrada e a saída lado a lado.

    Se a tarefa ainda não foi feita (NotImplementedError), só avisa com ⏳, para o notebook
    continuar rodando. Atenção: ela NÃO confere se a resposta está certa; para isso,
    use o "✅ Confira" de cada tarefa.
    Retorna a saída da função (ou None).
    """
    try:
        saida = funcao(*args, **kwargs)
    except NotImplementedError:
        print(f"⏳ {funcao.__name__}: ainda não implementado.")
        return None
    entrada = next((a for a in args if isinstance(a, np.ndarray)), None)
    if isinstance(saida, np.ndarray):
        if entrada is not None and entrada.ndim in (2, 3):
            mostrar_varias([entrada, saida], ["entrada", funcao.__name__], tamanho=5)
        else:
            mostrar(saida, funcao.__name__)
    return saida

def salvar_resultado(img, nome):
    """Salva a imagem em resultados/<nome> e informa o tamanho do arquivo."""
    caminho = os.path.join("resultados", nome)
    ok = cv2.imwrite(caminho, img)
    print(("💾 salvo: " if ok else "❌ falha ao salvar: ") + caminho +
          (f" ({os.path.getsize(caminho) / 1024:.1f} KB)" if ok else ""))
    return ok


print("Funções auxiliares prontas ✅")
```

### 📸 Foto principal

A célula abaixo define a função de envio de imagens (utilizada pela linha 📤 de cada tarefa) e carrega a **foto principal**, usada por padrão em todas as tarefas.
- **Na primeira execução**, a seleção de arquivo abre automaticamente: escolha uma foto da equipe. Ela fica armazenada e não será solicitada novamente.
- Para **trocar** a foto principal, altere `ENVIAR = False` para `True`, execute a célula e retorne para `False`.
- Em cada tarefa, a linha 📤 funciona da mesma forma: com `ENVIAR = True`, a tarefa passa a usar outra imagem, também armazenada.
- Se nenhum arquivo for selecionado, é utilizada uma imagem de exemplo.

```ipynb
def imagem_da_tarefa(tarefa, enviar=False, padrao=None, reduzir=True, usar_foto_teste=True,
                      pedir_se_vazio=False):
    """Carrega a imagem que será usada em uma tarefa.

    Parâmetros
    ----------
    tarefa : str
        Identificador da tarefa (ex.: "1.3"). A imagem enviada é salva em
        imagens_tarefas/ com esse nome, para ser reutilizada nas próximas execuções.
    enviar : bool
        True abre a seleção de arquivo (botão no Colab ou janela no computador)
        e substitui a imagem salva da tarefa. Após o envio, volte para False.
    padrao : ndarray ou None
        Imagem usada quando nenhuma foi enviada para a tarefa.
    reduzir : bool
        True reduz imagens grandes para no máximo 1024 px no maior lado.
        Use False quando os valores dos pixels precisam ser preservados
        exatamente, como na esteganografia.
    usar_foto_teste : bool
        Se True e `padrao` for None, usa a foto principal (img_teste).
        Se False, devolve `padrao` mesmo que seja None.
    pedir_se_vazio : bool
        Se True e ainda não houver imagem salva para a tarefa, abre a seleção
        de arquivo automaticamente (usado na foto principal).

    Ordem de escolha da imagem
    --------------------------
    1. a imagem enviada para a tarefa (se existir);
    2. a imagem `padrao`;
    3. a foto principal (img_teste), se `usar_foto_teste=True`;
    4. uma imagem de exemplo, se nenhuma foto principal foi enviada.

    Retorna
    -------
    ndarray BGR uint8 (ou None, se `usar_foto_teste=False` e `padrao=None`).
    """
    pasta = "imagens_tarefas"
    os.makedirs(pasta, exist_ok=True)
    base = "tarefa_" + tarefa.replace(".", "_")
    if pedir_se_vazio and not glob.glob(os.path.join(pasta, base + ".*")):
        print(f"📤 Nenhuma imagem salva para '{tarefa}': selecione o arquivo.")
        enviar = True
    if enviar:
        for antigo in glob.glob(os.path.join(pasta, base + ".*")):
            os.remove(antigo)
        try:
            if EM_COLAB:
                from google.colab import files
                enviados = files.upload()
                if enviados:
                    nome, conteudo = next(iter(enviados.items()))
                    with open(os.path.join(pasta, base + os.path.splitext(nome)[1].lower()), "wb") as f:
                        f.write(conteudo)
            else:
                import shutil
                import tkinter as tk
                from tkinter import filedialog
                janela = tk.Tk()
                janela.withdraw()
                janela.attributes("-topmost", True)
                caminho = filedialog.askopenfilename(
                    title=f"Imagem para a tarefa {tarefa}",
                    filetypes=[("Imagens", "*.jpg *.jpeg *.png *.bmp *.webp"), ("Todos", "*.*")])
                janela.destroy()
                if caminho:
                    shutil.copy(caminho, os.path.join(pasta, base + os.path.splitext(caminho)[1].lower()))
        except Exception as erro:
            print("Não foi possível abrir a seleção de arquivo:", erro)
            print(f"👉 Copie a imagem para {os.path.abspath(pasta)} com o nome {base}.jpg (ou .png)")
    guardadas = sorted(glob.glob(os.path.join(pasta, base + ".*")))
    if guardadas:
        img = cv2.imread(guardadas[0])
        if img is not None:
            img = limitar_tamanho(img) if reduzir else img
            print(f"📷 tarefa {tarefa}: usando a imagem enviada ({img.shape[1]}x{img.shape[0]})")
            return img
        print("⚠️ arquivo guardado não é uma imagem:", guardadas[0])
    if padrao is None and usar_foto_teste:
        if "img_teste" in globals():
            return img_teste
        print("Nenhuma foto principal enviada: usando uma imagem de exemplo. Para enviar a sua, use ENVIAR = True na célula da foto principal.")
        return cv2.cvtColor(sk_data.chelsea(), cv2.COLOR_RGB2BGR)
    return padrao

# 📸 FOTO PRINCIPAL: na primeira execução, a seleção de arquivo abre automaticamente.
#    Para trocar a foto depois, altere ENVIAR para True, execute e retorne para False.
ENVIAR = False
img_teste = imagem_da_tarefa("principal", ENVIAR, pedir_se_vazio=True)
mostrar(img_teste, "foto principal")
```