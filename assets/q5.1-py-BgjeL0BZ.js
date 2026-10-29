import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`questão-51`,children:`Questão 5.1`}),`
`,(0,n.jsx)(r.h2,{id:`enunciado`,children:`Enunciado`}),`
`,(0,n.jsxs)(r.p,{children:[`Recorte da imagem `,(0,n.jsx)(r.code,{children:`babuino`}),` uma região que contenha o nariz (o focinho vermelho e azul) e exiba o recorte ao lado da imagem original. Depois, desenhe na original um retângulo indicando de onde o recorte foi tirado.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Dica: use `,(0,n.jsx)(r.code,{children:`mostrar(babuino, eixos=True)`}),` para ver as coordenadas.`]}),`
`,(0,n.jsx)(r.h2,{id:`resolução`,children:`Resolução`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# fazendo uma cópia da imagem para recortar o nariz`}),`\r
editadaB = babuino.copy()\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# editadaB[::10, :] = 0                     # uma linha preta a cada 10 linhas`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# editadaB[:, ::10] = 0                     # uma linha preta a cada 10 colunas`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# editadaB[::50, :] = 255                   # uma linha branca a cada 10 linhas`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# editadaB[:, ::50] = 255                   # uma linha branca a cada 10 colunas`}),`\r
\r
mostrar(editadaB, titulo=`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"cópia da imagem"`}),`, bgr=`,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`True`}),`)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# recortando o nariz`}),`\r
nariz_babuino = editadaB[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`140`}),`:`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`230`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`200`}),`:`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`300`}),`]\r
ok = cv2.imwrite(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"nariz_babuino.png"`}),`, nariz_babuino)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# retângulo na cópia da imagem`}),`\r
babuino_com_retangulo = babuino.copy()\r
cv2.rectangle(babuino_com_retangulo, (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`200`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`140`}),`), (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`300`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`230`}),`), (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`), `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# exibir o resultado`}),`\r
mostrar_varias(\r
  							[babuino_com_retangulo, nariz_babuino],\r
              	[`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Original com marcação do retângulo"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Recorte do nariz (ROI)"`}),`],\r
              	colunas=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`\r
							)
`]})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};