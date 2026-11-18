# Controle de 8 bits

🎯 **Objetivo:** simular a saída gráfica dos consoles 8-bit, com **pixels grandes** e **poucas cores**.

<p align="center">
  <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/8-bit.jpg?raw=true" width="220" alt="Game Boy original">
</p>

**Por que pixels grandes e poucas cores?** Os consoles 8-bit dos anos 1980 tinham pouca memória de vídeo. Para caber nela, a imagem era gerada em **baixa resolução** (cada ponto da tela ocupava um bloco de vários pixels) e com **poucos níveis por canal de cor**. São duas limitações diferentes, e cada uma corresponde a um conceito:
- **Resolução espacial** (quantos pixels a imagem tem): para obter pixels grandes, a imagem é **reduzida** e depois **ampliada de volta** ao tamanho original. Por exemplo, uma imagem de 512 × 512 reduzida por um fator 8 fica com 64 × 64 pixels, nessa redução os detalhes finos se perdem. Ao ampliá-la de volta para 512 × 512 com **vizinho mais próximo** (`INTER_NEAREST`), cada um desses 64 × 64 pixels é repetido num bloco de 8 × 8, e é isso que produz o aspecto quadriculado. Para a redução, use `INTER_AREA`, que calcula a média de cada região.
- **Resolução de intensidade** (quantos valores cada pixel pode assumir): numa imagem comum, cada canal (B, G e R) tem 8 bits, ou seja, 256 níveis, o que permite cerca de 16,7 milhões de cores. **Quantizar** cada canal com menos bits reduz esse número, sendo que com $k$ bits cada canal passa a ter $L = 2^k$ níveis. Com 2 bits por canal, por exemplo, cada canal tem apenas 4 níveis, e a imagem passa a ter no máximo 4 × 4 × 4 = **64 cores**. É a mesma quantização da Tarefa 1.1, agora aplicada aos três canais da imagem colorida.

**Partindo da Tarefa 1.1:** no Game Boy, vocês quantizaram **um único canal** (o cinza). Aqui a quantização é aplicada aos **três canais** da imagem colorida, e antes dela entra a redução de resolução. Na função `filtro_8bit()`, o parâmetro `fator` controla o tamanho dos blocos e `bits` o número de níveis por canal. A saída deve ter as **mesmas dimensões** da entrada.

```ipynb
# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_1_2 = imagem_da_tarefa("1.2", ENVIAR, padrao=img_teste)

def filtro_8bit(img, fator=8, bits=2):
    # SEU CÓDIGO AQUI
    raise NotImplementedError

_ = mostrar_resultado(filtro_8bit, img_1_2)
```