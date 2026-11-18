# ✍️ Tarefa 2.3 — Figurinha

🎯 **Objetivo:** criar uma figurinha para aplicativos de mensagem: a foto recortada em **círculo com borda suave**, fundo **transparente** e uma **legenda** com contorno na parte inferior.

<p align="center">
  <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/dev%20(2).png?raw=true" width="220" alt="Game Boy original">
</p>

**Como uma imagem tem partes transparentes?** Pelo **canal alfa**, um 4º canal além de B, G e R que indica a opacidade de cada pixel (0 é transparente e 255 é opaco). A figurinha é uma imagem **BGRA** de `lado × lado` em que o alfa vale 255 dentro do círculo, 0 fora dele e forma uma rampa na borda, para que o recorte não fique serrilhado. Numa imagem BGRA, as cores do `putText` também têm 4 valores, e com `A = 255` a legenda fica opaca inclusive fora do círculo.

**Partindo da Tarefa 2.1:** a legenda segue a mesma lógica do meme. Para o recorte circular, `np.mgrid` gera as coordenadas de todos os pixels e, com elas, calcula-se a distância de cada pixel ao centro. Pixels a uma distância menor que o raio ficam opacos, e os demais ficam transparentes. Antes de tudo, a imagem precisa ficar quadrada, e para isso completem a função auxiliar `recorte_quadrado(img, lado)`, que recorta o **maior quadrado central** e o redimensiona para `lado × lado`. Ela será reaproveitada na Etapa 4.

```ipynb
# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_2_3 = imagem_da_tarefa("2.3", ENVIAR, padrao=img_teste)

def recorte_quadrado(img, lado=512):
    # SEU CÓDIGO AQUI
    raise NotImplementedError


def figurinha(img, texto="DEV SENIOR (use a criatividade)", lado=512):
    # SEU CÓDIGO AQUI
    raise NotImplementedError

FIGURINHA = mostrar_resultado(figurinha, img_2_3)
```