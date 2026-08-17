import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`arquitetura-de-um-sistema-operacional`,children:`Arquitetura de um Sistema Operacional`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Conceitos de Hardware - Parte 05`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Um Sistema Operacional `,(0,n.jsx)(r.strong,{children:`não`}),` é um bloco único e fechado de software executando sobre o hardware. É composto de diversos componentes complementares, como:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Núcleo:`}),` gerencia os recursos do hardware usados pelas aplicações. Implementa as principais abstrações utilizadas pelos aplicativos.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Drivers:`}),` módulos de código específicos para acessar os dispositivos físicos. Muitas vezes é construído pelo próprio fabricante do hardware e fornecido em forma compilada para ser acoplado ao SO.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Código de inicialização:`}),` executa tarefas complexas, como reconhecer os dispositivos instalados, testá-los e configurá-los adequadamente para seu uso posterior. `,(0,n.jsx)(r.strong,{children:`Carrega o núcleo do SO em memória e inicia sua execução.`})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Programas utilitários:`}),` são programas que facilitam o uso do SO, fornecendo funcionalidades complementares ao núcleo. Ex.: Ferramentas para compactação de dados, formatação e limpeza de discos, gerenciadores de download, gerenciadores de segurança, etc.`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`partes`,children:`Partes`}),`
`,(0,n.jsx)(r.p,{children:`Embora a definição de níveis de privilégio imponha uma estrutura mínima a um Sistema Operacional, as várias partes que compõem o sistema podem ser organizadas de diversas formas, separando suas funcionalidades e modularizando seu projeto.`}),`
`,(0,n.jsx)(r.p,{children:`Algumas classificações para a organização e arquitetura de S.O.’s:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Sistemas monolíticos`}),`
`,(0,n.jsx)(r.li,{children:`Sistemas em camadas`}),`
`,(0,n.jsx)(r.li,{children:`Sistemas micro-núcleo (ou μ-kernel)`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`sistemas-monolíticos`,children:`Sistemas Monolíticos`}),`
`,(0,n.jsx)(r.p,{children:`Todos os componentes do núcleo operam em modo núcleo e se inter-relacionam conforme suas necessidades, sem restrições de acesso entre si.`}),`
`,(0,n.jsx)(r.p,{children:`Qualquer componente do núcleo pode acessar diretamente os demais componentes, toda a memória e até mesmo os dispositivos periféricos.`}),`
`,(0,n.jsx)(r.h3,{id:`vantagens`,children:`Vantagens`}),`
`,(0,n.jsx)(r.p,{children:`Os sistemas possuem um bom desempenho e se tornam bastante compactos (tamanhos de código reduzidos).`}),`
`,(0,n.jsx)(r.h3,{id:`desvantagens`,children:`Desvantagens`}),`
`,(0,n.jsx)(r.p,{children:`Menos robustos, pois um bug em um componente do núcleo pode levar todo o sistema a um colapso; Dificuldade de desenvolvimento, pois não é tão claro o papel de cada componente do núcleo.`}),`
`,(0,n.jsx)(r.h3,{id:`exemplos`,children:`Exemplos`}),`
`,(0,n.jsx)(r.p,{children:`UNIX antigos e MS-DOS. Hoje, apenas SOs embarcados. O núcleo do Linux nasceu monolítico, mas vem sendo estruturado e modularizado desde a versão 2.0.`}),`
`,(0,n.jsx)(r.h2,{id:`sistema-em-camadas`,children:`Sistema em camadas`}),`
`,(0,n.jsx)(r.p,{children:`Uma forma mais elegante de estruturar um sistema operacional. Faz uso da noção de camadas, onde:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`A camada mais baixa realiza a interface com o hardware;`}),`
`,(0,n.jsx)(r.li,{children:`As camadas intermediárias proveem níveis de abstração e gerência cada vez mais sofisticados;`}),`
`,(0,n.jsx)(r.li,{children:`A camada superior define a interface do núcleo para as aplicações.`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`vantagens-1`,children:`Vantagens`}),`
`,(0,n.jsx)(r.p,{children:`A principal vantagem da abordagem em camadas é a simplicidade de construção e depuração:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`As camadas são selecionadas de modo que cada uma use funções (operações) e serviços somente de camadas de nível mais baixo;`}),`
`,(0,n.jsx)(r.li,{children:`Assim, a primeira camada pode ser depurada sem nenhuma preocupação com o resto do sistema porque, por definição, ela usa somente o hardware básico;`}),`
`,(0,n.jsx)(r.li,{children:`Uma vez que a primeira camada seja depurada, seu funcionamento correto pode ser assumido enquanto a segunda camada é depurada, e assim por diante;`}),`
`,(0,n.jsx)(r.li,{children:`Dessa forma, se é encontrado um erro durante a depuração de uma camada específica, ele deve estar nessa camada.`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`desvantagens-1`,children:`Desvantagens`}),`
`,(0,n.jsx)(r.p,{children:`Esta abordagem fez sucesso no domínio das redes de computadores (OSI). No entanto, no contexto dos SOs, alguns inconvenientes limitam sua aceitação:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Perda de desempenho:`}),` o empilhamento de várias camadas faz com que cada pedido de uma aplicação demore mais tempo para chegar até o periférico ou recurso a ser acessado.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Definição das camadas:`}),` não é óbvio como dividir as funcionalidade de um núcleo de SO em camadas horizontais de abstração crescente. As funcionalidades são interdependentes, apesar de tratar de recursos distintos.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`atualmente-e-exemplo`,children:`Atualmente e Exemplo`}),`
`,(0,n.jsx)(r.p,{children:`Hoje em dia, a estruturação em camadas é apenas parcialmente adotada.`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Muitos sistemas implementam uma camada inferior de abstração do hardware. No Windows NT e seus sucessores, é denominada camada HAL (Hardware Abstraction Layer).`}),`
`,(0,n.jsx)(r.li,{children:`Organizam em camadas alguns subsistemas como a gerência de arquivos e o suporte de rede (seguindo o modelo OSI).`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de SOs fortemente estruturados em camadas: IBM OS/2 e MULTICS.`}),`
`,(0,n.jsx)(r.h2,{id:`sistema-micronúcleo`,children:`Sistema Micronúcleo`}),`
`,(0,n.jsx)(r.p,{children:`Consiste em retirar do núcleo todo o código de alto nível (políticas de gerência de recursos), deixando no núcleo somente o código de baixo nível necessário para interagir com o hardware e criar as abstrações fundamentais (noção de tarefa, por exemplo).`}),`
`,(0,n.jsx)(r.p,{children:`O restante do código seria transferido para programas separados no espaço de usuário, denominados serviços. Por fazer o núcleo de sistema ficar menor, essa abordagem foi denominada micronúcleo.`}),`
`,(0,n.jsx)(r.p,{children:`Um micronúcleo normalmente implementa apenas a noção de tarefa, de espaços de memória protegidos e de comunicação entre tarefas. Todos os aspectos de alto nível são implementados fora do núcleo, em processos que se comunicam usando as primitivas do núcleo.`}),`
`,(0,n.jsx)(r.h3,{id:`vantagens-2`,children:`Vantagens`}),`
`,(0,n.jsx)(r.p,{children:`As principais vantagens dos sistemas micronúcleo são:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Robustez:`}),` caso um subsistema tenha problemas, os mecanismos de proteção de memória e níveis de privilégio irão confiná-lo, impedindo que a instabilidade se alastre ao restante do sistema.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Flexibilidade:`}),` é possível customizar o sistema operacional, iniciando somente os componentes necessários ou escolhendo os componentes mais adequados às aplicações que serão executadas.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`desvantagens-2`,children:`Desvantagens`}),`
`,(0,n.jsx)(r.p,{children:`A principal desvantagem dessa arquitetura é o custo associado às trocas de mensagens entre componentes que pode ser bastante elevado, o que prejudica seu desempenho e diminui a aceitação desta abordagem.`}),`
`,(0,n.jsx)(r.p,{children:`O QNX é um dos poucos exemplos de micronúcleo amplamente utilizado, sobretudo em sistemas embarcados e de tempo-real.`}),`
`,(0,n.jsx)(r.h2,{id:`sistemas-híbridos`,children:`Sistemas Híbridos`}),`
`,(0,n.jsx)(r.p,{children:`A arquitetura de micronúcleo não teve o sucesso esperado devido ao baixo desempenho. Assim, uma solução encontrada para esse problema consiste em trazer de volta ao núcleo os componentes mais críticos, para obter melhor desempenho.`}),`
`,(0,n.jsx)(r.p,{children:`Essa abordagem intermediária entre o núcleo monolítico e micronúcleo é denominada núcleo híbrido, podendo também ter influência da arquitetura em camadas.`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};