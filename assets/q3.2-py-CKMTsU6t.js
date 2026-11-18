import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`questão-32`,children:`Questão 3.2`}),`
`,(0,n.jsx)(r.h2,{id:`enunciado`,children:`Enunciado`}),`
`,(0,n.jsxs)(r.p,{children:[`Crie uma imagem `,(0,n.jsx)(r.code,{children:`gradiente`}),` de formato `,(0,n.jsx)(r.code,{children:`(100, 256)`}),` e tipo `,(0,n.jsx)(r.code,{children:`uint8`}),` em que `,(0,n.jsxs)(r.strong,{children:[`cada coluna `,(0,n.jsx)(r.code,{children:`j`}),` tenha valor `,(0,n.jsx)(r.code,{children:`j`})]}),` (preto à esquerda, branco à direita). Não use laços: use `,(0,n.jsx)(r.code,{children:`np.arange`}),` e `,(0,n.jsx)(r.em,{children:`broadcasting`}),` (ou `,(0,n.jsx)(r.code,{children:`np.tile`}),`).`]}),`
`,(0,n.jsxs)(r.p,{children:[`Imprima o `,(0,n.jsx)(r.code,{children:`shape`}),`, o `,(0,n.jsx)(r.code,{children:`dtype`}),` e os valores da linha 0 nas colunas 0, 128 e 255.`]}),`
`,(0,n.jsx)(r.h2,{id:`resolução`,children:`Resolução`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`import`}),` numpy `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`as`}),` np\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## criando um vetor de tamanho 256`}),`\r
gradiente = np.arange(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`256`}),`, dtype=np.uint8)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## transformando em matriz e fazendo broadcasting para (100, 256)`}),`\r
gradiente = np.zeros(\r
	(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`100`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`),\r
	dtype=np.uint8\r
) + gradiente\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## mostrando resultados`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`print`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-string`,children:[`f"Shape: `,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{gradiente.shape}`}),`"`]}),`)\r
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`print`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-string`,children:[`f"Dtype: `,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{gradiente.dtype}`}),`"`]}),`)\r
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`print`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-string`,children:[`f"Valores da linha 0 nas colunas [0, 128, 255]: `,(0,n.jsxs)(r.span,{className:`hljs-subst`,children:[`{gradiente[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, [`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`128`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`]]}`]}),`"`]}),`)\r
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`print`}),`(gradiente)
`]})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};