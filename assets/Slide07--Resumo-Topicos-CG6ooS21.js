import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`proteção-do-núcleo-do-so`,children:`Proteção do Núcleo do SO`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Conceitos de Hardware - Parte 04`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Um dos papeis do SO é gerenciar os recursos do hardware, fornecendo recursos para as aplicações conforme for necessário.`}),`
`,(0,n.jsx)(r.p,{children:`É papel do núcleo do SO é configurar e gerenciar periféricos.`}),`
`,(0,n.jsx)(r.p,{children:`Os utilitários e aplicativos, se tivessem acesso direto aos periféricos, poderiam desestabilizar o sistema inteiro e não seria possível implementar mecanismos de segurança e controle de acesso aos recursos.`}),`
`,(0,n.jsx)(r.p,{children:`Sendo assim, para assegurar a integridade do sistema, é essencial garantir que as aplicações não consigam acessar o hardware diretamente.`}),`
`,(0,n.jsx)(r.p,{children:`Para permitir diferenciar os privilégios dos softwares, as CPU’s modernas contam com níveis de privilégios de execução, que são controlados por flags especiais.`}),`
`,(0,n.jsx)(r.p,{children:`Os níveis básicos de privilégios são: Nível Núcleo e Nível Usuário.`}),`
`,(0,n.jsx)(r.h2,{id:`nível-núcleo`,children:`Nível Núcleo`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Também recebe o nome de: nível supervisor, sistema, monitor ou kernel space`}),`
`,(0,n.jsx)(r.li,{children:`Pode acessar todas as instruções, registradores, portas de entrada/saída e áreas da memória`}),`
`,(0,n.jsx)(r.li,{children:`Ao ser ligado, o processador entra em operação neste nível`}),`
`,(0,n.jsx)(r.li,{children:`O acesso de nível de núcleo é restrito ao kernel e aos drivers do sistema operacional, e é essencial para a operação do sistema`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`nível-usuário-userspace`,children:`Nível Usuário (UserSpace)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Um subconjunto das instruções, registradores e portas de entrada/saída ficam disponíveis.`}),`
`,(0,n.jsx)(r.li,{children:`Caso o código tente executar uma instrução proibida ou acessar algo que não deveria, é gerada uma exceção.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`chamadas-do-sistema`,children:`Chamadas do Sistema`}),`
`,(0,n.jsx)(r.p,{children:`O confinamento de cada aplicação em sua área de memória, imposto pelos mapeamentos de memória realizados pela MMU nos acessos em nível usuário, provê robustez e confiabilidade ao sistema, pois garante que uma aplicação não poderá interferir nas áreas de memória de outras aplicações ou do núcleo.]`}),`
`,(0,n.jsx)(r.p,{children:`Tudo isso gera uma dúvida: como chamar, a partir de uma aplicação, as rotinas oferecidas pelo núcleo para o acesso ao hardware e suas abstrações?`}),`
`,(0,n.jsx)(r.p,{children:`Esse problema pode ser resolvido utilizando-se o mecanismo de interrupção. As CPU’s implementam uma instrução especial que permite acionar o mecanismo de forma intencional.`}),`
`,(0,n.jsxs)(r.p,{children:[`Se uma aplicação precisa realizar alguma instrução privilegiada, ele tem de executar uma instrução de armadilha denominada "`,(0,n.jsx)(r.strong,{children:`trap`}),`", que altera do modo usuário para o modo kernel (núcleo).`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Mecanismo também denominado interrupção de software;`}),`
`,(0,n.jsx)(r.li,{children:`As traps são a porta de entrada para o modo kernel;`}),`
`,(0,n.jsxs)(r.li,{children:[`São a interface entre os programas do usuário no `,(0,n.jsx)(r.em,{children:`modo usuário`}),` e o Sistema Operacional no modo kernel.`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Através do mecanismo de `,(0,n.jsx)(r.code,{children:`interrupção de software (trap)`}),` é possível comutar a CPU para o nível privilegiado e proceder de forma similar ao tratamento de interrupção.`]}),`
`,(0,n.jsxs)(r.p,{children:[`A ativação de procedimentos de núcleo usando `,(0,n.jsx)(r.strong,{children:`interrupções de software`}),` é denominada `,(0,n.jsx)(r.code,{children:`chamada de sistema`}),` (system call ou syscall).`]}),`
`,(0,n.jsx)(r.p,{children:`As chamadas diferem entre os SO, mas os conceitos relacionados às chamadas são similares independentemente do SO.`}),`
`,(0,n.jsx)(r.h2,{id:`áreas-de-chamadas-de-sistema`,children:`Áreas de Chamadas de Sistema`}),`
`,(0,n.jsx)(r.p,{children:`As chamadas de sistema do SO pode ser dividido nas seguintes grandes áreas:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Gestão de processos`}),`: criar, carregar código, terminar, esperar, ler/mudar atributos;`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Gestão da memória`}),`: alocar/liberar/modificar áreas de memória;`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Gestão de arquivos`}),`: criar, remover, abrir, fechar, ler, escrever;`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Comunicação`}),`: criar/destruir canais de comunicação, receber/enviar dados;`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Gestão de dispositivos`}),`: ler/mudar configurações, ler/escrever dados;`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Gestão do sistema`}),`: desligar/suspender/reiniciar o sistema.`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Normalmente as aplicações utilizam uma API (Application Programming Interface), uma interface que encapsula o acesso direto ao sistema.`}),`
`,(0,n.jsx)(r.p,{children:`As interfaces das chamadas de sistema (wrappers) mais utilizadas são:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Win32 API para Windows;`}),`
`,(0,n.jsx)(r.li,{children:`POSIX API para maioria das versões do UNIX.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`gerenciamento-de-processos`,children:`Gerenciamento de Processos`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:`center`},children:`Chamada`}),(0,n.jsx)(r.th,{children:`Descrição`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`pid = fork()`}),(0,n.jsx)(r.td,{children:`Crie um processo filho idêntico ao processo pai`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`a`}),(0,n.jsx)(r.td,{children:`a`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`a`}),(0,n.jsx)(r.td,{children:`a`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:`center`},children:`a`}),(0,n.jsx)(r.td,{children:`a`})]})]})]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};