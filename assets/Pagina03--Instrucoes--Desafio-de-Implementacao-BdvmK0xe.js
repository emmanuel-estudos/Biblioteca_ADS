import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,li:`li`,ol:`ol`,p:`p`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`instruções---desafio-de-implementação`,children:`Instruções - Desafio de implementação`}),`
`,(0,n.jsx)(r.p,{children:`Você foi contratado para desenvolver um sistema de processamento de pagamentos para um e-commerce. O sistema deve suportar múltiplos gateways de pagamento (PayPal, Stripe, PagSeguro) e ser facilmente extensível para novos provedores no futuro.\r
Para simular as APIs dos gateways, você deve criar bibliotecas mock que representem:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`PayPal SDK: Classes que simulem chamadas para API do PayPal`}),`
`,(0,n.jsx)(r.li,{children:`Stripe SDK: Classes que simulem chamadas para API do Stripe`}),`
`,(0,n.jsx)(r.li,{children:`PagSeguro SDK: Classes que simulem chamadas para API do PagSeguro`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Crie um projeto simples, onde todos esses gateways serão usados por uma classe PagamentoService via uma abstração PagamentoGateway que será injetada.`}),`
`,(0,n.jsx)(r.p,{children:`Para configurar/usar a injeção de dependência, utilize uma biblioteca como Pico Container ou Google Guice. Para essa atividade, NÃO É PERMITIDO CRIAR UM PROJETO COM 'Spring Boot'/'Spring Framework'.`}),`
`,(0,n.jsx)(r.p,{children:`A classe principal desse projeto deve:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:`Obter um objeto do tipo PagamentoService já configurado via Pico/Guice.`}),`
`,(0,n.jsx)(r.li,{children:`Utilizar um método pagar(), que por sua vez irá chamar um método da abstração PagamentoGateway.`}),`
`,(0,n.jsx)(r.li,{children:`Obtenha um novo objeto do tipo PagamentoService, com um gateway diferente e repita o passo 2.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`O sistema deve ser extensível, de forma que novos gateways (como Pix) possam ser adicionadas sem modificar a classe PagamentoService.`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};