# Conceitos de Hardware - Parte 02

## CPU (Central Processing Unit)

- Cérebro do computador: busca e executa as instruções
- Composta por: 
  - UC - Unidade de Controle
  - ULA - Unidade Lógica e Aritmética
  - Registradores

## UC - Unidade de Controle

- Função: coordena e controla as operações do processador
- Busca instrução na memória principal
- Decodifica as instruções e gera sinais de controle (operações, mover dados, desvio de fluxo)
- Informa a sequência de execução das instruções
- Atualiza registradores e estado da CPU
- Contém todo o conjunto de instruções que o processador é capaz de executar.

## ULA - Unidade Lógica e Aritmética

- Realiza as operações lógicas (AND, OR, NOT) e aritméticas (adição, subtração, multiplicação e divisão)
- Recebe as instruções da UC (Unidade de Controle)
- Usa dos registradores para guardar e mover dados

## Registradores

- Pequenas memórias temporárias de alta velocidade
- Existem vários registradores com funções específicas: EAX, EBX, ECX, EDX
- Registradores mais importantes
  - Contador de Programa: armazena qual a próxima instrução a ser executada
  - Registrador de Instrução: armazena a instrução que está sendo executada no momento

## Memória

- Armazena instruções de programas em execução
- ANTES acessada diretamente pela CPU
- AGORA acessada pela Unidade de Gerenciamento de Memória (no processador)

## MMU - Memory Management Unit

- Se comunica com a CPU para receber o endereço de memória solicitado
- Analisa e valida o endereço recebido
- Realiza a conversão de endereço lógico para endereço físico
- Executa a operação solicitada pela CPU (leitura ou escrita de dados na memória)
- Mapeia áreas de memória que são utilizadas por cada aplicação.