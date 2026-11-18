import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`questão-33`,children:`Questão 3.3`}),`
`,(0,n.jsx)(r.h1,{id:`enunciado`,children:`Enunciado`}),`
`,(0,n.jsxs)(r.p,{children:[`Dada a matriz aleatória `,(0,n.jsx)(r.code,{children:`ruido`}),`:`]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:`calcule a porcentagem de pixels com valor maior que 128;`}),`
`,(0,n.jsxs)(r.li,{children:[`crie `,(0,n.jsx)(r.code,{children:`binaria`}),`, com 255 onde `,(0,n.jsx)(r.code,{children:`ruido > 128`}),` e 0 no restante, `,(0,n.jsxs)(r.strong,{children:[`sem alterar `,(0,n.jsx)(r.code,{children:`ruido`})]}),`.`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Dica: `,(0,n.jsx)(r.code,{children:`np.where(condicao, valor_se_verdadeiro, valor_se_falso)`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:`ruido = np.random.default_rng(7).integers(0, 256, size=(6, 6), dtype=np.uint8)`})}),`
`,(0,n.jsx)(r.h2,{id:`resolução`,children:`Resolução`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`import`}),` numpy `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`as`}),` np\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## criando ruido (semente '7', então o restultado é sempre o mesmo)`}),`\r
ruido = np.random.default_rng(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`7`}),`).integers(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`256`}),`, size=(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`6`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`6`}),`), dtype=np.uint8)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## calculando porcentagem ('quantos maiores que 128'/'total' * 'multiplicado por 100')`}),`\r
porcentagem = `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`float`}),`((ruido > `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`128`}),`).mean()) * `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`100`}),`\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## criando matriz binária`}),`\r
matrizBinaria = np.where(\r
	ruido > `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`128`}),`,\r
 	`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`,\r
  `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`\r
).astype(np.uint8)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## mostrando resultados`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`print`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Matriz Original (ruido):\\n"`}),`, ruido)\r
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`print`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"\\nMatriz Binária:\\n"`}),`, matrizBinaria)\r
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`print`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-string`,children:[`f"\\nPorcentagem de pixels > 128: `,(0,n.jsxs)(r.span,{className:`hljs-subst`,children:[`{porcentagem:`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`.2`}),`f}`]}),`%"`]}),`)
`]})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};