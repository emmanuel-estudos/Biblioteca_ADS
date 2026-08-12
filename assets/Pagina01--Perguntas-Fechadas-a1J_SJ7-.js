import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`perguntas-fechadas`,children:`Perguntas Fechadas`}),`
`,(0,n.jsx)(r.h2,{id:`contexto`,children:`Contexto`}),`
`,(0,n.jsx)(r.p,{children:`vou fazer agora uma outra atividade sobre Arquitetura e Padrões de Projeto de Software, com foco em Padrões Estruturais.`}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-01`,children:`Pergunta 01`}),`
`,(0,n.jsxs)(r.p,{children:[`Uma aplicação precisa se comunicar com três bibliotecas de terceiros para processar `,(0,n.jsx)(r.strong,{children:`áudio`}),`, `,(0,n.jsx)(r.strong,{children:`vídeo`}),` e `,(0,n.jsx)(r.strong,{children:`legendas`}),`, cada uma com uma interface própria e incompatível entre si. A equipe cria três classes que traduzem cada uma dessas interfaces para uma interface comum `,(0,n.jsx)(r.strong,{children:`IMidia`}),`. Em seguida, cria uma classe `,(0,n.jsx)(r.strong,{children:`ConversorDeVideo`}),` que usa as três classes anteriores internamente e expõe um único método `,(0,n.jsx)(r.code,{children:`converter(arquivo)`}),` para o restante do sistema.`]}),`
`,(0,n.jsxs)(r.p,{children:[`As três classes tradutoras e a classe `,(0,n.jsx)(r.strong,{children:`ConversorDeVideo`}),` representam, respectivamente:`]}),`
`,(0,n.jsx)(r.p,{children:`A) Facade / Adapter\r
B) Decorator / Proxy\r
C) Adapter / Facade\r
D) Proxy / Decorator\r
E) Composite / Flyweight`}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-02`,children:`Pergunta 02`}),`
`,(0,n.jsx)(r.p,{children:`Um sistema de delivery de comida tem a seguinte arquitetura:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Um Pedido pode conter `,(0,n.jsx)(r.strong,{children:`ItemSimples`}),` ou `,(0,n.jsx)(r.strong,{children:`Combo`}),` (que agrupa vários itens), tratados de forma uniforme.`]}),`
`,(0,n.jsx)(r.li,{children:`Um item pode ser "decorado" com adicionais (ex: ComQueijoExtra, ComBacon), que alteram o preço final sem que o cliente precise conhecer subclasses específicas para cada combinação.`}),`
`,(0,n.jsx)(r.li,{children:`O sistema se comunica com uma API de um restaurante parceiro que usa um protocolo XML antigo, enquanto o restante do sistema trabalha com JSON.`}),`
`,(0,n.jsx)(r.li,{children:`Antes de confirmar o pedido, uma camada verifica se o usuário está autenticado e se o cartão foi validado, controlando se a chamada real ao serviço de pagamento deve ou não ser efetivada.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Associe corretamente os padrões estruturais usados:`}),`
`,(0,n.jsx)(r.p,{children:`A) Composite (Pedido/Combo) — Decorator (adicionais) — Adapter (API XML) — Proxy (validação de pagamento)\r
B) Facade (Pedido/Combo) — Proxy (adicionais) — Decorator (API XML) — Composite (validação)\r
C) Decorator (Pedido/Combo) — Composite (adicionais) — Facade (API XML) — Adapter (validação)\r
D) Composite (Pedido/Combo) — Proxy (adicionais) — Facade (API XML) — Decorator (validação)\r
E) Adapter (Pedido/Combo) — Decorator (adicionais) — Proxy (API XML) — Composite (validação)`}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-03`,children:`Pergunta 03`}),`
`,(0,n.jsx)(r.p,{children:`Sobre o padrão Decorator, assinale a alternativa incorreta:`}),`
`,(0,n.jsx)(r.p,{children:`A) Permite adicionar responsabilidades a um objeto dinamicamente, em tempo de execução.\r
B) É uma alternativa mais flexível do que a herança para estender funcionalidades.\r
C) O decorador implementa a mesma interface do componente que está decorando.\r
D) É necessário criar uma subclasse para cada combinação possível de funcionalidades, tornando o número de classes proporcional ao número de combinações.\r
E) Vários decoradores podem ser empilhados (compostos) em torno de um mesmo componente.`}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-04`,children:`Pergunta 04`}),`
`,(0,n.jsx)(r.p,{children:`Duas equipes implementaram soluções que "envolvem" um objeto Servico original, expondo a mesma interface IServico:`}),`
`,(0,n.jsx)(r.p,{children:`Equipe A criou ServicoComLogAndCache, que adiciona funcionalidades de log e cache antes de delegar a chamada ao objeto real, podendo combinar várias dessas "camadas" dinamicamente.`}),`
`,(0,n.jsx)(r.p,{children:`Equipe B criou ServicoProtegido, que verifica se o usuário tem permissão antes de decidir se delega (ou não) a chamada ao objeto real, controlando o acesso a ele.`}),`
`,(0,n.jsx)(r.p,{children:`Assinale a alternativa correta:`}),`
`,(0,n.jsx)(r.p,{children:`A) Ambas as equipes implementaram o padrão Decorator.\r
B) Ambas as equipes implementaram o padrão Proxy.\r
C) Equipe A implementou Decorator; Equipe B implementou Proxy.\r
D) Equipe A implementou Proxy; Equipe B implementou Decorator.\r
E) Equipe A implementou Composite; Equipe B implementou Decorator.`}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-05-composite-x-decorator-semelhança-estrutural`,children:`Pergunta 05: Composite x Decorator (semelhança estrutural)`}),`
`,(0,n.jsx)(r.p,{children:`Ambos os padrões Composite e Decorator costumam ser implementados com uma classe abstrata/interface comum da qual derivam tanto "folhas" quanto "envoltórios/composições", permitindo tratamento uniforme via recursão.`}),`
`,(0,n.jsx)(r.p,{children:`Qual é a principal diferença de intenção entre eles?`}),`
`,(0,n.jsx)(r.p,{children:`A) Composite existe para adicionar responsabilidades dinamicamente a um objeto; Decorator existe para representar hierarquias parte-todo.\r
B) Composite representa uma estrutura hierárquica de parte-todo, permitindo tratar objetos individuais e composições de forma uniforme; Decorator adiciona responsabilidades a um objeto individual sem alterar sua interface.\r
C) Ambos têm exatamente a mesma intenção, diferindo apenas na nomenclatura das classes.\r
D) Composite é usado exclusivamente para controle de acesso; Decorator para hierarquias de árvore.\r
E) Decorator só pode ser aplicado a objetos folha; Composite só pode ser aplicado a objetos compostos.`}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-06`,children:`Pergunta 06`}),`
`,(0,n.jsx)(r.p,{children:`Um editor gráfico permite agrupar formas (círculos, retângulos) em grupos que podem conter outros grupos, formando hierarquias arbitrárias, todas tratadas com a mesma interface Forma (com método desenhar()). Como o editor pode ter milhões de formas na tela, o time decidiu que o estado intrínseco de cada forma (como o tipo e a textura) seja compartilhado entre instâncias, enquanto posição e tamanho (estado extrínseco) são passados no momento do desenho.\r
Essa descrição combina quais dois padrões estruturais?`}),`
`,(0,n.jsx)(r.p,{children:`A) Decorator e Proxy\r
B) Composite e Flyweight\r
C) Facade e Adapter\r
D) Composite e Decorator\r
E) Flyweight e Adapter`}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-07`,children:`Pergunta 07`}),`
`,(0,n.jsx)(r.p,{children:`Uma equipe está integrando um sistema de e-commerce legado a um novo gateway de pagamentos internacional, cuja API expõe métodos com nomes e formatos de dados totalmente diferentes dos usados pelo sistema atual (ex: submitTransaction(xml) em vez de processPayment(json)). Ao mesmo tempo, essa equipe também quer oferecer para o time de frontend um único ponto de entrada simples, finalizarCompra(), que internamente orquestra estoque, pagamento e envio de e-mail — subsistemas complexos com várias classes.\r
Quais padrões estão sendo aplicados, respectivamente, nos dois problemas descritos?`}),`
`,(0,n.jsx)(r.p,{children:`A) Facade/Adapter\r
B) Adapter/Facade\r
C) Proxy/Facade\r
D) Adapter/Decorator\r
E) Facade/Proxy`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};