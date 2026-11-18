# ✍️ Tarefa 2.1 — Meme clássico

🎯 **Objetivo:** inserir texto branco com contorno preto no **topo** e na **base** da imagem, no formato tradicional de meme.

<p align="center">
  <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/meme.jpeg?raw=true" width="420" alt="Game Boy original">
</p>

**Qual é o desafio?** As fotos têm tamanhos muito diferentes, e um texto que fica bom numa imagem de 400px some numa de 3000px. Por isso, o tamanho e a posição do texto devem ser calculados **a partir do `shape`** da imagem, e não com valores fixos. O contorno preto garante que o texto seja legível sobre qualquer fundo.

**Partindo do exemplo resolvido:** a legenda de tirinha já mostra como medir, ajustar e centralizar um texto com `cv2.getTextSize`. A diferença é que aqui o texto é escrito **sobre a própria foto**, e não numa faixa separada. O contorno é feito escrevendo o mesmo texto duas vezes, na mesma posição. Primeiro em preto, com uma espessura maior, e depois em branco, com uma espessura menor por cima. A parte preta que sobra ao redor das letras forma o contorno.

```ipynb
# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_2_1 = imagem_da_tarefa("2.1", ENVIAR, padrao=img_teste)

def meme_classico(img, topo="QUANDO SAI O RESULTADO", base="EU VENDO MINHA NOTA"):
    # SEU CÓDIGO AQUI
    raise NotImplementedError

_ = mostrar_resultado(meme_classico, img_2_1)
```
