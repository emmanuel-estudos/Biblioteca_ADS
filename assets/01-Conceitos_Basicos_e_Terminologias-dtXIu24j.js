import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e(),...t.components},{Icone:i,TituloTabela:o}=r;return i||a(`Icone`,!0),o||a(`TituloTabela`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`conceitos-básicos`,children:`Conceitos Básicos`}),`
`,(0,n.jsxs)(r.p,{children:[`Nesse documento, serão apresentados `,(0,n.jsx)(r.strong,{children:`Conceitos Básicos`}),` e principais `,(0,n.jsx)(r.strong,{children:`Terminologias`}),` de Banco de Dados.`]}),`
`,(0,n.jsx)(r.h2,{id:`introdução`,children:`Introdução`}),`
`,(0,n.jsx)(r.p,{children:`Diariamente, realizamos tarefas que envolvem alguma interação com bancos de dados:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Ao realizar uma transação bancária.`}),`
`,(0,n.jsx)(r.li,{children:`Ao reservar um hotel ou uma passagem.`}),`
`,(0,n.jsx)(r.li,{children:`Ao acessar o catálogo de uma loja.`}),`
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
`,(0,n.jsx)(r.li,{children:`MySQL.`}),`
`,(0,n.jsx)(r.li,{children:`PostgreSQL.`}),`
`,(0,n.jsx)(r.li,{children:`MongoDB.`}),`
`,(0,n.jsx)(r.li,{children:`Microsoft SQL Server.`}),`
`,(0,n.jsx)(r.li,{children:`Oracle.`}),`
`,(0,n.jsx)(r.li,{children:`IBM DB2.`}),`
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
`,(0,n.jsxs)(r.p,{children:[`O SGBD oferece ferramentas que otimizam o plano de execução de consultas para minimizar o tempo de resposta: `,(0,n.jsx)(r.strong,{children:`além de índices que aceleram o tempo de resposta das consultas`}),`. Estas ferramentas permitem a resolução de consultas de forma mais eficiente.`]}),`
`,(0,n.jsx)(r.h3,{id:`backup-e-recuperação`,children:`Backup e Recuperação`}),`
`,(0,n.jsx)(r.p,{children:`SGBDs oferecem módulos de recuperação, que permitem que o banco de dados seja revertido para um estado válido após uma falha de hardware ou software.`}),`
`,(0,n.jsx)(r.p,{children:`Módulos de backup permitem o backup dos dados para recuperação após uma eventual falha de disco catastrófica.`}),`
`,(0,n.jsx)(r.h3,{id:`múltiplas-interfaces-com-o-usuário`,children:`Múltiplas interfaces com o usuário`}),`
`,(0,n.jsxs)(r.p,{children:[`O SGBD normalmente oferece várias interfaces para o gerenciamento do banco de dados: `,(0,n.jsx)(r.strong,{children:`interface gráfica, linha de comando, drivers para\r
acesso via aplicações, etc`}),`.`]}),`
`,(0,n.jsx)(r.h3,{id:`redução-no-tempo-de-desenvolvimento-de-aplicações`,children:`Redução no tempo de desenvolvimento de aplicações`}),`
`,(0,n.jsx)(r.p,{children:`Todas as tarefas relativas ao gerenciamento dos dados ficam na responsabilidade do SGBD.`}),`
`,(0,n.jsx)(r.p,{children:`O programador pode focar no desenvolvimento da aplicação.`}),`
`,(0,n.jsx)(r.h2,{id:`os-primeiros-sgbds`,children:`Os primeiros SGBDs`}),`
`,(0,n.jsx)(r.p,{children:`Os primeiros SGBDs surgiram mais ou menos na década de 1960.`}),`
`,(0,n.jsx)(r.p,{children:`Os dados eram organizados em arquivos de registros. Os relacionamentos entre os dados eram descritos por meio de ponteiros.`}),`
`,(0,n.jsx)(r.h3,{id:`modelos-de-destaque-da-época`,children:`Modelos de Destaque da Época`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Modelo hierárquico`}),`: os dados eram estruturados por meio de uma árvore.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Modelo de redes`}),`: representação mais livre, sem a noção de hierarquia.`]}),`
`,(0,n.jsx)(r.h3,{id:`sistemas-que-tiveram-destaque-na-época`,children:`Sistemas que tiveram destaque na época`}),`
`,(0,n.jsxs)(r.p,{children:[`Os SGBDs eram chamados de `,(0,n.jsx)(r.strong,{children:`bancos de dados navegacionais`}),`: foram utilizados da década de 1960 até meados da década de 1980.`]}),`
`,(0,n.jsx)(r.p,{children:`Alguns sistemas de bancos de dados tiveram destaque nessa época:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`O Integrated Data Store (IDS), desenvolvido Charles W. Bachman na General Electric.`}),`
`,(0,n.jsx)(r.li,{children:`O modelo desenvolvido pelo CODASYL (Committee on Data Systems Languages).`}),`
`,(0,n.jsx)(r.li,{children:`O Information Management System (IMS), criado pela IBM.`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`problemas-dos-bancos-de-dados-navegacionais`,children:`Problemas dos bancos de dados navegacionais`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Os sistemas eram muito complexos`}),`
`,(0,n.jsx)(r.li,{children:`Os sistemas exigiam muito tempo de treinamento por parte dos novos usuários`}),`
`,(0,n.jsx)(r.li,{children:`Dificuldade para expressar consultas`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`modelo-relacional`,children:`Modelo Relacional`}),`
`,(0,n.jsx)(r.p,{children:`Modelo proposto por Edgar Codd em 1970, com os primeiros SGBDs relacionais surgindo alguns anos depois.`}),`
`,(0,n.jsxs)(r.p,{children:[`• Fundamentação matemática para os bancos de dados: `,(0,n.jsx)(r.strong,{children:`os relacionamentos entre os dados são descritos por meio do conceito matemático de relações`}),`. Um elemento do conjunto A está relacionado com um elemento do conjunto B.`]}),`
`,(0,n.jsx)(r.p,{children:`Os dados são estruturados e armazenados na forma de tabelas:`}),`
`,(0,n.jsx)(o,{children:`Empregado`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:`center`},children:`Matrícula`}),(0,n.jsx)(r.th,{style:{textAlign:`center`},children:`Nome`}),(0,n.jsx)(r.th,{style:{textAlign:`center`},children:`Salário`}),(0,n.jsx)(r.th,{style:{textAlign:`center`},children:`Supervisor`}),(0,n.jsx)(r.th,{style:{textAlign:`center`},children:`CodDepartamento`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1111-1`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`João`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`2500`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1111-4`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1111-2`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`Maria`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`2500`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1111-3`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`2`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1111-3`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`Calos`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`4500`}),(0,n.jsx)(r.td,{style:{textAlign:`center`}}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`2`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1111-4`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`Joaquim`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`4500`}),(0,n.jsx)(r.td,{style:{textAlign:`center`}}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1111-5`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`Ana`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`3000`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1111-4`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1111-6`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`Patrícia`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`2500`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1111-3`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`2`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1111-7`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`Sérgio`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1000`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`1111-3`}),(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`2`})]})]})]}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de SGBDs que implementam o modelo relacional:`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21~bgwhite.svg`,alt:`PostgreSQL`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/mysql/mysql-ar21~bgwhite.svg`,alt:`MySQL`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/oracle/oracle-ar21~bgwhite.svg`,alt:`ORACLE`}),`
`,(0,n.jsx)(i,{src:`https://www.clipartmax.com/png/small/156-1565797_microsoft-logo-transparent-background-microsoft-sql-server-logo.png`,alt:`Microsoft SQL Server`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/ibm/ibm-ar21~bgwhite.svg`,alt:`IBM BD2`}),`
`,(0,n.jsx)(r.h2,{id:`modelo-orientado-a-objetos`,children:`Modelo Orientado a objetos`}),`
`,(0,n.jsx)(r.p,{children:`Surgiram devido à popularidade do paradigma de programação orientada a objetos nos anos 80.`}),`
`,(0,n.jsxs)(r.p,{children:[`Incorporação dos principais conceitos deste paradigma à aplicações de bancos de dados: `,(0,n.jsx)(r.strong,{children:`classes, objetos, métodos, encapsulamento, herança, etc`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`Foram propostos também para resolver o problema de impedância entre a aplicação e o banco de dados.`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Criação do Object Database Management Group (ODMG).`}),`
`,(0,n.jsx)(r.li,{children:`Criação da Object Query Language (OQL).`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de SGBDs orientados a objetos:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Vbase`}),`
`,(0,n.jsx)(r.li,{children:`O2`}),`
`,(0,n.jsx)(r.li,{children:`Orion`}),`
`,(0,n.jsx)(r.li,{children:`Gemstone`}),`
`,(0,n.jsx)(r.li,{children:`Jasmine`}),`
`,(0,n.jsx)(r.li,{children:`ObjectStore`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Mesmo com as vantagens oferecidas, os SGBDs orientados a objetos não conquistaram muita popularidade.`}),`
`,(0,n.jsx)(r.p,{children:`O modelo o relacional seguiu dominando o mercado de bancos de dados.`}),`
`,(0,n.jsx)(r.h2,{id:`bancos-de-dados-objeto-relacionais`,children:`Bancos de Dados Objeto-Relacionais`}),`
`,(0,n.jsx)(r.p,{children:`Depois de um tempo, alguns SGBDs relacionais passaram a dar suporte também ao modelo orientado a objetos.`}),`
`,(0,n.jsxs)(r.p,{children:[`Permitiam que os usuários aproveitassem as melhores características dos dois modelos: `,(0,n.jsx)(r.strong,{children:`facilidade de migração de bancos de dados de sistemas legados`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de SGBDs que se tornaram objeto-relacionais:`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/oracle/oracle-ar21~bgwhite.svg`,alt:`ORACLE`}),`
`,(0,n.jsx)(i,{src:`https://www.clipartmax.com/png/small/156-1565797_microsoft-logo-transparent-background-microsoft-sql-server-logo.png`,alt:`Microsoft SQL Server`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/ibm/ibm-ar21~bgwhite.svg`,alt:`IBM BD2`}),`
`,(0,n.jsx)(r.p,{children:`Mesmo com o desenvolvimento dos bancos de dados objeto-relacionais, o modelo orientado a objetos não alcançou tanta popularidade.`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Assim, o modelo relacional dominou o mercado de bancos de dados por aproximadamente quarenta anos`}),`.`]}),`
`,(0,n.jsx)(r.h2,{id:`outras-aplicações-de-bancos-de-dados`,children:`Outras Aplicações de Bancos de Dados`}),`
`,(0,n.jsx)(r.p,{children:`Com o passar dos anos, os bancos de dados relacionais evoluíram e começaram a dar suporte ao desenvolvimento de novas aplicações.`}),`
`,(0,n.jsx)(r.p,{children:`Essas novas aplicações permitiam o gerenciamento de dados ainda mais sofisticados.`}),`
`,(0,n.jsx)(r.h3,{id:`bancos-de-dados-multimídia`,children:`Bancos de Dados Multimídia`}),`
`,(0,n.jsxs)(r.p,{children:[`Um SGBD multimídia oferece estruturas voltadas para o armazenamento e recuperação de dados multimídia, exemplo: `,(0,n.jsx)(r.strong,{children:`documentos, áudios, fotos e vídeos`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`Oferecimento de tipos de dados, índices e algoritmos especiais para a recuperação desse tipo de informação.`}),`
`,(0,n.jsx)(r.p,{children:`Exemplo de uma consulta resolvida por um banco de dados multimídia:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Recuperar todas as imagens parecidas com uma determinada imagem.`}),`
`,(0,n.jsx)(r.li,{children:`Recuperar todos os vídeos com duração maior do que dois minutos.`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`bancos-de-dados-espaciais`,children:`Bancos de Dados Espaciais`}),`
`,(0,n.jsx)(r.p,{children:`Um SGBD espacial oferece suporte ao armazenamento e recuperação de dados geoespaciais.`}),`
`,(0,n.jsx)(r.p,{children:`Oferecem o suporte para o desenvolvimento de Sistemas de Informações Geográficas.`}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de consultas que podem ser resolvidas por um banco de dados espacial:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Recuperar os nomes de todos os rios que passam pelo estado da Paraíba.`}),`
`,(0,n.jsx)(r.li,{children:`Recuperar todas as unidades de saúde que estão próximas de um determinado local.`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`data-warehouse`,children:`Data Warehouse`}),`
`,(0,n.jsx)(r.p,{children:`Aplicações que processam e analisam dados históricos de grandes bancos de dados para auxiliar gestores em processos de tomadas de decisão.`}),`
`,(0,n.jsx)(r.p,{children:`São usados para a criação de aplicações de Business Intelligence.`}),`
`,(0,n.jsxs)(r.p,{children:[`Um data warehouse é formado a partir da coleta e agrupamento de dados de múltiplos bancos de dados: `,(0,n.jsx)(r.strong,{children:`a partir de um processo chamado ETL (ExtractTransform-Load)`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de consultas que podem ser resolvidas por um data warehouse:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Gerar um relatório mostrando as categorias de produtos mais vendidos em uma determinada filial.`}),`
`,(0,n.jsx)(r.li,{children:`Gerar um relatório exibindo o lucro de cada filial durante o primeiro mês do ano.`}),`
`,(0,n.jsx)(r.li,{children:`Gerar um relatório exibindo a evolução do lucro da empresa em um determinado ano.`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`mineração-de-dados-data-mining`,children:`Mineração de Dados (Data mining):`}),`
`,(0,n.jsx)(r.p,{children:`Aplicações que buscam encontrar padrões ou tendências em grandes volumes de dados. Também são aplicadas para a realização de análise preditiva dos dados.`}),`
`,(0,n.jsx)(r.p,{children:`São comumente usadas em conjunto com data warehouses.`}),`
`,(0,n.jsx)(r.h3,{id:`big-data`,children:`Big Data`}),`
`,(0,n.jsx)(r.p,{children:`São aplicações que precisam armazenar, recuperar e processar grandes quantidades de dados em um curto intervalo de tempo.`}),`
`,(0,n.jsx)(r.p,{children:`Surgiram porque, com o tempo, muitas aplicações começaram a gerar uma quantidade enorme de dados.`}),`
`,(0,n.jsx)(r.h2,{id:`a-era-do-big-data`,children:`A era do Big Data`}),`
`,(0,n.jsx)(r.p,{children:`O surgimento da era do big data foi impulsionado por alguns fatores:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Grande redução nos custos dos dispositivos de armazenamento de dados.`}),`
`,(0,n.jsx)(r.li,{children:`A evolução da tecnologia da computação em nuvem.`}),`
`,(0,n.jsx)(r.li,{children:`Internet das coisas (IoT).`}),`
`,(0,n.jsxs)(r.li,{children:[`Desenvolvimento de novos modelos para o processamento de dados distribuídos. Exemplo: `,(0,n.jsx)(r.strong,{children:`Map Reduce`}),`.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Desenvolvimento de infraestruturas que implementam esses novos modelos. Exemplo: `,(0,n.jsx)(r.strong,{children:`Hadoop`}),` e, posteriormente, o `,(0,n.jsx)(r.strong,{children:`Spark`}),`.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`características-das-aplicações-de-big-data`,children:`Características das Aplicações de Big Data`}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h4,{id:`volume`,children:`Volume`}),`
`,(0,n.jsx)(r.p,{children:`Os dados dessas aplicações são altamente volumosos, na casa de terabytes.`}),`
`,(0,n.jsx)(r.h4,{id:`velocidade`,children:`Velocidade`}),`
`,(0,n.jsx)(r.p,{children:`Novos dados são inseridos no banco de dados a uma velocidade muito grande.`}),`
`,(0,n.jsx)(r.h4,{id:`variedade`,children:`Variedade`}),`
`,(0,n.jsx)(r.p,{children:`Os dados manipulados pelo banco de dados possuem múltiplos formatos.`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Dados estruturados.`}),`
`,(0,n.jsx)(r.li,{children:`Dados semiestruturados.`}),`
`,(0,n.jsx)(r.li,{children:`Dados não estruturados.`}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.p,{children:`Todos esses dados precisam ser armazenados, recuperados e analisados em um tempo adequado.`}),`
`,(0,n.jsxs)(r.p,{children:[`O objetivo consiste em extrair novos insights para oferecer vantagem competitiva para a organização: `,(0,n.jsx)(r.strong,{children:`Mais um V: Valor`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`Os SGBDs relacionais não se mostraram muito efetivos para a resolução desses novos desafios:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`O modelo baseado em tabelas é muito pouco flexível.`}),`
`,(0,n.jsx)(r.li,{children:`Os bancos relacionais escalam de forma vertical, o que é caro e limitado.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Os SGBDs relacionais não se mostraram tão efetivos para o desenvolvimento de aplicações de big data:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Junções de tabelas são muito lentas.`}),`
`,(0,n.jsx)(r.li,{children:`A manutenção das propriedades ACID tem muito impacto no desempenho e na escalabilidade das aplicações.`}),`
`,(0,n.jsx)(r.li,{children:`Tabelas não representam a melhor abstração para representar e analisar certos tipos de dados.`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Foi necessário o desenvolvimento de novas alternativas para solucionar essas questões: `,(0,n.jsx)(r.strong,{children:`foram desenvolvidos os bancos de dados noSQL`}),`.`]}),`
`,(0,n.jsx)(r.h2,{id:`após-das-aplicações-de-big-data`,children:`Após das Aplicações de Big Data`}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de outras fontes de dados:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`As consultas realizadas pelos usuários.`}),`
`,(0,n.jsx)(r.li,{children:`Os comentários e ratings gerados durante a avaliação de produtos.`}),`
`,(0,n.jsx)(r.li,{children:`Serviços de reclamação de usuários.`}),`
`,(0,n.jsx)(r.li,{children:`O padrão de navegação dos usuários no website.`}),`
`,(0,n.jsx)(r.li,{children:`Padrão de mobilidade do GPS do celular.`}),`
`,(0,n.jsx)(r.li,{children:`As conversas de aplicativos de mensagens.`}),`
`,(0,n.jsx)(r.li,{children:`Aplicativos de compartilhamento de fotos.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`bancos-de-dados-nosql`,children:`Bancos de dados noSQL`}),`
`,(0,n.jsx)(r.p,{children:`Bancos de dados desenvolvidos para melhorar o gerenciamento e análise de bancos de dados de grande porte.`}),`
`,(0,n.jsx)(r.p,{children:`Quando esse movimento começou, o objetivo era desenvolver mecanismos mais eficientes e mais baratos para o gerenciamento de dados.`}),`
`,(0,n.jsx)(r.p,{children:`Principais características:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Esquemas de dados mais flexíveis.`}),`
`,(0,n.jsx)(r.li,{children:`Escalabilidade horizontal.`}),`
`,(0,n.jsx)(r.li,{children:`Nem todas as propriedades ACID são garantidas.`}),`
`,(0,n.jsx)(r.li,{children:`Novas abstrações para a representação, armazenamento e análise dos dados.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`o-teorema-cap`,children:`O Teorema CAP`}),`
`,(0,n.jsx)(r.p,{children:`Um banco de dados noSQL só tem condições de ofertar duas das propriedades abaixo:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Consistência.`}),`
`,(0,n.jsx)(r.li,{children:`Disponibilidade.`}),`
`,(0,n.jsx)(r.li,{children:`Tolerância à partição.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Desde a sua proposição, vários bancos de dados noSQL têm sido desenvolvidos.`}),`
`,(0,n.jsxs)(r.p,{children:[`Esses bancos de dados usam diferentes abstrações para a estruturação e armazenamento dos dados: `,(0,n.jsx)(r.strong,{children:`One size DOES NOT fit all`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`Os bancos de dados noSQL são classificados em:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Bancos de dados colunares.`}),`
`,(0,n.jsx)(r.li,{children:`Bancos de dados chave/valor.`}),`
`,(0,n.jsx)(r.li,{children:`Bancos de dados de documentos.`}),`
`,(0,n.jsx)(r.li,{children:`Bancos de dados de grafos.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`bancos-de-dados-colunares`,children:`Bancos de Dados Colunares`}),`
`,(0,n.jsx)(r.p,{children:`Os dados são representados e armazenados na forma de tabelas.`}),`
`,(0,n.jsx)(r.p,{children:`Cada tabela contém a "família de colunas" necessária para a resolução de uma ou mais consultas.`}),`
`,(0,n.jsx)(r.p,{children:`As tabelas são divididas em partições, que são usadas como critério de distribuição.`}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de bancos de dados colunares:`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-ar21~bgwhite.svg`,alt:`Cassandra`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/scylladb/scylladb-ar21~bgwhite.svg`,alt:`Scylla`}),`
`,(0,n.jsx)(i,{src:`https://d1.awsstatic.com/product-marketing/EMR/hbase-logo.e139b77f7031062f738f0fc28210e0ffa6ca26c8.png`,alt:`Apache HBase`}),`
`,(0,n.jsx)(i,{src:`https://www.ipnet.cloud/wp-content/uploads/2026/02/GCP-BigTable.png.webp`,alt:`GCP BigTable`}),`
`,(0,n.jsx)(i,{src:`https://isagebrum.com/images/technology/dynamo_db-image.svg`,alt:`DynamoDB`}),`
`,(0,n.jsx)(i,{src:`https://www.scrapestorm.com/wp-content/uploads/2021/04/hypertable-logo.png`,alt:`HyperTable`}),`
`,(0,n.jsx)(r.h2,{id:`bancos-de-dados-chave-valor-75`,children:`Bancos de Dados Chave-Valor (75)`}),`
`,(0,n.jsx)(r.p,{children:`Os dados são armazenados e gerenciados por meio de estruturas como tabelas hash e dicionários.`}),`
`,(0,n.jsx)(r.p,{children:`Os dados são armazenados como registros e são identificados unicamente por meio de uma chave única.`}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de bancos de dados chave/valor:`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/redis/redis-ar21~bgwhite.svg`,alt:`Redis`}),`
`,(0,n.jsx)(i,{src:`https://download.logo.wine/logo/Aerospike_(company)/Aerospike_(company)-Logo.wine.png`,alt:`Aerospike`}),`
`,(0,n.jsx)(i,{src:`https://isagebrum.com/images/technology/dynamo_db-image.svg`,alt:`DynamoDB`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/memcached/memcached-ar21~bgwhite.svg`,alt:`Memcached`}),`
`,(0,n.jsx)(r.h2,{id:`bancos-de-dados-de-documentos-77`,children:`Bancos de Dados de Documentos (77)`}),`
`,(0,n.jsx)(r.p,{children:`Os dados são armazenados e gerenciados no formato de coleções de documentos.`}),`
`,(0,n.jsx)(r.p,{children:`Foram desenvolvidos para facilitar o gerenciamento de dados semiestruturados.`}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de bancos de dados de documentos:`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21~bgwhite.svg`,alt:`MongoDB`}),`
`,(0,n.jsx)(i,{src:`https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Elasticsearch_logo.svg/960px-Elasticsearch_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20210414071206`,alt:`ElasticSearch`}),`
`,(0,n.jsx)(i,{src:`https://orientdb.dev/home_logo.png`,alt:`OrientDB`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/apache_couchdb/apache_couchdb-ar21~bgwhite.svg`,alt:`CouchDB`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/arangodb/arangodb-ar21~bgwhite.svg`,alt:`ArangoDB`}),`
`,(0,n.jsx)(r.h2,{id:`bancos-de-dados-de-grafos-79`,children:`Bancos de Dados de Grafos (79)`}),`
`,(0,n.jsx)(r.p,{children:`Os dados são armazenados e gerenciados no formato de grafos.`}),`
`,(0,n.jsx)(r.p,{children:`Os vértices do grafo representam os dados que devem ser armazenados.`}),`
`,(0,n.jsx)(r.p,{children:`Os arcos descrevem os relacionamentos que existem entre esses dados.`}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de bancos de dados de grafos:`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/neo4j/neo4j-ar21~bgwhite.svg`,alt:`neo4j`}),`
`,(0,n.jsx)(i,{src:`https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Apache_Giraph_Logo.svg/1280px-Apache_Giraph_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail`,alt:`Apache Giraph`}),`
`,(0,n.jsx)(i,{src:`https://orientdb.dev/home_logo.png`,alt:`OrientDB`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/arangodb/arangodb-ar21~bgwhite.svg`,alt:`ArangoDB`}),`
`,(0,n.jsx)(i,{src:`https://dbdb.io/media/logos/allegrograph.png.280x250_q85.png`,alt:`AllegroGraph`}),`
`,(0,n.jsx)(r.h2,{id:`bancos-de-dados-newsql-81`,children:`Bancos de Dados NewSQL (81)`}),`
`,(0,n.jsx)(r.p,{children:`São bancos de dados que tentam prover o mesmo desempenho dos bancos de dados noSQL para o modelo relacional.`}),`
`,(0,n.jsx)(r.p,{children:`Permitem utilizar o modelo relacional com todas as vantagens oferecidas pelos bancos de dados noSQL.`}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de bancos de dados NewSQL:`}),`
`,(0,n.jsx)(i,{src:`https://www.vectorlogo.zone/logos/cockroachlabs/cockroachlabs-ar21~bgwhite.svg`,alt:`CockroachLabs`}),`
`,(0,n.jsx)(i,{src:`https://azimutt.app/images/logos/amazon-aurora-109b871a0fd94fe6c0794f2a66cc3e25.png?vsn=d`,alt:`Amazon Aurora`}),`
`,(0,n.jsx)(i,{src:`https://trafodion.apache.org/images/logos/trafodion-dragon-large.png`,alt:`Apache Trafodion`}),`
`,(0,n.jsx)(i,{src:`https://miro.medium.com/1*iNlSTFEy1xpftvwji_PIXA.png`,alt:`Google Cloud Spanner`}),`
`,(0,n.jsx)(i,{src:`https://clustrixglobal.com/favicon-512.png`,alt:`Clustrix`}),`
`,(0,n.jsx)(i,{src:`https://upload.wikimedia.org/wikipedia/commons/3/39/NuoDB.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original`,alt:`NuoDB`}),`
`,(0,n.jsx)(r.h2,{id:`profissionais-de-bancos-de-dados-83`,children:`Profissionais de Bancos de Dados (83)`}),`
`,(0,n.jsx)(r.p,{children:`O desenvolvimento de um banco de dados envolve dois tipos de profissionais:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Projetista ou administrador de dados`}),`
`,(0,n.jsx)(r.li,{children:`Administrador (DBA)`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`atribuições-do-projetista-ou-administrador-de-dados-84`,children:`Atribuições do Projetista ou Administrador de Dados (84)`}),`
`,(0,n.jsx)(r.p,{children:`Interagir com os potenciais usuários do banco de dados para identificar as suas necessidades.`}),`
`,(0,n.jsx)(r.p,{children:`Identificar os dados que serão armazenados no banco de dados.`}),`
`,(0,n.jsx)(r.p,{children:`Definir como os dados serão representados e organizados no banco de dados.`}),`
`,(0,n.jsx)(r.p,{children:`Garantir que a estrutura do banco de dados vai satisfazer todos os requisitos levantados.`}),`
`,(0,n.jsx)(r.h3,{id:`atribuições-do-administrador-do-banco-de-dados-86`,children:`Atribuições do Administrador do Banco de Dados (86)`}),`
`,(0,n.jsx)(r.p,{children:`Implementar o projeto do banco de dados no SGBD.`}),`
`,(0,n.jsx)(r.p,{children:`Coordenar o uso do SGBD: Questões de segurança, restrições de acesso, controlar o desempenho, backup e replicação dos dados, etc.`}),`
`,(0,n.jsx)(r.h2,{id:`usuários-de-bancos-de-dados-87`,children:`Usuários de Bancos de Dados (87)`}),`
`,(0,n.jsx)(r.p,{children:`Uma vez criado, o banco de dados pode ser usado por usuários de diferentes níveis:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Programadores de Aplicações.`}),`
`,(0,n.jsx)(r.li,{children:`Usuários especialistas.`}),`
`,(0,n.jsx)(r.li,{children:`Usuários paramétricos.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Os usuários podem acessar o banco de dados de duas formas:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Diretamente, por meio de uma ferramenta disponibilizada pelo SGBD.`}),`
`,(0,n.jsx)(r.li,{children:`Indiretamente, por meio de uma aplicação.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de atividades realizadas por usuários de bancos de dados:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Inserção de novos dados.`}),`
`,(0,n.jsx)(r.li,{children:`Atualização dos dados existentes.`}),`
`,(0,n.jsx)(r.li,{children:`Realização de consultas.`}),`
`,(0,n.jsx)(r.li,{children:`Execução de transações.`}),`
`,(0,n.jsx)(r.li,{children:`Obtenção de relatórios.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`conceitos-importantes-de-bancos-de-dados`,children:`Conceitos importantes de bancos de dados`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};