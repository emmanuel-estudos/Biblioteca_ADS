import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`questão-002`,children:`Questão 002`}),`
`,(0,n.jsx)(r.h2,{id:`enunciado`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Escreva um programa que leia o valor do lado de um quadrado e calcule a sua área e o seu perímetro.`}),`
`,(0,n.jsx)(r.h2,{id:`resolução`,children:`Resolução`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-C`,children:[(0,n.jsxs)(r.span,{className:`hljs-meta`,children:[`#`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`include`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`<stdio.h>`})]}),`\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-type`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`main`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
	`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// declarando variáveis`}),`\r
	`,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` num1, num2, num3, peso1, peso2, peso3;\r
	`,(0,n.jsx)(r.span,{className:`hljs-type`,children:`float`}),` media;\r
\r
	`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// pedindo dados`}),`\r
		`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// primeiro número`}),`\r
		`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`printf`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Informe o primeiro numero e seu respectivo peso: "`}),`);\r
		`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`scanf`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"%d%d"`}),`, &num1, &peso1);\r
\r
		`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// segundo número`}),`\r
		`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`printf`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Informe o segundo numero e seu respectivo peso: "`}),`);\r
		`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`scanf`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"%d%d"`}),`, &num2, &peso2);\r
\r
		`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// terceiro número`}),`\r
		`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`printf`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Informe o terceiro numero e seu respectivo peso: "`}),`);\r
		`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`scanf`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"%d%d"`}),`, &num3, &peso3);\r
\r
	`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// cálculo`}),`\r
	media = (`,(0,n.jsx)(r.span,{className:`hljs-type`,children:`float`}),`) (num1 * peso1 + num2 * peso2 + num3 * peso3) / (peso1 + peso2 + peso3);\r
\r
	`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// informando resultado`}),`\r
	`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`printf`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"A media ponderada dos numeros informados e seus respectivos pesos eh %.2f."`}),`, media);\r
}
`]})}),`
`,(0,n.jsx)(r.h2,{id:`explicações`,children:`Explicações`}),`
`,(0,n.jsx)(r.h3,{id:`declaração-de-variáveis`,children:`Declaração de Variáveis`}),`
`,(0,n.jsx)(r.p,{children:`Uma boa prática é declarar as variáveis que serão usadas logo no início do código.`}),`
`,(0,n.jsx)(r.p,{children:`Isso obriga você a pensar um pouco mais na estruturação da lógica, pensando primeiramente no que será necessário no código antes de começar a escrevê-lo propriamente.`}),`
`,(0,n.jsx)(r.p,{children:`.`}),`
`,(0,n.jsx)(r.h3,{id:`pedindo-dados`,children:`Pedindo Dados`}),`
`,(0,n.jsxs)(r.p,{children:[`Pedimos que o usuário informe os dados por meio da mensagem do `,(0,n.jsx)(r.code,{children:`printf`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Os dados informados são guardados em suas respectivas variáveis através do `,(0,n.jsx)(r.code,{children:`scanf`}),`. O primeiro parâmetro (`,(0,n.jsx)(r.strong,{children:`"PRIMEIRO_PARÂMETRO"`}),`) informa que o `,(0,n.jsx)(r.code,{children:`scanf`}),` receberá três variáveis do tipo `,(0,n.jsx)(r.code,{children:`TIPO`}),`, podendo serem separadas por espaço ou `,(0,n.jsx)(r.strong,{children:`Enter`}),`, já que o `,(0,n.jsx)(r.code,{children:`scanf`}),` ignora espaços em branco. Os `,(0,n.jsx)(r.strong,{children:`operadores de endereço (&)`}),` indicam as variáveis em que os valores devem ser guardados.`]}),`
`,(0,n.jsx)(r.p,{children:`.`}),`
`,(0,n.jsx)(r.h3,{id:`cálculo`,children:`Cálculo`}),`
`,(0,n.jsx)(r.p,{children:`Agora que já declaramos as variáveis que usaremos, já coletamos os dados necessários e já os guardamos em suas variáveis, podemos calcular a média e fazer com que o programa cumpra seu propósito.`}),`
`,(0,n.jsx)(r.p,{children:`.`}),`
`,(0,n.jsx)(r.h3,{id:`informando-resultado`,children:`Informando resultado`}),`
`,(0,n.jsx)(r.p,{children:`Com o cálculo já realizado, o que nos resta é informar ao usuário o resultado.`}),`
`,(0,n.jsxs)(r.p,{children:[`Utilizamos novamente o `,(0,n.jsx)(r.code,{children:`printf`}),` para exibir uma mensagem ao usuário. Dentro da mensagem há um `,(0,n.jsx)(r.strong,{children:`especificador de formato`}),`, usado para exibir o valor de uma variável.`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};