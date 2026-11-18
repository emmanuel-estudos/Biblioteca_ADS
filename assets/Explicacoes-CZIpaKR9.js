import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`explicações-dos-códigos`,children:`Explicações dos Códigos`}),`
`,(0,n.jsx)(r.h2,{id:`etapa-01`,children:`Etapa 01`}),`
`,(0,n.jsx)(r.h3,{id:`tarefa-11`,children:`Tarefa 1.1`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.`}),`\r
ENVIAR = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`False`}),`\r
img_1_1 = imagem_da_tarefa(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"1.1"`}),`, ENVIAR, padrao=img_teste)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`filtro_gameboy`}),`(`,(0,n.jsx)(r.span,{className:`hljs-params`,children:`img`}),`):\r
    `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""Simula a tela do Game Boy original com 4 tons de verde.\r
    """`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# convertendo para tons de cinza`}),`\r
    foto_cinza = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# equivalência de 256 níveis para 4 níveis (0, 1, 2, 3) e reescalar para a intensidade (0, 85, 170, 255)`}),`\r
    cinza_equivalencia = (foto_cinza // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`64`}),`) * `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`85`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# criação de imagem totalmente preta com o formato da foto de entrada`}),`\r
    foto_saida = np.zeros_like(img)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# copiando os tons de cinza, somente para o canal verde (G - índice 1)`}),`\r
    foto_saida[:, :, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`] = cinza_equivalencia\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` foto_saida\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# raise NotImplementedError`}),`\r
\r
_ = mostrar_resultado(filtro_gameboy, img_1_1)
`]})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`foto_cinza = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)`}),`: converte a imagem para cinza`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`cinza_equivalencia = (foto_cinza // 64) * 85`}),`: dividindo por 64 (um quarto de 256) para dividir em 4 níveis (0, 1, 2, 3). Multiplicado por 85 para reescalar o brilho (0 - preto, 85 - verde escuro, 170 - verde claro e 255 - verde vibrante)`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`foto_saida = np.zeros_like(img)`}),`: criando uma imagem completamente preta`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`foto_saida[:, :, 1] = cinza_equivalencia`}),`: pega a matriz com os quatro níveis calculados e coloca somente no canal verde (1)`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`tarefa-12`,children:`Tarefa 1.2`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.`}),`\r
ENVIAR = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`False`}),`\r
img_1_2 = imagem_da_tarefa(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"1.2"`}),`, ENVIAR, padrao=img_teste)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`filtro_8bit`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`img, fator=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`8`}),`, bits=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`})]}),`):\r
    `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""Simula gráficos de consoles 8-bit com pixels grandes e poucas cores.\r
    """`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# pegando altura e largura originais`}),`\r
    h, w = img.shape[:`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`]\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# reduzindo resolução`}),`\r
    h_reduzida = h // fator\r
    w_reduzida = w // fator\r
    img_reduzida = cv2.resize(img, (w_reduzida, h_reduzida), interpolation=cv2.INTER_AREA)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# amplicar para o tamanho original`}),`\r
    img_pixelada = cv2.resize(img_reduzida, (w, h), interpolation=cv2.INTER_NEAREST)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# quantização de cores dos 3 canais`}),`\r
    niveis = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),` ** bits `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# número de níveis por canal, de acordo com o número de bits`}),`\r
    tamanho_intervalo = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`256`}),` / niveis\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# aplicando a quantificação de forma vetorizada para todos os canais`}),`\r
      `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## dividindo pelo intervalo, convertendo para inteiro, reescalonando para a faixa de 0-255`}),`\r
    img_quantizada = (img_pixelada // tamanho_intervalo) * (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),` / (niveis - `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`))\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# convertendo novamente para uint8`}),`\r
    saida = img_quantizada.astype(np.uint8)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` saida\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# raise NotImplementedError`}),`\r
\r
_ = mostrar_resultado(filtro_8bit, img_1_2)
`]})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`h, w = img.shape[:2]`}),`: pegando a altura e a largura originais da foto`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`h_reduzida = h // fator`}),` e `,(0,n.jsx)(r.strong,{children:`w_reduzida = w // fator`}),`: dividem as dimensões pelo `,(0,n.jsx)(r.code,{children:`fator`}),` definido na chamada da função.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`img_reduzida = cv2.resize(img, (w_reduzida, h_reduzida), interpolation=cv2.INTER_AREA)`}),`: faz uma interpolação e diminui a imagem por meio das médias dos pixeis da região`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`img_pixelada = cv2.resize(img_reduzida, (w, h), interpolation=cv2.INTER_NEAREST)`}),`: a imagem antes reduzida é esticada para o tamanho original`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`niveis = 2 ** bits`}),`: Com `,(0,n.jsx)(r.code,{children:`bits=2`}),`, temos $2^2 = 4$ tons possíveis por canal de cor (Azul, Verde e Vermelho separadamente)`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`tamanho_intervalo = 256 / niveis`}),`: Divide o espectro total de 256 tons (0 a 255) em blocos (com bits=2, cada bloco tem tamanho $256 / 4 = 64$)`]}),`
`,(0,n.jsxs)(r.li,{children:[`img_quantizada = (img_pixelada // tamanho_intervalo) * (255 / (niveis - 1))`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`img_pixelada // tamanho_intervalo`}),` agrupa os valores de cor contínuos em faixas discretas (ex: 0, 1, 2, 3)`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`(255 / (niveis - 1))`}),` reescala esses valores para que voltem a ocupar o intervalo total de intensidade de 0 a 255, mas agora limitados a apenas poucos degraus de cor bem definidos`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`tarefa-13`,children:`Tarefa 1.3`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.`}),`\r
ENVIAR = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`False`}),`\r
img_1_3 = imagem_da_tarefa(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"1.3"`}),`, ENVIAR, padrao=img_teste)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`caixa_de_dialogo`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`img, texto=`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"quando me levanto muito rapido, vejo assim"`})]}),`):\r
    `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""Cria uma tela de RPG aplicando o filtro 8-bit e desenhando uma caixa de\r
    diálogo com borda e texto na parte inferior.\r
    """`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# aplicando o filtro 8-bit para obter o visual`}),`\r
    cena = filtro_8bit(img, fator=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`8`}),`, bits=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# copiando para desenhar a caixa de diálogo por cima`}),`\r
    saida = cena.copy()\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# definindo a altura e a largura da imagem original`}),`\r
    h, w = img.shape[:`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`]\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# colocando a caixa de diálogo na parte inferior da imagem`}),`\r
      `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## margem fixa: 20px na lateral e 100px na base`}),`\r
    espaco_lateral = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`20`}),`\r
    altura_caixa = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`150`}),`\r
\r
    y1, y2 = h - (espaco_lateral + altura_caixa), h - espaco_lateral\r
    x1, x2 = espaco_lateral, w - espaco_lateral\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# fundo da caixa de diálogo`}),`\r
    saida[y1:y2, x1:x2] = (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# borda da caixa de diálogo`}),`\r
    cv2.rectangle(saida, (x1, y1), (x2, y2), (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`), `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# texto dentro da caixa de diálogo`}),`\r
    lineIndex = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`for`}),` phrase `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`in`}),` texto.split(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"\\n"`}),`):\r
      cv2.putText(saida, phrase, (x1 + `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`25`}),`, y1 + `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`55`}),` + (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`55`}),` * lineIndex)), cv2.FONT_HERSHEY_SIMPLEX, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`), `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`, cv2.LINE_AA)\r
      lineIndex += `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` saida\r
