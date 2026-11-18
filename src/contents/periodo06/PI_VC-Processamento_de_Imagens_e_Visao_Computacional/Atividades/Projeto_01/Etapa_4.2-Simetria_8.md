# ✍️ Tarefa 4.2 — Caleidoscópio de 8

🎯 **Objetivo:** estender a simetria às **diagonais**, obtendo 8 setores equivalentes, como em um caleidoscópio.

<div align="center">
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/orion.jpg?raw=true" width="300" alt="Imagem original"><br>
      <em>Imagem original (Nebulosa de Órion)</em>
    </td>
    <td align="center">
      <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/simetria8.png?raw=true" width="300" alt="Caledoscópio de 8"><br>
      <em>Caledoscópio de 8</em>
    </td>
  </tr>
</table>
</div>

**O que muda em relação à Tarefa 4.1?** Na 4.1, o quadrante era espelhado do jeito que vinha da foto. Aqui, antes disso, ele é dobrado na sua **diagonal**, a linha que liga o canto superior esquerdo ao canto inferior direito. A metade abaixo da diagonal é mantida, e a metade acima passa a ser o reflexo dela, como se o quadrante fosse dobrado nessa linha. Assim, o pixel da linha 2 e coluna 5 recebe a cor do pixel da linha 5 e coluna 2. Trocar linha por coluna é a **transposição**, que gera de uma vez esse reflexo para todos os pixels. Numa imagem colorida, só os dois primeiros eixos, linhas e colunas, são trocados, e os canais de cor ficam no lugar.

**Partindo da Tarefa 4.1:** o espelhamento final é o mesmo. A novidade é escolher, pixel a pixel, entre o quadrante original e o transposto conforme o pixel esteja acima ou abaixo da diagonal. Para saber quais pixels ficam acima da diagonal, usem as coordenadas de `np.mgrid`, como na figurinha. Acima da diagonal estão os pixels em que a coluna é maior que a linha.

```ipynb
# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_4_2 = imagem_da_tarefa("4.2", ENVIAR, padrao=img_teste)

def caleidoscopio_8(img, lado=600):
    # SEU CÓDIGO AQUI
    raise NotImplementedError

_ = mostrar_resultado(caleidoscopio_8, img_4_2)
```