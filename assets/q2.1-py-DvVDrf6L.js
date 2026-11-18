import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`questão-21`,children:`Questão 2.1`}),`
`,(0,n.jsx)(r.h2,{id:`enunciado`,children:`Enunciado`}),`
`,(0,n.jsxs)(r.p,{children:[`Escreva a função `,(0,n.jsx)(r.code,{children:`descrever_imagem(largura, altura, canais)`}),` que retorna um texto como:`]}),`
`,(0,n.jsx)(r.p,{children:`"1920x1080 com 3 canal(is): 6,220,800 valores (6.2 MB em uint8)"`}),`
`,(0,n.jsxs)(r.p,{children:[`Dica: cada valor de um pixel uint8 ocupa 1 byte. Use `,(0,n.jsx)(r.code,{children:`f"{numero\\:\\,}"`}),` para separador de milhar.`]}),`
`,(0,n.jsx)(r.h2,{id:`resolução`,children:`Resolução`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`def`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`descrever_imagem`}),`(`,(0,n.jsx)(r.span,{className:`hljs-params`,children:`largura, altura, canais`}),`):\r
  valores_imagem = largura * altura * canais\r
  mb_uint8 = valores_imagem / `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1000000`}),`\r
  resultado_valores_imagem = `,(0,n.jsxs)(r.span,{className:`hljs-string`,children:[`f"`,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{valores_imagem:,}`}),`"`]}),`\r
  `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsxs)(r.span,{className:`hljs-string`,children:[`f"`,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{largura}`}),`x`,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{altura}`}),` com `,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{canais}`}),` canal(is): `,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{resultado_valores_imagem}`}),` valores (`,(0,n.jsxs)(r.span,{className:`hljs-subst`,children:[`{mb_uint8:`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`.1`}),`f}`]}),` MB em uint8)"`]}),`\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`print`}),`(descrever_imagem(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1920`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1080`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`3`}),`))\r
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`print`}),`(descrever_imagem(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`640`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`480`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`))
`]})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};