\r
_ = mostrar_resultado(caixa_de_dialogo, img_1_3)
`]})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`cena = filtro_8bit(img, fator=8, bits=2)`}),`: aplicando o filtro da atividade anterior`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`saida = cena.copy()`}),`: fazendo uma cópia da imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`h, w = img.shape[:2]`}),`: pegando as dimensões originais`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`espaco_lateral = 20`}),` e `,(0,n.jsx)(r.strong,{children:`altura_caixa = 150`}),`: definem espaçamentos fixos`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`y1, y2 = h - (espaco_lateral + altura_caixa), h - espaco_lateral`}),`: definindo coordenadas verticais`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`x1, x2 = espaco_lateral, w - espaco_lateral`}),`: definindo coordenadas horizontais`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`saida[y1:y2, x1:x2] = (255, 255, 255)`}),`: coloca um fundo branco na caixa de diálogo`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`cv2.rectangle(saida, (x1, y1), (x2, y2), (0, 0, 0), 2)`}),`: borda para a caixa`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`for`}),`: quebra o texto recebido em linhas, caso necessário, e insere o texto`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`etapa-02`,children:`Etapa 02`}),`
`,(0,n.jsx)(r.h3,{id:`tarefa-21`,children:`Tarefa 2.1`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.`}),`\r
ENVIAR = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`False`}),`\r
img_2_1 = imagem_da_tarefa(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"2.1"`}),`, ENVIAR, padrao=img_teste)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`meme_classico`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`img, topo=`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"QUANDO ESTOU NA REUNIAO"`}),`, base=`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"ESSA EH A UNICA COISA QUE PENSO"`})]}),`):\r
    `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""Cria um meme clássico com textos em maiúsculas, centralizados,\r
    com contorno preto e preenchimento branco no topo e na base.\r
    """`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# copiando a imagem original`}),`\r
    saida = img.copy()\r
    h, w = saida.shape[:`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`]\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Configurações: fonte e margem`}),`\r
    fonte = cv2.FONT_HERSHEY_DUPLEX\r
    margem = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`max`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`20`}),`, h // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`15`}),`)  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Margem proporcional à altura da imagem`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# TEXTO DO TOPO`}),`\r
    texto_topo = topo.upper()\r
    escala_topo = w / `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`600`}),`\r
    esp_contorno_topo = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`max`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`3`}),`, `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`int`}),`(escala_topo * `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`5`}),`))\r
    esp_texto_topo = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`max`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`int`}),`(escala_topo * `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`))\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Reduzir escala se o texto for muito largo`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`while`}),` cv2.getTextSize(texto_topo, fonte, escala_topo, esp_contorno_topo)[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`][`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`] > w - `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`40`}),`:\r
        escala_topo -= `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0.05`}),`\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` escala_topo <= `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0.2`}),`:\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`break`}),`\r
\r
    (tw_topo, th_topo), _ = cv2.getTextSize(texto_topo, fonte, escala_topo, esp_contorno_topo)\r
    x_topo = (w - tw_topo) // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`\r
    y_topo = margem + th_topo  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Linha de base no topo`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# contorno preto (mais grosso) e texto branco por cima`}),`\r
    cv2.putText(saida, texto_topo, (x_topo, y_topo), fonte, escala_topo, (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`), esp_contorno_topo, cv2.LINE_AA)\r
    cv2.putText(saida, texto_topo, (x_topo, y_topo), fonte, escala_topo, (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`), esp_texto_topo, cv2.LINE_AA)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# TEXTO DA BASE`}),`\r
    texto_base = base.upper()\r
    escala_base = w / `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`600`}),`\r
    esp_contorno_base = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`max`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`3`}),`, `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`int`}),`(escala_base * `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`5`}),`))\r
    esp_texto_base = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`max`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`int`}),`(escala_base * `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`))\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# diminuir escala se o texto for muito largo`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`while`}),` cv2.getTextSize(texto_base, fonte, escala_base, esp_contorno_base)[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`][`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`] > w - `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`40`}),`:\r
        escala_base -= `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0.05`}),`\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` escala_base <= `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0.2`}),`:\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`break`}),`\r
