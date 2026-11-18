# 😂 Etapa 2 — Memes e Figurinhas

Nesta etapa, vocês vão implementar operações comuns em aplicativos de edição para redes sociais como inserção de **texto** posicionado de forma proporcional à imagem, ampliação progressiva de uma **região de interesse** e criação de **imagens com transparência** (canal alfa) no formato de figurinhas para aplicativos de mensagem.

### ✨ Exemplo resolvido — Legenda de tirinha
Nas tirinhas e em muitos memes, o texto fica numa **faixa preta/branca abaixo da imagem**, e não sobre ela. Assim, o texto não esconde nenhuma parte da foto e fica sempre legível.

A implementação segue quatro passos:

1. **Criar a faixa preta.** É uma imagem nova, feita com `np.zeros`, com a **mesma largura** da foto. A altura da faixa costuma ser **1/7 da altura da foto**, assim uma foto com 700 pixels de altura, por exemplo, recebe uma faixa de 100 pixels.

2. **Escolher o tamanho da letra.** No `putText`, o tamanho da letra é definido pela **escala**. Para que o texto acompanhe o tamanho da foto, a escala inicial é `w / 600`, ou seja, vale 1 numa foto de 600 pixels de largura, 2 numa de 1200 pixels, e assim por diante. Em seguida, `cv2.getTextSize` **mede** a largura e a altura que o texto vai ocupar, em pixels. Se o texto for mais largo que a faixa, o laço `while` diminui a escala aos poucos e mede de novo, até o texto caber.

3. **Escrever o texto no centro da faixa.**
   - Na **horizontal**: o espaço que sobra (largura da faixa menos largura do texto) é dividido igualmente entre os dois lados: `x = (largura_da_faixa - largura_do_texto) // 2`.
   - Na **vertical**: o `y` do `putText` indica a **base** das letras, e não o topo. Por isso, para centralizar, usa-se `y = (altura_da_faixa + altura_do_texto) // 2`.

4. **Juntar a foto e a faixa.** `np.vstack` coloca a faixa embaixo da foto. Isso só funciona porque as duas imagens têm a mesma largura e o mesmo número de canais.

> 📚 Conceitos da *Aula Prática 01*: criação de imagens do zero (Parte 5.6), escrita com `putText` (Parte 5.5) e concatenação de arrays (Exercício 5.2).

Medir e centralizar texto são operações que vocês vão usar em todas as tarefas desta etapa.

```ipynb
def faixa_de_legenda(img, texto="o poder dos memes esta com voce"):
    """Acrescenta uma faixa preta com legenda embaixo da imagem.

    Conceitos: imagem criada do zero, np.vstack (empilhar), putText com getTextSize para centralizar.
    """
    texto = texto.upper()   # converte todas as letras do texto em maiúsculas
    h, w = img.shape[:2]
    faixa = np.zeros((max(50, h // 7), w, 3), dtype=np.uint8)
    fonte, escala = cv2.FONT_HERSHEY_DUPLEX, w / 600
    while cv2.getTextSize(texto, fonte, escala, 2)[0][0] > w - 20:    # diminui a letra até caber
        escala -= 0.05
    (tw, th), _ = cv2.getTextSize(texto, fonte, escala, 2)
    y = (faixa.shape[0] + th) // 2                                   # centraliza na vertical
    cv2.putText(faixa, texto, ((w - tw) // 2, y), fonte, escala, (255, 255, 255), 2, cv2.LINE_AA)
    return np.vstack([img, faixa])

_ = mostrar_resultado(faixa_de_legenda, img_teste)
```
