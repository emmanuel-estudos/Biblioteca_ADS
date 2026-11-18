# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_2_1 = imagem_da_tarefa("2.1", ENVIAR, padrao=img_teste)

def meme_classico(img, topo="QUANDO SAI O RESULTADO", base="DA MINHA PROVA"):
    """Cria um meme clássico com textos em maiúsculas, centralizados,
    com contorno preto e preenchimento branco no topo e na base.
    """

    # copiando a imagem original
    saida = img.copy()
    h, w = saida.shape[:2]

    # Configurações: fonte e margem
    fonte = cv2.FONT_HERSHEY_DUPLEX
    margem = max(20, h // 15)  # Margem proporcional à altura da imagem
    
    # TEXTO DO TOPO
    texto_topo = topo.upper()
    escala_topo = w / 600
    esp_contorno_topo = max(3, int(escala_topo * 5))
    esp_texto_topo = max(1, int(escala_topo * 2))
    
    # Reduzir escala se o texto for muito largo
    while cv2.getTextSize(texto_topo, fonte, escala_topo, esp_contorno_topo)[0][0] > w - 40:
        escala_topo -= 0.05
        if escala_topo <= 0.2:
            break
            
    (tw_topo, th_topo), _ = cv2.getTextSize(texto_topo, fonte, escala_topo, esp_contorno_topo)
    x_topo = (w - tw_topo) // 2
    y_topo = margem + th_topo  # Linha de base no topo
    
    # contorno preto (mais grosso) e texto branco por cima
    cv2.putText(saida, texto_topo, (x_topo, y_topo), fonte, escala_topo, (0, 0, 0), esp_contorno_topo, cv2.LINE_AA)
    cv2.putText(saida, texto_topo, (x_topo, y_topo), fonte, escala_topo, (255, 255, 255), esp_texto_topo, cv2.LINE_AA)

    # TEXTO DA BASE
    texto_base = base.upper()
    escala_base = w / 600
    esp_contorno_base = max(3, int(escala_base * 5))
    esp_texto_base = max(1, int(escala_base * 2))
    
    # diminuir escala se o texto for muito largo
    while cv2.getTextSize(texto_base, fonte, escala_base, esp_contorno_base)[0][0] > w - 40:
        escala_base -= 0.05
        if escala_base <= 0.2:
            break
            
    (tw_base, th_base), _ = cv2.getTextSize(texto_base, fonte, escala_base, esp_contorno_base)
    x_base = (w - tw_base) // 2
    y_base = h - margem  # Linha de base na base da imagem
    
    # contorno preto (mais grosso) e texto branco por cima
    cv2.putText(saida, texto_base, (x_base, y_base), fonte, escala_base, (0, 0, 0), esp_contorno_base, cv2.LINE_AA)
    cv2.putText(saida, texto_base, (x_base, y_base), fonte, escala_base, (255, 255, 255), esp_texto_base, cv2.LINE_AA)

    return saida

    # raise NotImplementedError

_ = mostrar_resultado(meme_classico, img_2_1)