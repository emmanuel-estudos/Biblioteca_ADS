# Atividade 02

## Questão 01

**Pergunta:** Explique a função da unidade de controle (uc) dentro da CPU e cite duas atividades realizadas por ela

A Unidade de Controle (UC) atua como o coordenador da CPU, sendo responsável por buscar, decodificar e organizar a execução das instruções dos programas.

Atividades realizadas:

- Busca instruções na memória principal.
- Decodifica as instruções e gera sinais de controle para os demais componentes (como mover dados ou realizar cálculos).

## Questão 02

**Pergunta:** Qual é a função da unidade lógica e aritmética (ULA)? Dê exemplos de operações que ela executa

A função principal da ULA é realizar os cálculos matemáticos e as operações lógicas fundamentais solicitadas pelos programas.

Exemplos de operações:

- Aritméticas: Adição, subtração, multiplicação e divisão em números binários.
- Lógicas: Operações como AND, OR, NOT e XOR.

## Questão 03

**Pergunta:** Explique como funciona a técnica de E/S dirigida por interrupção e cite uma vantagem dessa técnica em relação a E/S programada

Nesta técnica, a CPU inicia uma operação de entrada ou saída e volta a executar outras tarefas do seu fluxo normal. O dispositivo de E/S só avisa a CPU quando a operação termina através de uma interrupção.

``Vantagem``: Maior eficiência do processamento, pois o processador não precisa ficar "esperando" o dispositivo terminar (desperdiçando ciclos), permitindo que ele execute outras instruções enquanto o hardware externo trabalha.

## Questão 04

**Pergunta:** O que é DMA (acesso direto a memória) e qual é sua principal vantagem no processo de transferência de dados?

O DMA utiliza um chip específico (controlador de DMA) para gerenciar a transferência de blocos de dados entre periféricos e a memória RAM de forma independente.

``Principal vantagem:`` A transferência ocorre sem a intervenção constante da CPU, liberando o processador para realizar tarefas mais complexas enquanto os dados são movidos, o que aumenta significativamente o desempenho do sistema.

## Questão 05

**Pergunta:** Explique o que acontece quando uma interrupção é gerada durante a execução de um programa e como a CPU consegue retornar ao ponto interrompido

Quando uma interrupção (IRQ) ocorre, o processador suspende imediatamente o fluxo de execução atual e desvia para uma rotina específica de tratamento (Interrupt Handler) mapeada na tabela IVT ou IDT.

``Retorno ao ponto interrompido``: Para retornar com precisão, a CPU salva o contexto da execução (conteúdo do Contador de Programa, Registrador de Instrução e Registrador de Flags/PSW) antes de tratar a interrupção. Ao final do tratamento, a instrução RETURN FROM INTERRUPT restaura esses valores, permitindo que o programa continue exatamente de onde parou.
