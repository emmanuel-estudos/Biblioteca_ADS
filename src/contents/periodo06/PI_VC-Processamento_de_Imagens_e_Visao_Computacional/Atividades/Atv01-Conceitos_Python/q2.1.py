def descrever_imagem(largura, altura, canais):
  valores_imagem = largura * altura * canais
  mb_uint8 = valores_imagem / 1000000
  resultado_valores_imagem = f"{valores_imagem:,}"
  return f"{largura}x{altura} com {canais} canal(is): {resultado_valores_imagem} valores ({mb_uint8:.1f} MB em uint8)"

print(descrever_imagem(1920, 1080, 3))
print(descrever_imagem(640, 480, 1))
