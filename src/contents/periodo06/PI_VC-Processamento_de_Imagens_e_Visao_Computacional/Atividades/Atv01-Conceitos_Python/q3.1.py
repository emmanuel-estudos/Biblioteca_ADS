# Crie um array `moldura` de `uint8` com formato `(7, 9)`, todo preto (0), com uma **borda de 1 pixel branca (255)**. Use `np.zeros` e fatiamento (sem laços)

import numpy as np

## criando a imagem
moldura = np.zeros(
	(7,9),
 dtype=np.uint8
)

## colocando as bordas brancas
	### primeira e última linha (da linha 1 até a -1, coloque o valor 255)
moldura[[0, -1], :] = 255
	### primeira e última coluna (da coluna 1 até a -1, coloque o valor 255)
moldura[:, [0, -1]] = 255

## exibindo imagem
print(moldura)