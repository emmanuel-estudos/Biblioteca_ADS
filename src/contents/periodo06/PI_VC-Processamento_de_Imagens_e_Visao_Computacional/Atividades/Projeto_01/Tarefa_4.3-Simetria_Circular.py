# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_4_3 = imagem_da_tarefa("4.3", ENVIAR, padrao=img_teste)

def caleidoscopio_radial(img, setores=6, lado=600):
    """Gera um caleidoscópio radial circular, dividindo a imagem em fatias 
    simétricas baseadas em coordenadas polares."""
    
    # garantindo que a imagem seja quadrada e obtendo centro
    img_q = recorte_quadrado(img, lado)
    centro = lado / 2.0

    # criando grade de coordenadas para todos os pixels da imagem final
    y, x = np.mgrid[:lado, :lado]
    
    # estabelecendo distâncias horizontal e vertical até o centro
    dx = x - centro
    dy = y - centro
    
    ## calculando distância e ângulo
    distancia = np.sqrt(dx**2 + dy**2)
    angulo = np.degrees(np.arctan2(dy, dx)) % 360
    
    ## ajustando o ângulo para a primeira fatia com espelhamento interno
    angulo_fatia = 360.0 / setores
    metade_fatia = angulo_fatia / 2.0
    
    ### posição do ângulo dentro de uma fatia (0 até angulo_fatia)
    ang_na_fatia = angulo % angulo_fatia
    
    ### espelhando a segunda metade de cada fatia para garantir a simetria entre vizinhas
    ang_mapeado = np.where(ang_na_fatia > metade_fatia, angulo_fatia - ang_na_fatia, ang_na_fatia)
    
    ## convertendo de polar (distância e novo ângulo) de volta para cartesiano (linhas e colunas)
    radianos = np.radians(ang_mapeado)
    colunas_origem = centro + distancia * np.cos(radianos)
    linhas_origem = centro + distancia * np.sin(radianos)
    
    # arredondando para inteiros e restringir aos limites da imagem
    colunas_idx = np.clip(np.round(colunas_origem), 0, lado - 1).astype(np.intp)
    linhas_idx = np.clip(np.round(linhas_origem), 0, lado - 1).astype(np.intp)
    
    # copiando a cor dos pixels correspondentes da foto de forma vetorizada
    saida = img_q[linhas_idx, colunas_idx]
    
    # máscara circular para escurecer bordas fora do caleidoscópio
    raio_max = lado / 2.0
    fora_circulo = distancia > raio_max
    saida[fora_circulo] = (0, 0, 0)
    
    return saida

_ = mostrar_resultado(caleidoscopio_radial, img_4_3)
