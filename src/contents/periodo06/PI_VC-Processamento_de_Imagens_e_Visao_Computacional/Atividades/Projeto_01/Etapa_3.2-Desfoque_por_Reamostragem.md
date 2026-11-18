# ✍️ Tarefa 3.2 — Desfoque por reamostragem

🎯 **Objetivo:** obter uma versão **desfocada** da imagem utilizando apenas `cv2.resize`.

<p align="center">
  <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/desfocado.png?raw=true" width="320" alt="Imagem desfocada">
</p>

**Por que reduzir e ampliar desfoca?** Ao reduzir a imagem, os detalhes finos são **descartados**. Ao ampliá-la de volta, a interpolação apenas **estima** os pixels que faltam. Com uma interpolação suave, como a bicúbica, essa estimativa resulta numa imagem com aparência desfocada.

**Partindo da Tarefa 1.2:** no filtro 8-bit vocês fizeram a mesma redução, mas ampliaram com vizinho mais próximo, o que produziu blocos. Trocar o método de interpolação troca o efeito. O parâmetro `fator` define o quanto a imagem é reduzida e `passadas` quantas vezes o processo é repetido. A saída deve ter as **mesmas dimensões** da entrada.

```ipynb
# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_3_2 = imagem_da_tarefa("3.2", ENVIAR, padrao=img_teste)

def desfoque_reamostragem(img, fator=6, passadas=2):
    # SEU CÓDIGO AQUI
    raise NotImplementedError

_ = mostrar_resultado(desfoque_reamostragem, img_3_2)
```
