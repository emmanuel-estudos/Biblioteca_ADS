import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`conceitos-básicos`,children:`Conceitos Básicos`}),`
`,(0,n.jsxs)(r.p,{children:[`Nesse documento, serão apresentados `,(0,n.jsx)(r.strong,{children:`Conceitos Básicos`}),` e principais `,(0,n.jsx)(r.strong,{children:`Terminologias`}),` de Banco de Dados.`]}),`
`,(0,n.jsx)(r.h2,{id:`introdução`,children:`Introdução`}),`
`,(0,n.jsx)(r.p,{children:`Diariamente, realizamos tarefas que envolvem alguma interação com bancos de dados:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Ao realizar uma transação bancária;`}),`
`,(0,n.jsx)(r.li,{children:`Ao reservar um hotel ou uma passagem;`}),`
`,(0,n.jsx)(r.li,{children:`Ao acessar o catálogo de uma loja;`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Muitos sistemas atuais envolvem o uso de um banco de dados.`}),`
`,(0,n.jsx)(r.p,{children:`Para entendermos os fundamentos da tecnologia de banco de dados, precisamos compreender primeiro alguns de seus conceitos básicos.`}),`
`,(0,n.jsx)(r.h2,{id:`conceitos-básicos-1`,children:`Conceitos Básicos`}),`
`,(0,n.jsx)(r.h3,{id:`o-que-é-um-banco-de-dados`,children:`O que é um banco de dados?`}),`
`,(0,n.jsx)(r.h4,{id:`definição-genérica`,children:`Definição genérica`}),`
`,(0,n.jsx)(r.p,{children:`É uma coleção de dados relacionados e armazenados em algum dispositivo.`}),`
`,(0,n.jsx)(r.p,{children:`Podemos definir melhor um banco de dados com base em suas características.`}),`
`,(0,n.jsx)(r.h4,{id:`características`,children:`Características`}),`
`,(0,n.jsx)(r.p,{children:`Um banco de dados representa algum aspecto do mundo real. Também chamado de minimundo ou universo de discurso. Mudanças no minimundo precisam ser refletidas para o banco de dados.`}),`
`,(0,n.jsx)(r.p,{children:`Um banco de dados é uma coleção de dados logicamente coerente. Os dados desta coleção possuem um significado inerente.`}),`
`,(0,n.jsx)(r.p,{children:`Um banco de dados é projetado, construído e populado com dados para uma finalidade específica, tendo grupo definido de usuários interessados em seu conteúdo.`}),`
`,(0,n.jsx)(r.p,{children:`Os bancos de dados atuais normalmente precisam gerenciar uma grande quantidade de dados. Isto requer o uso do computador para dar o suporte a esta tarefa.`}),`
`,(0,n.jsx)(r.p,{children:`Antigamente, os bancos de dados das aplicações eram implementados como um conjunto de arquivos. O programador tinha que implementar todas as rotinas responsáveis pelo gerenciamento dos dados.`}),`
`,(0,n.jsx)(r.h4,{id:`algumas-desvantagens-dos-sistemas-de-arquivos`,children:`Algumas desvantagens dos sistemas de arquivos`}),`
`,(0,n.jsxs)(r.p,{children:[`A estrutura dos dados era toda definida dentro da aplicação: `,(0,n.jsx)(r.strong,{children:`usando recursos como records, structs, etc`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`Era muito complicado implementar mudanças na estrutura dos dados. O programador perdia muito tempo para implementar rotinas de acesso aos dados.`}),`
`,(0,n.jsxs)(r.p,{children:[`Várias versões dos mesmos dados em arquivos diferentes: `,(0,n.jsx)(r.strong,{children:`desperdício de espaço e problemas de consistência`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`O programador tinha que se preocupar com a implementação de muitos softwares complexos: `,(0,n.jsx)(r.strong,{children:`controle de transações, tolerância a falhas, estruturas de indexação, otimização de consultas, etc`}),`.`]}),`
`,(0,n.jsx)(r.h4,{id:`solução`,children:`Solução`}),`
`,(0,n.jsx)(r.p,{children:`Para resolver estas limitações, foram desenvolvidos os sistemas gerenciadores de bancos de dados (SGBD).`}),`
`,(0,n.jsx)(r.p,{children:`Um SGBD é uma coleção de programas que permite a criação e o gerenciamento de bancos de dados.`}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de SGDBs`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`MySQL;`}),`
`,(0,n.jsx)(r.li,{children:`PostgreSQL;`}),`
`,(0,n.jsx)(r.li,{children:`MongoDB;`}),`
`,(0,n.jsx)(r.li,{children:`Microsoft SQL Server;`}),`
`,(0,n.jsx)(r.li,{children:`Oracle;`}),`
`,(0,n.jsx)(r.li,{children:`IBM DB2;`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`vantagens-do-uso-de-sgbds`,children:`Vantagens do uso de SGBDs`}),`
`,(0,n.jsx)(r.h3,{id:`sgbds-têm-natureza-autodescritiva`,children:`SGBDs têm natureza autodescritiva`}),`
`,(0,n.jsx)(r.p,{children:`Um catálogo é fornecido contendo uma série de metadados acerca da estrutura do banco de dados e suas restrições.`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Exemplos de metadados`}),`: as tabelas, as colunas de cada tabela com os seus respectivos tipos, os índices, os procedimentos armazenados, as restrições de integridade, etc.`]}),`
`,(0,n.jsx)(r.h3,{id:`isolamento-entre-a-aplicação-e-o-banco-de-dados`,children:`Isolamento entre a aplicação e o banco de dados`}),`
`,(0,n.jsxs)(r.p,{children:[`Todas as tarefas relativas ao gerenciamento dos dados ficam na responsabilidade do SGBD: `,(0,n.jsx)(r.strong,{children:`o programador pode concentrar os seus esforços no desenvolvimento da aplicação`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Menor acoplamento entre a aplicação e os dados: `,(0,n.jsx)(r.strong,{children:`mudanças na estrutura e organização dos dados tem menos impacto na aplicação e vice-versa`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Maior facilidade para o compartilhamento dos dados: `,(0,n.jsx)(r.strong,{children:`a estrutura oferecida pelo SGBD pode ser reusada por várias aplicações`}),`.`]}),`
`,(0,n.jsx)(r.h3,{id:`melhor-abstração-dos-dados`,children:`Melhor abstração dos dados`}),`
`,(0,n.jsx)(r.p,{children:`Todos os detalhes de armazenamento, indexação e recuperação dos dados ficam na responsabilidade do SGBD. O programador só precisa conhecer informações de alto nível sobre a organização dos dados.`}),`
`,(0,n.jsx)(r.h3,{id:`suporte-a-múltiplas-visões-dos-dados`,children:`Suporte a múltiplas visões dos dados`}),`
`,(0,n.jsx)(r.p,{children:`SGBDs oferecem suporte para a definição de múltiplas visões dos dados.`}),`
`,(0,n.jsxs)(r.p,{children:[`Visões podem ser usadas para controlar quais dados poderão ser acessados por cada grupo de usuário: `,(0,n.jsx)(r.strong,{children:`e como estes dados serão visualizados`}),`.`]}),`
`,(0,n.jsx)(r.h3,{id:`controle-de-concorrência`,children:`Controle de concorrência`}),`
`,(0,n.jsxs)(r.p,{children:[`O SGBD gerencia o acesso concorrente quando múltiplos usuários tentam atualizar o banco de dados ao mesmo tempo: `,(0,n.jsx)(r.strong,{children:`garantindo que o banco de dados permanecerá correto após a execução de todas as atualizações`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`Estas aplicações são chamadas de OLTP (On-line Transaction Processing).`}),`
`,(0,n.jsx)(r.h3,{id:`verificação-de-restrições-de-integridade`,children:`Verificação de restrições de integridade`}),`
`,(0,n.jsx)(r.p,{children:`O SGBD é responsável por checar as restrições de integridade do banco de dados antes da realização de cada operação.`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Exemplos`}),`: o uso de valores nulos, restrições de unicidade, restrições de chave, referências, etc.`]}),`
`,(0,n.jsx)(r.h3,{id:`controle-de-redundância`,children:`Controle de redundância`}),`
`,(0,n.jsx)(r.p,{children:`SGBDs permitem que as visões de diferentes grupos de usuários sejam armazenadas em um único local.`}),`
`,(0,n.jsx)(r.p,{children:`Isso reduz a necessidade de redundância dos dados, evitando desperdício de espaço e problemas de consistência.`}),`
`,(0,n.jsx)(r.h3,{id:`controle-de-acesso-aos-dados`,children:`Controle de acesso aos dados`}),`
`,(0,n.jsxs)(r.p,{children:[`SGBDs oferecem ferramentas que nos permitem especificar os usuários que podem acessar o banco: `,(0,n.jsx)(r.strong,{children:`além de quais recursos eles podem acessar e quais operações eles podem realizar`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`É responsabilidade do SGBD realizar o controle de autenticação e autorização.`}),`
`,(0,n.jsx)(r.h3,{id:`armazenamento-persistente-de-objetos`,children:`Armazenamento persistente de objetos`}),`
`,(0,n.jsxs)(r.p,{children:[`SGBDs orientados a objetos realizam o armazenamento e a recuperação de objetos no banco de dados: `,(0,n.jsx)(r.strong,{children:`fazendo a conversão de objeto para registro e vice-versa. Isto reduz problemas de impedância`}),`.`]}),`
`,(0,n.jsx)(r.h3,{id:`otimização-de-consultas`,children:`Otimização de consultas`}),`
`,(0,n.jsxs)(r.p,{children:[`O SGBD oferece ferramentas que otimizam o plano de execução de consultas para minimizar o tempo de resposta: `,(0,n.jsx)(r.strong,{children:`além de índices que aceleram o tempo de resposta das consultas`}),`. Estas ferramentas permitem a resolução de consultas de forma mais eficiente.`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};