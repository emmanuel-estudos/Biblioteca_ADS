# Funções Auxiliares

```ipynb
def classificar_pixel(valor, limiar=127):
    # Retorna 'claro' se valor > limiar, senão 'escuro'
    return "claro" if valor > limiar else "escuro"

print(classificar_pixel(200))
print(classificar_pixel(100, limiar=110))   # argumento nomeado
```

```ipynb
def descrever_imagem(largura, altura, canais):
  valores_imagem = largura * altura * canais
  mb_uint8 = valores_imagem / 1000000
  resultado_valores_imagem = f"{valores_imagem:,}"
  return f"{largura}x{altura} com {canais} canal(is): {resultado_valores_imagem} valores ({mb_uint8:.1f} MB em uint8)"

print(descrever_imagem(1920, 1080, 3))
print(descrever_imagem(640, 480, 1))
```

```ipynb
import numpy as np

a = np.array([[1, 2, 3],
              [4, 5, 6]])

print(a)
print("shape (linhas, colunas):", a.shape)
print("ndim (número de dimensões):", a.ndim)
print("size (total de elementos):", a.size)
print("dtype (tipo dos elementos):", a.dtype)
```

```ipynb
cor = np.zeros((2, 3, 3), dtype=np.uint8)   # 2 linhas, 3 colunas, 3 canais
cor[0, 0] = [255, 0, 0]     # atribui os 3 canais de um pixel de uma vez
cor[:, :, 1] = 100          # canal 1 de todos os pixels
print("shape:", cor.shape)
print("pixel (0,0):", cor[0, 0])
print("canal 1:\n", cor[:, :, 1])
```

```ipynb
import time

grande = np.random.default_rng(0).integers(0, 256, size=(1000, 1000), dtype=np.uint8)

# Negativo com laço Python (lento!)
t0 = time.time()
neg_laco = np.zeros_like(grande)
for i in range(grande.shape[0]):
    for j in range(grande.shape[1]):
        neg_laco[i, j] = 255 - grande[i, j]
t_laco = time.time() - t0

# Negativo vetorizado
t0 = time.time()
neg_vet = 255 - grande
t_vet = time.time() - t0

print(f"laço: {t_laco:.3f} s | vetorizado: {t_vet:.5f} s | ~{t_laco / max(t_vet, 1e-6):.0f}x mais rápido")
print("resultados iguais?", np.array_equal(neg_laco, neg_vet))
```

```ipynb
# Broadcasting: arrays de formatos diferentes são "esticados" automaticamente
m = np.zeros((3, 4), dtype=np.int32)
print(m + np.array([1, 2, 3, 4]))          # soma a cada linha
print(m + np.array([[10], [20], [30]]))    # soma a cada coluna
```

```ipynb
img = np.array([[ 10, 200,  30],
                [ 90, 250, 140],
                [  0,  60, 180]], dtype=np.uint8)

print("mín:", img.min(), "| máx:", img.max(), "| média:", round(img.mean(), 2))
print("média de cada coluna (axis=0):", img.mean(axis=0))
print("média de cada linha  (axis=1):", img.mean(axis=1))

mascara = img > 100          # array de True/False
print(mascara)
print("quantos pixels > 100:", mascara.sum())

img2 = img.copy()
img2[mascara] = 255          # altera só onde a máscara é True
print(img2)
```

```ipynb
import os
import urllib.request

import numpy as np
import cv2
import matplotlib.pyplot as plt
from skimage import data as sk_data

print("OpenCV:", cv2.__version__)
print("NumPy:", np.__version__)

plt.rcParams["figure.dpi"] = 100
```

```ipynb
def mostrar(img, titulo=None, bgr=True, ax=None, tamanho=6, eixos=False):
    '''Exibe uma imagem com Matplotlib.
    - Imagens 2D (tons de cinza) são mostradas na escala 0-255 (se uint8).
    - Imagens 3D são convertidas de BGR para RGB (se bgr=True).
    '''
    sozinha = ax is None
    if sozinha:
        _, ax = plt.subplots(figsize=(tamanho, tamanho))
    if img.ndim == 2:
        if img.dtype == np.uint8:
            ax.imshow(img, cmap="gray", vmin=0, vmax=255)
        else:
            ax.imshow(img, cmap="gray")
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
    '''Exibe várias imagens lado a lado em uma grade.'''
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


def baixar(url, nome=None):
    '''Baixa um arquivo da internet para a pasta atual (se ainda não existir).'''
    nome = nome or url.split("/")[-1]
    if not os.path.exists(nome):
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req) as resp, open(nome, "wb") as f:
            f.write(resp.read())
    return nome


print("Funções auxiliares prontas ✅")
```

