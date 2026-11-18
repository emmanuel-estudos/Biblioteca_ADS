import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`questão-31`,children:`Questão 3.1`}),`
`,(0,n.jsx)(r.h2,{id:`enunciado`,children:`Enunciado`}),`
`,(0,n.jsxs)(r.p,{children:[`Crie um array `,(0,n.jsx)(r.code,{children:`moldura`}),` de `,(0,n.jsx)(r.code,{children:`uint8`}),` com formato `,(0,n.jsx)(r.code,{children:`(7, 9)`}),`, todo preto (0), com uma `,(0,n.jsx)(r.strong,{children:`borda de 1 pixel branca (255)`}),`. Use `,(0,n.jsx)(r.code,{children:`np.zeros`}),` e fatiamento (sem laços)`]}),`
`,(0,n.jsx)(r.h2,{id:`resolução`,children:`Resolução`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`import`}),` numpy `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`as`}),` np\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## criando a imagem`}),`\r
moldura = np.zeros(\r
	(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`7`}),`,`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`9`}),`),\r
 dtype=np.uint8\r
)\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## colocando as bordas brancas`}),`\r
	`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`### primeira e última linha (da linha 1 até a -1, coloque o valor 255)`}),`\r
moldura[[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, -`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`], :] = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`\r
	`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`### primeira e última coluna (da coluna 1 até a -1, coloque o valor 255)`}),`\r
moldura[:, [`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, -`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`]] = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),`\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`## exibindo imagem`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`print`}),`(moldura)
`]})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};