\r
    (tw_base, th_base), _ = cv2.getTextSize(texto_base, fonte, escala_base, esp_contorno_base)\r
    x_base = (w - tw_base) // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`\r
    y_base = h - margem  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Linha de base na base da imagem`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# contorno preto (mais grosso) e texto branco por cima`}),`\r
    cv2.putText(saida, texto_base, (x_base, y_base), fonte, escala_base, (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`), esp_contorno_base, cv2.LINE_AA)\r
    cv2.putText(saida, texto_base, (x_base, y_base), fonte, escala_base, (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`), esp_texto_base, cv2.LINE_AA)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` saida\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# raise NotImplementedError`}),`\r
\r
_ = mostrar_resultado(meme_classico, img_2_1)
`]})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`saida = img.copy()`}),`: faz uma cópia da imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`h, w = saida.shape[:2]`}),`: pega as dimensões originais da imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`fonte = cv2.FONT_HERSHEY_DUPLEX`}),` e `,(0,n.jsx)(r.strong,{children:`margem = max(20, h // 15)`}),`: definição da fonte e da sua margem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`texto_topo = topo.upper()`}),`: transforma o texto em caixa alta`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`escala_topo = w / 600`}),`: calcula o tamanho da fonte proporcionalmente ao tamanho da imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`while`}),`: vai verificando se o tamanho do texto ultrapassa os limites da imagem. vai reduzindo a imagem até não ultrapassar`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`x_topo = (w - tw_topo) // 2`}),`: cálculo para centralizar horizontalmente o texto`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`y_topo`}),`: define a altura da linha de base do texto`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`cv2.putText(saida, texto_topo, (x_topo, y_topo), fonte, escala_topo, (0, 0, 0), esp_contorno_topo, cv2.LINE_AA)`}),` e `,(0,n.jsx)(r.strong,{children:`cv2.putText(saida, texto_topo, (x_topo, y_topo), fonte, escala_topo, (255, 255, 255), esp_texto_topo, cv2.LINE_AA)`}),`: contorno e preenchimento. Para deixar com cara de meme`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`tarefa-22`,children:`Tarefa 2.2`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.`}),`\r
ENVIAR = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`False`}),`\r
img_2_2 = imagem_da_tarefa(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"2.2"`}),`, ENVIAR, padrao=img_teste)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`zoom_dramatico`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`img, centro=`,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`None`}),`, niveis=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`3`}),`, tamanho=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`300`})]}),`):\r
  `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""Cria um painel lado a lado com recortes progressivamente menores\r
    (zoom dramático) centrados em um ponto da imagem.\r
  """`}),`\r
\r
  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# pegando as dimensões da imagem`}),`\r
  h, w = img.shape[:`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`]\r
\r
  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# caso o centro não foi fornecido, pega o centro da imagem`}),`\r
  `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` centro `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`is`}),` `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`None`}),`:\r
      cx, cy = w // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`, h // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`\r
  `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`else`}),`:\r
      cx, cy = centro\r
\r
  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Definir o tamanho do recorte inicial`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## (ex: metade da menor dimensão da imagem)`}),`\r
  tamanho_recorte_inicial = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`min`}),`(h, w) // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`\r
\r
  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# criando array onde ficarão as imagens`}),`\r
  quadros = []\r
\r
  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# 'for' para ir reduzindo recursivamente`}),`\r
  `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`for`}),` i `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`in`}),` `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`range`}),`(niveis):\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# a cada nível, o tamanho do recorte cai pela metade (o zoom dobra)`}),`\r
        l = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`int`}),`(tamanho_recorte_inicial / (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),` ** i))\r
        l = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`max`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`, l)  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Garante um tamanho mínimo seguro`}),`\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Calcular coordenadas do retângulo centrado em (cx, cy)`}),`\r
        x1 = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`max`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, cx - l // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`)\r
        y1 = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`max`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, cy - l // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`)\r
        x2 = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`min`}),`(w, cx + l // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`)\r
        y2 = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`min`}),`(h, cy + l // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`)\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# extrai a Região de Interesse (ROI)`}),`\r
        roi = img[y1:y2, x1:x2]\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# redimensiona o recorte para o tamanho padrão do painel`}),`\r
        quadro_redimensionado = cv2.resize(roi, (tamanho, tamanho), interpolation=cv2.INTER_LINEAR)\r
\r
        quadros.append(quadro_redimensionado)\r
\r
  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Juntar todos os quadros lado a lado horizontalmente`}),`\r
  painel = np.hstack(quadros)\r
\r
  `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` painel\r
\r
  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# raise NotImplementedError`}),`\r
