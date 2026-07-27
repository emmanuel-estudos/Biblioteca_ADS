Aqui está um roteiro completo, estruturado e dinâmico para uma apresentação de **25 a 30 minutos**. O plano foi desenhado para manter a atenção da plateia (e do professor), equilibrando teoria pesada com analogias práticas.

---

# Roteiro de Apresentação: Ciclo de Vida e Escalonamento no SO

* **Tempo estimado:** 25 a 30 minutos
* **Público-alvo:** Colegas de turma e professor da matéria de Sistemas Operacionais

---

## 🔵 Introdução e Visão Geral (Tempo estimado: 3 minutos)

### Slide 01

* **Slide 1: Título e Apresentação**
* *O que falar:* "Olá a todos! Hoje vamos desvendar o coração do sistema operacional: como ele gerencia o trabalho que o processador deve fazer. Vamos entender desde o que é um processo até o momento em que o SO decide pausar uma tarefa para dar lugar a outra."

### Slide 02

* **Slide 2: A Agenda da Apresentação**
* Apresentar os tópicos rapidamente:
  1. Processos vs. Threads (e o conceito de Tarefas).
  2. Como os processos são criados.
  3. O Descritor de Processo (PCB).
  4. A Troca de Contexto (a mágica da ilusão de concorrência).
  5. Escalonamento: Quem manda na CPU?

---

## 🔵 Parte 1: Processos e Threads (Tempo estimado: 6 minutos)

### Slide 03

* **Slide 3: O que é um Processo?**
* *O que falar:* "Pense no código que você escreve como uma receita de bolo estática no papel. O **processo** é o ato de fazer o bolo: a receita em execução, consumindo ovos (memória), batedeira (CPU) e espaço na mesa (recursos)."
* *Pontos-chave:*
* Um processo é uma entidade ativa.
* Possui seu próprio espaço de endereçamento de memória isolado (segurança).

### Slide 04

* **Slide 4: Criação de Processos**
* *O que falar:* "Como os processos nascem? No mundo Linux/Unix, temos uma chamada de sistema famosa chamada `fork()`. O processo pai se duplica criando um processo filho quase idêntico. Depois, o filho usa `exec()` para carregar um novo programa."
* *Pontos-chave:*
* Relação Pai/Filho (Árvore de processos).
* Chamadas de sistema: `fork()` (duplica) e `exec()` (substitui o código).
* No Windows, usa-se a API `CreateProcess()`, que faz tudo de uma vez.

### Slide 05

* **Slide 5: Threads e "Tarefas"**
* *O que falar:* "Se um processo é uma fábrica inteira, uma **Thread** (linha de execução) é um trabalhador dentro dela. Threads de um mesmo processo compartilham a mesma memória e os mesmos arquivos, o que torna a comunicação entre elas muito mais rápida do que entre processos diferentes."
* *Nota sobre o termo "Tarefas" (Tasks):* "Em sistemas operacionais de tempo real (RTOS), ou mesmo na nomenclatura interna do Linux, o termo 'Tarefa' (Task) é frequentemente usado como sinônimo para representar a menor unidade de execução que o sistema gerencia."

---

## 🔵 Parte 2: O Descritor de Processo (PCB) (Tempo estimado: 5 minutos)

### Slide 06

* **Slide 6: O Bloco de Controle de Processo (PCB)**
* *O que falar:* "Como o SO não se perde no meio de tantos processos? Ele usa uma ficha cadastral para cada um, chamada de **Descritor de Processo** ou **PCB (Process Control Block)**."
* Apresentar uma tabela mental ou visual no slide com a anatomia do PCB:

| Campo no PCB | Para que serve? |
| --- | --- |
| **PID (Process ID)** | O número de identidade único do processo. |
| **Estado do Processo** | Se ele está Executando, Pronto para rodar ou Bloqueado esperando o disco. |
| **Registradores da CPU** | Onde o processo parou na conta matemática. |
| **Ponteiros de Memória** | Onde estão guardados os dados dele na RAM. |
| **Arquivos Abertos** | Quais documentos ou conexões de rede ele está usando. |

---

## 🔵 Parte 3: A Troca de Contexto (Tempo estimado: 5 minutos)

### Slide 07

* **Slide 7: O que é Troca de Contexto (Context Switch)?**
* *O que falar:* "Nossos computadores dão a ilusão de que estão rodando 50 programas ao mesmo tempo. Na verdade, a CPU fica alternando entre eles em milissegundos. Essa alternância se chama **Troca de Contexto**."
* Explique o fluxo passo a passo:
  1. O processo $A$ está rodando.
  2. O timer do SO apita (interrupção).
  3. O SO salva o estado atual do processo $A$ (registradores, ponteiro de instrução) dentro do seu respectivo PCB.
  4. O SO carrega o PCB do processo $B$.
  5. O processo $B$ assume a CPU de onde tinha parado.

> ⚠️ **Ponto de Destaque:** "A troca de contexto é um trabalho administrativo do SO. Enquanto ela acontece, a CPU não processa dados úteis do usuário. Portanto, troca de contexto em excesso gera perda de desempenho (overhead)."

---

## 🔵 Parte 4: Escalonamento de Tarefas (Tempo estimado: 7 minutos)

### Slide 08

* **Slide 8: O papel do Escalonador (Scheduler)**
* *O que falar:* "Quem decide qual processo entra na CPU a seguir? O **Escalonador**. Ele é o guarda de trânsito do SO."
* Explique os tipos de escalonadores rapidamente:
* **Curto Prazo (CPU Scheduler):** Decide quem ganha a CPU agora (rodando em milissegundos).
* **Longo Prazo (Job Scheduler):** Decide quais processos entram na memória RAM vindos do disco.

### Slide 09

* **Slide 9: Algoritmos de Escalonamento**
* Apresente os principais algoritmos de forma direta:
* **FIFO / FCFS (First-In, First-Out):** Quem chega primeiro é atendido primeiro. (Simples, mas pode causar o efeito comboio, onde processos rápidos esperam um gigante terminar).
* **Round Robin (Alternância Circular):** Cada processo ganha um tempo máximo (chamado de *quantum*). Acabou o tempo, vai para o fim da fila. (Justo e ótimo para sistemas interativos).
* **Prioridade:** Processos mais importantes rodam primeiro. (Risco de *Starvation* / Inanição: processos de baixa prioridade nunca rodarem se sempre chegar um mais importante).

---

## 🔵 Conclusão e Perguntas (Tempo estimado: 4 minutos)

### Slide 10

* **Slide 10: Resumo e Recapitulação**
* *O que falar:* "Hoje vimos como o SO dá vida aos programas. Ele cria **processos**, divide-os em **threads**, anota tudo no **PCB**, faz malabarismo com a **troca de contexto** e usa o **escalonador** para garantir que a CPU trabalhe de forma justa e eficiente."

### Slide 11

* **Slide 11: Dúvidas?**
* Abrir espaço para perguntas da plateia e do professor.

---

## 💡 Dicas de Sucesso para a sua Apresentação

* **Postura:** Não leia os slides. Use os slides apenas como suporte visual (imagens de fluxo de processos ou do PCB ajudam muito) e guie a explicação usando este roteiro.
* **A analogia do bolo:** Use analogias simples (como a da receita para processos e a dos trabalhadores para threads) logo no início; isso faz a banca/professor perceber que você realmente entendeu o conceito conceitual por trás do código.
