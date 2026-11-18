# ✍️ Tarefa 2.2 — Zoom dramático

🎯 **Objetivo:** montar um painel com quadros lado a lado, cada um mostrando uma **ampliação** maior em torno de um mesmo ponto da imagem.

<p align="center">
  <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/zoom.png?raw=true" width="420" alt="Game Boy original">
</p>

**Como funciona o painel?** Cada quadro é um **recorte quadrado** centrado no ponto escolhido, ampliado para `tamanho × tamanho`. De um quadro para o seguinte, o recorte cai pela metade e a ampliação dobra. Como nenhuma interpolação recupera detalhes perdidos, o último quadro fica visivelmente menos nítido. Se `centro` for `None`, usa-se o centro da imagem.

**Partindo do exemplo resolvido:** a legenda de tirinha juntou duas imagens com `np.vstack`. Aqui os quadros são unidos lado a lado com `np.hstack`. Cada recorte é uma **região de interesse** e a ampliação usa interpolação. Se o recorte ultrapassar a borda da imagem, o fatiamento devolve menos pixels sem gerar erro, então o canto do recorte deve ser mantido dentro da imagem.

```ipynb
# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_2_2 = imagem_da_tarefa("2.2", ENVIAR, padrao=img_teste)

def zoom_dramatico(img, centro=None, niveis=3, tamanho=300):
    # SEU CÓDIGO AQUI
    raise NotImplementedError

_ = mostrar_resultado(zoom_dramatico, img_2_2)
```