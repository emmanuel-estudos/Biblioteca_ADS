import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`atividade-04`,children:`Atividade 04`}),`
`,(0,n.jsx)(r.h2,{id:`questão-01`,children:`Questão 01`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Princípio do baixo acoplamento: Segundo Thomas Erl, qual é a importância do baixo acoplamento entre serviços em uma arquitetura SOA e como esse princípio contribui para a autonomia dos serviços?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`Segundo o autor, o baixo acoplamento entre serviços na arquitetura SOA é importante porque assim as funções e o sistema devem ser disponibilizados interconectados mas sem dependência rígida entre si, garantindo que:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`A comunicação entre consumidor e provedor aconteça somente em interfaces bem definidas (contratos) e sem compartilhamento de código ou detalhes de implementação.`}),`
`,(0,n.jsx)(r.li,{children:`Seja possível a conectividade de aplicações desenvolvidas em diferentes linguagens, plataformas ou middlewares.`}),`
`,(0,n.jsx)(r.li,{children:`Reduza drasticamente o impactor de alterações, já que consumidores não precisam alterar suas estruturas com a adição de novos componentes e serviços.`}),`
`,(0,n.jsx)(r.li,{children:`Haja velocidade em responder a mudanças e exigências do ambiente de negócio.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`O baixo acoplamento assegura a autonomia dos serviços de duas formas:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Isolamento de Lógica e Estado: abstrai e oculta a lógica interna da interface, fazendo com que o serviço tenha controle total sobre seus recursos e processamentos se interferências externas de chamadas ou de outros componentes.`}),`
`,(0,n.jsx)(r.li,{children:`Evolução e Governança Independentes: já que o contrato de interfaces estabiliza a forma de acesso, cada parte do serviço pode ser mantido, atualizado ou reestruturado separadamente. Isso garante que diversas parte do negócio governem e desenvolvam seus serviços de forma independente.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`questão-02`,children:`Questão 02`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado-1`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Contrato de serviço: O que é um contrato de serviço (Service Contract) na arquitetura SOA e qual é sua importância para estabelecer a comunicação e a interoperabilidade entre diferentes serviços?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta-1`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`Nessa arquitetura, o Contrato de Serviço é o responsável por definir tudo que é necessário para um consumidor interagir com o serviço. É um acordo entre o provedor e o consumidor.`}),`
`,(0,n.jsx)(r.p,{children:`Em um Contrato de Serviço, são definidos os elementos:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Interface: operações disponíveis, estrutura das mensagens trocadas, protocolos de transporte, localização de serviço.`}),`
`,(0,n.jsx)(r.li,{children:`Padronização: através de especificações e tecnologias formais, como WSDL (Web Service Description Language) e XML Schemas, descreve formalmente a interface e a estrutura dos dados.`}),`
`,(0,n.jsx)(r.li,{children:`Regras: detalha os requisitos de sequenciamento das chamadas, o tratamento de exceções e a documentação semântica das operações.`}),`
`,(0,n.jsx)(r.li,{children:`Políticas e SLAs: pode incluir acordos de nível de serviço (Service Level Agreements - SLA), requisitos de segurança e obrigações legais.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Ele é importante para a Comunicação e interoperabilidade graças a:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Abstração e Encapsulamento: expõe apenas a interface pública do serviço, mantendo a implementação e o armazenamento de dados oculta e encapsulada. Com isso, os consumidores não dependem de detalhes.`}),`
`,(0,n.jsx)(r.li,{children:`Interoperabilidade entre Plataformas Heterogêneas: faz com que sistemas desenvolvidos de diferentes formas, linguagens ou ambientes possam trocar mensagens de forma transparente pela rede.`}),`
`,(0,n.jsx)(r.li,{children:`Baixo Acoplamento e Reuso: o contrato formal compartilhado garante o baixo acoplamento entre os programas, fazendo com que possam ser reusados e alterados em sua lógica interna sem impactar os consumidores.`}),`
`,(0,n.jsx)(r.li,{children:`Publicidade, Descoberta e Governança: os contratos são guardados em repositórios de serviço (como o UDDI), permitindo que os consumidores localizem (find), se associem (bind), e invoquem o serviço (invoke). O registro centralizado de contratos viabiliza a governança ao longo de todo o ciclo de vida do SOA.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`questão-03`,children:`Questão 03`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado-2`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Autonomia de serviço: Explique o princípio da autonomia de serviços segundo Thomas Erl. Como esse princípio influencia a capacidade de um serviço controlar seu próprio ambiente de execução e seus recursos?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta-2`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`O conceito de Princípio de Autonomia de Serviço, descrito por Thomas Erl, é um dos pilares fundamentais para assegurar que cada serviço opere independentemente e de forma auto-suficiente. Ele trás alguns pontos:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Independência de Estado: um serviço autônomo é construído para operar independentemente do estado de outros, não sendo necessário que outros serviços mantenham dados ou estados anteriores ativos para operações.`}),`
`,(0,n.jsx)(r.li,{children:`Limites Bem Definidos: o serviço possui barreiras e limites bem estabelecidos, deixando exposta somente a interface pública e ocultando todos os dados e formas de implementação.`}),`
`,(0,n.jsx)(r.li,{children:`Encapsulamento de Lógica: todas as lógicas de negócio necessárias para a execução ficam encapsuladas dentro do próprio serviço, baseando-se em contratos compartilhados no lugar de código compartilhado.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`O Princípio de Autonomia impacta diretamente como o serviço irá gerenciar seu ambiente de execução e seus recursos:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Gestão e Liberação de Recursos: para preservar sua autonomia e seu desempenho, os serviços são projetados para não alocar recursos por longos períodos. Isso implica no consumo e na liberação rápida de conexões, memória e threads de processamento, impedindo que o serviço fique preso aguardando outros componentes.`}),`
`,(0,n.jsx)(r.li,{children:`Isolamento do Ambiente de Execução: os contratos garantem o isolamento do ambiente que o serviço está sendo executado não seja diretamente afetado por falhas, alterações ou variações, seja de consumidores ou de provedores.`}),`
`,(0,n.jsx)(r.li,{children:`Autonomia de Governança e Operações: garante que cada parte do serviço se mantenha, administre ou escale os recursos ou o ambiente de execução de forma independente.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`questão-04`,children:`Questão 04`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado-3`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Reutilização de serviços: Por que a reutilização é considerada um dos princípios fundamentais da arquitetura SOA? Como a aplicação desse princípio pode reduzir custos e evitar redundâncias no desenvolvimento de sistemas?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta-3`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`A reutilização é considerada um dos princípios fundamentais da SOA porque, uma das premissas dessa arquitetura é disponibilizar as funcionalidades (funcionalidades -> serviços -> componentes) reutilizáveis. Com isso, é promovida a flexibilidade e agilidade para que o serviço se adapte a mudanças no mercado.`}),`
`,(0,n.jsx)(r.p,{children:`Com a aplicação desse princípio, ocorrerá a eliminação de boa parte da redundância de código, já que o reuso centraliza a lógica de negócio em serviços comuns. A quantidade de conexões necessárias também serão reduzidas, já que em outras arquiteturas a falta de padronização leva à "arquitetura acidental", onde sistemas se conectam de forma ponto-a-ponto, criando dezenas de interfaces redundantes e difíceis de manter.`}),`
`,(0,n.jsx)(r.p,{children:`Ocorrerá também a redução de custo operacionais e de desenvolvimento, já que a reutilização evita refazer soluções já existentes e por consequência reduz custos com licenciamento, consultoria, desenvolvimento e manutenção.`}),`
`,(0,n.jsx)(r.p,{children:`Com a padronização e governança, os repositórios centrais de serviço registram os metadados e contratos dos serviços reutilizáveis, garantindo governança, evitando a criação de serviços duplicados por diferentes unidades de negócio e facilitando a descoberta e subscrição das capacidades disponíveis.`}),`
`,(0,n.jsx)(r.h2,{id:`questão-05`,children:`Questão 05`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado-4`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Quais são os principais tipos de webservices encontrados no mercado? Apresente e explique quais os principais protocolos que eles adotam.`}),`
`,(0,n.jsx)(r.h3,{id:`resposta-4`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`Os Web-Services são conjuntos de mecanismos padrão de troca de mensagens na internet ou redes corporativas, usados para conectar aplicações em plataformas heterogêneas.`}),`
`,(0,n.jsx)(r.p,{children:`Os principais tipos encontrados no mercado são:`}),`
`,(0,n.jsx)(r.p,{children:`SOAP (Simple Object Access Protocol / Web Services Baseados em Padrões), que tem uma abordagem estruturada e altamente padronizada, focada em contatos formais e rígidos de interface. É usado principalmente em ambientes corporativos e integrações B2B que exigem segurança avançada, transações e conformidade estrita de esquema.`}),`
`,(0,n.jsx)(r.p,{children:`REST / RESTful Web Services, que possui um estilo arquitetural focado na manipulação direta de recursos através de identificadores e do protocolo de comunicação web. Oferece menor overhead e maior leveza em relação ao SOAP, sendo amplamente adotado em aplicações web modernas e dispositivos móveis.`}),`
`,(0,n.jsx)(r.p,{children:`RPC (Remote Procedure Call / XML-RPC / JSON-RPC / gRPC), que tem uma abordagem focada na invocação direta de procedimentos e funções remotas como se fossem locais. Otimizado para comunicação direta de alto desempenho entre sistemas distribuídos.`}),`
`,(0,n.jsx)(r.p,{children:`Os principais protocolos e padrões utilizados adotados por eles são:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`Protocolos de Transporte e Comunicação:`}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`HTTP / HTTPS: Protocolo base da Web utilizado para o transporte de mensagens tanto em arquiteturas REST quanto SOAP.`}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`TCP/IP: Camada de rede subjacente que garante o suporte ao acesso remoto entre plataformas distintas.`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Outros transportes: JMS (Java Message Service), FTP e SMTP, frequentemente integrados via barramentos de serviços (ESB).`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`Formatos de Dados e Mensageria:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`XML ( Extensible Markup Language ): Padrão para estruturação e intercâmbio de dados em Web Services formais e mensagens SOAP.`}),`
`,(0,n.jsx)(r.li,{children:`JSON ( JavaScript Object Notation ): Formato leve de representação de dados, amplamente utilizado em serviços REST e RPC modernos.`}),`
`,(0,n.jsx)(r.li,{children:`SOAP: Protocolo e especificação do envelope da mensagem utilizada na troca de informações estruturadas.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`Contratos e Descoberta:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`WSDL ( Web Service Description Language ): Linguagem baseada em XML usada para definir formalmente o contrato do serviço, incluindo suas operações, mensagens esperadas, tipos de dados e localização.`}),`
`,(0,n.jsx)(r.li,{children:`UDDI ( Universal Description, Discovery and Integration ): Padrão de diretório utilizado para registrar, publicar e localizar contratos de Web Services na rede.`}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`questão-06`,children:`Questão 06`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado-5`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Considerando as modernas técnicas de comunicação entre serviços cite pelo menos duas tecnologias modernas e como elas diferem dos tradicionais webservices e quais suas vantagens em relação a eles.`}),`
`,(0,n.jsx)(r.h3,{id:`resposta-5`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`No cenário moderno de arquitetura de software e microserviços, duas das principais tecnologias que evoluíram em relação a esses webservices tradicionais são o gRPC e o GraphQL:`}),`
`,(0,n.jsx)(r.p,{children:`Sobre o gRPC (Google Remote Procedure Call):`}),`
`,(0,n.jsx)(r.p,{children:`Enquanto os webservices tradicionais utilizam XML como formato de mensagem e o protocolo HTTP/1.1, o gRPC adota o HTTP/2 como transporte e o Protocol Buffers (Protobuf) como linguagem de definição de interface e formato de serialização binária.`}),`
`,(0,n.jsx)(r.p,{children:`As vantagens atribuídas a ele são:`}),`
`,(0,n.jsx)(r.p,{children:`Alto Desempenho e Latência Reduzida: A serialização binária do Protobuf gera payloads significativamente menores e mais rápidos de processar do que documentos XML.`}),`
`,(0,n.jsx)(r.p,{children:`Comunicação Multidirecional e Streaming: O uso do HTTP/2 permite multiplexação de requisições sobre a mesma conexão TCP e suporta streaming de dados bidirecional (cliente e servidor), superando as limitações do modelo puramente síncrono request/reply.`}),`
`,(0,n.jsx)(r.p,{children:`Contratos Fortemente Tipados: Mantém a garantia de contratos bem definidos (similar ao WSDL), mas com geração de código automatizada e leve para diversas linguagens.`}),`
`,(0,n.jsx)(r.p,{children:`Sobre o GraphQL:`}),`
`,(0,n.jsx)(r.p,{children:`Nos webservices tradicionais, as operações e estruturas de dados retornadas são rigidamente predefinidas pela interface do provedor do serviço. O GraphQL inverte essa dinâmica: disponibiliza um endpoint único em que o consumidor declara exatamente a estrutura dos dados de que necessita.`}),`
`,(0,n.jsx)(r.p,{children:`As vantagens atribuídas a ele são:`}),`
`,(0,n.jsx)(r.p,{children:`Eliminação de Over-fetching e Under-fetching: O cliente solicita e recebe apenas os campos necessários em formato JSON, evitando a transferência desnecessária de grandes blocos de dados típicos dos envelopes XML.`}),`
`,(0,n.jsx)(r.p,{children:`Agregação em Requisição Única: Permite buscar dados de múltiplas fontes ou entidades relacionadas em uma única chamada à API, eliminando a necessidade de encadear múltiplas invocações síncronas.`}),`
`,(0,n.jsx)(r.p,{children:`Evolução Flexível do Esquema: Permite adicionar novos campos e tipos sem quebrar clientes existentes, facilitando a governança e o versionamento da API.`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};