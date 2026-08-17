import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`questão-001`,children:`Questão 001`}),`
`,(0,n.jsx)(r.h2,{id:`enunciado`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Escreva um programa que leia três números inteiros e calcule a sua média aritmética.`}),`
`,(0,n.jsx)(r.h2,{id:`resolução`,children:`Resolução`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-c`,children:[(0,n.jsxs)(r.span,{className:`hljs-meta`,children:[`#`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`include`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`<stdio.h>`})]}),`\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-type`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`main`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
\r
	`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// declarando variáveis`}),`\r
	`,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` num1, num2, num3;\r
	`,(0,n.jsx)(r.span,{className:`hljs-type`,children:`float`}),` media;\r
\r
	`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// pedindo dados`}),`\r
	`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`printf`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Informe os tres numeros: "`}),`);\r
	`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`scanf`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"%d%d%d"`}),`, &num1, &num2, &num3);\r
\r
	`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// calculando`}),`\r
	media = (`,(0,n.jsx)(r.span,{className:`hljs-type`,children:`float`}),`)(num1 + num2 + num3) / `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`3`}),`;\r
\r
	`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// informando resultado`}),`\r
	`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`printf`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"A media aritmetica dos dados informados eh %.2f \\n"`}),`, media);\r
}
`]})}),`
`,(0,n.jsx)(r.h2,{id:`explicações`,children:`Explicações`}),`
`,(0,n.jsx)(r.h3,{id:`declaração-de-variáveis`,children:`Declaração de Variáveis`}),`
`,(0,n.jsx)(r.p,{children:`Uma boa prática é declarar as variáveis que serão usadas logo no início do código.`}),`
`,(0,n.jsx)(r.p,{children:`Isso obriga você a pensar um pouco mais na estruturação da lógica, pensando primeiramente no que será necessário no código antes de começar a escrevê-lo propriamente.`}),`
`,(0,n.jsxs)(r.p,{children:[`São declaradas três variáveis do tipo `,(0,n.jsx)(r.code,{children:`int`}),`, uma para cada número que será informado. Logo abaixo, é declarada uma variável do tipo `,(0,n.jsx)(r.code,{children:`float`}),` para guardar o resultado da média que será calculada.`]}),`
`,(0,n.jsx)(r.h3,{id:`pedindo-dados`,children:`Pedindo Dados`}),`
`,(0,n.jsxs)(r.p,{children:[`Pedimos que o usuário informe os dados por meio da mensagem do `,(0,n.jsx)(r.code,{children:`printf`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Os dados informados são guardados em suas respectivas variáveis através do `,(0,n.jsx)(r.code,{children:`scanf`}),`. O primeiro parâmetro (`,(0,n.jsx)(r.strong,{children:`"%d%d%d"`}),`) informa que o `,(0,n.jsx)(r.code,{children:`scanf`}),` receberá três variáveis do tipo `,(0,n.jsx)(r.code,{children:`int`}),`, podendo serem separadas por espaço ou `,(0,n.jsx)(r.strong,{children:`Enter`}),`, já que o `,(0,n.jsx)(r.code,{children:`scanf`}),` ignora espaços em branco. Os `,(0,n.jsx)(r.strong,{children:`operadores de endereço (&)`}),` indicam as variáveis em que os valores devem ser guardados.`]}),`
`,(0,n.jsx)(r.h3,{id:`cálculo`,children:`Cálculo`}),`
`,(0,n.jsx)(r.p,{children:`Agora que já declaramos as variáveis que usaremos, já coletamos os dados necessários e já os guardamos em suas variáveis, podemos calcular a média e fazer com que o programa cumpra seu propósito.`}),`
`,(0,n.jsxs)(r.p,{children:[`A linha responsável informa que o valor da variável `,(0,n.jsx)(r.strong,{children:`média`}),` deve ser igual a soma das variáveis dos `,(0,n.jsx)(r.strong,{children:`números`}),` dividida por `,(0,n.jsx)(r.strong,{children:`3`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`O uso o `,(0,n.jsx)(r.code,{children:`(float)`}),` faz com que o resultado da soma dos `,(0,n.jsx)(r.strong,{children:`números`}),` seja tratado temporariamente como `,(0,n.jsx)(r.strong,{children:`ponto flutuante`}),`. A linguagem converte o `,(0,n.jsx)(r.strong,{children:`divisor`}),` para `,(0,n.jsx)(r.code,{children:`float`}),` por debaixo dos panos também para que os dados após a vírgula não sejam perdidos.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Ao dividir um `,(0,n.jsx)(r.code,{children:`float`}),` por um `,(0,n.jsx)(r.code,{children:`int`}),`, a linguagem C converte o `,(0,n.jsx)(r.strong,{children:`3`}),` em `,(0,n.jsx)(r.strong,{children:`3.0`}),` automaticamente, executando uma divisão decimal exata. A estrutura de parênteses `,(0,n.jsx)(r.code,{children:`(float)(num1 + num2 + num3)`}),` é obrigatória. Se os parênteses envolvendo os `,(0,n.jsx)(r.strong,{children:`números`}),` não forem usados, o `,(0,n.jsx)(r.code,{children:`cast/conversão`}),` afetará apenas o `,(0,n.jsx)(r.code,{children:`num1`}),`, e a divisão `,(0,n.jsx)(r.code,{children:`num3 / 3`}),` continuará sendo feita de forma inteira por causa da precedência dos operadores.`]}),`
`,(0,n.jsx)(r.h3,{id:`informando-resultado-ao-usuário`,children:`Informando Resultado ao Usuário`}),`
`,(0,n.jsx)(r.p,{children:`Com a média já calculada, o que nos resta é informar ao usuário o resultado.`}),`
`,(0,n.jsxs)(r.p,{children:[`Utilizamos novamente o `,(0,n.jsx)(r.code,{children:`printf`}),` para exibir uma mensagem ao usuário. Dentro da mensagem há um `,(0,n.jsx)(r.strong,{children:`especificador de formato`}),`, usado para exibir o valor de uma variável.`]}),`
`,(0,n.jsxs)(r.p,{children:[`O valor da `,(0,n.jsx)(r.strong,{children:`média`}),` é limitado a duas casas decimais pelo `,(0,n.jsx)(r.code,{children:`.2`}),` e é informado que o valor da variável é um `,(0,n.jsx)(r.code,{children:`float`}),` através do `,(0,n.jsx)(r.code,{children:`f`}),`. Após o fechamento das aspas duplas, deve ser informada a variável que será exibida.`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};