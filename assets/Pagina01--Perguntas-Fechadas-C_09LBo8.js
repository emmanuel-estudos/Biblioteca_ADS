import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,p:`p`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`perguntas-da-primeira-parte-da-prova`,children:`Perguntas da Primeira Parte da Prova`}),`
`,(0,n.jsx)(r.h2,{id:`builder--factory-method`,children:`Builder × Factory Method`}),`
`,(0,n.jsx)(r.p,{children:`Uma equipe mantém uma classe Relatorio que, ao longo do tempo, acumulou um construtor com doze parâmetros — vários deles opcionais (cabeçalho, rodapé, marca d'água, formato de exportação, paginação, idioma). Chamadas como new Relatorio(titulo, null, null, "PDF", true, null, ...) tornaram-se frequentes e difíceis de ler, e é comum errar a ordem dos argumentos. A equipe quer que cada parte do relatório seja configurada de forma explícita e que a criação só produza objetos em estado consistente. Qual padrão atende melhor a essa necessidade e por quê?`}),`
`,(0,n.jsx)(r.p,{children:`A) Factory Method, porque centraliza a decisão de qual subclasse instanciar.\r
B) Builder, porque separa a construção de um objeto complexo de sua representação, permitindo montá-lo passo a passo.\r
C) Prototype, porque clonar um relatório existente é sempre mais barato.\r
D) Singleton, porque só deve existir um relatório por vez.`}),`
`,(0,n.jsx)(r.h2,{id:`factory-method--abstract-factory`,children:`Factory Method × Abstract Factory`}),`
`,(0,n.jsx)(r.p,{children:`Qual alternativa distingue corretamente os dois padrões?`}),`
`,(0,n.jsx)(r.p,{children:`A) Factory Method cria famílias de produtos relacionados; Abstract Factory cria um único produto via subclasses.\r
B) Factory Method define um método para criar um produto, delegando a decisão às subclasses; Abstract Factory provê uma interface para criar famílias de produtos relacionados.\r
C) Ambos usam herança exclusivamente; nenhum deles pode ser implementado via composição.\r
D) Abstract Factory é um caso particular do Builder, pois constrói objetos passo a passo.`}),`
`,(0,n.jsx)(r.h2,{id:`singleton--abstract-factory`,children:`Singleton + Abstract Factory`}),`
`,(0,n.jsx)(r.p,{children:`Em um sistema de e-commerce, a equipe implementou uma ConexaoFabricaPagamentos que retorna famílias de objetos (gateway, validador, logger) conforme o país. Decidiu-se que deveria existir apenas uma instância dessa fábrica em toda a aplicação. Sobre a combinação desses padrões, é correto afirmar que:`}),`
`,(0,n.jsx)(r.p,{children:`A) Abstract Factory exige obrigatoriamente que a fábrica seja um Singleton, pois cria múltiplos produtos.\r
B) É comum (mas não obrigatório) implementar uma Abstract Factory como Singleton, já que normalmente basta uma única fábrica concreta ativa por contexto.\r
C) Singleton e Abstract Factory são mutuamente exclusivos, pois um cria objetos e o outro impede a criação.\r
D) Como o Singleton garante instância única, ele dispensa o uso de interfaces para os produtos criados.`}),`
`,(0,n.jsx)(r.h2,{id:`singleton-como-anti-padrão--diioc`,children:`Singleton como anti-padrão + DI/IoC`}),`
`,(0,n.jsx)(r.p,{children:`Sobre a crítica ao Singleton e sua relação com Injeção de Dependência, assinale a alternativa correta:`}),`
`,(0,n.jsx)(r.p,{children:`A) Singleton facilita testes unitários porque o estado global é fácil de isolar entre testes.\r
B) Um problema do Singleton é introduzir estado/acoplamento global e dependências ocultas; a Injeção de Dependência ajuda a mitigar isso ao tornar as dependências explícitas e substituíveis.\r
C) DI e Singleton são incompatíveis: um contêiner de DI nunca pode fornecer uma instância com ciclo de vida único.\r
D) Inversão de Controle significa que a classe passa a controlar diretamente a criação de todas as suas dependências.`}),`
`,(0,n.jsx)(r.h2,{id:`um-framework-precisa-criar-objetos-configuracao-complexos-frequentemente-novas-configurações-são-pequenas-variações-de-uma-já-existente-e-o-framework-recebe-suas-colaborações-de-um-contêiner-relacione-padrão-e-papel`,children:`Um framework precisa criar objetos Configuracao complexos. Frequentemente, novas configurações são pequenas variações de uma já existente, e o framework recebe suas colaborações de um contêiner. Relacione padrão e papel:`}),`
`,(0,n.jsx)(r.p,{children:`I. Builder\r
II. Prototype\r
III. Injeção de Dependência`}),`
`,(0,n.jsx)(r.p,{children:`( ) Clonar uma configuração existente e alterar poucos campos.\r
( ) Montar passo a passo uma configuração complexa do zero.\r
( ) Fornecer ao objeto suas colaborações sem que ele as instancie internamente.`}),`
`,(0,n.jsx)(r.p,{children:`A associação correta é:`}),`
`,(0,n.jsx)(r.p,{children:`A) I–II–III\r
B) II–I–III\r
C) III–II–I\r
D) II–III–I`}),`
`,(0,n.jsx)(r.h2,{id:`prototype--factory-method`,children:`Prototype × Factory Method`}),`
`,(0,n.jsx)(r.p,{children:`Considere um editor gráfico onde criar um novo objeto do zero é caro (consulta a banco, parsing), mas já existe um objeto configurado em memória. Avalie:`}),`
`,(0,n.jsx)(r.p,{children:`I. Prototype favorece a criação por cópia de uma instância existente, evitando o custo de inicialização do zero.\r
II. Em Prototype, o cliente normalmente não precisa conhecer a classe concreta do objeto que está clonando.\r
III. Factory Method sempre produz objetos mais baratos que Prototype.`}),`
`,(0,n.jsx)(r.p,{children:`A) Apenas I e II.\r
B) Apenas I e III.\r
C) Apenas II e III.\r
D) I, II e III.`}),`
`,(0,n.jsx)(r.h2,{id:`durante-a-revisão-de-código-um-desenvolvedor-afirma`,children:`Durante a revisão de código, um desenvolvedor afirma:`}),`
`,(0,n.jsx)(r.p,{children:`"Como usamos Injeção de Dependência, finalmente aplicamos Inversão de Controle no projeto — antes não tínhamos IoC em lugar nenhum."`}),`
`,(0,n.jsx)(r.p,{children:`Avaliando essa fala em relação aos conceitos envolvidos, qual alternativa é correta?`}),`
`,(0,n.jsx)(r.p,{children:`A) A fala está totalmente correta: Inversão de Controle só passa a existir quando se adota Injeção de Dependência.\r
B) A fala está parcialmente equivocada: Injeção de Dependência é apenas uma das técnicas que implementam IoC, e outros mecanismos já usados no projeto — como Factory Method, que delega a criação às subclasses\r
C) A fala está equivocada porque Injeção de Dependência e Inversão de Controle são conceitos sem qualquer relação entre si.\r
D) A fala está correta porque Inversão de Controle aplica-se exclusivamente a contêineres de Injeção de Dependência.`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};