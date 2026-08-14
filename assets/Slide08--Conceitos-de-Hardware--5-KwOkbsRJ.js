import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`conceitos-de-hardware---parte-05`,children:`Conceitos de Hardware - Parte 05`}),`
`,(0,n.jsx)(r.h2,{id:`resumo-básico`,children:`Resumo Básico`}),`
`,(0,n.jsx)(r.p,{children:`Descreve a estrutura interna do Sistema Operacional (SO) e suas diferentes arquiteturas. Um SO não é um bloco único, sendo composto pelo Núcleo, Drivers, Código de inicialização e Utilitários. São apresentadas as quatro principais arquiteturas de núcleo:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:`Monolíticos: Todos os componentes operam no modo núcleo, oferecendo alto desempenho, mas menor robustez, pois um erro pode colapsar o sistema.`}),`
`,(0,n.jsx)(r.li,{children:`Em Camadas: Organizado em níveis de abstração crescentes, facilitando a depuração, porém com perda de desempenho devido ao empilhamento.`}),`
`,(0,n.jsx)(r.li,{children:`Micronúcleo (μ-kernel): Apenas funções básicas ficam no núcleo; serviços rodam no espaço de usuário, garantindo maior robustez e flexibilidade, apesar do alto custo de troca de mensagens.`}),`
`,(0,n.jsx)(r.li,{children:`Híbridos: Uma abordagem intermediária (como no Windows) que traz componentes críticos de volta ao núcleo para melhorar o desempenho.`}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};