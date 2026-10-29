# Recorte da imagem `babuino` uma região que contenha o nariz (o focinho vermelho e azul) e exiba o recorte ao lado da imagem original. Depois, desenhe na original um retângulo indicando de onde o recorte foi tirado.

# Dica: use `mostrar(babuino, eixos=True)` para ver as coordenadas.

# fazendo uma cópia da imagem para recortar o nariz
editadaB = babuino.copy()

# editadaB[::10, :] = 0                     # uma linha preta a cada 10 linhas
# editadaB[:, ::10] = 0                     # uma linha preta a cada 10 colunas
# editadaB[::50, :] = 255                   # uma linha branca a cada 10 linhas
# editadaB[:, ::50] = 255                   # uma linha branca a cada 10 colunas

mostrar(editadaB, titulo="cópia da imagem", bgr=True)

# recortando o nariz
nariz_babuino = editadaB[140:230, 200:300]
ok = cv2.imwrite("nariz_babuino.png", nariz_babuino)

# retângulo na cópia da imagem
babuino_com_retangulo = babuino.copy()
cv2.rectangle(babuino_com_retangulo, (200, 140), (300, 230), (0, 255, 0), 2)

# exibir o resultado
mostrar_varias(
  							[babuino_com_retangulo, nariz_babuino],
              	["Original com marcação do retângulo", "Recorte do nariz (ROI)"],
              	colunas=2
							)
