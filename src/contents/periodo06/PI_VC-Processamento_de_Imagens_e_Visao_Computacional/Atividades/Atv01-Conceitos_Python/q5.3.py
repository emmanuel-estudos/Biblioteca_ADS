# Crie do zero uma imagem `300 x 450` (altura x largura) com a **bandeira da Itália**: três faixas verticais de mesma largura — **verde** `(RGB 0,146,70)`, **branco** e **vermelho** `(RGB 206,43,55)`.
# 
# ⚠️ Lembre que estamos em **BGR**!

# criação da imagem
bandeira = np.zeros((300, 450, 3), dtype=np.uint8)

# verde
cv2.rectangle(bandeira, (0, 0), (150, 300), (70, 146, 0), -1)

# branco
cv2.rectangle(bandeira, (150, 0), (300, 300), (255, 255, 255), -1)

# vermelho
cv2.rectangle(bandeira, (300, 0), (450, 300), (55, 43, 206), -1)
mostrar(bandeira, "Itália", eixos=True)
