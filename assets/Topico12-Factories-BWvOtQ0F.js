import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`factory-method-e-abstract-factory`,children:`Factory Method e Abstract Factory`}),`
`,(0,n.jsx)(r.h2,{id:`explicação-dos-padrões`,children:`Explicação dos Padrões`}),`
`,(0,n.jsx)(r.p,{children:`Ambos os padrões lidam com o encapsulamento da criação de objetos, mas operam em níveis de complexidade diferentes:`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Factory Method`}),`: Define uma interface ou método abstrato para criar um objeto, mas deixa as subclasses decidirem qual classe concreta instanciar. Ele adia a instanciação para as subclasses.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Abstract Factory`}),`: Fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.`]}),`
`,(0,n.jsx)(r.h2,{id:`por-que-usar-os-padrões`,children:`Por que usar os padrões?`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Isolamento de Classes Concretas`}),`: O cliente interage apenas com interfaces, sem conhecer as implementações exatas das classes que está instanciando.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Facilidade de Manutenção e Substituição`}),`: Se uma nova classe concreta surgir, o código do cliente não muda; altera-se apenas a fábrica.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Consistência entre Produtos (Abstract Factory)`}),`: Garante que um conjunto de produtos projetados para trabalhar juntos seja utilizado corretamente (ex: botões e barras de rolagem de um mesmo tema visual).`]}),`
`,(0,n.jsx)(r.h2,{id:`exemplo-apresentado-no-slide`,children:`Exemplo apresentado no slide`}),`
`,(0,n.jsx)(r.p,{children:`O material apresenta o problema de um framework de aplicações que manipula múltiplos documentos para o usuário. Duas abstrações-chave são as classes abstratas Application e Document.`}),`
`,(0,n.jsx)(r.p,{children:`Para criar um programa específico de desenho, criam-se as subclasses DrawApplication e DrawDocument. Para um editor de texto, usam-se TextApplication e TextDocument.`}),`
`,(0,n.jsx)(r.p,{children:`O Problema: A classe abstrata mãe Application é responsável por gerenciar e coordenar as ações dos documentos (Salvar, Abrir), mas ela não sabe qual classe concreta de documento precisará instanciar em tempo de execução (se será um DrawDocument ou TextDocument).`}),`
`,(0,n.jsx)(r.h2,{id:`solução-do-problema-apresentado-no-slide`,children:`Solução do problema apresentado no slide`}),`
`,(0,n.jsx)(r.p,{children:`A solução aplicada é o Factory Method. A classe abstrata Application declara um método abstrato para criação (ex: abstract Document createDocument()).`}),`
`,(0,n.jsx)(r.p,{children:`As ações gerais como abrir ou salvar chamam esse método internamente. Quem decide e implementa o objeto real são as subclasses: DrawApplication vai estender Application e implementar o método retornando new DrawDocument(). O acoplamento rígido é desfeito.`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-java`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Estrutura conceitual da solução`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`abstract`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Application`}),` {\r
  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// O Factory Method`}),`\r
  `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`abstract`}),` Document `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`createDocument`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),`;\r
\r
  `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`novoDocumento`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// A aplicação mãe usa o método sem saber qual documento concreto virá`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`Document`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`doc`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` createDocument();\r
    doc.abrir();\r
  }\r
}\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`DrawApplication`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`extends`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Application`}),` {\r
  `,(0,n.jsx)(r.span,{className:`hljs-meta`,children:`@Override`}),`\r
  `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` Document `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`createDocument`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`DrawDocument`}),`(); `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Subclasse decide o tipo concreto`}),`\r
  }\r
}
`]})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};