import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[`Aqui está um roteiro completo, estruturado e dinâmico para uma apresentação de `,(0,n.jsx)(r.strong,{children:`25 a 30 minutos`}),`. O plano foi desenhado para manter a atenção da plateia (e do professor), equilibrando teoria pesada com analogias práticas.`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h1,{id:`roteiro-de-apresentação-ciclo-de-vida-e-escalonamento-no-so`,children:`Roteiro de Apresentação: Ciclo de Vida e Escalonamento no SO`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Tempo estimado:`}),` 25 a 30 minutos`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Público-alvo:`}),` Colegas de turma e professor da matéria de Sistemas Operacionais`]}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`-introdução-e-visão-geral-tempo-estimado-3-minutos`,children:`🔵 Introdução e Visão Geral (Tempo estimado: 3 minutos)`}),`
`,(0,n.jsx)(r.h3,{id:`slide-01`,children:`Slide 01`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:`Slide 1: Título e Apresentação`})}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:`O que falar:`}),` "Olá a todos! Hoje vamos desvendar o coração do sistema operacional: como ele gerencia o trabalho que o processador deve fazer. Vamos entender desde o que é um processo até o momento em que o SO decide pausar uma tarefa para dar lugar a outra."`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`slide-02`,children:`Slide 02`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:`Slide 2: A Agenda da Apresentação`})}),`
`,(0,n.jsxs)(r.li,{children:[`Apresentar os tópicos rapidamente:`,`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:`Processos vs. Threads (e o conceito de Tarefas).`}),`
`,(0,n.jsx)(r.li,{children:`Como os processos são criados.`}),`
`,(0,n.jsx)(r.li,{children:`O Descritor de Processo (PCB).`}),`
`,(0,n.jsx)(r.li,{children:`A Troca de Contexto (a mágica da ilusão de concorrência).`}),`
`,(0,n.jsx)(r.li,{children:`Escalonamento: Quem manda na CPU?`}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`-parte-1-processos-e-threads-tempo-estimado-6-minutos`,children:`🔵 Parte 1: Processos e Threads (Tempo estimado: 6 minutos)`}),`
`,(0,n.jsx)(r.h3,{id:`slide-03`,children:`Slide 03`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:`Slide 3: O que é um Processo?`})}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:`O que falar:`}),` "Pense no código que você escreve como uma receita de bolo estática no papel. O `,(0,n.jsx)(r.strong,{children:`processo`}),` é o ato de fazer o bolo: a receita em execução, consumindo ovos (memória), batedeira (CPU) e espaço na mesa (recursos)."`]}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.em,{children:`Pontos-chave:`})}),`
`,(0,n.jsx)(r.li,{children:`Um processo é uma entidade ativa.`}),`
`,(0,n.jsx)(r.li,{children:`Possui seu próprio espaço de endereçamento de memória isolado (segurança).`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`slide-04`,children:`Slide 04`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:`Slide 4: Criação de Processos`})}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:`O que falar:`}),` "Como os processos nascem? No mundo Linux/Unix, temos uma chamada de sistema famosa chamada `,(0,n.jsx)(r.code,{children:`fork()`}),`. O processo pai se duplica criando um processo filho quase idêntico. Depois, o filho usa `,(0,n.jsx)(r.code,{children:`exec()`}),` para carregar um novo programa."`]}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.em,{children:`Pontos-chave:`})}),`
`,(0,n.jsx)(r.li,{children:`Relação Pai/Filho (Árvore de processos).`}),`
`,(0,n.jsxs)(r.li,{children:[`Chamadas de sistema: `,(0,n.jsx)(r.code,{children:`fork()`}),` (duplica) e `,(0,n.jsx)(r.code,{children:`exec()`}),` (substitui o código).`]}),`
`,(0,n.jsxs)(r.li,{children:[`No Windows, usa-se a API `,(0,n.jsx)(r.code,{children:`CreateProcess()`}),`, que faz tudo de uma vez.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`slide-05`,children:`Slide 05`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:`Slide 5: Threads e "Tarefas"`})}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:`O que falar:`}),` "Se um processo é uma fábrica inteira, uma `,(0,n.jsx)(r.strong,{children:`Thread`}),` (linha de execução) é um trabalhador dentro dela. Threads de um mesmo processo compartilham a mesma memória e os mesmos arquivos, o que torna a comunicação entre elas muito mais rápida do que entre processos diferentes."`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:`Nota sobre o termo "Tarefas" (Tasks):`}),` "Em sistemas operacionais de tempo real (RTOS), ou mesmo na nomenclatura interna do Linux, o termo 'Tarefa' (Task) é frequentemente usado como sinônimo para representar a menor unidade de execução que o sistema gerencia."`]}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`-parte-2-o-descritor-de-processo-pcb-tempo-estimado-5-minutos`,children:`🔵 Parte 2: O Descritor de Processo (PCB) (Tempo estimado: 5 minutos)`}),`
`,(0,n.jsx)(r.h3,{id:`slide-06`,children:`Slide 06`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:`Slide 6: O Bloco de Controle de Processo (PCB)`})}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:`O que falar:`}),` "Como o SO não se perde no meio de tantos processos? Ele usa uma ficha cadastral para cada um, chamada de `,(0,n.jsx)(r.strong,{children:`Descritor de Processo`}),` ou `,(0,n.jsx)(r.strong,{children:`PCB (Process Control Block)`}),`."`]}),`
`,(0,n.jsx)(r.li,{children:`Apresentar uma tabela mental ou visual no slide com a anatomia do PCB:`}),`
`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Campo no PCB`}),(0,n.jsx)(r.th,{children:`Para que serve?`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`PID (Process ID)`})}),(0,n.jsx)(r.td,{children:`O número de identidade único do processo.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Estado do Processo`})}),(0,n.jsx)(r.td,{children:`Se ele está Executando, Pronto para rodar ou Bloqueado esperando o disco.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Registradores da CPU`})}),(0,n.jsx)(r.td,{children:`Onde o processo parou na conta matemática.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Ponteiros de Memória`})}),(0,n.jsx)(r.td,{children:`Onde estão guardados os dados dele na RAM.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Arquivos Abertos`})}),(0,n.jsx)(r.td,{children:`Quais documentos ou conexões de rede ele está usando.`})]})]})]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`-parte-3-a-troca-de-contexto-tempo-estimado-5-minutos`,children:`🔵 Parte 3: A Troca de Contexto (Tempo estimado: 5 minutos)`}),`
`,(0,n.jsx)(r.h3,{id:`slide-07`,children:`Slide 07`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:`Slide 7: O que é Troca de Contexto (Context Switch)?`})}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:`O que falar:`}),` "Nossos computadores dão a ilusão de que estão rodando 50 programas ao mesmo tempo. Na verdade, a CPU fica alternando entre eles em milissegundos. Essa alternância se chama `,(0,n.jsx)(r.strong,{children:`Troca de Contexto`}),`."`]}),`
`,(0,n.jsxs)(r.li,{children:[`Explique o fluxo passo a passo:`,`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:`O processo $A$ está rodando.`}),`
`,(0,n.jsx)(r.li,{children:`O timer do SO apita (interrupção).`}),`
`,(0,n.jsx)(r.li,{children:`O SO salva o estado atual do processo $A$ (registradores, ponteiro de instrução) dentro do seu respectivo PCB.`}),`
`,(0,n.jsx)(r.li,{children:`O SO carrega o PCB do processo $B$.`}),`
`,(0,n.jsx)(r.li,{children:`O processo $B$ assume a CPU de onde tinha parado.`}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.blockquote,{children:[`
`,(0,n.jsxs)(r.p,{children:[`⚠️ `,(0,n.jsx)(r.strong,{children:`Ponto de Destaque:`}),` "A troca de contexto é um trabalho administrativo do SO. Enquanto ela acontece, a CPU não processa dados úteis do usuário. Portanto, troca de contexto em excesso gera perda de desempenho (overhead)."`]}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`-parte-4-escalonamento-de-tarefas-tempo-estimado-7-minutos`,children:`🔵 Parte 4: Escalonamento de Tarefas (Tempo estimado: 7 minutos)`}),`
`,(0,n.jsx)(r.h3,{id:`slide-08`,children:`Slide 08`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:`Slide 8: O papel do Escalonador (Scheduler)`})}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:`O que falar:`}),` "Quem decide qual processo entra na CPU a seguir? O `,(0,n.jsx)(r.strong,{children:`Escalonador`}),`. Ele é o guarda de trânsito do SO."`]}),`
`,(0,n.jsx)(r.li,{children:`Explique os tipos de escalonadores rapidamente:`}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Curto Prazo (CPU Scheduler):`}),` Decide quem ganha a CPU agora (rodando em milissegundos).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Longo Prazo (Job Scheduler):`}),` Decide quais processos entram na memória RAM vindos do disco.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`slide-09`,children:`Slide 09`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:`Slide 9: Algoritmos de Escalonamento`})}),`
`,(0,n.jsx)(r.li,{children:`Apresente os principais algoritmos de forma direta:`}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`FIFO / FCFS (First-In, First-Out):`}),` Quem chega primeiro é atendido primeiro. (Simples, mas pode causar o efeito comboio, onde processos rápidos esperam um gigante terminar).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Round Robin (Alternância Circular):`}),` Cada processo ganha um tempo máximo (chamado de `,(0,n.jsx)(r.em,{children:`quantum`}),`). Acabou o tempo, vai para o fim da fila. (Justo e ótimo para sistemas interativos).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Prioridade:`}),` Processos mais importantes rodam primeiro. (Risco de `,(0,n.jsx)(r.em,{children:`Starvation`}),` / Inanição: processos de baixa prioridade nunca rodarem se sempre chegar um mais importante).`]}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`-conclusão-e-perguntas-tempo-estimado-4-minutos`,children:`🔵 Conclusão e Perguntas (Tempo estimado: 4 minutos)`}),`
`,(0,n.jsx)(r.h3,{id:`slide-10`,children:`Slide 10`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:`Slide 10: Resumo e Recapitulação`})}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:`O que falar:`}),` "Hoje vimos como o SO dá vida aos programas. Ele cria `,(0,n.jsx)(r.strong,{children:`processos`}),`, divide-os em `,(0,n.jsx)(r.strong,{children:`threads`}),`, anota tudo no `,(0,n.jsx)(r.strong,{children:`PCB`}),`, faz malabarismo com a `,(0,n.jsx)(r.strong,{children:`troca de contexto`}),` e usa o `,(0,n.jsx)(r.strong,{children:`escalonador`}),` para garantir que a CPU trabalhe de forma justa e eficiente."`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`slide-11`,children:`Slide 11`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:`Slide 11: Dúvidas?`})}),`
`,(0,n.jsx)(r.li,{children:`Abrir espaço para perguntas da plateia e do professor.`}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`-dicas-de-sucesso-para-a-sua-apresentação`,children:`💡 Dicas de Sucesso para a sua Apresentação`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Postura:`}),` Não leia os slides. Use os slides apenas como suporte visual (imagens de fluxo de processos ou do PCB ajudam muito) e guie a explicação usando este roteiro.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`A analogia do bolo:`}),` Use analogias simples (como a da receita para processos e a dos trabalhadores para threads) logo no início; isso faz a banca/professor perceber que você realmente entendeu o conceito conceitual por trás do código.`]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};