### ✍️ Tarefa 3.1 — Faixa de foco
🎯 **Objetivo:** gerar a **máscara de foco** da miniatura, uma faixa horizontal nítida com transição gradual para as regiões desfocadas.

<p align="center">
  <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/faixa_foco.png?raw=true" width="320" alt="Game Boy original">
</p>

**O que é a máscara?** É uma imagem **2D**, com o mesmo número de linhas e colunas da foto, que indica **o quanto cada pixel deve permanecer nítido**. Vale 255 na faixa de foco, 0 longe dela e valores intermediários na transição. Ela será usada na Tarefa 3.3 como o **alfa** de uma composição. Os três parâmetros são frações da altura da foto. `centro` define a posição da faixa, como exemplo se `centro=0.6` a faixa deverá ser colocada a 60% da altura, contando a partir do topo. `largura` define a espessura da parte nítida, e `transicao` a extensão da passagem gradual para o desfoque. Esses valores devem ser **ajustados para cada foto**, de modo que a faixa nítida fique sobre o que deve estar em foco, como uma rua, um grupo de pessoas ou uma fileira de carros.

**Partindo do exemplo resolvido:** o contraste mostrou uma conta vetorizada em `float` seguida de `np.clip`. Aqui a ideia é a mesma, aplicada à **distância** entre cada linha e a faixa. Como a nitidez depende só da linha, basta calcular um valor por linha e repeti-lo em todas as colunas por **broadcasting**, como num gradiente.

```ipynb
# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_3_1 = imagem_da_tarefa("3.1", ENVIAR, padrao=img_teste)

def faixa_de_foco(img, centro=0.6, largura=0.15, transicao=0.25):
    # SEU CÓDIGO AQUI
    raise NotImplementedError

_ = mostrar_resultado(faixa_de_foco, img_3_1)
```

