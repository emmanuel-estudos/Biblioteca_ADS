import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`atividade-23`,children:`Atividade 2.3`}),`
`,(0,n.jsx)(r.h2,{id:`enunciado`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Uma "linha" de uma imagem em tons de cinza é dada pela lista linha. Usando apenas fatiamento e list comprehension:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`obtenha a linha espelhada;`}),`
`,(0,n.jsx)(r.li,{children:`obtenha uma versão subamostrada (um pixel sim, outro não);`}),`
`,(0,n.jsx)(r.li,{children:`obtenha a versão limiarizada: 255 se o valor for maior que 100, senão 0.`}),`
`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[`linha = [`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`12`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`40`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`90`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`130`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`180`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`220`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`250`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`200`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`150`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`60`}),`]\r
\r
espelhada = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`None`}),`      `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# SEU CÓDIGO AQUI`}),`\r
subamostrada = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`None`}),`   `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# SEU CÓDIGO AQUI`}),`\r
limiarizada = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`None`}),`    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# SEU CÓDIGO AQUI`}),`\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`print`}),`(espelhada, subamostrada, limiarizada, sep=`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"\\n"`}),`)
`]})}),`
`,(0,n.jsx)(r.h2,{id:`resolução`,children:`Resolução`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[`linha = [`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`12`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`40`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`90`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`130`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`180`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`220`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`250`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`200`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`150`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`60`}),`]\r
\r
espelhada = linha[::-`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`]\r
subamostrada = linha[::`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`]\r
limiarizada = [`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`255`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` valor > `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`100`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`else`}),` `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`for`}),` valor `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`in`}),` linha]\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`print`}),`(espelhada, subamostrada, limiarizada, sep=`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"\\n"`}),`)
`]})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};