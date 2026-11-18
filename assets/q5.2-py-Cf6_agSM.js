import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`questão-52`,children:`Questão 5.2`}),`
`,(0,n.jsx)(r.h2,{id:`enunciado`,children:`Enunciado`}),`
`,(0,n.jsxs)(r.p,{children:[`Monte `,(0,n.jsx)(r.strong,{children:`uma única imagem`}),` com a imagem `,(0,n.jsx)(r.code,{children:`gato`}),` original, espelhada e negativa `,(0,n.jsx)(r.strong,{children:`lado a lado`}),` (horizontalmente). Salve como `,(0,n.jsx)(r.code,{children:`painel_gato.png`}),` e exiba.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Dica: `,(0,n.jsx)(r.code,{children:`np.hstack([a, b, c])`}),` concatena arrays horizontalmente (eles precisam ter a mesma altura).`]}),`
`,(0,n.jsx)(r.h2,{id:`resolução`,children:`Resolução`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# copiando imagem`}),`\r
gatoC = gato.copy()\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# espelhando imagem horizontalmente`}),`\r
gato_espelhado_horizontal = gatoC[:, ::-`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`]\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# negativando a imagem`}),`\r
gato_negativo = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),` - gatoC\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# mostrando as imagens`}),`\r
mostrar_varias(\r
                [gatoC, gato_espelhado_horizontal, gato_negativo],\r
                [`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"gato original"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"gato espelhado horizontalmente"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"gato negativo"`}),`],\r
                colunas=`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`3`}),`\r
              )\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# juntando imagens`}),`\r
gatosJuntinhos = np.hstack([gatoC, gato_espelhado_horizontal, gato_negativo])\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# salvando imagens`}),`\r
salvando = cv2.imwrite(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"gatos_juntos.png"`}),`, gatosJuntinhos)\r
\r
mostrar(cv2.imread(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"gatos_juntos.png"`}),`), titulo=`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"gatos juntinhos"`}),`)
`]})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};