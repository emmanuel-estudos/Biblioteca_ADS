# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_3_3 = imagem_da_tarefa("3.3", ENVIAR, padrao=img_teste)

def saturar(img, k=1.6):
    """Aumenta a saturação da imagem multiplicando a distância 
    entre cada pixel e o seu valor de cinza correspondente."""

    # convertendo a imagem para float32 para evitar estouro de valores (wrap-around)
    img_f = img.astype(np.float32)

    # obtendo a luminância/tons de cinza de cada pixel (formato 2D)
    cinza = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # expandindo o canal de cinza para 3 dimensões (h, w, 1) usando broadcasting para casar com BGR
    cinza_3d = cinza[:, :, np.newaxis]

    # afastando cada cor do seu tom de cinza correspondente pelo fator k
      ## Fórmula: cinza + k * (pixel - cinza)
    img_saturada = cinza_3d + k * (img_f - cinza_3d)

    # garantindo que os valores fiquem restritos ao intervalo válido [0, 255] e converter para uint8
    img_saturada = np.clip(img_saturada, 0, 255).astype(np.uint8)
    
    return img_saturada

def miniatura(img, centro=0.6, largura=0.15, transicao=0.25, fator=8):
    """Gera o efeito miniatura (Tilt-Shift) combinando foco nítido na faixa central,
    desfoque nas bordas e aumento de saturação e contraste."""

    # gerarando a imagem desfocada para o fundo
    fundo = desfoque_reamostragem(img, fator=fator, passadas=2)

    # gerarndo a máscara de foco e convertê-la para o intervalo [0.0, 1.0]
    mascara_uint8 = faixa_de_foco(img, centro=centro, largura=largura, transicao=transicao)
    alfa = mascara_uint8.astype(np.float32) / 255.0

    # expandindo o alfa para 3 canais (h, w, 3) usando broadcasting para aplicar no BGR
    alfa_3d = alfa[:, :, np.newaxis]

    # frente nítida (com cores intensificadas para dar o aspecto de maquete)
      ## aplicamos a saturação
    frente = saturar(img, k=1.6)

    # composição alfa: alfa * frente + (1 - alfa) * fundo
    composicao = alfa_3d * frente.astype(np.float32) + (1.0 - alfa_3d) * fundo.astype(np.float32)

    # convertendo o resultado final de volta para uint8
    saida = np.clip(composicao, 0, 255).astype(np.uint8)

    return saida

_ = mostrar_resultado(miniatura, img_3_3)