\r
_ = mostrar_resultado(zoom_dramatico, img_2_2)
`]})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`h, w = img.shape[:2]`}),`: pegando as dimensões originais`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`if centro is None:`}),`: calcula o centro caso ele não seja fornecido`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`tamanho_recorte_inicial = min(h, w) // 2`}),`: define onde vai ser o primeiro recorte (metade da menor dimensão da imagem)`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`quadros = []`}),`: cria um array para guardar as imagens`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`for`}),`: redução recursiva, diminuindo pela metade em cada ciclo, garante um tamanho mínimo seguro, calcula as coordenadas do corte, extrai a região do corte, redimensiona o corte, coloca o quadro no array`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`painel = np.hstack(quadros)`}),`: junta todos os quadros`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`tarefa-23`,children:`Tarefa 2.3`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.`}),`\r
ENVIAR = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`False`}),`\r
img_2_3 = imagem_da_tarefa(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"2.3"`}),`, ENVIAR, padrao=img_teste)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`recorte_quadrado`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`img, lado=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`512`})]}),`):\r
    `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""Recorta o maior quadrado central de uma imagem e\r
    a redimensiona para lado x lado."""`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# pegando o tamanho da imagem`}),`\r
    h, w = img.shape[:`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`]\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# verificando o tamanho do menor lado para garantir um quadrado perfeito central`}),`\r
    tamanho_min = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`min`}),`(h, w)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# calculando as coordenadas centrais para o corte`}),`\r
    y_inicio = (h - tamanho_min) // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`\r
    x_inicio = (w - tamanho_min) // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# recortando a região quadrada central`}),`\r
    recorte = img[y_inicio:y_inicio + tamanho_min, x_inicio:x_inicio + tamanho_min]\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# redicionamento para o tamanho final desejado`}),`\r
    img_quadrada = cv2.resize(recorte, (lado, lado), interpolation=cv2.INTER_AREA)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` img_quadrada\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# raise NotImplementedError`}),`\r
\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`figurinha`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`img, texto=`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"estou assim"`}),`, lado=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`512`})]}),`):\r
    `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""Cria uma figurinha BGRA com recorte circular suave (canal alfa)\r
    e uma legenda inferior com contorno."""`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# deixa a iamgem quadrada, usando a função auxiliar`}),`\r
    img_quadrada = recorte_quadrado(img, lado)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# convertendo BGR para BGRA (canal de transparência)`}),`\r
    img_bgra = cv2.cvtColor(img_quadrada, cv2.COLOR_BGR2BGRA)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# criando círculo`}),`\r
    y, x = np.mgrid[:lado, :lado]\r
    centro = lado / `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2.0`}),`\r
    raio = lado / `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2.0`}),` - `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# calculando a distância de cada pixel para o centro`}),`\r
    distancia = np.sqrt((x - centro) ** `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),` + (y - centro) ** `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# criando suavização na borda`}),`\r
    alfa = np.clip((raio - distancia) + `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1.5`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1.5`}),`) / `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1.5`}),`\r
    alfa = (alfa * `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`).astype(np.uint8)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# aplicando 'alfa' na imagem BGRA`}),`\r
    img_bgra[:, :, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`3`}),`] = alfa\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# adicionando a legenda`}),`\r
    texto = texto.upper()\r
    fonte = cv2.FONT_HERSHEY_DUPLEX\r
    escala = lado / `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`600`}),`\r
    esp_contorno = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`max`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`, `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`int`}),`(escala * `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`4`}),`))\r
    esp_texto = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`max`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`int`}),`(escala * `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`))\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# garantindo que o texto caiba na figurinha (largura)`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`while`}),` cv2.getTextSize(texto, fonte, escala, esp_contorno)[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`][`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`] > lado - `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`30`}),`:\r
        escala -= `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0.05`}),`\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` escala <= `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0.2`}),`:\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`break`}),`\r
\r
    (tw, th), _ = cv2.getTextSize(texto, fonte, escala, esp_contorno)\r
    tx = (lado - tw) // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`\r
    ty = lado - `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`int`}),`(lado * `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0.1`}),`)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# cores na legenda`}),`\r
      `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## também com 4 canais`}),`\r
    cor_preta = (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`)\r
    cor_branca = (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# colocando texto na imagem`}),`\r
    cv2.putText(img_bgra, texto, (tx, ty), fonte, escala, cor_preta, esp_contorno, cv2.LINE_AA)\r
    cv2.putText(img_bgra, texto, (tx, ty), fonte, escala, cor_branca, esp_texto, cv2.LINE_AA)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` img_bgra\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# raise NotImplementedError`}),`\r
