# ✍️ Tarefa 4.3 — Caleidoscópio radial

🎯 **Objetivo:** construir um caleidoscópio **circular**, em que uma fatia da imagem, em forma de pedaço de pizza, se repete e se espelha ao redor do centro.

<div align="center">
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/orion.jpg?raw=true" width="300" alt="Imagem original"><br>
      <em>Imagem original (Nebulosa de Órion)</em>
    </td>
    <td align="center">
      <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/simetria-radial.png?raw=true" width="300" alt="Caleidoscópio radial"><br>
      <em>Caleidoscópio radial</em>
    </td>
  </tr>
</table>
</div>

**Qual é a ideia?** Pense numa pizza cortada em 6 fatias iguais. Cada fatia ocupa 60° da volta completa de 360°. No caleidoscópio, todas as fatias mostram o mesmo desenho, e cada fatia é o reflexo da vizinha.

Para montar isso, cada pixel da imagem final faz uma pergunta: **"de qual pixel da foto eu copio a minha cor?"**. A resposta vem em três passos.

**Passo 1. Onde o pixel está em relação ao centro.** Todo pixel pode ser localizado por duas informações, como o ponteiro de um relógio que sai do centro e aponta para ele.
- A **distância** até o centro, que vocês já calcularam na figurinha (Tarefa 2.3).
- O **ângulo**, ou seja, para que lado o ponteiro aponta. 0° é para a direita, 90° é para baixo, 180° é para a esquerda e 270° é para cima.

O ângulo é calculado com `np.degrees(np.arctan2(dy, dx)) % 360`, em que `dx` e `dy` são as distâncias horizontal e vertical do pixel até o centro.

**Passo 2. Trazer o ângulo para a primeira fatia.** Como todas as fatias são iguais, basta saber em que ponto da sua fatia o pixel está. Para isso, usa-se o resto da divisão pelo tamanho da fatia. Um pixel a 130° fica a `130 % 60 = 10°` do início da sua fatia, então copia a cor do pixel a 10° da primeira fatia.

Para que as fatias vizinhas fiquem espelhadas, cada fatia é dividida ao meio. Se o ângulo cair na primeira metade (de 0° a 30°), ele continua igual. Se cair na segunda metade (de 30° a 60°), ele é trocado pelo seu reflexo. Um pixel a 40°, por exemplo, passa a usar `60 - 40 = 20°`. Essa troca pode ser feita com `np.where`.

**Passo 3. Achar o pixel da foto e copiar a cor.** Agora sabemos a distância e o novo ângulo. Falta transformar isso de volta em linha e coluna. As fórmulas são estas:

- `coluna = centro + distancia * np.cos(np.radians(angulo))`
- `linha = centro + distancia * np.sin(np.radians(angulo))`

Elas apenas fazem o caminho inverso do Passo 1. Arredondem os resultados para inteiros e usem `np.clip` para que fiquem dentro da imagem. Com os arrays de linhas e colunas prontos, `q[linhas, colunas]` copia a cor de todos os pixels de uma vez, sem laços.

A imagem `q` é o quadrado gerado pela `recorte_quadrado`. Os pixels fora do círculo de diâmetro `lado` ficam pretos.

```ipynb
# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_4_3 = imagem_da_tarefa("4.3", ENVIAR, padrao=img_teste)

def caleidoscopio_radial(img, setores=6, lado=600):
    # SEU CÓDIGO AQUI
    raise NotImplementedError

_ = mostrar_resultado(caleidoscopio_radial, img_4_3)
```