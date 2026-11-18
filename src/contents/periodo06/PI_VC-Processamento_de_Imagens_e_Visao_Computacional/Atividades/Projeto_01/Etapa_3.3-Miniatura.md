# ✍️ Tarefa 3.3 — Miniatura (efeito *tilt-shift*)

🎯 **Objetivo:** combinar a imagem **nítida** na faixa de foco com a versão **desfocada** fora dela, com cores intensificadas, produzindo o efeito de miniatura.

<div align="center">
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/urban-twilight.jpg?raw=true" width="320" alt="Imagem original"><br>
      <em>Imagem original</em>
    </td>
    <td align="center">
      <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/mini.png?raw=true" width="320" alt="Tilt-shift"><br>
      <em>Efeito Tilt-shift</em>
    </td>
  </tr>
</table>
</div>

**Como as peças se juntam?** Por uma **composição alfa**, `alfa * frente + (1 - alfa) * fundo`. A frente é a imagem nítida, o fundo é o desfoque da Tarefa 3.2 e o alfa é a máscara da Tarefa 3.1 convertida para a faixa de 0 a 1. Como maquetes costumam ter cores mais vivas que cenas reais, a imagem também recebe mais **saturação** e mais **contraste**.

**Partindo do exemplo resolvido:** a função `contraste` já está pronta. A saturação segue a mesma ideia, mas afasta cada cor do **cinza do próprio pixel** em vez de 128. Completem a função auxiliar `saturar(img, k)` com esse princípio.

```ipynb
# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_3_3 = imagem_da_tarefa("3.3", ENVIAR, padrao=img_teste)

def saturar(img, k=1.6):
    # SEU CÓDIGO AQUI
    raise NotImplementedError


def miniatura(img, centro=0.6, largura=0.15, transicao=0.25, fator=8):
    # SEU CÓDIGO AQUI
    raise NotImplementedError

_ = mostrar_resultado(miniatura, img_3_3)
```
