# Conceitos de Hardware - Parte 01

O Sistema Operacional e o hardware interagem para que os programas/aplicações acessem os serviços dos dispositivos.

## Composição do Hardware

- Processador: executa as instruções
- Memória: armazenamento das aplicações em execução
- Dispositivos de Entrada e Saída: armazenamento de dados e comunicação com o mundo externo

## Arquitetura de Computadores

Os hardwares foram pensados de duas formas diferentes:

- Arquitetura de Harvard
  - Duas regiões separadas de memória: instruções e programas
  - O processsador acessa 2 tipos de memória diferentes ao mesmo Tempo
  - Vantagens:
    - Busca e execução Simultânea de Instruções e Dados: aumento de desempenho
    - Maior largura de banda de memória: barramentos diferentes
    - Segurança Aprimorada: dificulta alguns tipos de ataque, como os de injeção de código
  - Desvantagens:
    - Complexidade do projeto
    - Custo mais elevado
    - Uso ineficiente de recursos
- Arquitetura de Von Neumann
  - Uma única região de memória: dados e programas juntos (programa armazenado)
  - Vantagens:
    - Simplicidade de Projeto: único barramento
    - Custo menos elevado
    - Maior Flexibilidade: mais capacidade de implementação de algoritmos/programas sem a necessidade de modificar significativamente o hardware
  - Desvantagens:
    - Gargalo de Desempenho: caso seja exigido muito acesso rápido e simultâneo
    - Menos seguro: mais suscetível a certos tipos de ataque, como o de injeção de código
    - Complexidade de Escalonamento: muitos processadores no mesmo barramento torna a estrutura mais complexa

## Barramento

- São canais de comunicação que integram os dispositivos.
- Formados por conexões que transportam informações.
- Interligam dispositivos como: CPU, memória, controlador de E/S, entre outros...
- Tipos de Barramento (bus)
  - Controle
    - operações que devem ser realizadas, como: leitura, escrita, ativação de dispositivos, etc
    - gerencia a comunicação entre dispositivos
    - garante que a comunicação ocorra de forma eficiente
      - CLOCK - Sincroniza a comunicação
      - REQUEST - Solicita algo
      - ACK - Reconhece um sinal
      - RESPONSE - Responde à uma solicitação
  - Endereço
    - transmite o endereço/destino das informações
    - especificar o endereço de memória ou o endereço de registro que a CPU deseja acessar.
    - a largura do barramento de endereços determina a quantidade de memória que o sistema pode endereçar.
    - distribuidos pela BIOS
    - A quantidade máxima de endereços de dispositivos e/ou dados depende diretamente da quantidade de bits do barramento de endereços. Exemplo: 8 bits = 2^8 = 256 endereços (0 a 255)
  - Dados
    - transmite os dados entre dispositivos
    - a quantidade de bits de dados do processador equivale as linhas de barramento de dados
    - a velocidade de transmissão depende da quantidade de barramento e da frequência do clock

## Protocolos

- Padronizam a comunicação
- Conjuntos de regras para os barramentos que devem ser seguidas pelos dispositivos para que não ocorra erros na comunicação.

## Clock

- Sinal digital que varia em uma frequência predeterminada.
- É a base para a troca de informações entre dispositivos.
- Determina a **frequência de operações** entre dispositivos e CPU.
- Determina a velocidade de transmissão de informações pelos barramentos.