import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`formulário---cap04`,children:`Formulário - Cap04`}),`
`,(0,n.jsx)(r.h2,{id:`questão-01`,children:`Questão 01`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Qual é a diferença primordial entre um processo e uma thread no que tange ao isolamento e compartilhamento de recursos, e por que a criação e a troca de contexto de threads costumam ser mais leves para o sistema operacional?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`Essa diferença está no isolamento de memória e no compartilhamento de recursos.`}),`
`,(0,n.jsx)(r.p,{children:`Sobre Isolamento vs Compartilhamento de Recursos`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`Processo (Forte Isolamento):`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`É a unidade básica de alocação de recursos do sistema operacional.`}),`
`,(0,n.jsx)(r.li,{children:`Cada processo possui seu próprio espaço de endereçamento de memória virtual privado e isolado. Isso garante que um processo não consiga acessar ou corromper diretamente a memória de outro.`}),`
`,(0,n.jsx)(r.li,{children:`O compartilhamento de dados ou a comunicação entre processos distintos exige mecanismos explícitos de comunicação (IPC), como sockets, memória compartilhada gerenciada pelo SO ou troca de mensagens.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`Thread (Compartilhamento do Espaço do Processo):`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`É a menor unidade de agendamento/execução tratada pela CPU, existindo dentro do contexto de um processo.`}),`
`,(0,n.jsx)(r.li,{children:`Múltiplas threads do mesmo processo compartilham o mesmo espaço de endereçamento de memória (seção de código, variáveis globais, heap e descritores de recursos como arquivos e sockets abertos).`}),`
`,(0,n.jsx)(r.li,{children:`O que cada thread mantém de forma estritamente individual é apenas o seu estado de execução: o conjunto de registradores da CPU, o ponteiro de instrução (program counter) e a sua própria pilha de execução (stack) para chamadas de função locais.`}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Sobre Criação e Troca de Contexto de threads`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`Criação de Threads:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Ao criar um processo, o sistema operacional precisa instanciar novas estruturas de controle (PCB), alocar uma nova tabela de páginas de memória e configurar um espaço de endereçamento virtual do zero.`}),`
`,(0,n.jsx)(r.li,{children:`Ao criar uma thread, o sistema operacional reutiliza toda a estrutura de memória e os recursos do processo pai já existentes. É necessário alocar apenas uma pequena pilha (stack) e sua estrutura de controle (TCB), o que consome uma fração do tempo e da memória.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`Troca de Contexto (Context Switch):`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Entre processos diferentes: A CPU precisa salvar os registradores, carregar uma nova tabela de mapeamento de memória virtual e invalidar/limpar a Translation Lookaside Buffer (TLB) — o cache de tradução de endereços da CPU. Isso resulta em uma perda considerável de desempenho (overhead de reaquecimento de cache).`}),`
`,(0,n.jsx)(r.li,{children:`Entre threads do mesmo processo: Como o espaço de endereçamento permanece rigorosamente o mesmo, não há troca de tabela de páginas e a TLB não precisa ser invalidada. O sistema operacional precisa apenas salvar e carregar os registradores da CPU, o ponteiro de pilha e o ponteiro de instrução, tornando a transição ordens de grandeza mais rápida.`}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`questão-02`,children:`Questão 02`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado-1`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Como o conceito de multithreading se comporta em um sistema de um único processador (single-core) em comparação a um sistema com múltiplos núcleos (multi-core), e de que forma o uso de threads beneficia o desempenho em Sistemas Distribuídos?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta-1`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`Sistema de Único Processador (Single-Core):`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Concorrência por pseudo-paralelismo: A CPU possui apenas uma unidade de execução física e realiza apenas uma instrução por vez. O sistema operacional alterna a execução entre as threads rapidamente por meio do escalonamento por divisão de tempo (time-sharing), criando a ilusão de simultaneidade.`}),`
`,(0,n.jsx)(r.li,{children:`Ganho focado em operações de E/S: Em tarefas puramente computacionais (CPU-bound), o multithreading não reduz o tempo de execução (podendo até aumentar ligeiramente devido ao custo das trocas de contexto). No entanto, o ganho ocorre quando uma thread bloqueia esperando por entrada/saída ou rede: o processador desvia para outra thread ativa, mantendo a CPU produtiva.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Sistema de Múltiplos Núcleos (Multi-Core):`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Paralelismo real e simultâneo: Cada núcleo da CPU pode executar uma thread de forma fisicamente independente e ao mesmo tempo.`}),`
`,(0,n.jsx)(r.li,{children:`Aceleração computacional e de E/S: Além de manter a CPU ocupada durante bloqueios de E/S, o sistema obtém ganhos reais de vazão (throughput) e aceleração de processamento ao dividir algoritmos intensivos em múltiplas threads paralelas.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Nos sistemas distribuídos, a comunicação através da rede introduz altas latências e operações bloqueantes. O uso de threads traz vantagens estratégicas cruciais:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`Servidores Concorrentes e Não Bloqueantes:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Quando um servidor aceita conexões de múltiplos clientes (por exemplo, via accept em soquetes TCP) ele pode alocar uma thread dedicada para tratar a comunicação de cada cliente individualmente.`}),`
`,(0,n.jsx)(r.li,{children:`A principal vantagem é que uma thread pode ser bloqueada aguardando dados da rede de um cliente sem atrasar ou impedir o atendimento aos demais clientes conectados.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`Mascaramento da Latência de Rede (Hiding Network Latency):`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`As operações de leitura e recepção de mensagens em soquetes são frequentemente bloqueantes por padrão.`}),`
`,(0,n.jsx)(r.li,{children:`Caso o processo precise realizar outras tarefas enquanto aguarda a resposta de um nó remoto, o uso de threads separadas permite que a computação local continue em execução em paralelo à espera da mensagem.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`Sobreposição de Comunicação e Computação:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Permite enviar dados ou fazer requisições em background (em uma thread secundária) enquanto a thread principal continua processando informações locais ou preparando as próximas etapas da aplicação`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`Baixo Overhead em Comparação a Múltiplos Processos:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Como as threads de um mesmo processo compartilham o mesmo espaço de memória, a criação de novas threads e a troca de contexto entre elas consomem significativamente menos memória e ciclos de CPU do que a criação de processos independentes, permitindo que servidores distribuídos suportem milhares de conexões simultâneas com maior eficiência.`}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`questão-03`,children:`Questão 03`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado-2`,children:`Enunciado`}),`
`,(0,n.jsx)(r.p,{children:`Por que a falta de proteção nativa entre threads de um mesmo processo exige mecanismos explícitos de sincronização, e de que forma problemas como interferência entre threads, inconsistência de memória e deadlock afetam a correção do programa?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta-2`,children:`Resposta`}),`
`,(0,n.jsx)(r.p,{children:`Em um ambiente de processos tradicionais, o sistema operacional e a unidade de gerenciamento de memória (MMU) garantem um isolamento estrito do espaço de endereçamento. Se um processo tentar acessar a memória privada de outro, o hardware detecta o acesso não autorizado e interrompe a execução (segmentation fault).`}),`
`,(0,n.jsx)(r.p,{children:`Com as threads, a abordagem é oposta: múltiplas threads do mesmo processo compartilham exatamente o mesmo espaço de memória virtual (incluindo o heap, variáveis globais e descritores de arquivos). O sistema operacional não impõe nenhuma barreira para proteger variáveis ou estruturas de dados contra acessos simultâneos de threads do próprio processo.`}),`
`,(0,n.jsx)(r.p,{children:`Como o escalonador altera a execução das threads de forma não determinística (via divisão de tempo ou em núcleos físicos paralelos num processador multi-core), a ordem exata das leituras e escritas torna-se imprevisível. Sem a introdução de mecanismos explícitos de sincronização (como mutexes, travas, semáforos ou blocos sincronizados) para criar seções críticas, qualquer thread pode alterar a memória enquanto outra a está manipulando.`}),`
`,(0,n.jsx)(r.p,{children:`A correção de um programa (program correctness) refere-se à sua capacidade de produzir os resultados esperados em todas as execuções e de manter seu fluxo de execução funcional. Os problemas de concorrência afetam a correção de maneiras específicas:`}),`
`,(0,n.jsx)(r.p,{children:`Interferência entre Threads (Race Conditions / Condições de Corrida):`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`O problema: Ocorre quando duas ou mais threads acessam concorrentemente um dado compartilhado e pelo menos uma realiza uma alteração de escrita. Operações simples em código (como `,(0,n.jsx)(r.code,{children:`contador++`}),`) exigem múltiplos passos na CPU (ler valor da memória, incrementar no registrador e escrever de volta).`]}),`
`,(0,n.jsx)(r.li,{children:`Impacto na correção: Se uma thread for interrompida pelo escalonador no meio dessa sequência e outra thread alterar a mesma variável, a escrita da primeira sobrescreverá o estado da segunda (atualização perdida). Isso faz com que o programa produza resultados incorretos e não determinísticos, gerando falhas difíceis de reproduzir e depurar.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Inconsistência de Memória (Problemas de Visibilidade):`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`O problema: Arquiteturas modernas utilizam caches locais em cada núcleo do processador e reordenação de instruções para otimizar o desempenho. Quando uma thread em um núcleo altera um dado na memória, essa alteração pode permanecer na cache local do núcleo antes de ser gravada na memória principal.`}),`
`,(0,n.jsx)(r.li,{children:`Impacto na correção: Outra thread executando em outro núcleo pode ler um valor "obsoleto" (stale value) na memória ou observar modificações ocorrendo fora da ordem lógica do código. O programa passa a operar sobre estados intermediários inválidos da memória.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Deadlock (Impasse):`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`O problema: Ocorre quando duas ou mais threads ficam bloqueadas indefinidamente, cada uma aguardando pela liberação de uma trava (mutex) mantida por outra thread em um ciclo de dependência cruzada (por exemplo: a Thread 1 segura a Trava A e espera pela Trava B; a Thread 2 segura a Trava B e espera pela Trava A).`}),`
`,(0,n.jsx)(r.li,{children:`Impacto na correção: O programa (ou a seção afetada) para completamente de responder (hang/freeze). Ao contrário das condições de corrida, que geram dados errados, o deadlock destrói a propriedade de vivacidade (liveness), tornando o sistema inoperante.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Resumindo, os mecanismos de sincronização explícita servem como a única garantia de exclusão mútua (evitando a interferência), visibilidade (garantindo a consistência de memória) e ordem de alocação (prevenindo deadlocks).`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};