\r
FIGURINHA = mostrar_resultado(figurinha, img_2_3)
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`Função `,(0,n.jsx)(r.code,{children:`recorte_quadrado`}),`:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`h, w = img.shape[:2]`}),`: pega as dimensões originais`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`tamanho_min = min(h, w)`}),`: pega a menor dimensão para sair um quadrado perfeito`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`y_inicio = (h - tamanho_min) // 2`}),` e `,(0,n.jsx)(r.strong,{children:`x_inicio = (w - tamanho_min) // 2`}),`: para pegar as coordenadas centrais da imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`recorte = img[y_inicio:y_inicio + tamanho_min, x_inicio:x_inicio + tamanho_min]`}),`: recortando a área central`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`img_quadrada = cv2.resize(recorte, (lado, lado), interpolation=cv2.INTER_AREA)`}),`: deixando no tamanho final desejado`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Função `,(0,n.jsx)(r.code,{children:`figurinha`}),`:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`img_quadrada = recorte_quadrado(img, lado)`}),`: deixa a imagem quadrada, usando a função anterior`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`img_bgra = cv2.cvtColor(img_quadrada, cv2.COLOR_BGR2BGRA)`}),`: convertendo de BGR para BGRA`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`y, x = np.mgrid[:lado, :lado]`}),`, `,(0,n.jsx)(r.strong,{children:`centro = lado / 2.0`}),` e `,(0,n.jsx)(r.strong,{children:`raio = lado / 2.0 - 10`}),`: para a criação de um círculo`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`distancia = np.sqrt((x - centro) ** 2 + (y - centro) ** 2)`}),`: calculando a distância a partir do certo`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`alfa = np.clip((raio - distancia) + 1.5, 0, 1.5) / 1.5`}),` e `,(0,n.jsx)(r.strong,{children:`alfa = (alfa * 255).astype(np.uint8)`}),`: para a suavização da borda, definindo que pixels dentro do raio serão opacos e pixels fora serão transparentes`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`img_bgra[:, :, 3] = alfa`}),`: aplicando suavização na imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`inserção da legenda`}),`: mesmo método já usado e explicado anteriormente`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`etapa-03`,children:`Etapa 03`}),`
`,(0,n.jsx)(r.h3,{id:`tarefa-31`,children:`Tarefa 3.1`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.`}),`\r
ENVIAR = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`False`}),`\r
img_3_1 = imagem_da_tarefa(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"3.1"`}),`, ENVIAR, padrao=img_teste)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`faixa_de_foco`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`img, centro=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0.6`}),`, largura=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0.15`}),`, transicao=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0.25`})]}),`):\r
    `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""Gera uma máscara 2D de foco com uma faixa horizontal nítida\r
    e transição gradual (efeito Tilt-Shift / miniatura)."""`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# pegando as dimensões da imagem`}),`\r
    h, w = img.shape[:`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`]\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# colocando frações em coordenadas`}),`\r
    y_centro = centro * h\r
    meia_largura = (largura * h) / `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2.0`}),`\r
    t_transicao = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`max`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1.0`}),`, transicao * h)  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# evita divisão por zero`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# criando um vetor de coordenadas y para cada linha da imagem (shape: (h,))`}),`\r
    y = np.arange(h, dtype=np.float32)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# calculando a distância absoluta de cada linha em relação aos limites da faixa de foco`}),`\r
      `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## Distância é 0 se estiver dentro da faixa nítida, e positiva se estiver fora`}),`\r
    distancia = np.maximum(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, np.`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`abs`}),`(y - y_centro) - meia_largura)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# calculando a opacidade/máscara com base na transição gradual`}),`\r
      `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## distância normalizada de 0 (foco total) a 1 (fora da transição)`}),`\r
    mascara_linha = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1.0`}),` - np.clip(distancia / t_transicao, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0.0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1.0`}),`)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# expandindo para 2D usando broadcasting (replicando o valor da linha para todas as colunas w)`}),`\r
      `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## resultado shape: (h, w) com valores de 0.0 a 1.0`}),`\r
    mascara_2d = np.tile(mascara_linha[:, np.newaxis], (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, w))\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# convertendo para uint8 na faixa 0 a 255`}),`\r
    mascara_uint8 = (mascara_2d * `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`).astype(np.uint8)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` mascara_uint8\r
\r
_ = mostrar_resultado(faixa_de_foco, img_3_1)
`]})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`h, w = img.shape[:2]`}),`: pegando as dimensões originais da imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`y_centro = centro * h`}),`, `,(0,n.jsx)(r.strong,{children:`meia_largura = (largura * h) / 2.0`}),` e `,(0,n.jsx)(r.strong,{children:`t_transicao = max(1.0, transicao * h)`}),`: colocam os parâmetros passados em coordenadas referentes a imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`y = np.arange(h, dtype=np.float32)`}),`: vetor para as coordenadas verticais das linhas da imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`distancia = np.maximum(0, np.abs(y - y_centro) - meia_largura)`}),`: calcula a distância de cada linha para o `,(0,n.jsx)(r.code,{children:`limite`}),` da faixa de foco (0 = dentro e positiva = distância)`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`mascara_linha = 1.0 - np.clip(distancia / t_transicao, 0.0, 1.0)`}),`: cria a máscara de acordo com a `,(0,n.jsx)(r.code,{children:`transição`}),` (0 = no foco, positivo = distância do foco e 1 = fora)`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`mascara_2d = np.tile(mascara_linha[:, np.newaxis], (1, w))`}),`: transformando em 2D para a criação da imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`mascara_uint8 = (mascara_2d * 255).astype(np.uint8)`}),`: converte a matriz criada no passo anterior para `,(0,n.jsx)(r.code,{children:`unit8`}),`.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`tarefa-32`,children:`Tarefa 3.2`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.`}),`\r
ENVIAR = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`False`}),`\r
img_3_2 = imagem_da_tarefa(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"3.2"`}),`, ENVIAR, padrao=img_teste)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`desfoque_reamostragem`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`img, fator=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`6`}),`, passadas=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`})]}),`):\r
    `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""Gera uma versão fortemente desfocada da imagem para compor\r
    o fundo da miniatura (efeito Tilt-Shift)."""`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# pegando informações da imagem: dimensões e cópia`}),`\r
    h, w = img.shape[:`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`]\r
    saida = img.copy()\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# processo de redução`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`for`}),` _ `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`in`}),` `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`range`}),`(passadas):\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# reduzindo a imagem atual pelo fator`}),`\r
        h_novo = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`max`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, saida.shape[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`] // fator)\r
        w_novo = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`max`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, saida.shape[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`] // fator)\r
        reduzida = cv2.resize(saida, (w_novo, h_novo), interpolation=cv2.INTER_AREA)\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# ampliando de volta para o tamanho original com interpolação suave (bicúbica)`}),`\r
        saida = cv2.resize(reduzida, (w, h), interpolation=cv2.INTER_CUBIC)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` saida\r
