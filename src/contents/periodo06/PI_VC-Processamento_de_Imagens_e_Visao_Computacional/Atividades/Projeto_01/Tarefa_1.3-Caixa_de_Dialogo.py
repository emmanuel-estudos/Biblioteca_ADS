# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_1_3 = imagem_da_tarefa("1.3", ENVIAR, padrao=img_teste)

def caixa_de_dialogo(img, texto="O que deseja fazer? > [1] LUTAR - [2] ITEM - [3] CORRER"):
    """Cria uma tela de RPG aplicando o filtro 8-bit e desenhando uma caixa de
    diálogo com borda e texto na parte inferior.
    """

    # aplicando o filtro 8-bit para obter o visual
    cena = filtro_8bit(img, fator=8, bits=2)

    # copiando para desenhar a caixa de diálogo por cima
    saida = cena.copy()

    # definindo a altura e a largura da imagem original
    h, w = img.shape[:2]

    # colocando a caixa de diálogo na parte inferior da imagem
      ## margem fixa: 20px na lateral e 100px na base
    espaco_lateral = 20
    altura_caixa = 150

    y1, y2 = h - (espaco_lateral + altura_caixa), h - espaco_lateral
    x1, x2 = espaco_lateral, w - espaco_lateral

    # fundo da caixa de diálogo
    saida[y1:y2, x1:x2] = (255, 255, 255)

    # borda da caixa de diálogo
    cv2.rectangle(saida, (x1, y1), (x2, y2), (0, 0, 0), 2)

    # texto dentro da caixa de diálogo
    cv2.putText(saida, texto, (x1 + 25, y1 + 55), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 0, 0), 2, cv2.LINE_AA)

    return saida
    # raise NotImplementedError # tem que arrumar as dimensões da caixa de diálogo

_ = mostrar_resultado(caixa_de_dialogo, img_1_3)