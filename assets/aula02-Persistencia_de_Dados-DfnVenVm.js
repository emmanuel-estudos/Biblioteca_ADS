import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`persistência-de-dados`,children:`Persistência de Dados`}),`
`,(0,n.jsx)(r.h2,{id:`agenda`,children:`Agenda`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Persistência de Dados`}),`
`,(0,n.jsx)(r.li,{children:`Principais problemas`}),`
`,(0,n.jsx)(r.li,{children:`Tipos de Persistência`}),`
`,(0,n.jsx)(r.li,{children:`Técnicas de Persistência`}),`
`,(0,n.jsx)(r.li,{children:`O problema da Normalização`}),`
`,(0,n.jsx)(r.li,{children:`Persistência em micro-serviços`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`persistência-de-dados-1`,children:`Persistência de Dados`}),`
`,(0,n.jsx)(r.h3,{id:`do-que-se-trata-o-estudo-sobre-persistência-de-dados`,children:`Do que se trata o estudo sobre Persistência de Dados?`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Estados de técnicas, padrões e estratégias para armazenar e recuperar dados de forma durável e confiável`}),`
`,(0,n.jsx)(r.li,{children:`Envolve escolha de tecnologias, modelagem, otimização e garantias de consistência`}),`
`,(0,n.jsx)(r.li,{children:`Vai além da simples gravação: inclui transações, recuperação de falhas, replicação e distribuição`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`por-que-é-importante-entender-persistência-de-dados-no-mundo-corporativo`,children:`Por que é importante entender Persistência de Dados no mundo corporativo?`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Dados são o ativo mais valioso das empresas modernas`}),`
`,(0,n.jsx)(r.li,{children:`Decisões incorretas geram custos altos de manutenção, retrabalho e migração`}),`
`,(0,n.jsx)(r.li,{children:`Impacta diretamente em performance, disponibilidade e custos operacionais`}),`
`,(0,n.jsx)(r.li,{children:`Requisitos de conformidade (LGPD, GDPR) dependem de estratégias adequadas`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`qual-a-diferença-do-estudo-de-persistência-de-dados-e-banco-de-dados`,children:`Qual a diferença do estudo de Persistência de Dados e Banco de Dados?`}),`
`,(0,n.jsx)(r.h4,{id:`banco-de-dados`,children:`Banco de Dados`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Foco na tecnologia específica (PostgreSQL, MongoDB, etc)`}),`
`,(0,n.jsx)(r.li,{children:`Preocupa-se em como criar armazenamento para uma tecnologia específica`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`persistência-de-dados-2`,children:`Persistência de Dados`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Visão arquitetural mais ampla`}),`
`,(0,n.jsx)(r.li,{children:`Inclui caching, filas, event sourcing, CQRS, arquivos, objetivos (S3)`}),`
`,(0,n.jsx)(r.li,{children:`Considera o ciclo completo: captura, armazenamento, acesso, migração e arquivamento`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`dimensões-da-persistência-de-dados`,children:`Dimensões da Persistência de Dados`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Durabilidade`}),`: garantir que dados não sejam perdidos`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Consistência`}),`: manter integridade dos dados`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Disponibilidade`}),`: acesso aos dados quando necessário`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Escalabilidade`}),`: crescimento horizontal e vertical`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Performance`}),`: latência e throughput adequados`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`contexto-corporativo-escalável`,children:`Contexto Corporativo Escalável`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Alto volume de transações simultâneas`}),`
`,(0,n.jsx)(r.li,{children:`Distribuição geográfica de dados e usuários`}),`
`,(0,n.jsx)(r.li,{children:`Requisitos de recuperação de desastres (RTO/RPO)`}),`
`,(0,n.jsx)(r.li,{children:`Compliance e auditoria`}),`
`,(0,n.jsx)(r.li,{children:`Custo total de propriedade (TCO)`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`principais-problemas`,children:`Principais Problemas`}),`
`,(0,n.jsx)(r.h3,{id:`problema-01-crescimento-descontrolado-de-dados`,children:`Problema 01: Crescimento Descontrolado de Dados`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Volume de dados cresce exponencialmente`}),`
`,(0,n.jsx)(r.li,{children:`Custo de armazenamento e processamento aumentam`}),`
`,(0,n.jsx)(r.li,{children:`Queries ficam lentas com tabelas grandes`}),`
`,(0,n.jsx)(r.li,{children:`Backups demoram cada vez mais`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`solução`,children:`Solução`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Estratégias de particionamento e sharding`}),`
`,(0,n.jsx)(r.li,{children:`Arquivamento de dados históricos`}),`
`,(0,n.jsx)(r.li,{children:`Compressão e otimização de storage`}),`
`,(0,n.jsx)(r.li,{children:`Data lifecycle management`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`problema-02-baixa-disponibilidade`,children:`Problema 02: Baixa Disponibilidade`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Downtime causa perda de receita e reputação`}),`
`,(0,n.jsx)(r.li,{children:`Single point of failure no Banco de Dados`}),`
`,(0,n.jsx)(r.li,{children:`Manutenções programadas requerem paradas`}),`
`,(0,n.jsx)(r.li,{children:`Falhas de hardware ou data-center`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`solução-1`,children:`Solução`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Replicação multi-região`}),`
`,(0,n.jsx)(r.li,{children:`Failover automático`}),`
`,(0,n.jsx)(r.li,{children:`Arquiteturas active-active`}),`
`,(0,n.jsx)(r.li,{children:`Redundância em múltiplas camadas`}),`
`,(0,n.jsx)(r.li,{children:`Health checks e circuit breakers`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`problema-03-inconsistência-de-dados`,children:`Problema 03: Inconsistência de Dados`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Dados duplicados em múltiplos sistemas`}),`
`,(0,n.jsx)(r.li,{children:`Falta de transações distribuídas`}),`
`,(0,n.jsx)(r.li,{children:`Race conditions em operações concorrentes`}),`
`,(0,n.jsx)(r.li,{children:`Problemas de sincronização entre réplicas`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`solução-2`,children:`Solução`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Padrões de consistência eventual`}),`
`,(0,n.jsx)(r.li,{children:`Saga pattern para transações distribuídas`}),`
`,(0,n.jsx)(r.li,{children:`Event sourcing para auditoria completa`}),`
`,(0,n.jsx)(r.li,{children:`Idempotência em operações`}),`
`,(0,n.jsx)(r.li,{children:`Conflict resolution strategies`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`problema-04-acoplamento-entre-aplicações-e-persistência`,children:`Problema 04: Acoplamento entre Aplicações e Persistência`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Mudanças no schema impactam toda a aplicação`}),`
`,(0,n.jsx)(r.li,{children:`Dificuldade para evoluir o modelo de dados`}),`
`,(0,n.jsx)(r.li,{children:`Lock-in com tecnologia específica`}),`
`,(0,n.jsx)(r.li,{children:`Queries complexas espalhadas pelo código`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`solução-3`,children:`Solução`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Repository pattern`}),`
`,(0,n.jsx)(r.li,{children:`Abstração da camada de persistência`}),`
`,(0,n.jsx)(r.li,{children:`Domain-Driven Design (DDD)`}),`
`,(0,n.jsx)(r.li,{children:`Database per service em micro-serviços`}),`
`,(0,n.jsx)(r.li,{children:`Anti-corruption layers`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`tipos-de-persistência`,children:`Tipos de Persistência`}),`
`,(0,n.jsx)(r.h3,{id:`persistência-relacional-rdbms`,children:`Persistência Relacional (RDBMS)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Características: ACID, schema fixo, SQL`}),`
`,(0,n.jsx)(r.li,{children:`Exemplos: PostgreSQL, MySQL, Oracle, SQL Server`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`casos-de-uso`,children:`Casos de Uso`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Dados estruturados com relacionamentos complexos`}),`
`,(0,n.jsx)(r.li,{children:`Transações financeiras`}),`
`,(0,n.jsx)(r.li,{children:`Sistemas ERP, CRM`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`prós`,children:`Prós`}),`
`,(0,n.jsx)(r.p,{children:`Consistência forte, integridade referencial, queries complexas`}),`
`,(0,n.jsx)(r.h4,{id:`contras`,children:`Contras`}),`
`,(0,n.jsx)(r.p,{children:`Dificuldade de escalar horizontalmente, schema rígido`}),`
`,(0,n.jsx)(r.h3,{id:`persistência-nosql-documentos`,children:`Persistência NoSQL: Documentos`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Características: Schema flexível, JSON/BSON, queries por documento`}),`
`,(0,n.jsx)(r.li,{children:`Exemplos: MongoDB, CouchDB, DocumentoDB`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`casos-de-uso-1`,children:`Casos de Uso`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Catálogos de produtos`}),`
`,(0,n.jsx)(r.li,{children:`Gestão de conteúdo`}),`
`,(0,n.jsx)(r.li,{children:`Perfis de usuários`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`prós-1`,children:`Prós`}),`
`,(0,n.jsx)(r.p,{children:`Flexibilidade de schema, fácil escalonamento horizontal`}),`
`,(0,n.jsx)(r.h4,{id:`contras-1`,children:`Contras`}),`
`,(0,n.jsx)(r.p,{children:`Joins limitados, consistência eventual`}),`
`,(0,n.jsx)(r.h3,{id:`nosql-chave-valor`,children:`NoSQL: Chave-Valor`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Características: acesso ultra-rápido por chave`}),`
`,(0,n.jsx)(r.li,{children:`Exemplos: Redis, DynamoDB, Riak`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`casos-de-uso-2`,children:`Casos de Uso`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Caches`}),`
`,(0,n.jsx)(r.li,{children:`Sessões`}),`
`,(0,n.jsx)(r.li,{children:`Configurações`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`prós-2`,children:`Prós`}),`
`,(0,n.jsx)(r.p,{children:`Performance extrema, simplicidade`}),`
`,(0,n.jsx)(r.h3,{id:`contras-2`,children:`Contras`}),`
`,(0,n.jsx)(r.p,{children:`Queries limitadas, modelo simples`}),`
`,(0,n.jsx)(r.h3,{id:`nosql-colunar`,children:`NoSQL: Colunar`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Características: Otimizado para leitura de colunas, compressão eficiente`}),`
`,(0,n.jsx)(r.li,{children:`Exemplos: Cassandra, HBase, ScyllaDB`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`casos-de-uso-3`,children:`Casos de Uso`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Time series data`}),`
`,(0,n.jsx)(r.li,{children:`Análise e armazenamento de dados`}),`
`,(0,n.jsx)(r.li,{children:`Logs e métricas`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`prós-3`,children:`Prós`}),`
`,(0,n.jsx)(r.p,{children:`Escala massiva, alta disponibilidade`}),`
`,(0,n.jsx)(r.h4,{id:`contras-3`,children:`Contras`}),`
`,(0,n.jsx)(r.p,{children:`Modelo de consistência complexo`}),`
`,(0,n.jsx)(r.h3,{id:`nosql-grafos`,children:`NoSQL: Grafos`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`CaCaracterísticas: Relacionamentos como cidadãos de primeira classe`}),`
`,(0,n.jsx)(r.li,{children:`Exemplos: Neo4j, Amazon Neptune, ArangoDB`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`casos-de-uso-4`,children:`Casos de Uso`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Redes sociais, recomendações, detecção de fraudes`}),`
`,(0,n.jsx)(r.li,{children:`Armazenamento vetorial de dados para RAG/IA`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`prós-4`,children:`Prós`}),`
`,(0,n.jsx)(r.p,{children:`Queries de relacionamentos eficientes`}),`
`,(0,n.jsx)(r.h4,{id:`contras-4`,children:`Contras`}),`
`,(0,n.jsx)(r.p,{children:`Complexidade operacional`}),`
`,(0,n.jsx)(r.h3,{id:`persistência-em-memória`,children:`Persistência em Memória`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Características: Dados armazenados em RAM, extrema velocidade`}),`
`,(0,n.jsx)(r.li,{children:`Exemplos: Redis, Memcached, Hazelcast`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`casos-de-uso-5`,children:`Casos de Uso`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Cache distribuído`}),`
`,(0,n.jsx)(r.li,{children:`Sessões`}),`
`,(0,n.jsx)(r.li,{children:`Rate limiting`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`prós-5`,children:`Prós`}),`
`,(0,n.jsx)(r.p,{children:`Latência sub-milissegundo`}),`
`,(0,n.jsx)(r.h4,{id:`contras-5`,children:`Contras`}),`
`,(0,n.jsx)(r.p,{children:`Volatilidade, custo de RAM`}),`
`,(0,n.jsx)(r.h3,{id:`object-storage`,children:`Object Storage`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Características: Armazenamento de arquivos binários`}),`
`,(0,n.jsx)(r.li,{children:`Exemplos: Amazon S3, MinIO, Azure Blob`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`casos-de-uso-6`,children:`Casos de Uso`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Imagens`}),`
`,(0,n.jsx)(r.li,{children:`Vídeos`}),`
`,(0,n.jsx)(r.li,{children:`Backups`}),`
`,(0,n.jsx)(r.li,{children:`Data lakes`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`prós-6`,children:`Prós`}),`
`,(0,n.jsx)(r.p,{children:`Escalabilidade ilimitada, baixo custo`}),`
`,(0,n.jsx)(r.h4,{id:`contras-6`,children:`Contras`}),`
`,(0,n.jsx)(r.p,{children:`Não estruturado, latência mais alta`}),`
`,(0,n.jsx)(r.h3,{id:`persistência-por-arquivo`,children:`Persistência por Arquivo`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Características: Dados armazenados em arquivo no disco e são dentro da aplicação`}),`
`,(0,n.jsx)(r.li,{children:`Exemplos: FALTANDO`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`casos-de-uso-7`,children:`Casos de Uso`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Cache interno de aplicação`}),`
`,(0,n.jsx)(r.li,{children:`Uso alternativa ao Redis (meio termo entre memória e disco)`}),`
`,(0,n.jsx)(r.li,{children:`Logging`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`prós-7`,children:`Prós`}),`
`,(0,n.jsx)(r.p,{children:`Latência sub-milissegundo`}),`
`,(0,n.jsx)(r.h4,{id:`contras-7`,children:`Contras`}),`
`,(0,n.jsx)(r.p,{children:`Volatilidade média, sem uma política de remoção o disco pode ficar cheio`}),`
`,(0,n.jsx)(r.h2,{id:`técnicas-de-persistência-caching-estratégico`,children:`Técnicas de Persistência: Caching Estratégico`}),`
`,(0,n.jsx)(r.h4,{id:`cache-aside-lazy-loading`,children:`Cache-Aside (Lazy Loading)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Aplicação busca do cache primeiro`}),`
`,(0,n.jsx)(r.li,{children:`Em caso de miss, busca da fonte e popula cache`}),`
`,(0,n.jsx)(r.li,{children:`Controle total da aplicação`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`write-through`,children:`Write-Through`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Dados escritos no cache e no banco simultaneamente`}),`
`,(0,n.jsx)(r.li,{children:`Garante consistência entre cache e persistência`}),`
`,(0,n.jsx)(r.li,{children:`Penalidade em latência de escrita`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`write-behind`,children:`Write-Behind`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Escrita no cache imediata, persistência assíncrona`}),`
`,(0,n.jsx)(r.li,{children:`Melhor performance de escrita`}),`
`,(0,n.jsx)(r.li,{children:`Risco de perda de dados em falhas`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`connection-pooling`,children:`Connection Pooling`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Reutilização de conexões com banco de dados`}),`
`,(0,n.jsx)(r.li,{children:`Evita overhead de criar/destruir conexões`}),`
`,(0,n.jsx)(r.li,{children:`Configuração crítica: tamanho do pool, timeouts`}),`
`,(0,n.jsx)(r.li,{children:`Ferramentas: HikariCP, c3p0, pgBouncer`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`batch-processing`,children:`Batch Processing`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Agrupar múltiplas operações em lote`}),`
`,(0,n.jsx)(r.li,{children:`Reduz round-trips ao banco`}),`
`,(0,n.jsx)(r.li,{children:`Melhora throughput significativamente`}),`
`,(0,n.jsx)(r.li,{children:`Exemplos: bulk inserts, batch updates`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`horizontal-distribuir-linhas-por-múltiplos-nós`,children:`Horizontal: distribuir linhas por múltiplos nós`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Por range: datas, IDs`}),`
`,(0,n.jsx)(r.li,{children:`Por hash: distribuição uniforme`}),`
`,(0,n.jsx)(r.li,{children:`Por geografia: dados próximos aos usuários`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`vertical-separar-colunas-em-diferentes-tabelas`,children:`Vertical: separar colunas em diferentes tabelas`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Colunas frequentes vs. raramente acessadas`}),`
`,(0,n.jsx)(r.li,{children:`BLOBs separados de dados transacionais`}),`
`]}),`
`,(0,n.jsx)(r.h4,{id:`desafios`,children:`Desafios`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Queries cross-shard`}),`
`,(0,n.jsx)(r.li,{children:`Rebalanceamento`}),`
`,(0,n.jsx)(r.li,{children:`Escolha da shard key`}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};