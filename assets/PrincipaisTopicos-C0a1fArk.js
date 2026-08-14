import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`resumo`,children:`Resumo`}),`
`,(0,n.jsx)(r.h2,{id:`conceito-geral-a-integração-hardware-so`,children:`Conceito Geral (A Integração Hardware-SO)`}),`
`,(0,n.jsxs)(r.p,{children:[`O conceito central destes materiais é que o `,(0,n.jsx)(r.strong,{children:`hardware e o sistema operacional são interdependentes`}),`. O hardware fornece as capacidades físicas brutas, enquanto o SO atua como o gerente que utiliza esses recursos de forma segura e eficiente, escondendo a complexidade técnica das aplicações.`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`principais-conceitos-e-definições`,children:`Principais Conceitos e Definições`}),`
`,(0,n.jsx)(r.h3,{id:`1-arquiteturas-de-computador-arquivo-04`,children:`1. Arquiteturas de Computador (Arquivo 04)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Arquitetura de Von Neumann:`}),` Modelo onde uma `,(0,n.jsx)(r.strong,{children:`única região de memória`}),` armazena tanto dados quanto instruções. É simples e flexível, mas pode gerar um "gargalo" de desempenho no barramento único.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Arquitetura de Harvard:`}),` Utiliza `,(0,n.jsx)(r.strong,{children:`duas regiões de memória distintas`}),` (e barramentos separados) para instruções e para dados. Isso permite que o processador acesse ambos simultaneamente, aumentando o desempenho.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Barramentos:`}),` Canais de comunicação que interligam os dispositivos (CPU, memória, I/O). Dividem-se em:`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Controle:`}),` Trafega sinais de comando (leitura, escrita, clock).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Endereços:`}),` Indica a origem ou o destino da informação (a largura define quanta memória o sistema pode endereçar).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Dados:`}),` Transporta a informação real entre os componentes.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`2-processamento-e-memória-arquivo-05`,children:`2. Processamento e Memória (Arquivo 05)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Unidade de Controle (UC):`}),` O coordenador da CPU que busca, decodifica e organiza a execução das instruções.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`ULA (Unidade Lógica e Aritmética):`}),` Realiza os cálculos matemáticos e operações lógicas (AND, OR, etc.).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Registradores:`}),` Pequenas memórias de altíssima velocidade dentro da CPU para armazenamento temporário. Destaque para o `,(0,n.jsx)(r.strong,{children:`Contador de Programa`}),` (aponta a próxima instrução) e o `,(0,n.jsx)(r.strong,{children:`Registrador de Instrução`}),` (guarda a instrução atual).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`MMU (Unidade de Gerenciamento de Memória):`}),` Dispositivo de hardware que `,(0,n.jsx)(r.strong,{children:`converte endereços lógicos (das apps) em endereços físicos (na RAM)`}),` e garante que uma aplicação não acesse a memória de outra.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`3-técnicas-de-entrada-e-saída-arquivo-05`,children:`3. Técnicas de Entrada e Saída (Arquivo 05)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`E/S Programada:`}),` A CPU envia um comando e fica `,(0,n.jsx)(r.strong,{children:`esperando`}),` o dispositivo terminar, o que desperdiça tempo de processamento.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`E/S Dirigida por Interrupção:`}),` A CPU inicia a operação e volta a fazer outras tarefas; o dispositivo avisa quando terminar.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`DMA (Acesso Direto à Memória):`}),` Um chip específico controla a transferência de dados entre periférico e memória `,(0,n.jsx)(r.strong,{children:`sem intervenção da CPU`}),`, liberando o processador para tarefas mais complexas.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`4-interrupções-e-exceções-arquivo-06`,children:`4. Interrupções e Exceções (Arquivo 06)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Interrupção (IRQ):`}),` Sinal enviado por um hardware para a CPU avisando sobre um evento (ex: clique do mouse). A CPU suspende o que está fazendo, salva o contexto e executa uma `,(0,n.jsx)(r.strong,{children:`Rotina de Tratamento (Interrupt Handler)`}),`.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Exceção:`}),` Desvio de fluxo gerado pela própria CPU devido a `,(0,n.jsx)(r.strong,{children:`erros de software`}),` (ex: divisão por zero ou acesso proibido à memória).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`IVT/IDT:`}),` Tabelas que mapeiam cada interrupção ao seu respectivo tratador.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`5-proteção-e-chamadas-de-sistema-arquivo-07`,children:`5. Proteção e Chamadas de Sistema (Arquivo 07)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Modo Núcleo (Kernel Mode):`}),` Nível de privilégio total, restrito ao SO, onde todas as instruções e hardwares são acessíveis.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Modo Usuário (User Mode):`}),` Nível limitado onde rodam os aplicativos; qualquer tentativa de acesso direto ao hardware gera uma exceção.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Chamada de Sistema (System Call):`}),` Interface que permite a uma aplicação solicitar serviços ao núcleo (ex: ler um arquivo).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Trap:`}),` Instrução especial (interrupção de software) usada para mudar do Modo Usuário para o Modo Núcleo de forma controlada.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`6-arquiteturas-de-núcleo-arquivo-08`,children:`6. Arquiteturas de Núcleo (Arquivo 08)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Monolítico:`}),` Todo o sistema operacional roda no modo núcleo. É rápido, mas menos robusto (um erro em um driver pode derrubar o sistema).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Micronúcleo ($\\mu$-kernel):`}),` Apenas o essencial fica no núcleo; drivers e serviços rodam no espaço de usuário. É muito robusto e flexível, mas pode ser lento devido à troca de mensagens.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Híbrido:`}),` Traz componentes críticos de volta ao núcleo para equilibrar desempenho e estabilidade (ex: Windows).`]}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`principais-informações-e-importância-para-o-so`,children:`Principais Informações e Importância para o SO`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Por que o Clock é importante?`}),` Ele sincroniza a comunicação entre os dispositivos e determina a velocidade de operação da CPU e dos barramentos.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Por que as System Calls são vitais?`}),` Elas são a única "porta de entrada" segura para o hardware. Sem elas, os aplicativos não poderiam ler arquivos ou enviar dados pela rede sem colocar o sistema em risco.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Qual o papel dos Drivers?`}),` São módulos que ensinam o núcleo do SO a conversar com hardwares específicos. Muitas vezes são feitos pelo fabricante do dispositivo.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Importância do Salvamento de Contexto:`}),` Quando ocorre uma interrupção, o SO salva o estado da CPU (registradores e flags) para que o programa interrompido possa continuar exatamente de onde parou após o tratamento.`]}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`resumo-para-a-prova-checklist`,children:`Resumo para a Prova (Checklist)`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Arquitetura:`}),` Von Neumann (Memória única) vs Harvard (Memória separada).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Segurança:`}),` MMU (Isolamento de memória) e Níveis de Privilégio (Usuário vs Núcleo).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Eficiência:`}),` DMA (I/O sem CPU) e Interrupções (Multitarefa).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Comunicação:`}),` System Calls via instrução Trap.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Estrutura:`}),` Monolítico (Desempenho) vs Micronúcleo (Robustez).`]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};