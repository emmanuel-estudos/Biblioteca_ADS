# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_3_2 = imagem_da_tarefa("3.2", ENVIAR, padrao=img_teste)

def desfoque_reamostragem(img, fator=6, passadas=2):
    """Gera uma versão fortemente desfocada da imagem para compor 
    o fundo da miniatura (efeito Tilt-Shift)."""

    # pegando informações da imagem: dimensões e cópia
    h, w = img.shape[:2]
    saida = img.copy()

    # processo de redução
    for _ in range(passadas):
        # reduzindo a imagem atual pelo fator
        h_novo = max(1, saida.shape[0] // fator)
        w_novo = max(1, saida.shape[1] // fator)
        reduzida = cv2.resize(saida, (w_novo, h_novo), interpolation=cv2.INTER_AREA)
        
        # ampliando de volta para o tamanho original com interpolação suave (bicúbica)
        saida = cv2.resize(reduzida, (w, h), interpolation=cv2.INTER_CUBIC)

    return saida

_ = mostrar_resultado(desfoque_reamostragem, img_3_2)