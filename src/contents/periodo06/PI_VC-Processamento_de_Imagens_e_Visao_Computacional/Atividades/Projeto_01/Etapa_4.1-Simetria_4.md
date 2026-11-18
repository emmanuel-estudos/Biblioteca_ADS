# ✍️ Tarefa 4.1 — Simetria de 4

🎯 **Objetivo:** construir uma imagem simétrica em relação aos **dois eixos**, vertical e horizontal, a partir de um único quadrante.

<div align="center">
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/orion.jpg?raw=true" width="300" alt="Imagem original"><br>
      <em>Imagem original (Nebulosa de Órion)</em>
    </td>
    <td align="center">
      <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/simetria4.png?raw=true" width="300" alt="Imagem com simetria de 4"><br>
      <em>Simetria de 4</em>
    </td>
  </tr>
</table>
</div>

**Como se forma a simetria?** A imagem final tem 4 quadrantes. O **superior esquerdo** vem da foto e os outros três são cópias espelhadas dele, uma na horizontal, uma na vertical e uma nas duas direções. O resultado é uma imagem quadrada de `lado × lado`.

**Partindo do exemplo resolvido:** o rosto simétrico espelhou uma metade com **passo -1** nas colunas. Aqui a mesma operação é feita também nas linhas, e os pedaços são unidos com `np.hstack` e `np.vstack`. Para deixar a imagem quadrada, reaproveitem a `recorte_quadrado` da Tarefa 2.3.

```ipynb
# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_4_1 = imagem_da_tarefa("4.1", ENVIAR, padrao=img_teste)

def simetria_4(img, lado=600):
    # SEU CÓDIGO AQUI
    raise NotImplementedError

_ = mostrar_resultado(simetria_4, img_4_1)
```
