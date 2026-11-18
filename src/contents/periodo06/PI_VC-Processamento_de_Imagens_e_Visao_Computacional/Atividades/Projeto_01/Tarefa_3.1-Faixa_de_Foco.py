# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_3_1 = imagem_da_tarefa("3.1", ENVIAR, padrao=img_teste)

def faixa_de_foco(img, centro=0.6, largura=0.15, transicao=0.25):
    """Gera uma máscara 2D de foco com uma faixa horizontal nítida
    e transição gradual (efeito Tilt-Shift / miniatura)."""

    # pegando as dimensões da imagem
    h, w = img.shape[:2]

    # colocando frações em coordenadas
    y_centro = centro * h
    meia_largura = (largura * h) / 2.0
    t_transicao = max(1.0, transicao * h)  # evita divisão por zero

    # criando um vetor de coordenadas y para cada linha da imagem (shape: (h,))
    y = np.arange(h, dtype=np.float32)

    # calculando a distância absoluta de cada linha em relação aos limites da faixa de foco
      ## Distância é 0 se estiver dentro da faixa nítida, e positiva se estiver fora
    distancia = np.maximum(0, np.abs(y - y_centro) - meia_largura)

    # calculando a opacidade/máscara com base na transição gradual
      ## distância normalizada de 0 (foco total) a 1 (fora da transição)
    mascara_linha = 1.0 - np.clip(distancia / t_transicao, 0.0, 1.0)

    # expandindo para 2D usando broadcasting (replicando o valor da linha para todas as colunas w)
      ## resultado shape: (h, w) com valores de 0.0 a 1.0
    mascara_2d = np.tile(mascara_linha[:, np.newaxis], (1, w))

    # convertendo para uint8 na faixa 0 a 255
    mascara_uint8 = (mascara_2d * 255).astype(np.uint8)

    return mascara_uint8

_ = mostrar_resultado(faixa_de_foco, img_3_1)