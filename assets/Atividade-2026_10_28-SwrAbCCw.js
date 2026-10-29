import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`atividade---28102026`,children:`Atividade - 28/10/2026`}),`
`,(0,n.jsx)(r.h2,{id:`questão-01`,children:`Questão 01`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Segundo os autores o que podemos chamar de "Persistência de Dados"?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`Segundo os autores, o conceito de Persistência de Dados vai além da simples gravação de informações e se diferencia do estudo focado apenas em bancos de dados tradicionais:`}),`
`,(0,n.jsx)(r.p,{children:`Escopo estendido: Envolve a escolha de tecnologias, modelagem, otimização e garantias de consistência, além do gerenciamento de transações, recuperação de falhas, replicação e distribuição.`}),`
`,(0,n.jsx)(r.p,{children:`Visão arquitetural ampla: Enquanto o estudo de Banco de Dados foca em ferramentas e tecnologias específicas (como PostgreSQL ou MongoDB), a Persistência de Dados adota uma visão arquitetural mais ampla. Ela abrange todo o ciclo de vida da informação (captura, armazenamento, acesso, migração e arquivamento) e integra mecanismos como caching, filas, event sourcing, CQRS e armazenamento de objetos.`}),`
`,(0,n.jsx)(r.p,{children:`Dimensões fundamentais:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Durabilidade: Garantir que os dados não sejam perdidos.`}),`
`,(0,n.jsx)(r.li,{children:`Consistência: Manter a integridade das informações.`}),`
`,(0,n.jsx)(r.li,{children:`Disponibilidade: Permitir o acesso aos dados sempre que necessário.`}),`
`,(0,n.jsx)(r.li,{children:`Escalabilidade: Suportar o crescimento horizontal e vertical dos sistemas.`}),`
`,(0,n.jsx)(r.li,{children:`Performance: Manter padrões adequados de latência e throughput.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`questão-02`,children:`Questão 02`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado-1`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Como as garantias ACID do modelo relacional asseguram a integridade dos dados e quais limitações de escalabilidade horizontal e rigidez de esquema impulsionaram o surgimento dos bancos de dados NoSQL?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta-1`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`Os bancos de dados relacionais (RDBMS) utilizam o modelo de transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade) para garantir a consistência forte e a integridade referencial dos dados. Esse conjunto de propriedades assegura que:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`As alterações em dados estruturados com relacionamentos complexos ocorram de maneira inteiramente confiável.`}),`
`,(0,n.jsx)(r.li,{children:`Operações concorrentes não gerem inconsistências ou condições de corrida (race conditions), mantendo o estado do sistema íntegro.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Apesar de sua alta confiabilidade, o modelo relacional apresenta duas limitações principais ao lidar com demandas modernas:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Dificuldade de Escalabilidade Horizontal: Os bancos de dados relacionais têm limitações acentuadas para distribuir cargas e linhas entre múltiplos nós (escalonamento horizontal), tornando-se um gargalo sob o crescimento exponencial do volume de dados.`}),`
`,(0,n.jsx)(r.li,{children:`Rigidez de Esquema ( Schema Fixation ): A exigência de um esquema rígido e predefinido faz com que alterações na estrutura de dados impactem diretamente toda a aplicação, aumentando o acoplamento e dificultando a evolução do sistema. Além disso, quando aplicados a domínios com dados heterogêneos, não estruturados ou hierárquicos, o uso exclusivo de um esquema relacional aumenta a complexidade de desenvolvimento e compromete o desempenho do processamento.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Para superar a rigidez e a limitação de escala do modelo relacional, surgiram os bancos de dados NoSQL (como modelos de Documentos, Chave-Valor, Colunar e Grafos):`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Flexibilidade de Esquema: Permitem o armazenamento de dados dinâmicos e heterogêneos sem a necessidade de esquemas predefinidos engessados.`}),`
`,(0,n.jsx)(r.li,{children:`Escalonamento Horizontal Simplificado: São projetados nativamente para distribuição em múltiplos nós, permitindo escala massiva e alta disponibilidade.`}),`
`,(0,n.jsx)(r.li,{children:`Consistência Eventual: Em vez de exigir o rigor contínuo do ACID em todas as operações, utilizam frequentemente o modelo de consistência eventual para alcançar ganhos expressivos de desempenho e disponibilidade.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`questão-03`,children:`Questão 03`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado-2`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`De que maneira o conceito de Persistência Poliglota rompe com a abordagem de "banco de dados único" e como a escolha entre os modelos de dados (documento, chave-valor, colunas e grafos) deve ser alinhada aos requisitos específicos da aplicação?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta-2`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`A Persistência Poliglota rompe com o "Banco de Dados Único" através de:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Limitação da Abordagem Tradicional: Tradicionalmente, utilizava-se um único Sistema de Gerenciamento de Banco de Dados (SGBD) para armazenar todos os tipos de informações de um sistema. No entanto, diante da diversidade de requisitos e tipos de dados (estruturados, não estruturados, hierárquicos), forçar o uso de um único banco pode aumentar a complexidade do desenvolvimento, criar rigidez no esquema e comprometer o desempenho do processamento.`}),`
`,(0,n.jsx)(r.li,{children:`A Proposta Poliglota: O conceito propõe uma abordagem mista de armazenamento, combinando as garantias de consistência do modelo relacional com a flexibilidade e escalabilidade de múltiplos modelos NoSQL (key-value, document, columnar, graph). Cada componente ou serviço da aplicação passa a utilizar o modelo e a tecnologia de armazenamento mais adequados à natureza dos seus dados.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`A escolha do modelo NoSQL (ou Relacional) deve ser pautada nos requisitos funcionais e não funcionais de cada parte do sistema:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Modelo de Documento (Document-Based)`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Alinhamento e Requisitos: Utiliza esquemas flexíveis baseados em JSON/BSON para representar dados em formatos hierárquicos e de múltiplos níveis.`}),`
`,(0,n.jsx)(r.li,{children:`Casos de Uso: Catálogos de produtos, gestão de conteúdo, perfis de usuários e estruturas de dados hierárquicas complexas (como registros clínicos em árvore).`}),`
`,(0,n.jsx)(r.li,{children:`Vantagens e Trade-offs: Oferece alta flexibilidade e facilidade de escalonamento horizontal, embora apresente limitações em joins e trabalhe com consistência eventual.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`Modelo Chave-Valor (Key-Value)`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Alinhamento e Requisitos: Proporciona acesso ultra-rápido e simplificado baseado na busca direta por uma chave.`}),`
`,(0,n.jsx)(r.li,{children:`Casos de Uso: Caching, gerenciamento de sessões, armazenamentos de configurações e listas/atributos individuais.`}),`
`,(0,n.jsx)(r.li,{children:`Vantagens e Trade-offs: Entrega performance extrema e simplicidade operacional, mas possui capacidades limitadas de consulta e um modelo de dados simples.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`Modelo Colunar (Columnar / Wide-Column)`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Alinhamento e Requisitos: É otimizado para leitura eficiente de colunas e compressão de grandes volumes de dados.`}),`
`,(0,n.jsx)(r.li,{children:`Casos de Uso: Dados de séries temporais (time series), analytics, data warehousing, logs e métricas de desempenho.`}),`
`,(0,n.jsx)(r.li,{children:`Vantagens e Trade-offs: Garante escalabilidade massiva e alta disponibilidade, contudo exige atenção a um modelo de consistência mais complexo.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`Modelo de Grafos (Graph)`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Alinhamento e Requisitos: Trata os relacionamentos entre entidades como elementos centrais ("cidadãos de primeira classe"), permitindo navegar por conexões altamente interligadas com rapidez.`}),`
`,(0,n.jsx)(r.li,{children:`Casos de Uso: Redes sociais, motores de recomendação, detecção de fraudes e armazenamento vetorial para soluções de RAG/IA.`}),`
`,(0,n.jsx)(r.li,{children:`Vantagens e Trade-offs: É extremamente eficiente para consultas de relacionamentos complexos, apesar de demandar maior complexidade operacional.`}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`O modelo Relacional permanece sendo a escolha recomendada quando os requisitos exigem transações financeiras, consistência forte e integridade referencial sobre dados altamente estruturados.`}),`
`,(0,n.jsx)(r.h2,{id:`questão-04`,children:`Questão 04`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado-3`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Por que a adoção de um banco de dados exclusivo por microserviço é fundamental para assegurar a autonomia e o desacoplamento dos serviços, e quais desafios de consistência este modelo impõe ao sistema?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta-3`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`A adoção de um Banco de Dados exclusivo por microserviços é fundamental para a autonomia e desacoplamento, já que garante:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Eliminação do Acoplamento de Esquema: Em um banco de dados compartilhado, qualquer alteração no esquema (como modificar colunas ou tabelas) impacta diretamente múltiplos serviços, exigindo deploys coordenados e criando forte dependência entre equipes. O banco exclusivo isola a estrutura de dados de cada serviço.`}),`
`,(0,n.jsx)(r.li,{children:`Propriedade dos Dados (Data Ownership) e Autonomia de Equipes: Cada microserviço e sua respectiva equipe passam a ter controle e propriedade total sobre seus dados. As equipes ganham liberdade para implementar, evoluir e implantar seus serviços de forma independente e com impacto mínimo em outros times.`}),`
`,(0,n.jsx)(r.li,{children:`Liberdade de Escolha Tecnológica (Persistência Poliglota): O isolamento permite selecionar o modelo de banco de dados mais adequado aos requisitos de cada contexto delimitado (Bounded Context) — como utilizar um banco de documentos para um catálogo ou chave-valor para caching —, evitando soluções rígidas de banco único.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Ao eliminar a base de dados centralizada, o sistema perde o suporte direto a transações ACID unificadas, resultando em:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Ausência de Transações Distribuídas Nativas: Operações de negócio que abrangem múltiplos microserviços não podem mais contar com uma única transação ACID para garantir a atualização atômica de todas as tabelas envolvidas.`}),`
`,(0,n.jsx)(r.li,{children:`Transição para a Consistência Eventual ( Eventual Consistency ): As alterações em um serviço precisam ser propagadas assincronamente para outros serviços (via eventos ou mensagens). O sistema deixa de ter consistência forte imediata em nível global, passando a ser eventualmente consistente.`}),`
`,(0,n.jsx)(r.li,{children:`Tratamento de Dados Duplicados e Concorrência: O isolamento frequentemente gera duplicação de dados entre serviços, criando riscos de inconsistências, problemas de sincronização entre bases e condições de corrida (race conditions) em operações simultâneas.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Para lidar com esses desafios, as arquiteturas corporativas e orientadas a eventos utilizam estratégias específicas:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Padrão Saga: Gerencia transações distribuídas longas por meio de uma sequência de transações locais e ações compensatórias em caso de falhas.`}),`
`,(0,n.jsx)(r.li,{children:`Agregados ( Aggregates do DDD): Funcionam como a fronteira estrita de consistência transacional local. As decisões de negócio ocorrem com consistência forte dentro do agregado, enquanto a sincronização com outros componentes ocorre de forma eventual.`}),`
`,(0,n.jsx)(r.li,{children:`Event Sourcing e Idempotência: O estado do serviço é mantido como uma sequência cronológica de eventos imutáveis, garantindo auditoria completa e exigindo que o processamento das mensagens seja idempotente para evitar duplicações em falhas.`}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};