# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_1_1 = imagem_da_tarefa("1.1", ENVIAR, padrao=img_teste)

def filtro_gameboy(img):
    """Simula a tela do Game Boy original com 4 tons de verde.
    """

    # convertendo para tons de cinza
    foto_cinza = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # equivalência de 256 níveis para 4 níveis (0, 1, 2, 3) e reescalar para a intensidade (0, 85, 170, 255)
    cinza_equivalencia = (foto_cinza // 64) * 85

    # criação de imagem totalmente preta com o formato da foto de entrada
    foto_saida = np.zeros_like(img)

    # copiando os tons de cinza, somente para o canal verde (G - índice 1)
    foto_saida[:, :, 1] = cinza_equivalencia

    return foto_saida
    # raise NotImplementedError

_ = mostrar_resultado(filtro_gameboy, img_1_1)