\r
_ = mostrar_resultado(desfoque_reamostragem, img_3_2)
`]})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`h, w = img.shape[:2]`}),`: pegando dimensões da imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`saida = img.copy()`}),`: fazendo uma cópia da imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`for`}),`: reduz a imagem original pelo `,(0,n.jsx)(r.code,{children:`fator`}),`, x vezes definidas pela quantidade de `,(0,n.jsx)(r.code,{children:`passadas`})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`reduzida = cv2.resize(saida, (w_novo, h_novo), interpolation=cv2.INTER_AREA)`}),`: tira os ruídos das reduções da imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`saida = cv2.resize(reduzida, (w, h), interpolation=cv2.INTER_CUBIC)`}),`: estica a imagem ao tamanho normal`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`tarefa-33`,children:`Tarefa 3.3`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.`}),`\r
ENVIAR = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`False`}),`\r
img_3_3 = imagem_da_tarefa(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"3.3"`}),`, ENVIAR, padrao=img_teste)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`saturar`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`img, k=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1.6`})]}),`):\r
    `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""Aumenta a saturação da imagem multiplicando a distância\r
    entre cada pixel e o seu valor de cinza correspondente."""`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# convertendo a imagem para float32 para evitar estouro de valores (wrap-around)`}),`\r
    img_f = img.astype(np.float32)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# obtendo a luminância/tons de cinza de cada pixel (formato 2D)`}),`\r
    cinza = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# expandindo o canal de cinza para 3 dimensões (h, w, 1) usando broadcasting para casar com BGR`}),`\r
    cinza_3d = cinza[:, :, np.newaxis]\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# afastando cada cor do seu tom de cinza correspondente pelo fator k`}),`\r
      `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## Fórmula: cinza + k * (pixel - cinza)`}),`\r
    img_saturada = cinza_3d + k * (img_f - cinza_3d)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# garantindo que os valores fiquem restritos ao intervalo válido [0, 255] e converter para uint8`}),`\r
    img_saturada = np.clip(img_saturada, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`).astype(np.uint8)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` img_saturada\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`miniatura`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`img, centro=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0.6`}),`, largura=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0.15`}),`, transicao=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0.25`}),`, fator=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`8`})]}),`):\r
    `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""Gera o efeito miniatura (Tilt-Shift) combinando foco nítido na faixa central,\r
    desfoque nas bordas e aumento de saturação e contraste."""`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# gerarando a imagem desfocada para o fundo`}),`\r
    fundo = desfoque_reamostragem(img, fator=fator, passadas=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# gerarndo a máscara de foco e convertê-la para o intervalo [0.0, 1.0]`}),`\r
    mascara_uint8 = faixa_de_foco(img, centro=centro, largura=largura, transicao=transicao)\r
    alfa = mascara_uint8.astype(np.float32) / `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255.0`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# expandindo o alfa para 3 canais (h, w, 3) usando broadcasting para aplicar no BGR`}),`\r
    alfa_3d = alfa[:, :, np.newaxis]\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# frente nítida (com cores intensificadas para dar o aspecto de maquete)`}),`\r
      `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## aplicamos a saturação`}),`\r
    frente = saturar(img, k=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1.6`}),`)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# composição alfa: alfa * frente + (1 - alfa) * fundo`}),`\r
    composicao = alfa_3d * frente.astype(np.float32) + (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1.0`}),` - alfa_3d) * fundo.astype(np.float32)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# convertendo o resultado final de volta para uint8`}),`\r
    saida = np.clip(composicao, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`).astype(np.uint8)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` saida\r
\r
_ = mostrar_resultado(miniatura, img_3_3)
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`Função `,(0,n.jsx)(r.code,{children:`saturar`}),`:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`img_f = img.astype(np.float32)`}),`: transforma em `,(0,n.jsx)(r.code,{children:`float32`}),` para evitar estouro de valores`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`cinza = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)`}),`: pegando o tom de cinza de cada pixel`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`cinza_3d = cinza[:, :, np.newaxis]`}),`: expande para três dimensões`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`img_saturada = cinza_3d + k * (img_f - cinza_3d)`}),`: afasta cada cor do seu valor de cinza, de acordo com o fator `,(0,n.jsx)(r.code,{children:`k`})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`img_saturada = np.clip(img_saturada, 0, 255).astype(np.uint8)`}),`: garantindo restrição no intervalo de [0, 255]`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Função `,(0,n.jsx)(r.code,{children:`miniatura`}),`:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`fundo = desfoque_reamostragem(img, fator=fator, passadas=2)`}),`: gerando a imagem desfocada de fundo, de acordo com os parâmetros`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`mascara_uint8 = faixa_de_foco(img, centro=centro, largura=largura, transicao=transicao)`}),`: gerando a máscara de foco e convertendo para o intervalo [0, 1]`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`alfa = mascara_uint8.astype(np.float32) / 255.0`}),`: transformando a máscara para `,(0,n.jsx)(r.code,{children:`float32`})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`alfa_3d = alfa[:, :, np.newaxis]`}),`: expandindo para 3 canais`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`frente = saturar(img, k=1.6)`}),`: satura a frente, garantindo que a faixa de foco fique com cores vibrantes`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`composicao = alfa_3d * frente.astype(np.float32) + (1.0 - alfa_3d) * fundo.astype(np.float32)`}),`: na faixa central = imagem nítida e saturada. Fora da faixa central = desfoque. Zona de transição = mesclagem`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`etapa-04`,children:`Etapa 04`}),`
`,(0,n.jsx)(r.h3,{id:`tarefa-41`,children:`Tarefa 4.1`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.`}),`\r
ENVIAR = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`False`}),`\r
img_4_1 = imagem_da_tarefa(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"4.1"`}),`, ENVIAR, padrao=img_teste)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`simetria_4`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`img, lado=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`600`})]}),`):\r
    `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""Gera uma imagem perfeitamente simétrica em 4 quadrantes a partir\r
    do quadrante superior esquerdo (espelhamentos horizontal e vertical)."""`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# garante que a imagem seja quadrada, usando a função 'recorte_quadrado' feita anteriormente`}),`\r
    img_quadrada = recorte_quadrado(img, lado)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# pegando os pontos médios para as divisões dos quadrantes`}),`\r
    meio_h = lado // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`\r
    meio_w = lado // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# extrai o quadrante superior esquerdo (base da simetria)`}),`\r
      `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## Obs: se o tamanho for ímpar, é garantido que a divisão pegue o tamanho exato usando slice`}),`\r
    q1 = img_quadrada[:meio_h, :meio_w]\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# gerando os outros três quadrantes por espelhamento:`}),`\r
    q2 = q1[:, ::-`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`] `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Q2 (Superior Direito)`}),`\r
    q3 = q1[::-`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, :] `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Q3 (Inferior Esquerdo)`}),`\r
    q4 = q1[::-`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, ::-`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`] `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Q4 (Inferior Direito)`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# juntando os quadrantes em uma imagem (horizontalmente)`}),`\r
    topo = np.hstack([q1, q2])\r
    base = np.hstack([q3, q4])\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# juntando topo e base verticalmente para formar a imagem final completa`}),`\r
    simetrica = np.vstack([topo, base])\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` simetrica\r
