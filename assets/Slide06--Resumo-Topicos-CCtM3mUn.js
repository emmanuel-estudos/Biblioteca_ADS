import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`conceitos-de-hardware---parte-03`,children:`Conceitos de Hardware - Parte 03`}),`
`,(0,n.jsx)(r.h2,{id:`interrupções`,children:`Interrupções`}),`
`,(0,n.jsx)(r.p,{children:`A comunicação entre o processador e os dispositivos se dá através do acesso às portas de E/S.`}),`
`,(0,n.jsx)(r.p,{children:`Entretanto, muitas vezes um dispositivo precisa informar o processador rapidamente sobre um evento interno. Neste caso, o controlador tem duas alternativas:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Aguardar até que o processador o consulte, o que poderá ser demorado caso o processador esteja ocupado com outras tarefas (o que geralmente ocorre);`}),`
`,(0,n.jsxs)(r.li,{children:[`Notificar o processador, enviando a ele uma `,(0,n.jsx)(r.strong,{children:`requisição de interrupção (IRQ – Interrupt ReQuest)`}),` através do barramento de controle.`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`As interrupções visam melhorar a eficiência do processamento.`}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h3,{id:`tipos-de-interrupção`,children:`Tipos de Interrupção`}),`
`,(0,n.jsx)(r.p,{children:`As classes mais comuns de interrupções são:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Programa:`}),` gerada devido a uma condição de uma instrução. Exemplos: overflow aritmético, divisão por 0, referência fora do espaço de memória permitido para o usuário.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Timer:`}),` gerada por um timer dentro do processo. Permite ao sistema realize funções específicas regularmente.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`E/S:`}),` gerada por um controlador de E/S para informar o término normal de uma operação ou sinalizar condição de erro.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Falha de Hardware:`}),` gerada por uma falha. Exemplos: falta de energia, erro de paridade de memória.`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Com as interrupções, o processador pode executar outras instruções enquanto uma operação de E/S está em andamento;`}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h3,{id:`passo-a-passo-de-uma-interrupção`,children:`Passo a Passo de uma Interrupção`}),`
`,(0,n.jsx)(r.p,{children:`O controlador comunica à CPU a requisição de uma interrupção através do barramento de controle, enviando uma Requisição de interrupção, chamada de IRQ (Interrupt ReQuest);`}),`
`,(0,n.jsx)(r.p,{children:`Ao receber a IRQ, os circuitos do processador suspendem seu fluxo de execução atual e desviam para um endereço predefinido, onde se encontra uma rotina de tratamento de interrupção (Interrupt Handler).`}),`
`,(0,n.jsx)(r.p,{children:`Esta, por sua vez, executa as ações necessárias para atender o dispositivo que a gerou.`}),`
`,(0,n.jsxs)(r.p,{children:[`A última instrução de uma rotina de interrupção é sempre a `,(0,n.jsx)(r.strong,{children:`RETURN FROM INTERRUPT`}),`, que devolve o contexto da execução para a CPU, fazendo-a voltar para o ponto de onde foi interrompida, retomando o código que estava executando;`]}),`
`,(0,n.jsx)(r.p,{children:`Para conseguir voltar exatamente para o ponto onde estava, a CPU armazena o conteúdo do contador de programa, do registrador de instrução e do registrador de flags (PSW).`}),`
`,(0,n.jsx)(r.p,{children:`Cada interrupção é identificada por um valor inteiro, geralmente de 8 bits, para que interrupções geradas por dispositivos diferentes sejam devidamente reconhecidas;`}),`
`,(0,n.jsxs)(r.p,{children:[`Cada IRQ possui uma rotina de tratamento de interrupção própria, que é mapeada em uma tabela, chamada `,(0,n.jsx)(r.strong,{children:`Tabela Vetor de Interrupções (IVT – Interrupt Vector Table).`})]}),`
`,(0,n.jsx)(r.p,{children:`Cada entrada do vetor, aponta para o endereço inicial da rotina de tratamento da interrupção correspondente.`}),`
`,(0,n.jsx)(r.p,{children:`Os computadores utilizam uma área da memória CMOS (ESCD – Extended System Configuration Data) para armazenar informações sobre o hardware. Durante a inicialização do computador e utilizando essas informações, o firmware (BIOS ou UEFI) carrega na memória RAM a IVT.`}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`múltiplas-interrupções`,children:`Múltiplas Interrupções`}),`
`,(0,n.jsx)(r.p,{children:`Duas técnicas podem ser utilizadas para lidar com múltiplas interrupções: interrupção desabilitada e interrupção por prioridade.`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`A `,(0,n.jsx)(r.strong,{children:`interrupção desabilitada`}),` desativa as interrupções enquanto uma interrupção estiver sendo processada;`]}),`
`,(0,n.jsxs)(r.li,{children:[`A `,(0,n.jsx)(r.strong,{children:`interrupção por prioridade`}),` define prioridades para interrupções e permite que uma interrupção de maior prioridade faça com que um tratamento de interrupção com menor prioridade seja interrompido.`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`exceções`,children:`Exceções`}),`
`,(0,n.jsx)(r.p,{children:`Alguns eventos gerados pela CPU podem ocasionar o desvio da execução, usando o mesmo mecanismo das interrupções.`}),`
`,(0,n.jsx)(r.p,{children:`Os desvios de execução gerados pela CPU são chamados de EXCEÇÕES.`}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de eventos que geram exceções: Instruções ilegais, acesso a memória não autorizado, exceções de ponto flutuante, tentativa de divisão por zero, entre outros erros de software.`}),`
`,(0,n.jsx)(r.p,{children:`Isso permite que o sistema operacional ou o programa lide com o erro de maneira apropriada. Exemplos:encerrando o programa, gerando uma mensagem de erro ou realizando alguma outra ação de recuperação.`}),`
`,(0,n.jsx)(r.p,{children:`O programa do usuário não precisa conter qualquer código especial para acomodar as interrupções, o processador e o sistema operacional são responsáveis por suspender o programa do usuário e depois retomá-lo no mesmo ponto.`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};