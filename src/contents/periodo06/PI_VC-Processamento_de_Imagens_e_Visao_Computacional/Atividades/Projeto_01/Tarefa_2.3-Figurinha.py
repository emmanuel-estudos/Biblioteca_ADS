# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_2_3 = imagem_da_tarefa("2.3", ENVIAR, padrao=img_teste)

def recorte_quadrado(img, lado=512):
    """Recorta o maior quadrado central de uma imagem e a redimensiona para lado x lado."""

    # pegando o tamanho da imagem
    h, w = img.shape[:2]

    # verificando o tamanho do menor lado para garantir um quadrado perfeito central
    tamanho_min = min(h, w)

    # calculando as coordenadas centrais para o corte
    y_inicio = (h - tamanho_min) // 2
    x_inicio = (w - tamanho_min) // 2

    # recortando a região quadrada central
    recorte = img[y_inicio:y_inicio + tamanho_min, x_inicio:x_inicio + tamanho_min]

    # redicionamento para o tamanho final desejado
    img_quadrada = cv2.resize(recorte, (lado, lado), interpolation=cv2.INTER_AREA)

    return img_quadrada
    # raise NotImplementedError


def figurinha(img, texto="Acabando com o squirtle", lado=512):
    """Cria uma figurinha BGRA com recorte circular suave (canal alfa) 
    e uma legenda inferior com contorno."""

    # deixa a iamgem quadrada, usando a função auxiliar
    img_quadrada = recorte_quadrado(img, lado)

    # convertendo BGR para BGRA (canal de transparência)
    img_bgra = cv2.cvtColor(img_quadrada, cv2.COLOR_BGR2BGRA)

    # criando círculo
    y, x = np.mgrid[:lado, :lado]
    centro = lado / 2.0
    raio = lado / 2.0 - 10

    # calculando a distância de cada pixel para o centro
    distancia = np.sqrt((x - centro) ** 2 + (y - centro) ** 2)

    # criando suavização na borda
    alfa = np.clip((raio - distancia) + 1.5, 0, 1.5) / 1.5
    alfa = (alfa * 255).astype(np.uint8)

    # aplicando 'alfa' na imagem BGRA
    img_bgra[:, :, 3] = alfa

    # adicionando a legenda
    texto = texto.upper()
    fonte = cv2.FONT_HERSHEY_DUPLEX
    escala = lado / 600
    esp_contorno = max(2, int(escala * 4))
    esp_texto = max(1, int(escala * 2))

    # garantindo que o texto caiba na figurinha (largura)
    while cv2.getTextSize(texto, fonte, escala, esp_contorno)[0][0] > lado - 30:
        escala -= 0.05
        if escala <= 0.2:
            break
    
    (tw, th), _ = cv2.getTextSize(texto, fonte, escala, esp_contorno)
    tx = (lado - tw) // 2
    ty = lado - int(lado * 0.1)

    # cores na legenda
      ## também com 4 canais
    cor_preta = (0, 0, 0, 255)
    cor_branca = (255, 255, 255, 255)

    # colocando texto na imagem
    cv2.putText(img_bgra, texto, (tx, ty), fonte, escala, cor_preta, esp_contorno, cv2.LINE_AA)
    cv2.putText(img_bgra, texto, (tx, ty), fonte, escala, cor_branca, esp_texto, cv2.LINE_AA)

    return img_bgra
    # raise NotImplementedError

FIGURINHA = mostrar_resultado(figurinha, img_2_3)