```ipynb
URL_OPENCV = "https://raw.githubusercontent.com/opencv/opencv/4.x/samples/data/"
for arquivo in ["fruits.jpg", "baboon.jpg", "smarties.png", "building.jpg"]:
    baixar(URL_OPENCV + arquivo)
    print("baixado:", arquivo, "-", os.path.getsize(arquivo) // 1024, "KB")

# Imagens do scikit-image já vêm como arrays NumPy em RGB -> convertemos para BGR (nossa convenção)
astronauta = cv2.cvtColor(sk_data.astronaut(), cv2.COLOR_RGB2BGR)
cafe = cv2.cvtColor(sk_data.coffee(), cv2.COLOR_RGB2BGR)
gato = cv2.cvtColor(sk_data.chelsea(), cv2.COLOR_RGB2BGR)
cameraman = sk_data.camera()          # já é tons de cinza (2D)

!ls -lh *.jpg *.png
```

```ipynb
frutas = cv2.imread("fruits.jpg")
babuino = cv2.imread("baboon.jpg")
confeitos = cv2.imread("smarties.png")
predio = cv2.imread("building.jpg")

mostrar_varias([frutas, babuino, confeitos, predio, astronauta, cafe, gato, cameraman],
               ["frutas", "babuíno", "confeitos", "prédio", "astronauta", "café", "gato", "cameraman"],
               colunas=4, tamanho=3.5)
```

```ipynb
# 1. Define a URL e baixa a imagem
url_nova = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCbIaP3CvTmCruDLMH-WwPYHf3RMLpIBuL0CeuY6fLQ&s"
cachorro_whasheetos = baixar(url_nova, "imagem_nova.jpg")

# 2. Carrega a imagem com o OpenCV
imagem_nova = cv2.imread(cachorro_whasheetos)

# 3. Exibe a imagem (usando bgr=True já que o cv2.imread lê em BGR)
mostrar(imagem_nova, titulo="Cachorro Whacheetos", bgr=True)
```

```ipynb
# 1) cv2_imshow: só no Colab, já entende BGR
# if EM_COLAB:
#     from google.colab.patches import cv2_imshow
#     cv2_imshow(cv2.resize(frutas, None, fx=0.5, fy=0.5))

# 2) Matplotlib direto com imagem BGR -> cores ERRADAS (laranja fica azul!)
# 3) Matplotlib após converter para RGB -> correto
fig, axs = plt.subplots(1, 2, figsize=(10, 5))
axs[0].imshow(frutas);                                   axs[0].set_title("plt.imshow(BGR) ❌")
axs[1].imshow(cv2.cvtColor(frutas, cv2.COLOR_BGR2RGB));  axs[1].set_title("plt.imshow(RGB) ✅")
plt.show()
```

```
img = frutas
print("shape:", img.shape, "-> (altura, largura, canais)")
print("dtype:", img.dtype)
print("mín/máx:", img.min(), img.max())
print("total de valores:", img.size)
print("memória ocupada:", img.nbytes, "bytes")

altura, largura, canais = img.shape
print(f"largura={largura}px, altura={altura}px, canais={canais}")
```

```ipynb
y, x = 200, 180           # um ponto dentro da laranja
b, g, r = frutas[y, x]    # 3 valores, em ordem BGR
print(f"Pixel em (x={x}, y={y}) -> B={b}, G={g}, R={r}")

editada = frutas.copy()                  # sempre copie antes de alterar!
editada[40:120, 300:400] = (255, 0, 0)   # retângulo azul (BGR)
editada[300:400, 40:120] = (0, 0, 255)   # retângulo vermelho na esquerda inferior
editada[::10, :] = 0                     # uma linha preta a cada 10 linhas
editada[:, ::10] = 0                     # uma linha preta a cada 10 colunas
editada[::50, :] = 255                   # uma linha branca a cada 10 linhas
editada[:, ::50] = 255                   # uma linha branca a cada 10 colunas


mostrar_varias([frutas, editada], ["original", "editada via fatiamento"])
```

