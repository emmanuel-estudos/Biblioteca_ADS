# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_4_1 = imagem_da_tarefa("4.1", ENVIAR, padrao=img_teste)

def simetria_4(img, lado=600):
    """Gera uma imagem perfeitamente simétrica em 4 quadrantes a partir 
    do quadrante superior esquerdo (espelhamentos horizontal e vertical)."""

    # garante que a imagem seja quadrada, usando a função 'recorte_quadrado' feita anteriormente
    img_quadrada = recorte_quadrado(img, lado)

    # pegando os pontos médios para as divisões dos quadrantes
    meio_h = lado // 2
    meio_w = lado // 2

    # extrai o quadrante superior esquerdo (base da simetria)
      ## Obs: se o tamanho for ímpar, é garantido que a divisão pegue o tamanho exato usando slice
    q1 = img_quadrada[:meio_h, :meio_w]

    # gerando os outros três quadrantes por espelhamento:
    q2 = q1[:, ::-1] # Q2 (Superior Direito)
    q3 = q1[::-1, :] # Q3 (Inferior Esquerdo)
    q4 = q1[::-1, ::-1] # Q4 (Inferior Direito)

    # juntando os quadrantes em uma imagem (horizontalmente)
    topo = np.hstack([q1, q2])
    base = np.hstack([q3, q4])

    # juntando topo e base verticalmente para formar a imagem final completa
    simetrica = np.vstack([topo, base])

    return simetrica

_ = mostrar_resultado(simetria_4, img_4_1)