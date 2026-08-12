import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`implementação-e-escalonamento-de-tarefas`,children:`Implementação e Escalonamento de Tarefas`}),`
`,(0,n.jsx)(r.p,{children:`Slide 01 para a apresentação da equipe e do tema`}),`
`,(0,n.jsx)(r.h2,{id:`tópicos-abordados`,children:`Tópicos abordados`}),`
`,(0,n.jsx)(r.p,{children:`Conteúdo do slide 02`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:`Processos vs. Threads (e o conceito de Tarefas).`}),`
`,(0,n.jsx)(r.li,{children:`Como os processos são criados.`}),`
`,(0,n.jsx)(r.li,{children:`O Descritor de Processo (PCB).`}),`
`,(0,n.jsx)(r.li,{children:`A Troca de Contexto (a mágica da ilusão de concorrência).`}),`
`,(0,n.jsx)(r.li,{children:`Escalonamento: Quem manda na CPU?`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`processos-e-threads---slide-03-o-que-é-um-processo`,children:`Processos e Threads - Slide 03: O que é um processo?`}),`
`,(0,n.jsx)(r.p,{children:`Um processo é um programa em execução que possui isolamento completo de recursos. Quando o Sistema Operacional (SO) cria um processo, ele aloca uma região exclusiva na memória RAM (espaço de endereçamento) que contém o código do programa, seus dados globais, a pilha (stack) e a área de alocação dinâmica (heap). Esse isolamento garante estabilidade: se um processo travar ou tentar acessar a memória de outro, o SO o encerra sumariamente (gerando o famoso erro de Segmentation Fault), protegendo o sistema.`}),`
`,(0,n.jsx)(r.p,{children:`Por outro lado, uma Thread (linha de execução) é a menor unidade de trabalho que pode ser escalonada dentro de um processo. Em vez de criar um novo espaço de memória, múltiplas threads compartilham o espaço de memória do processo pai (código, dados e arquivos abertos). No entanto, cada thread possui seu próprio contador de programa (Program Counter), conjunto de registradores e pilha para que possam executar funções diferentes ao mesmo tempo.`}),`
`,(0,n.jsx)(r.p,{children:`O termo Tarefa (Task) é uma abstração mais ampla. Em muitos sistemas operacionais, como o Linux (onde o kernel usa a estrutura task_struct para representar tudo), a distinção rígida entre processo e thread é suavizada, tratando ambos como fluxos de execução com diferentes níveis de compartilhamento de recursos.`}),`
`,(0,n.jsx)(r.h3,{id:`dúvidas-frequentes`,children:`Dúvidas Frequentes`}),`
`,(0,n.jsx)(r.h4,{id:`se-as-threads-compartilham-a-mesma-memória-como-elas-não-sobrescrevem-as-variáveis-umas-das-outras-por-acidente`,children:`Se as threads compartilham a mesma memória, como elas não sobrescrevem as variáveis umas das outras por acidente?`}),`
`,(0,n.jsx)(r.p,{children:`Esse é o maior desafio da programação multithread. Quando duas threads tentam ler e gravar na mesma variável ao mesmo tempo, ocorre uma Condição de Corrida (Race Condition).`}),`
`,(0,n.jsx)(r.p,{children:`Para evitar que os dados fiquem corrompidos, os desenvolvedores utilizam mecanismos de sincronização fornecidos pelo SO, como Mutexes (exclusão mútua) ou Semáforos, que trancam o acesso à variável para apenas uma thread por vez.`}),`
`,(0,n.jsx)(r.p,{children:`Além disso, cada thread possui sua própria pilha privada para variáveis locais de funções, o que garante que dados temporários não se misturem.`}),`
`,(0,n.jsx)(r.h4,{id:`por-que-não-usamos-apenas-threads-já-que-elas-consomem-menos-memória-e-são-muito-mais-rápidas-de-criar`,children:`Por que não usamos apenas Threads, já que elas consomem menos memória e são muito mais rápidas de criar?`}),`
`,(0,n.jsx)(r.p,{children:`Simplesmente por uma questão de segurança e tolerância a falhas. Se uma única thread sofrer um erro grave (como uma divisão por zero não tratada), ela derrubará o processo inteiro e todas as outras threads associadas a ele.`}),`
`,(0,n.jsx)(r.p,{children:`Processos são usados quando precisamos de isolamento rígido. Por exemplo, navegadores modernos como o Google Chrome abrem cada aba como um processo separado para que um travamento em uma página web não derrube o navegador inteiro.`}),`
`,(0,n.jsx)(r.h2,{id:`processos-e-threads---slide-04-criação-de-processos`,children:`Processos e Threads - Slide 04: Criação de Processos`}),`
`,(0,n.jsxs)(r.p,{children:[`Nos sistemas baseados em UNIX (como Linux e macOS), a criação de processos segue uma dinâmica muito particular de clonagem. Ela ocorre principalmente em duas etapas por meio das chamadas de sistema (System Calls) `,(0,n.jsx)(r.code,{children:`fork()`}),` e `,(0,n.jsx)(r.code,{children:`exec()`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Quando um processo pai executa a função `,(0,n.jsx)(r.code,{children:`fork()`}),`, o sistema operacional cria uma cópia exata deste processo na memória. O novo processo, chamado de processo filho, herda o mesmo código, variáveis, arquivos abertos e até a posição exata da próxima instrução a ser executada. A única diferença imediata é o identificador do processo (PID).`]}),`
`,(0,n.jsxs)(r.p,{children:[`Para que o filho execute uma tarefa diferente do pai, a chamada de sistema `,(0,n.jsx)(r.code,{children:`exec()`}),` é usada logo em seguida: ela limpa a memória do processo filho e carrega o código de um novo programa por cima. No Windows, esse processo é mais direto e ocorre em um único passo por meio da chamada da API `,(0,n.jsx)(r.code,{children:`CreateProcess()`}),`.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-txt`,children:`[Processo Pai] --(fork)--> [Processo Filho (clone)] ---\r
--(exec)--> [Novo Código Rodando]
`})}),`
`,(0,n.jsx)(r.h3,{id:`dúvidas-frequentes-1`,children:`Dúvidas Frequentes`}),`
`,(0,n.jsx)(r.h4,{id:`o-que-é-copy-on-write-cópia-em-escrita-na-criação-de-processos`,children:`O que é "Copy-on-Write" (Cópia em Escrita) na criação de processos?`}),`
`,(0,n.jsxs)(r.p,{children:[`Como o `,(0,n.jsx)(r.code,{children:`fork()`}),` cria um clone idêntico, copiar toda a memória do pai para o filho seria uma operação extremamente lenta e desperdiçaria muita RAM. Então, para otimizar isso, o SO usa a técnica de `,(0,n.jsx)(r.em,{children:`Copy-on-Write (CoW)`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`O pai e o filho compartilham fisicamente as mesmas páginas de memória na RAM como "apenas leitura". Somente se o pai ou o filho tentar modificar (escrever) algum dado, o SO duplica aquela página de memória específica para o processo que fez a alteração.`}),`
`,(0,n.jsx)(r.h4,{id:`o-que-são-processos-órfãos-e-processos-zumbis`,children:`O que são processos Órfãos e processos Zumbis?`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Órfão`}),`: Ocorre quando o processo pai termina sua execução antes do processo filho. Nesse caso, o processo inicial do sistema (geralmente o init ou systemd, com PID 1) adota o filho órfão para garantir que ele seja encerrado corretamente depois.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Zumbi`}),`: Ocorre quando o filho termina sua execução (executa um exit), mas o pai ainda não leu o seu código de retorno (usando a chamada `,(0,n.jsx)(r.code,{children:`wait()`}),`). O processo zumbi não consome CPU nem memória RAM de dados, mas ainda ocupa uma linha na tabela de processos do sistema operacional. Se acumulados em excesso, podem impedir a criação de novos processos.`]}),`
`,(0,n.jsx)(r.h2,{id:`processo-e-threads---slide-05-threads-e-tarefas`,children:`Processo e Threads - Slide 05: Threads e "Tarefas"`}),`
`,(0,n.jsxs)(r.p,{children:[`Uma `,(0,n.jsx)(r.strong,{children:`Thread`}),` (linha ou fluxo de execução) é a menor unidade de código que o escalonador do Sistema Operacional pode colocar para rodar na CPU. Enquanto um processo define a `,(0,n.jsx)(r.strong,{children:`divisão de recursos`}),` (espaço de memória, arquivos e permissões), a thread define a `,(0,n.jsx)(r.strong,{children:`execução`}),`. Um processo pode ser `,(0,n.jsx)(r.em,{children:`single-threaded`}),` (possuir apenas uma linha de execução principal) ou `,(0,n.jsx)(r.em,{children:`multi-threaded`}),` (possuir várias linhas de execução paralelas dentro do mesmo espaço de memória).`]}),`
`,(0,n.jsx)(r.p,{children:`Cada thread possui seu próprio contexto de execução privado:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Um `,(0,n.jsx)(r.strong,{children:`Contador de Programa (PC)`}),` exclusivo indicando qual linha de código ela está executando.`]}),`
`,(0,n.jsx)(r.li,{children:`Seu próprio conjunto de Registradores.`}),`
`,(0,n.jsxs)(r.li,{children:[`Uma `,(0,n.jsx)(r.strong,{children:`Pilha de Execução (Stack)`}),` privada para guardar variáveis locais e endereços de retorno de funções.`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`No entanto, todas as threads de um mesmo processo compartilham o código do programa, os dados globais, a memória alocada dinamicamente (heap) e os arquivos abertos.`}),`
`,(0,n.jsx)(r.p,{children:`Além disso, as threads podem ser implementadas em dois níveis principais:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Threads em Nível de Usuário (User-Level Threads)`}),`: Gerenciadas por uma biblioteca no código do aplicativo, sem que o kernel do SO saiba que elas existem. São extremamente rápidas para criar e alternar, mas se uma thread bloquear (ex: esperando leitura de disco), o processo inteiro bloqueia.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Threads em Nível de Kernel (Kernel-Level Threads)`}),`: O próprio sistema operacional gerencia as threads. Se uma thread bloquear, o SO pode escalonar outra thread do mesmo processo para continuar rodando no outro núcleo da CPU.`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Já o termo Tarefa (Task) varia de acordo com o contexto do Sistema Operacional:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Em Sistemas de Tempo Real (RTOS)`}),`: "Tarefa" é o nome padrão dado a um bloco de código independente com prazo (`,(0,n.jsx)(r.em,{children:`deadline`}),`) rígido de execução.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`No Kernel do Linux`}),`: O termo "Task" é a estrutura universal. O Linux não faz distinção rígida entre processos e threads no nível do kernel; ele trata tudo como tarefas (`,(0,n.jsx)(r.code,{children:`task_struct`}),`). A diferença é configurada no momento da criação: se a tarefa compartilha memória com a criadora, ela age como thread; se não compartilha, age como um processo isolado.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`dúvidas-frequentes-2`,children:`Dúvidas Frequentes`}),`
`,(0,n.jsx)(r.h4,{id:`qual-é-a-diferença-exata-entre-concorrência-e-paralelismo-no-contexto-de-threads`,children:`Qual é a diferença exata entre Concorrência e Paralelismo no contexto de Threads?`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Concorrência`}),` é sobre a `,(0,n.jsx)(r.em,{children:`estrutura`}),` do programa: é a capacidade do sistema de lidar com múltiplos fluxos de execução ao mesmo tempo, alternando rapidamente entre eles (via troca de contexto), mesmo que haja apenas um único núcleo de CPU.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Paralelismo`}),` é sobre a execução física: é a capacidade de rodar duas ou mais threads `,(0,n.jsx)(r.strong,{children:`exatamente no mesmo instante de tempo`}),`, o que exige obrigatoriamente um processador com múltiplos núcleos (`,(0,n.jsx)(r.strong,{children:`multicore`}),`).`]}),`
`,(0,n.jsxs)(r.h4,{id:`o-que-acontece-se-uma-thread-individual-chamar-a-função-exit-do-cc`,children:[`O que acontece se uma Thread individual chamar a função `,(0,n.jsx)(r.code,{children:`exit()`}),` do C/C++?`]}),`
`,(0,n.jsxs)(r.p,{children:[`A chamada de sistema `,(0,n.jsx)(r.code,{children:`exit()`}),` encerra o `,(0,n.jsx)(r.strong,{children:`processo inteiro`}),`, derrubando imediatamente todas as outras threads que pertencem a ele! Para encerrar apenas a thread atual sem afetar as companheiras, o programador deve usar a função específica da biblioteca de threads (como `,(0,n.jsx)(r.code,{children:`pthread_exit()`}),` no padrão POSIX do Linux) ou simplesmente fazer a função principal da thread retornar (`,(0,n.jsx)(r.code,{children:`return`}),`).`]}),`
`,(0,n.jsx)(r.h4,{id:`como-o-linux-cria-uma-thread-internamente-se-ele-só-enxerga-tasks`,children:`Como o Linux cria uma Thread internamente se ele só enxerga "Tasks"?`}),`
`,(0,n.jsxs)(r.p,{children:[`O Linux utiliza a chamada de sistema `,(0,n.jsx)(r.code,{children:`clone()`}),`. Quando você cria um processo comum (como no `,(0,n.jsx)(r.code,{children:`fork()`}),`), o sistema chama `,(0,n.jsx)(r.code,{children:`clone()`}),` sem compartilhar memória. Quando você cria uma thread usando uma biblioteca como a pthread, o Linux chama a mesma `,(0,n.jsx)(r.code,{children:`clone()`}),`, mas passando flags especiais (como `,(0,n.jsx)(r.code,{children:`CLONE_VM`}),`, `,(0,n.jsx)(r.code,{children:`CLONE_FS`}),`, `,(0,n.jsx)(r.code,{children:`CLONE_FILES`}),`). Essas flags avisam ao kernel: "`,(0,n.jsxs)(r.em,{children:[`crie uma nova `,(0,n.jsx)(r.code,{children:`task_struct`}),`, mas faça ela apontar para a mesma memória e arquivos da tarefa pai`]}),`".`]}),`
`,(0,n.jsx)(r.h2,{id:`slide-06-o-bloco-de-controle-de-processo-pcb`,children:`Slide 06: O Bloco de Controle de Processo (PCB)`}),`
`,(0,n.jsx)(r.p,{children:`Para gerenciar centenas de processos concorrentes, o núcleo (kernel) do sistema operacional precisa manter um registro detalhado de cada um deles. Esse registro é uma estrutura de dados na memória do kernel conhecida como Bloco de Controle de Processo (PCB - Process Control Block), ou simplesmente Descritor de Processo.`}),`
`,(0,n.jsx)(r.p,{children:`O PCB funciona como o "documento de identidade" do processo. Nele, o SO armazena informações cruciais para a sobrevivência e gerenciamento do fluxo:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Estado do processo`}),`: Se ele está em execução (Running), pronto para executar (Ready) ou bloqueado esperando algum evento (Waiting/Blocked).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Contador de Programa (PC)`}),`: O endereço da próxima instrução que o processo deve executar quando voltar para a CPU.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Registradores da CPU`}),`: Cópia dos valores que estavam dentro dos registradores físicos do processador no momento em que o processo foi pausado.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Informações de Gerenciamento de Memória`}),`: Ponteiros para as tabelas de páginas que definem quais endereços de RAM pertencem a ele.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Informações de Entrada/Saída`}),`: Lista de arquivos abertos, conexões de rede ativas e dispositivos de hardware que ele está acessando.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`dúvidas-frequentes-3`,children:`Dúvidas Frequentes`}),`
`,(0,n.jsx)(r.h4,{id:`onde-o-pcb-fica-armazenado-fisicamente-e-por-que-os-programas-comuns-não-podem-ler-essa-estrutura`,children:`Onde o PCB fica armazenado fisicamente e por que os programas comuns não podem ler essa estrutura?`}),`
`,(0,n.jsx)(r.p,{children:`O PCB fica armazenado estritamente no espaço de memória do Kernel (área protegida da RAM reservada ao sistema operacional). Aplicativos de usuário comum não podem ler ou modificar esses dados diretamente por motivos de segurança.`}),`
`,(0,n.jsx)(r.p,{children:`Se um programa pudesse alterar seu próprio PCB, ele poderia elevar sua própria prioridade de forma maliciosa ou acessar a memória reservada de outros programas.`}),`
`,(0,n.jsx)(r.h4,{id:`o-pcb-armazena-o-código-de-programação-que-escrevemos`,children:`O PCB armazena o código de programação que escrevemos?`}),`
`,(0,n.jsx)(r.p,{children:`Não. O PCB armazena apenas metadados (as configurações e o estado do processo) e ponteiros (endereços de memória) que indicam ao SO onde o código real do programa está carregado na memória RAM.`}),`
`,(0,n.jsx)(r.h2,{id:`slide-07-a-troca-de-contexto`,children:`Slide 07: A Troca de Contexto`}),`
`,(0,n.jsxs)(r.p,{children:[`A CPU de um computador só consegue executar uma única instrução por núcleo físico de cada vez. Para criar a sensação de que dezenas de aplicativos estão funcionando em paralelo (multitarefa), o sistema operacional realiza constantes `,(0,n.jsx)(r.strong,{children:`Trocas de Contexto`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`A troca de contexto é o procedimento de salvar o estado atual do processo que está na CPU (para que ele possa continuar de onde parou mais tarde) e carregar o estado salvo de um novo processo para execução.`}),`
`,(0,n.jsx)(r.p,{children:`O fluxo exato funciona assim:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`O Processo `,(0,n.jsx)(r.em,{children:`A`}),` está rodando na CPU.`]}),`
`,(0,n.jsx)(r.li,{children:`Ocorre uma interrupção (por exemplo, o tempo de execução do processo expirou ou ele solicitou a leitura de um arquivo).`}),`
`,(0,n.jsx)(r.li,{children:`O hardware transfere o controle para o SO.`}),`
`,(0,n.jsxs)(r.li,{children:[`O SO salva o estado atual dos registradores da CPU e o contador de programa no PCB do Processo `,(0,n.jsx)(r.em,{children:`A`}),`.`]}),`
`,(0,n.jsxs)(r.li,{children:[`O algoritmo de escalonamento decide que o Processo `,(0,n.jsx)(r.em,{children:`B`}),` deve rodar a seguir.`]}),`
`,(0,n.jsxs)(r.li,{children:[`O SO busca o PCB do Processo `,(0,n.jsx)(r.em,{children:`B`}),` e copia as informações salvas de volta para os registradores físicos da CPU.`]}),`
`,(0,n.jsxs)(r.li,{children:[`O Processo `,(0,n.jsx)(r.em,{children:`B`}),` começa (ou continua) a sua execução.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`dúvidas-frequentes-4`,children:`Dúvidas Frequentes`}),`
`,(0,n.jsx)(r.h4,{id:`por-que-a-troca-de-contexto-é-considerada-uma-operação-cara-overhead-para-o-sistema`,children:`Por que a troca de contexto é considerada uma operação cara ("overhead") para o sistema?`}),`
`,(0,n.jsx)(r.p,{children:`Durante todo o tempo em que o sistema operacional está salvando o PCB de um processo e carregando o de outro, nenhum trabalho útil do usuário está sendo processado. Além disso, a troca de contexto invalida o cache interno do processador (L1, L2, L3) e a tabela de mapeamento de memória virtual (TLB - Translation Lookaside Buffer), fazendo com que o novo processo execute de forma mais lenta nos primeiros ciclos até que as memórias cache sejam preenchidas novamente.`}),`
`,(0,n.jsx)(r.h4,{id:`qual-a-diferença-no-custo-da-troca-de-contexto-entre-processos-e-entre-threads`,children:`Qual a diferença no custo da troca de contexto entre processos e entre threads?`}),`
`,(0,n.jsx)(r.p,{children:`A troca de contexto entre threads do mesmo processo é muito mais barata do que entre processos diferentes. Como as threads compartilham o mesmo espaço de memória, o SO não precisa alterar as tabelas de páginas de memória RAM nem limpar a cache TLB. Ele só precisa salvar e restaurar o estado dos registradores básicos e da pilha privada.`}),`
`,(0,n.jsx)(r.h2,{id:`escalonamento-de-tarefas---slide-08-o-papel-do-escalonador-scheduler`,children:`Escalonamento de Tarefas - Slide 08: O papel do Escalonador (Scheduler)`}),`
`,(0,n.jsx)(r.p,{children:`O Escalonador é o módulo do SO encarregado de gerenciar as filas de processos e decidir qual deles terá o privilégio de usar o processador a cada instante. O principal objetivo do escalonador é maximizar o uso da CPU, reduzir o tempo de espera e garantir que o sistema responda rapidamente ao usuário.`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Existem duas filosofias principais de escalonamento:`}),`
`,(0,n.jsx)(r.li,{children:`Não-Preemptivo: Quando um processo assume a CPU, ele fica lá até terminar sua execução ou voluntariamente bloquear-se para esperar por I/O. (Ex: FIFO e SJF clássico).`}),`
`,(0,n.jsx)(r.li,{children:`Preemptivo: O sistema operacional pode interromper um processo que está rodando a qualquer momento para dar a CPU a outro de maior prioridade ou porque o tempo limite do processo atual acabou. (Ex: Round Robin e Escalonamento por Prioridades moderno).`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`principais-algoritmos`,children:`Principais Algoritmos`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`FCFS / FIFO (First-Come, First-Served)`}),`: Simples fila de banco. O primeiro a chegar é atendido. Sofre com o chamado Efeito Comboio (uma tarefa pequena travada atrás de uma tarefa imensa).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`SJF (Shortest Job First)`}),`: Executa primeiro o processo que tem o menor tempo estimado de execução. Teve bom desempenho teórico de tempo médio de espera, mas é difícil prever o futuro (saber quanto tempo uma tarefa vai demorar antes de rodá-la).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Round Robin (Alternância Circular)`}),`: Desenvolvido especialmente para sistemas interativos. Cada processo recebe uma fatia de tempo contínua na CPU chamada Quantum (geralmente entre 10 e 100 milissegundos). Se o processo não terminar antes do fim do quantum, ele sofre preempção e volta para o fim da fila de prontos.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`dúvidas-frequentes-5`,children:`Dúvidas Frequentes`}),`
`,(0,n.jsx)(r.h4,{id:`o-que-é-inanição-starvation-e-como-o-sistema-resolve-isso`,children:`O que é "Inanição" (Starvation) e como o sistema resolve isso?`}),`
`,(0,n.jsx)(r.p,{children:`Inanição ocorre em algoritmos baseados em prioridade. Se processos de alta prioridade continuarem chegando sem parar, os processos de baixa prioridade ficarão eternamente no fim da fila e nunca executarão. Para resolver isso, os sistemas utilizam a técnica de Envelhecimento (Aging): o sistema operacional aumenta gradativamente a prioridade de um processo à medida que ele passa mais tempo esperando na fila de prontos, garantindo que eventualmente ele consiga rodar.`}),`
`,(0,n.jsx)(r.h4,{id:`o-que-acontece-se-o-tamanho-do-quantum-no-algoritmo-round-robin-for-mal-configurado`,children:`O que acontece se o tamanho do Quantum no algoritmo Round Robin for mal configurado?`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Se for muito grande`}),`: O algoritmo perde sua característica interativa e começa a se comportar de forma idêntica ao FIFO (com o usuário percebendo travamentos na interface gráfica).`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Se for muito pequeno`}),`: O sistema passará a maior parte do tempo realizando trocas de contexto em vez de executar os programas reais, degradando absurdamente a performance da máquina.`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};