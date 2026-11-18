# 🔷 Etapa 4 — Caleidoscópio e simetria
Nesta etapa, vocês vão construir padrões simétricos a partir de uma região da imagem, aplicando **espelhamentos**, **transposição** de arrays e, na última tarefa, **coordenadas polares**. Imagens com cores e texturas variadas produzem padrões mais ricos.

## ✨ Exemplo resolvido — Espelho vertical
A **simetria** em relação a um eixo significa que um lado da imagem é o reflexo do outro. Este exemplo torna a imagem simétrica em relação ao **eixo vertical**: a metade esquerda é copiada, espelhada, sobre a metade direita.

A implementação segue três passos:
1. **Copiar a entrada** (`img.copy()`), para que a original não seja alterada.
2. **Selecionar a metade esquerda** com fatiamento (`img[:, :meio]`) e **espelhá-la** com passo -1 nas colunas (`[:, ::-1]`).
3. **Atribuir** o resultado à metade direita da cópia. Usar `w - meio` como início garante que os tamanhos coincidam, mesmo quando a largura é ímpar.

> 📚 Conceitos da *Aula Prática 01*: fatiamento e espelhamento (Partes 3.3 e 5.4) e visão × cópia (Parte 3.7).

O espelhamento com passo -1 é a base das duas primeiras tarefas desta etapa, e a ideia de reflexo continua na terceira.

```ipynb
def espelho_vertical(img):
    """Espelha a metade esquerda sobre a direita.

    Conceitos: cópia, fatiamento com passo -1, shape para achar o meio (largura par ou ímpar).
    """
    saida = img.copy()
    w = img.shape[1]
    meio = w // 2
    saida[:, w - meio:] = img[:, :meio][:, ::-1]          # metade esquerda invertida
    return saida

_ = mostrar_resultado(espelho_vertical, img_teste)
```