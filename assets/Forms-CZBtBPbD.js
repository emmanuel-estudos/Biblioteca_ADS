import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`formulário-02`,children:`Formulário 02`}),`
`,(0,n.jsx)(r.h2,{id:`questão-01`,children:`Questão 01`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Qual é a diferença fundamental entre a organização lógica (arquitetura de software) e a realização física (arquitetura de sistema) de um sistema distribuído, e de que forma os estilos arquitetônicos em camadas, baseados em objetos, centrados em dados e baseados em eventos estruturam as interações entre os componentes?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`As diferenças entre a Organização Lógica e Realização Física se dão porque:`}),`
`,(0,n.jsx)(r.p,{children:`Organização Lógica (Arquitetura de Software): Refere-se à estrutura conceitual e modular dos componentes de software que constituem o sistema. Ela estabelece como o software é dividido em módulos, de que modo esses componentes interagem entre si através de conectores (como chamadas de procedimentos remotos ou troca de mensagens) e como são organizados para obter transparência de distribuição.`}),`
`,(0,n.jsx)(r.p,{children:`Realização Física (Arquitetura de Sistema): Trata do posicionamento e da alocação real desses componentes de software em máquinas e nós físicos interconectados pela rede. Ela define onde cada parte da aplicação executa na prática, determinando arranjos como modelos centralizados (cliente-servidor multidivididos), descentralizados (peer-to-peer) ou híbridos.`}),`
`,(0,n.jsx)(r.p,{children:`Os estilos arquitetônicos estabelecem as regras de comunicação e a forma como os componentes se conectam:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Arquiteturas em Camadas: na Estruturação da Interação, os componentes são organizados em uma hierarquia vertical. Um componente localizado na camada L(i) tem permissão de chamar apenas os componentes da camada imediatamente subjacente L(i-1). As requisições de serviço descem pela hierarquia de camadas e os resultados fluem no sentido inverso (para cima).`}),`
`,(0,n.jsx)(r.li,{children:`Arquiteturas Baseadas em Objetos: na Estruturação da Interação, cada objeto atua como um componente modular com interfaces bem definidas. As interações ocorrem por meio de chamadas de procedimento remoto (RPC) ou invocações de métodos, em que um objeto solicita diretamente operações fornecidas pela interface de outro objeto.`}),`
`,(0,n.jsx)(r.li,{children:`Arquiteturas Centradas em Dados: na Estruturação da Interação, os processos e componentes comunicam-se de forma indireta ao redor de um repositório central ou compartilhado de dados (como sistemas de arquivos distribuídos ou espaços de dados). Essa abordagem promove o desacoplamento temporal, uma vez que os processos não precisam estar ativos simultaneamente para trocar dados.`}),`
`,(0,n.jsx)(r.li,{children:`Arquiteturas Baseadas em Eventos: na Estruturação da Interação, os componentes interagem por meio da publicação e propagação de eventos, comumente via sistemas de publicação/subscrição (publish/subscribe) gerenciados pelo middleware. Esse estilo garante o desacoplamento espacial (ou referencial), pois os processos que geram eventos não precisam conhecer a identidade nem o endereço explícito dos processos receptores.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`questão-02`,children:`Questão 02`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado-1`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`De que forma a separação lógica das aplicações em três níveis (interface de usuário, processamento e dados) orienta a distribuição física no modelo cliente-servidor, e quais são os prós e contras da adoção de thin clients (clientes magros) em comparação a fat clients (clientes gordos)?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta-1`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`A separação lógica das aplicações em três níveis fornece o modelo para definir como os componentes de software são distribuídos fisicamente pelas máquinas em uma arquitetura cliente-servidor.`}),`
`,(0,n.jsx)(r.p,{children:`A organização em três níveis lógicos orienta a distribuição física (também chamada de distribuição vertical ou arquiteturas multidivididas) ao estabelecer em quais nós da rede cada camada de software deve ser executada:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Nível de Interface de Usuário: Trata da interação direta com o usuário final e do gerenciamento da exibição.`}),`
`,(0,n.jsx)(r.li,{children:`Nível de Processamento: Contém a lógica central da aplicação e as regras de negócio.`}),`
`,(0,n.jsx)(r.li,{children:`Nível de Dados: Gerencia o armazenamento persistente, a manipulação e a consistência dos dados (geralmente por meio de um sistema de banco de dados).`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`A partir dessa divisão lógica, a arquitetura física de sistema pode ser configurada de diferentes formas:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Arquitetura de Duas Divisões (2-tier): Divide o sistema entre duas máquinas. A máquina cliente pode executar apenas a interface (ou a interface e parte do processamento), enquanto a máquina servidora executa os dados e o restante do processamento.`}),`
`,(0,n.jsx)(r.li,{children:`Arquitetura de Três Divisões (3-tier): Aloca cada nível em máquinas físicas separadas — uma máquina para o cliente (interface de usuário), um servidor de aplicação intermediário (nível de processamento, como um servidor web ou monitor de transações) e um servidor de banco de dados (nível de dados). Essa abordagem simplifica a gestão do sistema ao atribuir funções especializadas a cada nó físico.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`A decisão de onde posicionar o corte entre o software que roda no cliente e o que roda no servidor determina se o cliente é classificado como "magro" ou "gordo".`}),`
`,(0,n.jsx)(r.p,{children:`Em um modelo de cliente magro, a máquina cliente lida apenas com a interface de usuário (ou realiza um processamento mínimo local, como validação de formulários), deixando a maior parte do processamento e o armazenamento de dados para o servidor.`}),`
`,(0,n.jsx)(r.p,{children:`Seus prós são:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Facilidade de gerenciamento de sistema: Muito mais fáceis de administrar e atualizar, pois a lógica da aplicação está centralizada no servidor.`}),`
`,(0,n.jsx)(r.li,{children:`Menor propensão a erros: O software mantido na máquina do cliente é simples e enxuto.`}),`
`,(0,n.jsx)(r.li,{children:`Independência de plataforma: Exige menos capacidade de hardware e reduz a dependência de recursos específicos do sistema operacional local.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Seus contras:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Interfaces menos sofisticadas: Podem oferecer uma experiência de usuário visualmente mais limitada.`}),`
`,(0,n.jsx)(r.li,{children:`Dependência de rede e desempenho percebido: Como a maioria das ações exige comunicação com o servidor, a latência de rede pode afetar o desempenho percebido pelo cliente.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Em um modelo de cliente gordo, a máquina do usuário final executa grande parte do nível de processamento (e às vezes mantém dados ou caches locais), utilizando o servidor primariamente para operações de banco de dados.`}),`
`,(0,n.jsx)(r.p,{children:`Seus prós:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Interfaces ricas e processamento local: Permite desenvolver aplicações com gráficos avançados e resposta imediata às ações do usuário, processando dados localmente sem depender da rede a todo momento.`}),`
`,(0,n.jsx)(r.li,{children:`Descentralização da carga: Reduz o esforço de processamento exigido diretamente do servidor central.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Seus contras:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Gerenciamento complexo e custoso: Tornam-se difíceis de manter e atualizar em ambientes com muitos computadores.`}),`
`,(0,n.jsx)(r.li,{children:`Maior propensão a erros e acoplamento à plataforma: O software do cliente torna-se volumoso, mais sujeito a falhas de execução e altamente dependente do sistema operacional e das especificações do hardware local.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`questão-03`,children:`Questão 03`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado-2`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`De que forma os interceptadores permitem adaptar o comportamento do middleware de forma transparente para a aplicação, e como os laços de realimentação de controle viabilizam o autogerenciamento (computação autonômica) em sistemas distribuídos?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta-2`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`Os interceptadores e os laços de realimentação de controle são mecanismos chave para proporcionar flexibilidade e autogerenciamento em plataformas de middleware e sistemas distribuídos.`}),`
`,(0,n.jsx)(r.p,{children:`Um interceptador é um constructo de software projetado para interromper o fluxo de controle usual do sistema e permitir a execução de código adicional específico de aplicação ou de infraestrutura.`}),`
`,(0,n.jsx)(r.p,{children:`Os interceptadores ocultam a complexidade e adaptam o comportamento do middleware de forma totalmente transparente para a aplicação por meio dos seguintes princípios:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Injeção de comportamento sem alteração de interface: A aplicação cliente continua interagindo com uma interface local idêntica à do objeto remoto, sem precisar ser modificada ou estar ciente das adaptações feitas pelo middleware.`}),`
`,(0,n.jsx)(r.li,{children:`Interceptadores de nível de requisição: Atuam no fluxo da chamada de métodos. Por exemplo, quando um objeto remoto é replicado, o interceptador captura a chamada genérica emitida pelo cliente e a dispara para cada uma das réplicas. A aplicação cliente não precisa saber que o objeto foi replicado, nem o middleware genérico necessita de código interno específico para tratar a replicação.`}),`
`,(0,n.jsx)(r.li,{children:`Interceptadores de nível de mensagem: Atuam logo acima do sistema operacional no envio de mensagens. Eles podem, por exemplo, fragmentar transparentemente um grande volume de dados antes da transmissão pela rede e remontá-lo no destino para otimizar o desempenho ou a confiabilidade, sem que a aplicação ou as camadas superiores percebam a fragmentação.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Essa abordagem permite separar políticas e mecanismos, inserindo funcionalidades como segurança, replicação e monitoramento sem inflar ou modificar o código da aplicação.`}),`
`,(0,n.jsx)(r.p,{children:`A computação autonômica (ou sistemas autogerenciadores / sistemas \\auto-\\) visa permitir que o sistema se adapte automaticamente a mudanças no ambiente (como variações de carga, falhas e latência de rede) sem a necessidade de intervenção humana direta.`}),`
`,(0,n.jsx)(r.p,{children:`Essa capacidade é viabilizada pela estruturação do sistema em um ou mais laços de realimentação de controle. O laço opera de forma contínua por meio de três componentes essenciais:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Componente de monitoração / estimativa de medição: Mede e monitora continuamente o estado atual e o comportamento do sistema e do ambiente (por exemplo, coletando métricas de latência, carga de CPU ou taxas de erro).`}),`
`,(0,n.jsx)(r.li,{children:`Componente de análise: Recebe os dados medidos e os compara com valores de referência ou metas desejadas para o sistema. Ele contém os algoritmos e políticas que decidem se alguma ação corretiva ou ajuste precisa ser realizado.`}),`
`,(0,n.jsx)(r.li,{children:`Mecanismos de controle e ajuste: Executa diretamente as ações decididas pelo componente de análise para modificar o comportamento do sistema. Exemplos de ações incluem a adição/remoção de réplicas, alteração de prioridades de escalonamento, redirecionamento de requisições ou movimentação de dados.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Ao aplicar os ajustes, o estado do sistema se altera e volta a ser monitorado pelo componente de medição, fechando o ciclo de realimentação e garantindo que o sistema se auto-otimize ou se auto-recupere dinamicamente ao longo do tempo.`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};