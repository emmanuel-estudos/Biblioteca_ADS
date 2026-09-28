import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`questão-22`,children:`Questão 2.2`}),`
`,(0,n.jsx)(r.h2,{id:`enunciado`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Dado o dicionário de resoluções abaixo, use um laço for para imprimir, para cada padrão, o número total de pixels e quantas vezes ele é maior que o padrão "VGA".`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`resolucoes = {`}),`\r
`,(0,n.jsx)(r.code,{children:`"VGA": (640, 480)`}),`,\r
`,(0,n.jsx)(r.code,{children:`"HD": (1280, 720)`}),`,\r
`,(0,n.jsx)(r.code,{children:`"Full HD": (1920, 1080)`}),`,\r
`,(0,n.jsx)(r.code,{children:`"4K UHD": (3840, 2160)`}),`,\r
`,(0,n.jsx)(r.code,{children:`}`})]}),`
`,(0,n.jsx)(r.h2,{id:`resolução`,children:`Resolução`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-py`,children:[`resolucoes = {\r
  `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"VGA"`}),`: (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`640`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`480`}),`),\r
  `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"HD"`}),`: (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1280`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`720`}),`),\r
  `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Full HD"`}),`: (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1920`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1080`}),`),\r
  `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"4K UHD"`}),`: (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`3840`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2160`}),`),\r
}\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`for`}),` nome, valor `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`in`}),` resolucoes.items():\r
  pixels_vga = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`640`}),` * `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`480`}),`\r
  total_pixels = valor[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`] * valor[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`]\r
  total_pixels_formatado = `,(0,n.jsxs)(r.span,{className:`hljs-string`,children:[`f"`,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{total_pixels:,}`}),`"`]}),`\r
  vezes_maior = total_pixels / pixels_vga\r
  `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`print`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-string`,children:[`f"`,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{nome}`}),` -> Total de Pixels: `,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{total_pixels_formatado}`}),` & `,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{vezes_maior}`}),` vezes maior que o formato VGA"`]}),`)
`]})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};