# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_2_2 = imagem_da_tarefa("2.2", ENVIAR, padrao=img_teste)

def zoom_dramatico(img, centro=None, niveis=3, tamanho=300):
  """Cria um painel lado a lado com recortes progressivamente menores 
    (zoom dramático) centrados em um ponto da imagem.
  """
  
  # pegando as dimensões da imagem
  h, w = img.shape[:2]

  # caso o centro não foi fornecido, pega o centro da imagem
  if centro is None:
      cx, cy = w // 2, h // 2
  else:
      cx, cy = centro
  
  # Definir o tamanho do recorte inicial
    ## (ex: metade da menor dimensão da imagem)
  tamanho_recorte_inicial = min(h, w) // 2

  # criando array onde ficarão as imagens
  quadros = []

  # 'for' para ir reduzindo recursivamente
  for i in range(niveis):
        # a cada nível, o tamanho do recorte cai pela metade (o zoom dobra)
        l = int(tamanho_recorte_inicial / (2 ** i))
        l = max(10, l)  # Garante um tamanho mínimo seguro
        
        # Calcular coordenadas do retângulo centrado em (cx, cy)
        x1 = max(0, cx - l // 2)
        y1 = max(0, cy - l // 2)
        x2 = min(w, cx + l // 2)
        y2 = min(h, cy + l // 2)
        
        # extrai a Região de Interesse (ROI)
        roi = img[y1:y2, x1:x2]
        
        # redimensiona o recorte para o tamanho padrão do painel
        quadro_redimensionado = cv2.resize(roi, (tamanho, tamanho), interpolation=cv2.INTER_LINEAR)
        
        quadros.append(quadro_redimensionado)

  # Juntar todos os quadros lado a lado horizontalmente
  painel = np.hstack(quadros)

  return painel

  # raise NotImplementedError

_ = mostrar_resultado(zoom_dramatico, img_2_2)