# 🏘️ Etapa 3 — Simulador de miniatura (*tilt-shift*)

O efeito *tilt-shift* faz cenas reais parecerem **maquetes em miniatura**. Ele reproduz a pequena profundidade de campo das fotografias macro: apenas uma **região permanece nítida**, o restante é desfocado gradualmente, e as cores são intensificadas.

Nesta etapa, o desfoque deve ser obtido **apenas por amostragem e interpolação**, sem o uso de funções de filtragem como `GaussianBlur`.

**Imagem recomendada:** fotografia tomada de um ponto **elevado**, com vista inclinada para baixo, contendo pessoas, veículos ou edificações em escala reduzida.

## ✨ Exemplo resolvido — Contraste

O **contraste** é a diferença entre as regiões claras e escuras de uma imagem. Aumentá-lo significa **afastar** cada valor do nível médio (128): os escuros ficam mais escuros e os claros, mais claros.

A operação é uma única expressão vetorizada: `128 + c * (img - 128)`.
- Com `c > 1`, os valores se afastam de 128 e o contraste **aumenta**; com `c < 1`, eles se aproximam e o contraste **diminui**; com `c = 1`, a imagem não muda.
- A conta é feita em **`float`** e o resultado passa por **`np.clip(..., 0, 255)`** antes de voltar para `uint8`. Sem isso, os valores que passam de 255 ou ficam abaixo de 0 "dariam a volta" (*overflow*).

> 📚 Conceitos da *Aula Prática 01*: tipo `uint8` e *overflow* (Parte 3.2) e operações vetorizadas (Parte 3.5).

Esta função será utilizada na Tarefa 3.3.

```ipynb
def contraste(img, c=1.3):
    """Aumenta (c > 1) ou diminui (c < 1) o contraste em torno de 128.

    Conceitos: conversão para float, operação vetorizada, clip para evitar overflow.
    """
    return np.clip(128 + c * (img.astype(np.float32) - 128), 0, 255).astype(np.uint8)

mostrar_varias([contraste(img_teste, c) for c in (0.5, 1.0, 1.6)], ["c = 0.5", "c = 1 (original)", "c = 1.6"], tamanho=4)
```

