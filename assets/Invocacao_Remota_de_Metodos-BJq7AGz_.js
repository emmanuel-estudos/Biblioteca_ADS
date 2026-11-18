import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t(),r=Object.assign({"../assets/imagens/p6/sd-sistemas_distribuidos/atividades/atividade04/01_Protocolo_Sockets_(TCP_e_UDP).png":`/Biblioteca_ADS/assets/01_Protocolo_Sockets_(TCP_e_UDP)-Bm0bglee.png`,"../assets/imagens/p6/sd-sistemas_distribuidos/atividades/atividade04/02_Serviços_de_Comunicação_de_Middleware.png":`/Biblioteca_ADS/assets/02_Servi%C3%A7os_de_Comunica%C3%A7%C3%A3o_de_Middleware-BkjB5XRo.png`,"../assets/imagens/p6/sd-sistemas_distribuidos/atividades/atividade04/03_Camada_de_Middleware.png":`/Biblioteca_ADS/assets/03_Camada_de_Middleware-C0rhbwqo.png`,"../assets/imagens/p6/sd-sistemas_distribuidos/atividades/atividade04/04_Protocolo_de_Requisição_e_Resposta.png":`/Biblioteca_ADS/assets/04_Protocolo_de_Requisi%C3%A7%C3%A3o_e_Resposta-DauzmxUU.png`,"../assets/imagens/p6/sd-sistemas_distribuidos/atividades/atividade04/05_Resquisição_e_Resposta_(Mensagem).png":`/Biblioteca_ADS/assets/05_Resquisi%C3%A7%C3%A3o_e_Resposta_(Mensagem)-cnNPK4WS.png`}),i=(e=>t=>{let n=`${e}/${t}`.replace(/\\/g,`/`),i=Object.keys(r).find(e=>e.replace(/\\/g,`/`).endsWith(n));if(!i){console.warn(`[Aviso] Imagem não encontrada para o caminho: ${n}`);return}return r[i]})(`p6/sd-sistemas_distribuidos/atividades/atividade04`);function a(t){let r={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e(),...t.components},{Imagem:a}=r;return a||s(`Imagem`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`invocação-remota-de-métodos`,children:`Invocação Remota de Métodos`}),`
`,(0,n.jsx)(r.h2,{id:`protocolos`,children:`Protocolos`}),`
`,(0,n.jsx)(r.p,{children:`Representa um conjunto de regras para a execução de uma determinada operação.`}),`
`,(0,n.jsx)(r.p,{children:`No caso da computação, pode englobar:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Algoritmos`}),`
`,(0,n.jsx)(r.li,{children:`Formatação de Dados`}),`
`,(0,n.jsx)(r.li,{children:`Empacotamento e Desempacotamento de Dados`}),`
`,(0,n.jsx)(r.li,{children:`Implementação no hardware e/ou no software, de forma combinada`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Propriedades comuns:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`detecção da conexão física subjacente ou a existência de um nó`}),`
`,(0,n.jsx)(r.li,{children:`handshaking (estabelecimento da ligação)`}),`
`,(0,n.jsx)(r.li,{children:`negociação de várias características de uma conexão`}),`
`,(0,n.jsx)(r.li,{children:`como iniciar e finalizar uma mensagem`}),`
`,(0,n.jsx)(r.li,{children:`como formatar uma mensagem`}),`
`,(0,n.jsx)(r.li,{children:`o que fazer com a mensagem comprometida ou mal formatada`}),`
`,(0,n.jsx)(r.li,{children:`como detectar perda inesperada de conexão e o que fazer em seguida`}),`
`,(0,n.jsx)(r.li,{children:`término de sessão ou conexão`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Funções comuns:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Endereçamento: especificação clara do ponto de destino da mensagem`}),`
`,(0,n.jsx)(r.li,{children:`Numeração e Sequência: individualização de cada mensagem, através do número sequencial`}),`
`,(0,n.jsx)(r.li,{children:`Estabelecimento da Conexão: estabelecimento de um canal lógico fechado entre fonte e destino`}),`
`,(0,n.jsx)(r.li,{children:`Confirmação de Recepção: confirmação do destinatário, com ou sem erro, após cada segmento de mensagem`}),`
`,(0,n.jsx)(r.li,{children:`Controle de Erro: detecção e correção de erros`}),`
`,(0,n.jsx)(r.li,{children:`Retransmissão: repetição da mensagem a cada recepção de mensagem`}),`
`,(0,n.jsx)(r.li,{children:`Conversão de Código: adequação do código às características do destinatário`}),`
`,(0,n.jsx)(r.li,{children:`Controle de Fluxo: manutenção de fluxos compatíveis com os recursos disponíveis`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`protocolo-sockets-tcp-e-udp`,children:`Protocolo Sockets (TCP e UDP)`}),`
`,(0,n.jsx)(r.p,{children:`Primitivas: bind - listen - accept - connect - send - receive - close`}),`
`,(0,n.jsx)(a,{src:i(`01_Protocolo_Sockets_(TCP_e_UDP).png`),alt:`Diagrama de linha do tempo do protocolo TCP ilustrando a interação por sockets entre duas aplicações (Host 1 e Host 2). A imagem exibe a sequência cronológica de chamadas de API de ambos os lados — incluindo SOCKET, BIND, LISTEN, ACCEPT, CONNECT, troca de ACKs, escrita e recepção de dados (WRITE/RECEIVE) — até o fechamento da conexão (CLOSE).`,legenda:`Protocolo Sockets (TCP e UDP)`}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`protocolo-de-socket`,children:`Protocolo de Socket`}),`
`,(0,n.jsx)(r.p,{children:`Socket é um protocolo:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`utilizado para a comunicação entre processos através da rede`}),`
`,(0,n.jsx)(r.li,{children:`que utiliza primitivas sobre o protocolo de transporte`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Possui pouca transparência quando o assunto é comunicação.`}),`
`,(0,n.jsx)(r.p,{children:`Para aplicações estruturadas e orientadas a objetos, faz-se necessário uma nova camada de protocolo:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`protocolos de Middleware: RCP, RMI, IIOP`}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`protocolo-de-middleware`,children:`Protocolo de Middleware`}),`
`,(0,n.jsxs)(r.p,{children:[`"`,(0,n.jsx)(r.em,{children:`Não estão fortemente vinculados a nenhuma aplicação específica; em vez disso, podem ser integrados a um sistema de middleware como um serviço geral.`}),`"`]}),`
`,(0,n.jsx)(r.h3,{id:`protocolos-de-autenticação-e-de-autorização`,children:`Protocolos de Autenticação e de Autorização`}),`
`,(0,n.jsx)(r.p,{children:`Os de Autorização concedem a usuários processos autenticado, permissão de acesso somente a recursos para os quais tenham autorização.`}),`
`,(0,n.jsx)(r.p,{children:`Tendem a ter uma natureza geral, independente da aplicação.`}),`
`,(0,n.jsx)(r.h3,{id:`protocolos-de-comportamento`,children:`Protocolos de Comportamento`}),`
`,(0,n.jsx)(r.p,{children:`Estabelecem que, em um grupo de processos, ou todos os processos executam determinada operação ou a operação não é executada.`}),`
`,(0,n.jsx)(r.p,{children:`Denominado de atomicidade, tem ampla aplicação em transações.`}),`
`,(0,n.jsx)(r.h3,{id:`protocolo-distribuído-de-bloqueio`,children:`Protocolo Distribuído de Bloqueio`}),`
`,(0,n.jsx)(r.p,{children:`Um recurso pode ser protegido contra acesso simultâneo por um conjunto de processos que são distribuídos por várias máquinas.`}),`
`,(0,n.jsx)(r.p,{children:`Os de comunicação de middleware suportam serviços de comunicação de alto nível.`}),`
`,(0,n.jsx)(r.h3,{id:`protocolos-de-comunicação-de-middleware`,children:`Protocolos de Comunicação de Middleware`}),`
`,(0,n.jsx)(r.p,{children:`Alguns dos protocolos de comunicação de middleware poderiam, com igual prioridade, pertencer a camada de transporte, por exemplo: serviços multicasting confiáveis que garantem escalabilidade.`}),`
`,(0,n.jsx)(r.p,{children:`Um sistema de middleware pode oferecer diferentes protocolos (adaptáveis), cada um, por sua vez, usando diferentes protocolos de transporte, mas oferecendo uma única interface.`}),`
`,(0,n.jsx)(r.p,{children:`Em comparação com o modelo OSI:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`As camadas de sessão e apresentação podem ser substituídas por uma camada única de middleware que contem protocolos independentes de aplicação.`}),`
`,(0,n.jsx)(r.li,{children:`Os serviços de transportes originais também podem ser oferecidos como um servi~ço de middleware, sem modificação, por exemplo: UDP como Serviço de Multicast`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`serviços-de-comunicação-de-middleware`,children:`Serviços de Comunicação de Middleware`}),`
`,(0,n.jsx)(a,{src:i(`02_Serviços_de_Comunicação_de_Middleware.png`),alt:`Diagrama de arquitetura em camadas ilustrando os serviços de comunicação de middleware entre dois nós. Cada lado exibe três camadas empilhadas verticalmente: Application (Aplicação), Middleware framework (Framework de middleware) e Network protocol (Protocolo de rede). Setas indicam o fluxo de comunicação que parte da camada inferior de protocolo de rede de um sistema e se estende até a camada de aplicação do outro.`,legenda:`Comunicação de Middleware`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Uma estrutura de middleware de comunicação fornece um ambiente que permite que duas aplicações criem uma conversa e troquem dados.`}),`
`,(0,n.jsx)(r.li,{children:`Normalmente, essa troca de dados envolverá o desencadeamento de uma ou mais transações de longo do caminho.`}),`
`,(0,n.jsxs)(r.li,{children:[`Serviços de comunicação de middleware podem incluir serviços de troca de mensagens comparáveis aos oferecidos pela camada de transporte, por exemplo:`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Princípio da Janela Deslizante do TCP comparável ao MOM - ambos garantem a entrega de mensagens.`}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`camada-de-middleware`,children:`Camada de Middleware`}),`
`,(0,n.jsx)(a,{src:i(`03_Camada_de_Middleware.png`),alt:`Diagrama de arquitetura em camadas representando a estrutura e a posição do middleware. A pilha exibe no topo a camada de 'Aplicativos, serviços', seguida pelas 'Camadas de middleware' — que englobam 'RMI e RPC' e 'Protocolo baseado em requisição-resposta empacotamento e representação de dados externa' —, tendo na base a camada de protocolos de transporte 'UDP e TCP'.`,legenda:`Camada de Middleware`}),`
`,(0,n.jsx)(r.h2,{id:`protocolo-de-middleware-1`,children:`Protocolo de Middleware`}),`
`,(0,n.jsx)(r.h3,{id:`requisição-resposta`,children:`Requisição-Resposta`}),`
`,(0,n.jsx)(r.p,{children:`Representam um padrão sobre a passagem de mensagens e suportam a troca bilateral de mensagens, como a encontrada no modelo cliente-servidor.`}),`
`,(0,n.jsx)(r.p,{children:`O protocolo descrito em Colouris é baseado em um trio de primitivas de comunicação:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`doOperation`}),`
`,(0,n.jsx)(r.li,{children:`getRequest`}),`
`,(0,n.jsx)(r.li,{children:`sendReply`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Protocolos baseados em chamadas de procedimentos ou invocação de métodos:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`RCP-Protocol: remote procedure call protocol`}),`
`,(0,n.jsx)(r.li,{children:`RMI-JRMP: java remote method protocol`}),`
`,(0,n.jsx)(r.li,{children:`XPC: OS X interprocess communication (???)`}),`
`,(0,n.jsx)(r.li,{children:`DCOM: distributed component object model protocol`}),`
`,(0,n.jsx)(r.li,{children:`ORB-IIOP: internet inter-object protocol`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`protocolo-de-requisição-e-resposta`,children:`Protocolo de Requisição e Resposta`}),`
`,(0,n.jsx)(a,{src:i(`04_Protocolo_de_Requisição_e_Resposta.png`),alt:"Diagrama ilustrando o fluxo de operações em um protocolo de requisição-resposta entre um lado Cliente e um lado Servidor. No lado do cliente, a função `doOperation` envia uma 'Mensagem de requisição' e aguarda (estado de espera). No lado do servidor, a mensagem é processada através de `getRequest`, operação `select` e operação `execute`, retornando em seguida uma 'Mensagem de resposta' via `sendReply` para que o cliente retome sua execução (continuação).",legenda:`Protocolo de Requisição e Resposta`}),`
`,(0,n.jsx)(r.p,{children:`Ele pode ser projetado para fornecer certas garantias de entrega.`}),`
`,(0,n.jsx)(r.p,{children:`Se forem usados datagramas UDP, as garantias de entrega deverão ser fornecidas pelo próprio protocolo de requisição-resposta.`}),`
`,(0,n.jsxs)(r.p,{children:[`As primitivas desde protocolo trabalham sobre as operações `,(0,n.jsx)(r.em,{children:`send`}),` e `,(0,n.jsx)(r.em,{children:`receive`}),` do Socket.`]}),`
`,(0,n.jsx)(r.h3,{id:`requisição-e-resposta-dooperation`,children:`Requisição e Resposta: doOperation()`}),`
`,(0,n.jsxs)(r.p,{children:[`É usado pelos clientes para `,(0,n.jsx)(r.strong,{children:`invocar/chamar operações remotas`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`Seus argumentos especificam:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`o servidor remoto`}),`
`,(0,n.jsx)(r.li,{children:`a operação a ser invocada`}),`
`,(0,n.jsx)(r.li,{children:`os argumentos da operação a ser invocada`}),`
`,(0,n.jsx)(r.li,{children:`todos os argumentos são empacotadas em um vetor de bytes`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Seu resultado é um vetor de bytes contendo a resposta.`}),`
`,(0,n.jsx)(r.p,{children:`É bloqueado até que o servidor execute a operação solicitada e transmita uma mensagem de resposta para ele.`}),`
`,(0,n.jsx)(r.p,{children:`Implementação em Java usando UDP:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`RemoteRef s`}),`: representa a referência para os servidores remotos.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`int operationId`}),`: representa a identidade da operação (melhor que o nome).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`byte[] arguments`}),`: representa uma sequência de valores que devem ser passados para a operação remota (observe que estes argumentos foram convertidos em vetor de bytes).`]}),`
`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`byte`}),`[] doOperation (RemoteRef s, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` operationId, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`byte`}),`[] arguments):
`]})}),`
`,(0,n.jsx)(r.p,{children:`Descrição: Envia uma mensagem de requisição para o servidor remoto e retorna a resposta. Os argumentos especificam o servidor remoto, a operação a ser invocada e os argumentos dessa operação.`}),`
`,(0,n.jsx)(r.h3,{id:`requisição-e-resposta-getrequest`,children:`Requisição e Resposta: getRequest()`}),`
`,(0,n.jsx)(r.p,{children:`É usado pelos servidores para obter requisição de operações do serviço.`}),`
`,(0,n.jsx)(r.p,{children:`Não possui argumentos.`}),`
`,(0,n.jsx)(r.p,{children:`É bloqueado até que o cliente requisite uma operação e esta seja executada e encaminhada a mensagem de resposta.`}),`
`,(0,n.jsx)(r.h4,{id:`implementação-em-java-usando-udp`,children:`Implementação em Java usando UDP`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`byte`}),`[] getRequest():
`]})}),`
`,(0,n.jsx)(r.p,{children:`Descrição: Lê uma requisição do cliente por meio da porta do servidor.`}),`
`,(0,n.jsx)(r.h3,{id:`requisição-e-resposta-sendreply`,children:`Requisição e Resposta: sendReply()`}),`
`,(0,n.jsxs)(r.p,{children:[`É usado pelo servido para `,(0,n.jsx)(r.strong,{children:`encaminhar a resposta da execução da operação do serviço`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`Seus argumentos especificam:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`a resposta no formato de um vetor de bytes.`}),`
`,(0,n.jsx)(r.li,{children:`o endereço e a porta do cliente (requisitor).`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Esta primitiva encerra o ciclo de uma requisição-resposta, desbloqueando `,(0,n.jsx)(r.code,{children:`doOperation()`}),`.`]}),`
`,(0,n.jsx)(r.h4,{id:`implementação-em-java-usando-udp-1`,children:`Implementação em Java usando UDP:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`int[] reply`}),`: representa a resposta no formato de um vetor de bytes.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`InetAddress clientHost`}),`: representa a localização do servidor.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`int clientPort`}),`: representa a porta do servidor.`]}),`
`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`sendReply`}),` `,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`(`,(0,n.jsx)(r.span,{className:`hljs-type`,children:`byte`}),`[] reply, InetAddress clientHost, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` clientPort)`]}),`
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`Descrição: Envia a mensagem de resposta `,(0,n.jsx)(r.em,{children:`reply`}),` para o cliente como seu endereço de internet e porta.`]}),`
`,(0,n.jsx)(r.h3,{id:`requisição-e-resposta-a-mensagem`,children:`Requisição e Resposta: a mensagem`}),`
`,(0,n.jsx)(a,{src:i(`05_Resquisição_e_Resposta_(Mensagem).png`),alt:`TEsquema estrutural detalhando os campos de uma mensagem de requisição e resposta. A tabela lista os atributos e seus respectivos tipos de dados: messageType (int, onde 0=Request e 1=Reply), requestId (int), remoteReference (RemoteRef), operationId (int ou operação) e arguments (// vetor de bytes).`,legenda:`Requisição e Resposta (Mensagem)`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Argumento`}),(0,n.jsx)(r.th,{children:`Tipo`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`messageType`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`int (0=Request, 1=Reply)`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`requestId`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`int`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`remoteReference`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`RemoreRef`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`OperationId`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`int`}),` ou operação`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`arguments`}),(0,n.jsx)(r.td,{children:`vetor de bytes`})]})]})]}),`
`,(0,n.jsx)(r.h2,{id:`atividade`,children:`Atividade`}),`
`,(0,n.jsx)(r.p,{children:`Implemente este protocolo usando os conhecimentos já adquiridos na disciplina. Pode usar a linguagem Java ou qualquer outra linguagem que possibilite o uso de Socket com Datagrama.`})]})}function o(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(a,{...t})}):a(t)}function s(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{o as default,i as getImg};