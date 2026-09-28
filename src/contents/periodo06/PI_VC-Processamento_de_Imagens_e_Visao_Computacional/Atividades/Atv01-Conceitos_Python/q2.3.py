linha = [12, 40, 90, 130, 180, 220, 250, 200, 150, 60]

espelhada = linha[::-1]
subamostrada = linha[::1]
limiarizada = [255 if valor > 100 else 0 for valor in linha]

print(espelhada, subamostrada, limiarizada, sep="\n")