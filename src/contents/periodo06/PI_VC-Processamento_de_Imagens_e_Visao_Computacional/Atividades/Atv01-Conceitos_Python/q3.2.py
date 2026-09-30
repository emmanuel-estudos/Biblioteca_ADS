#  Crie uma imagem `gradiente` de formato `(100, 256)` e tipo `uint8` em que **cada coluna `j` tenha valor `j`** (preto à esquerda, branco à direita). Não use laços: use `np.arange` e _broadcasting_ (ou `np.tile`).
#
#  Imprima o `shape`, o `dtype` e os valores da linha 0 nas colunas 0, 128 e 255.

import numpy as np

## criando um vetor de tamanho 256
gradiente = np.arange(256, dtype=np.uint8)

## transformando em matriz e fazendo broadcasting para (100, 256)
gradiente = np.zeros(
	(100, 1),
	dtype=np.uint8
) + gradiente

## mostrando resultados
print(f"Shape: {gradiente.shape}")
print(f"Dtype: {gradiente.dtype}")
print(f"Valores da linha 0 nas colunas [0, 128, 255]: {gradiente[0, [0, 128, 255]]}")
print(gradiente)