\r
_ = mostrar_resultado(simetria_4, img_4_1)
`]})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`img_quadrada = recorte_quadrado(img, lado)`}),`: garante que a imagem seja quadrada`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`meio_h = lado // 2`}),` e `,(0,n.jsx)(r.strong,{children:`meio_w = lado // 2`}),`: paga os pontos médios para a divisão dos quadrantes`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`q1 = img_quadrada[:meio_h, :meio_w]`}),`: recortando o primeiro quadrante`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`q2 = q1[:, ::-1]`}),`, `,(0,n.jsx)(r.strong,{children:`q3 = q1[::-1, :]`}),` e `,(0,n.jsx)(r.strong,{children:`q4 = q1[::-1, ::-1]`}),`: formação dos quadrantes 2, 3 e 4 por espelhamento`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`q2 = linhas iguais e colunas invertidas`}),`
`,(0,n.jsx)(r.li,{children:`q3 = inversão das linhas de cima para baixo e mantém as colunas iguais`}),`
`,(0,n.jsx)(r.li,{children:`q4 = inverte as linhas e as colunas`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`topo = np.hstack([q1, q2])`}),` e `,(0,n.jsx)(r.strong,{children:`base = np.hstack([q3, q4])`}),`: junta os quadrantes em pares`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`simetrica = np.vstack([topo, base])`}),`: junta os pares de quadrantes`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`tarefa-42`,children:`Tarefa 4.2`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.`}),`\r
ENVIAR = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`False`}),`\r
img_4_2 = imagem_da_tarefa(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"4.2"`}),`, ENVIAR, padrao=img_teste)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`caleidoscopio_8`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`img, lado=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`600`})]}),`):\r
    `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""Gera um padrão de caleidoscópio com 8 setores simétricos,\r
    dobrando o quadrante base em sua diagonal principal."""`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# garantindo que a imagem seja quadrada (usando a função)`}),`\r
    img_quadrada = recorte_quadrado(img, lado)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# definindo o ponto médio`}),`\r
    meio = lado // `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`\r
    q = img_quadrada[:meio, :meio]\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# dobrando o quadrante na diagonal principal`}),`\r
      `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## criando coordenadas de grade para o quadrante`}),`\r
    yy, xx = np.mgrid[:meio, :meio]\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# transpondo o quadrante (trocar linhas por colunas preservando os canais BGR)`}),`\r
      `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## Em arrays 3D (H, W, C), transpomos os dois primeiros eixos: (1, 0, 2)`}),`\r
    q_transposto = q.transpose(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Máscara: onde a coluna (xx) for maior que a linha (yy), estamos acima da diagonal`}),`\r
    acima_diagonal = xx > yy\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# criando o setor triangular base combinando o original e o transposto`}),`\r
    setor_base = q.copy()\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# aplicando a máscara 2D diretamente (o NumPy aplica automaticamente nos 3 canais)`}),`\r
    setor_base[acima_diagonal] = q_transposto[acima_diagonal]\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# partindo do setor base dobrado, gerar a simetria de 4 quadrantes`}),`\r
    q1 = setor_base                `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Superior Esquerdo`}),`\r
    q2 = setor_base[:, ::-`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`]       `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Superior Direito`}),`\r
    q3 = setor_base[::-`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, :]       `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Inferior Esquerdo`}),`\r
    q4 = setor_base[::-`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, ::-`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`]    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Inferior Direito`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# juntando os blocos horizontalmente e verticalmente para formar o caleidoscópio de 8`}),`\r
    topo = np.hstack([q1, q2])\r
    base = np.hstack([q3, q4])\r
    caleidoscopio = np.vstack([topo, base])\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` caleidoscopio\r
\r
_ = mostrar_resultado(caleidoscopio_8, img_4_2)
`]})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`img_quadrada = recorte_quadrado(img, lado)`}),`: garante que a imagem seja quadrada`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`meio = lado // 2`}),`: define o meio de acordo com o `,(0,n.jsx)(r.code,{children:`lado`}),` passado como parâmetro`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`q = img_quadrada[:meio, :meio]`}),`: isola o quadrante superior esquerdo (q1)`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`yy, xx = np.mgrid[:meio, :meio]`}),`: dobra o quadrante na diagonal principal (q1 para q4)`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`q_transposto = q.transpose(1, 0, 2)`}),`: inverte as linhas e colunas da matriz tridimensional da imagem. Em arrays 3D (H, W, C)`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`acima_diagonal = xx > yy`}),`: identifica quais pixels estão acima da linha diagonal principal do quadrante`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`setor_base = q.copy()`}),`: cria o setor triangular base, combinando o original e o transposto`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`setor_base[acima_diagonal] = q_transposto[acima_diagonal]`}),`: pega os pixels da imagem transposta e os encaixa nos locais indicados pela máscara sobre uma cópia do quadrante original (`,(0,n.jsx)(r.code,{children:`setor_base`}),`). O resultado é um setor triangular perfeitamente simétrico nas bordas internas.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`q1 = setor_base`}),`, `,(0,n.jsx)(r.strong,{children:`q2 = setor_base[:, ::-1]`}),`, `,(0,n.jsx)(r.strong,{children:`q3 = setor_base[::-1, :]`}),` e `,(0,n.jsx)(r.strong,{children:`q4 = setor_base[::-1, ::-1]`}),`: para replicar o quadrante 01`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`topo = np.hstack([q1, q2])`}),` e `,(0,n.jsx)(r.strong,{children:`base = np.hstack([q3, q4])`}),`: para juntar os quadrantes horizontalmente`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`caleidoscopio = np.vstack([topo, base])`}),`: para juntar os quadrantes verticalmente`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`tarefa-43`,children:`Tarefa 4.3`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.`}),`\r
ENVIAR = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`False`}),`\r
img_4_3 = imagem_da_tarefa(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"4.3"`}),`, ENVIAR, padrao=img_teste)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`caleidoscopio_radial`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`img, setores=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`6`}),`, lado=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`600`})]}),`):\r
    `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""Gera um caleidoscópio radial circular, dividindo a imagem em fatias\r
    simétricas baseadas em coordenadas polares."""`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# garantindo que a imagem seja quadrada e obtendo centro`}),`\r
    img_q = recorte_quadrado(img, lado)\r
    centro = lado / `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2.0`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# criando grade de coordenadas para todos os pixels da imagem final`}),`\r
    y, x = np.mgrid[:lado, :lado]\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# estabelecendo distâncias horizontal e vertical até o centro`}),`\r
    dx = x - centro\r
    dy = y - centro\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## calculando distância e ângulo`}),`\r
    distancia = np.sqrt(dx**`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),` + dy**`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`)\r
    angulo = np.degrees(np.arctan2(dy, dx)) % `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`360`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## ajustando o ângulo para a primeira fatia com espelhamento interno`}),`\r
    angulo_fatia = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`360.0`}),` / setores\r
    metade_fatia = angulo_fatia / `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2.0`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`### posição do ângulo dentro de uma fatia (0 até angulo_fatia)`}),`\r
    ang_na_fatia = angulo % angulo_fatia\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`### espelhando a segunda metade de cada fatia para garantir a simetria entre vizinhas`}),`\r
    ang_mapeado = np.where(ang_na_fatia > metade_fatia, angulo_fatia - ang_na_fatia, ang_na_fatia)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## convertendo de polar (distância e novo ângulo) de volta para cartesiano (linhas e colunas)`}),`\r
    radianos = np.radians(ang_mapeado)\r
    colunas_origem = centro + distancia * np.cos(radianos)\r
    linhas_origem = centro + distancia * np.sin(radianos)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# arredondando para inteiros e restringir aos limites da imagem`}),`\r
    colunas_idx = np.clip(np.`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`round`}),`(colunas_origem), `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, lado - `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`).astype(np.intp)\r
    linhas_idx = np.clip(np.`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`round`}),`(linhas_origem), `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, lado - `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`).astype(np.intp)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# copiando a cor dos pixels correspondentes da foto de forma vetorizada`}),`\r
    saida = img_q[linhas_idx, colunas_idx]\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# máscara circular para escurecer bordas fora do caleidoscópio`}),`\r
    raio_max = lado / `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2.0`}),`\r
    fora_circulo = distancia > raio_max\r
    saida[fora_circulo] = (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`)\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` saida\r
\r
_ = mostrar_resultado(caleidoscopio_radial, img_4_3)\r

`]})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`img_q = recorte_quadrado(img, lado)`}),`: garante que a imagem seja quadrada`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`centro = lado / 2.0`}),`: pega o centro da imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`y, x = np.mgrid[:lado, :lado]`}),`: cria uma grade de coordenadas para todos os pixeis da imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`dx = x - centro`}),` e `,(0,n.jsx)(r.strong,{children:`dy = y - centro`}),`: estabelece distâncias horizontal e vertical até o centro`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`distancia = np.sqrt(dx`}),`2 + dy`,(0,n.jsx)(r.strong,{children:`2)`}),`: calculando a distância de cada pixel até o centro`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`angulo = np.degrees(np.arctan2(dy, dx)) % 360`}),`: calculando o ângulo de cada pixel até o centro`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`angulo_fatia = 360.0 / setores`}),` e `,(0,n.jsx)(r.strong,{children:`metade_fatia = angulo_fatia / 2.0`}),`: ajusta o ângulo para a primeira fatia com espelhamento interno`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`ang_na_fatia = angulo % angulo_fatia`}),`: determina a posição do ângulo dentro de cada fatia`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`ang_mapeado = np.where(ang_na_fatia > metade_fatia, angulo_fatia - ang_na_fatia, ang_na_fatia)`}),`: espelha a segunda metade de cada fatia, garantindo as simetrias entre as vizinhas`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`radianos = np.radians(ang_mapeado)`}),`, `,(0,n.jsx)(r.strong,{children:`colunas_origem = centro + distancia * np.cos(radianos)`}),` e `,(0,n.jsx)(r.strong,{children:`linhas_origem = centro + distancia * np.sin(radianos)`}),`: converte de polar (distância e novo ângulo) de volta para cartesiano (linhas e colunas)`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`colunas_idx = np.clip(np.round(colunas_origem), 0, lado - 1).astype(np.intp)`}),` e `,(0,n.jsx)(r.strong,{children:`linhas_idx = np.clip(np.round(linhas_origem), 0, lado - 1).astype(np.intp)`}),`: arredonda para inteiros e restringir aos limites da imagem`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`saida = img_q[linhas_idx, colunas_idx]`}),`: copia a cor dos pixels correspondentes da foto de forma vetorizada`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`raio_max = lado / 2.0`}),`, `,(0,n.jsx)(r.strong,{children:`fora_circulo = distancia > raio_max`}),` e `,(0,n.jsx)(r.strong,{children:`saida[fora_circulo] = (0, 0, 0)`}),`: máscara circular para escurecer bordas fora do caleidoscópio`]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};