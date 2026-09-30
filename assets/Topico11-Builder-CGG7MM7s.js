import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`builder-e-objetos-imutáveis`,children:`Builder e Objetos Imutáveis`}),`
`,(0,n.jsx)(r.h2,{id:`explicação-do-padrão`,children:`Explicação do Padrão`}),`
`,(0,n.jsx)(r.p,{children:`O Builder é um padrão criacional que separa o processo de construção de um objeto complexo da sua representação final. Desse modo, o mesmo processo passo a passo de construção pode produzir diferentes configurações e representações do objeto.`}),`
`,(0,n.jsxs)(r.p,{children:[`O material fundamenta o padrão explicando a importância de Objetos Imutáveis (cuja instância não pode ser modificada após a criação, como `,(0,n.jsx)(r.code,{children:`String`}),` e `,(0,n.jsx)(r.code,{children:`Integer`}),` em Java), que previnem efeitos colaterais severos de concorrência e estados inválidos.`]}),`
`,(0,n.jsx)(r.h2,{id:`por-que-usar-o-padrão`,children:`Por que usar o padrão?`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Garantia de Imutabilidade`}),`: Permite criar objetos complexos com atributos finais (`,(0,n.jsx)(r.code,{children:`private final`}),`) que são validados antes da instanciação real.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Eliminação de Construtores Telescópicos`}),`: Evita o antipadrão de ter múltiplos construtores sobrecarregados misturando parâmetros opcionais e obrigatórios.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Legibilidade com Fluent Interfaces`}),`: A construção do código torna-se extremamente limpa e legível através do encadeamento de métodos explicativos.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Isolamento da Lógica de Construção`}),`: Retira da classe principal a responsabilidade de validar e montar suas partes constituintes.`]}),`
`,(0,n.jsx)(r.h2,{id:`exemplo-apresentado-no-slide`,children:`Exemplo apresentado no slide`}),`
`,(0,n.jsxs)(r.p,{children:[`O slide apresenta uma classe `,(0,n.jsx)(r.code,{children:`Usuario`}),` contendo muitos atributos, divididos entre obrigatórios e opcionais:`]}),`
`,(0,n.jsxs)(r.p,{children:[`Obrigatórios: `,(0,n.jsx)(r.code,{children:`nome`}),`, `,(0,n.jsx)(r.code,{children:`sobrenome`}),`.\r
Opcionais: `,(0,n.jsx)(r.code,{children:`idade`}),`, `,(0,n.jsx)(r.code,{children:`telefone`}),`, `,(0,n.jsx)(r.code,{children:`endereco`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`O Problema: Criar um objeto imutável dessa classe exigiria um construtor gigante com todos os parâmetros. Se o cliente não quiser informar a `,(0,n.jsx)(r.code,{children:`idade`}),` ou o `,(0,n.jsx)(r.code,{children:`telefone`}),`, ele seria obrigado a passar valores como `,(0,n.jsx)(r.code,{children:`null`}),` ou `,(0,n.jsx)(r.code,{children:`0`}),` no construtor, deixando o código confuso, feio e propenso a erros de ordem de parâmetros.`]}),`
`,(0,n.jsx)(r.h2,{id:`solução-do-problema-apresentado-no-slide`,children:`Solução do problema apresentado no slide`}),`
`,(0,n.jsxs)(r.p,{children:[`A solução é criar uma classe interna estática chamada `,(0,n.jsx)(r.code,{children:`Builder`}),`. Esse Builder possui métodos para receber cada atributo opcional de forma encadeada, retornando a si mesmo (`,(0,n.jsx)(r.code,{children:`return this`}),`). O construtor da classe principal `,(0,n.jsx)(r.code,{children:`Usuario`}),` torna-se privado e aceita apenas o `,(0,n.jsx)(r.code,{children:`Builder`}),` como parâmetro, extraindo os dados e garantindo a imutabilidade após a chamada do método finalizador `,(0,n.jsx)(r.code,{children:`.build()`}),`.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Usuario`}),` {\r
  `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`final`}),` String nome; `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Obrigatório`}),`\r
  `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`final`}),` String sobrenome; `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Obrigatório`}),`\r
  `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`final`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` idade; `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Opcional`}),`\r
\r
  `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`Usuario`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(Builder builder)`}),` {\r
    `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.nome = builder.nome;\r
    `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.sobrenome = builder.sobrenome;\r
    `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.idade = builder.idade;\r
  }\r
\r
  `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Builder`}),` {\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`final`}),` String nome;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`final`}),` String sobrenome;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`idade`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`; `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Padrão`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`Builder`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(String nome, String sobrenome)`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.nome = nome;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.sobrenome = sobrenome;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` Builder `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`idade`}),(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`(`,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` idade)`]}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.idade = idade;\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` Usuario `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`build`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Usuario`}),`(`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`);\r
    }\r
  }\r
}\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Uso prático (Fluent Interface)`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-type`,children:`Usuario`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`u`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Usuario`}),`.Builder(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Ana"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Costa"`}),`).idade(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`30`}),`).build();
`]})}),`
`,(0,n.jsx)(r.p,{children:`Nota: O material cita que frameworks modernos como Project Lombok (via @Builder) e Immutables automatizam essa estrutura para poupar escrita de código.`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};