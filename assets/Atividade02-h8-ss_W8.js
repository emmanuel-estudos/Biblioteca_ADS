import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`atividade-02`,children:`Atividade 02`}),`
`,(0,n.jsx)(r.h2,{id:`questão-01`,children:`Questão 01`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Pergunta:`}),` Explique a função da unidade de controle (uc) dentro da CPU e cite duas atividades realizadas por ela`]}),`
`,(0,n.jsx)(r.p,{children:`A Unidade de Controle (UC) atua como o coordenador da CPU, sendo responsável por buscar, decodificar e organizar a execução das instruções dos programas.`}),`
`,(0,n.jsx)(r.p,{children:`Atividades realizadas:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Busca instruções na memória principal.`}),`
`,(0,n.jsx)(r.li,{children:`Decodifica as instruções e gera sinais de controle para os demais componentes (como mover dados ou realizar cálculos).`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`questão-02`,children:`Questão 02`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Pergunta:`}),` Qual é a função da unidade lógica e aritmética (ULA)? Dê exemplos de operações que ela executa`]}),`
`,(0,n.jsx)(r.p,{children:`A função principal da ULA é realizar os cálculos matemáticos e as operações lógicas fundamentais solicitadas pelos programas.`}),`
`,(0,n.jsx)(r.p,{children:`Exemplos de operações:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Aritméticas: Adição, subtração, multiplicação e divisão em números binários.`}),`
`,(0,n.jsx)(r.li,{children:`Lógicas: Operações como AND, OR, NOT e XOR.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`questão-03`,children:`Questão 03`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Pergunta:`}),` Explique como funciona a técnica de E/S dirigida por interrupção e cite uma vantagem dessa técnica em relação a E/S programada`]}),`
`,(0,n.jsx)(r.p,{children:`Nesta técnica, a CPU inicia uma operação de entrada ou saída e volta a executar outras tarefas do seu fluxo normal. O dispositivo de E/S só avisa a CPU quando a operação termina através de uma interrupção.`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`Vantagem`}),`: Maior eficiência do processamento, pois o processador não precisa ficar "esperando" o dispositivo terminar (desperdiçando ciclos), permitindo que ele execute outras instruções enquanto o hardware externo trabalha.`]}),`
`,(0,n.jsx)(r.h2,{id:`questão-04`,children:`Questão 04`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Pergunta:`}),` O que é DMA (acesso direto a memória) e qual é sua principal vantagem no processo de transferência de dados?`]}),`
`,(0,n.jsx)(r.p,{children:`O DMA utiliza um chip específico (controlador de DMA) para gerenciar a transferência de blocos de dados entre periféricos e a memória RAM de forma independente.`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`Principal vantagem:`}),` A transferência ocorre sem a intervenção constante da CPU, liberando o processador para realizar tarefas mais complexas enquanto os dados são movidos, o que aumenta significativamente o desempenho do sistema.`]}),`
`,(0,n.jsx)(r.h2,{id:`questão-05`,children:`Questão 05`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Pergunta:`}),` Explique o que acontece quando uma interrupção é gerada durante a execução de um programa e como a CPU consegue retornar ao ponto interrompido`]}),`
`,(0,n.jsx)(r.p,{children:`Quando uma interrupção (IRQ) ocorre, o processador suspende imediatamente o fluxo de execução atual e desvia para uma rotina específica de tratamento (Interrupt Handler) mapeada na tabela IVT ou IDT.`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`Retorno ao ponto interrompido`}),`: Para retornar com precisão, a CPU salva o contexto da execução (conteúdo do Contador de Programa, Registrador de Instrução e Registrador de Flags/PSW) antes de tratar a interrupção. Ao final do tratamento, a instrução RETURN FROM INTERRUPT restaura esses valores, permitindo que o programa continue exatamente de onde parou.`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};