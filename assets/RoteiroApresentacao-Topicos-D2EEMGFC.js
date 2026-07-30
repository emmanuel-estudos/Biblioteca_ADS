import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`apresentação-em-tópicos`,children:`Apresentação em Tópicos`}),`
`,(0,n.jsxs)(r.p,{children:[`Este resumo em tópicos foi organizado para facilitar a memorização e a explicação dos conceitos principais do roteiro de apresentação sobre `,(0,n.jsx)(r.strong,{children:`Implementação e Escalonamento de Tarefas`}),`.`]}),`
`,(0,n.jsx)(r.h2,{id:`processos-vs-threads-a-base-de-tudo`,children:`Processos vs. Threads (A Base de Tudo)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Processo:`}),` É um programa em execução com `,(0,n.jsx)(r.strong,{children:`isolamento completo`}),`. Possui sua própria área exclusiva na RAM (código, dados, pilha e heap). Se um processo falha, ele não derruba os outros.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Thread:`}),` É a menor unidade de trabalho dentro de um processo. `,(0,n.jsx)(r.strong,{children:`Compartilha a memória`}),` do processo pai, mas possui seu próprio Contador de Programa (PC), registradores e pilha.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Tarefa (Task):`}),` Uma abstração ampla. Se ela for criada com memória compartilhada com que a criou = thread; Se ela for criada isolada e com recursos próprios = processo. No Linux, processos e threads são tratados uniformemente como "tarefas" através da estrutura `,(0,n.jsx)(r.code,{children:`task_struct`}),`.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`exemplo`,children:`Exemplo`}),`
`,(0,n.jsxs)(r.p,{children:[`O `,(0,n.jsx)(r.strong,{children:`processo`}),` é a sala de aula, com espaço exclusivo, recursos próprios e segurança. As `,(0,n.jsx)(r.strong,{children:`threads`}),` são os alunos, compartilhando os mesmos recursos, têm seus materiais privados e cada um é responsável por uma parte menor da tarefa da sala (executadas ao mesmo tempo).`]}),`
`,(0,n.jsx)(r.p,{children:`Isso garante que o problema seja resolvido com mais eficiência, há mais risco de confusão se mais de uma aluno tentar usar um mesmo recurso ao mesmo tempo e se acontecer de um aluno ficar impossibilitado de continuar seu trabalho todos os outros também param.`}),`
`,(0,n.jsx)(r.h2,{id:`criação-e-estados-de-processos`,children:`Criação e Estados de Processos`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Mecânica UNIX (fork/exec):`}),` O comando `,(0,n.jsx)(r.code,{children:`fork()`}),` cria um `,(0,n.jsx)(r.strong,{children:`clone exato`}),` do processo pai. O comando `,(0,n.jsx)(r.code,{children:`exec()`}),` limpa a memória do filho e carrega um novo programa por cima.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Copy-on-Write (CoW):`}),` Técnica de otimização onde pai e filho compartilham a mesma memória física até que um deles tente escrever/modificar algo; só então a página é duplicada.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Processos Especiais:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Órfão:`}),` O pai morre antes do filho (o sistema adota o filho).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Zumbi:`}),` O filho terminou, mas o pai ainda não leu seu código de retorno; ocupa apenas uma linha na tabela de processos.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`o-bloco-de-controle-de-processo-pcb`,children:`O Bloco de Controle de Processo (PCB)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`O "RG" do Processo:`}),` É uma estrutura de dados armazenada na `,(0,n.jsx)(r.strong,{children:`memória protegida do Kernel`}),` que contém todas as informações de um processo.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`O que contém:`}),` Estado atual (Pronto, Rodando, Bloqueado), Contador de Programa, valores dos Registradores, limites de memória e lista de arquivos abertos.`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`troca-de-contexto-a-ilusão-de-concorrência`,children:`Troca de Contexto (A Ilusão de Concorrência)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Definição:`}),` Procedimento de salvar o estado do processo atual no PCB e carregar o estado de um novo processo para a CPU.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Custo (Overhead):`}),` É uma operação cara porque, enquanto o SO troca os processos, nenhum trabalho útil para o usuário é feito. Além disso, limpa memórias cache (L1, L2, L3), o que torna a execução inicial do novo processo mais lenta.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Vantagem das Threads:`}),` Trocar de thread é `,(0,n.jsx)(r.strong,{children:`mais barato`}),` que trocar de processo, pois elas compartilham o mesmo espaço de endereçamento e não exigem limpeza de caches de memória.`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`escalonamento-de-tarefas-quem-manda-na-cpu`,children:`Escalonamento de Tarefas (Quem manda na CPU?)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Tipos de Escalonamento:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Não-Preemptivo:`}),` O processo só sai da CPU quando termina ou se bloqueia voluntariamente.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Preemptivo:`}),` O SO pode interromper o processo a qualquer momento (por tempo expirado ou prioridade).`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Algoritmos Principais:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`FIFO (First-Come, First-Served):`}),` Simples fila de banco; sofre com o "Efeito Comboio" (tarefas curtas presas atrás de longas).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`SJF (Shortest Job First):`}),` O menor processo vai primeiro.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Round Robin (Alternância Circular):`}),` Cada processo ganha uma fatia de tempo (`,(0,n.jsx)(r.strong,{children:`Quantum`}),`). Se não terminar, volta para o fim da fila.`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Problema da Inanição (Starvation):`}),` Quando processos de baixa prioridade nunca rodam. Resolve-se com o `,(0,n.jsx)(r.strong,{children:`Envelhecimento (Aging)`}),`, aumentando a prioridade de quem espera há muito tempo.`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`dicas-para-explicar`,children:`Dicas para Explicar:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Use a analogia do `,(0,n.jsx)(r.strong,{children:`Chrome`}),` para processos: cada aba é um processo; se uma aba trava, o navegador continua funcionando porque elas estão isoladas.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Explique a `,(0,n.jsx)(r.strong,{children:`Concorrência`}),` como "fazer várias coisas ao mesmo tempo alternando rápido" e o `,(0,n.jsx)(r.strong,{children:`Paralelismo`}),` como "fazer várias coisas no mesmo instante" (exige múltiplos núcleos).`]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};