```ipynb
roi = frutas[240:470, 330:512]      # o limão, no canto inferior direito
print("formato do recorte:", roi.shape)

colagem = frutas.copy()
colagem[0:roi.shape[0], 0:roi.shape[1]] = roi   # "cola" o limão no canto superior esquerdo

roi_kiwi = frutas[300:850, 0:140]
print("formato do recorte:", roi_kiwi.shape)

y_centro = (colagem.shape[0] - roi_kiwi.shape[0]) // 2
x_centro = (colagem.shape[1] - roi_kiwi.shape[1]) // 2

colagem[y_centro : y_centro + roi_kiwi.shape[0], x_centro : x_centro + roi_kiwi.shape[1]] = roi_kiwi

mostrar_varias([roi, colagem], ["ROI (recorte)", "ROI colado"])
```

```ipynb
espelho_h = frutas[:, ::-1]                               # ou cv2.flip(frutas, 1)
espelho_v = cv2.flip(frutas, 0)                           # vertical
rot90 = cv2.rotate(frutas, cv2.ROTATE_90_CLOCKWISE)
menor = cv2.resize(frutas, (128, 120))                    # (largura, altura) !!!

print("rotacionada:", rot90.shape, "| reduzida:", menor.shape)
mostrar_varias([espelho_h, espelho_v, rot90, menor],
               ["espelho horizontal", "espelho vertical", "rotação 90°", "reduzida 128x120"],
               colunas=4, tamanho=3.5)
```

```ipynb
anotada = frutas.copy()
cv2.rectangle(anotada, (330, 250), (511, 470), (0, 255, 255), 3)      # (x1,y1), (x2,y2), cor BGR, espessura
cv2.circle(anotada, (420, 200), 90, (0, 255, 0), 3)                   # centro (x,y), raio
cv2.line(anotada, (0, 0), (511, 479), (255, 255, 255), 2)
cv2.putText(anotada, "limao", (340, 245), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 255), 2)
cv2.putText(anotada, "lima", (360, 100), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

cv2.circle(anotada, (200, 250), 90, (0, 165, 255), 3)
cv2.putText(anotada, "para comer", (150, 100), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 165, 255), 2)

mostrar(anotada, "anotações com OpenCV")
```

```ipynb
preta = np.zeros((200, 300, 3), dtype=np.uint8)
xadrez = (np.indices((8, 8)).sum(axis=0) % 2 * 255).astype(np.uint8)
xadrez = cv2.resize(xadrez, (200, 200), interpolation=cv2.INTER_NEAREST)
grad = np.tile(np.linspace(0, 255, 300, dtype=np.uint8), (200, 1))

mostrar_varias([preta, xadrez, grad], ["preta 200x300x3", "xadrez 8x8 ampliado", "gradiente"])
```

```ipynb
clara_errada = frutas + 100                         # uint8: dá a volta! (wrap-around)
clara_certa = cv2.add(frutas, (100, 100, 100, 0))   # OpenCV satura em 255
negativo = 255 - frutas

mostrar_varias([frutas, clara_errada, clara_certa, negativo],
               ["original", "frutas + 100 (NumPy) ❌", "cv2.add (saturado) ✅", "negativo (255 - img)"],
               colunas=4, tamanho=3.5)
```

```ipynb
ok = cv2.imwrite("frutas_anotadas.png", anotada)
print("salvou?", ok)
cv2.imwrite("frutas_q10.jpg", frutas, [cv2.IMWRITE_JPEG_QUALITY, 10])   # JPEG de baixa qualidade

for f in ["fruits.jpg", "frutas_anotadas.png", "frutas_q10.jpg"]:
    print(f"{f:>20}: {os.path.getsize(f) / 1024:6.1f} KB")

mostrar_varias([frutas, cv2.imread("frutas_q10.jpg")], ["original", "JPEG qualidade 10 (repare nos blocos)"])

# Descomente para baixar no Colab:
# if EM_COLAB:
#     from google.colab import files
#     files.download("frutas_anotadas.png")
```