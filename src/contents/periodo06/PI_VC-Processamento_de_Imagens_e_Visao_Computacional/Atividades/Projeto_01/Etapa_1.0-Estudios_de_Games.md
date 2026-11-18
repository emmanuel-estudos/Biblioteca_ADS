# 🎮 Etapa 1 — Estúdio de Games

Nesta etapa, vocês vão reproduzir técnicas de imagem usadas em videogames antigos. Nas duas primeiras tarefas, simulam as **limitações de hardware** dos consoles da época: os 4 tons da tela do **Game Boy** e a baixa resolução com poucas cores dos consoles **8-bit**, aplicando **quantização** e **reamostragem**. Na terceira, reaproveitam o filtro 8-bit para compor uma **tela de RPG** com uma caixa de diálogo, trabalhando com **fatiamento**, **regiões de interesse** e **desenho de formas e texto**.

### ✨ Exemplo resolvido — Monitor de fósforo verde
Os primeiros monitores de computador eram **monocromáticos**: a tela era revestida de fósforo verde, e cada ponto podia apenas variar de **intensidade**, sem cor própria. Simular esse dispositivo é, portanto, exibir a **luminância** da imagem usando somente o canal verde.

A implementação segue três passos:
1. **Converter para tons de cinza** (`cv2.cvtColor`): o resultado é um array 2D `(h, w)` com a intensidade de cada pixel, que é exatamente a informação que o monitor monocromático consegue exibir.
2. **Criar uma imagem preta** com o mesmo formato e tipo da entrada (`np.zeros_like`): um array `(h, w, 3)` em `uint8`, com os três canais zerados. Como é um array **novo**, a imagem original não é alterada.
3. **Copiar a intensidade para o canal G** (`saida[:, :, 1] = cinza`): lembrando da ordem **BGR** do OpenCV, o índice 1 é o verde. Os canais B (0) e R (2) permanecem em zero, de modo que cada pixel varia apenas do preto ao verde puro.

> 📚 Conceitos da *Aula Prática 01*: conversão para tons de cinza (Parte 4), arrays 3D e canais de cor (Partes 3.4 e 7.1), criação de imagens do zero (Parte 5.6) e a ordem BGR (Parte 4.2).

Este exemplo também mostra o **padrão esperado nas funções do projeto**:
- **docstring** (o texto entre aspas triplas `"""` logo abaixo do `def`), descrevendo o que a função faz e os conceitos utilizados. Diferente dos comentários (`#`), a docstring fica associada à função e pode ser consultada com `help(nome_da_funcao)`;
- a **imagem de entrada nunca é modificada**: a função trabalha sobre um array novo ou sobre uma cópia (`.copy()`);
- operações **vetorizadas**, sem laços percorrendo os pixels;
- o retorno é uma nova imagem **BGR `uint8`**.

```ipynb
def filtro_fosforo_verde(img):
    """Simula um monitor monocromático de fósforo verde.

    Conceitos: conversão para cinza, canais de cor, criação de imagem do zero.
    """
    cinza = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    saida = np.zeros_like(img)          # nova imagem preta, mesmo shape e dtype
    saida[:, :, 1] = cinza              # a intensidade vai para o canal G
    return saida

_ = mostrar_resultado(filtro_fosforo_verde, img_teste)
```

### ✍️ Tarefa 1.1 — Game Boy

🎯 **Objetivo:** simular a tela do Game Boy original, que exibia apenas **4 tons de verde**.

<p align="center">
  <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/gameboy.png?raw=true" width="320" alt="Game Boy original">
</p>

**Por que apenas 4 tons?** A tela do Game Boy original (1989) armazenava cada pixel com apenas **2 bits**. Com 2 bits, existem 2² = **4 combinações possíveis** (`00`, `01`, `10`, `11`), e cada uma corresponde a um tom, do mais escuro ao mais claro. Ou seja, a tela é como se fosse uma imagem **quantizada em 2 bits**.

**Partindo do exemplo resolvido:** o monitor de fósforo verde já exibe a intensidade da imagem no canal verde, com **256 níveis**. O Game Boy é o mesmo princípio, mas com apenas **4 níveis**. Basta acrescentar uma etapa ao exemplo para **quantizar** o cinza antes de copiá-lo para o canal G.

```ipynb
# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_1_1 = imagem_da_tarefa("1.1", ENVIAR, padrao=img_teste)

def filtro_gameboy(img):
    # SEU CÓDIGO AQUI
    raise NotImplementedError

_ = mostrar_resultado(filtro_gameboy, img_1_1)
```