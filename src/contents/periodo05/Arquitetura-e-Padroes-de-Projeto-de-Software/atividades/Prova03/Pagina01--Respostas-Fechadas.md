# Respostas Fechadas

Com base nos padrões estruturais do GoF apresentados nos materiais, aqui estão as respostas detalhadas para as perguntas da **Prova 03** (conforme o arquivo "Pagina01--Perguntas-Fechadas.md"):

## Pergunta 01

A alternativa correta é a **C) Adapter / Facade**.

As três classes tradutoras resolvem o problema de comunicação entre interfaces incompatíveis, papel fundamental do padrão **Adapter**. Já a classe `ConversorDeVideo`, ao prover uma interface simplificada (um único método) para um subsistema complexo, atua como um **Facade**.

## Pergunta 02

A alternativa correta é a **A)**.

O tratamento uniforme de itens simples e combos caracteriza o **Composite**. O acréscimo dinâmico de adicionais ao preço sem subclasses específicas define o **Decorator**. A conversão entre protocolos XML e JSON é função do **Adapter**. Por fim, o controle de acesso e validação antes da chamada real ao serviço é responsabilidade de um **Proxy**.

## Pergunta 03

A alternativa incorreta é a **D)**.

O padrão **Decorator** é justamente uma alternativa à herança que **evita** a necessidade de criar uma subclasse para cada combinação possível de funcionalidades, combatendo a explosão de classes.

## Pergunta 04

A alternativa correta é a **C) Equipe A implementou Decorator; Equipe B implementou Proxy**.

A Equipe A focou em adicionar responsabilidades (log e cache) que podem ser combinadas, o que define o **Decorator**. A Equipe B focou no controle de acesso e permissão, objetivo principal do padrão **Proxy**.

## Pergunta 05

A alternativa correta é a **B)**.

Enquanto o **Composite** foca na representação de hierarquias parte-todo para tratar objetos individuais e grupos de forma uniforme, o **Decorator** foca na extensão de funcionalidades, adicionando responsabilidades sem alterar a interface do objeto.

## Pergunta 06

A alternativa correta é a **B) Composite e Flyweight**.

A formação de grupos e hierarquias arbitrárias de formas tratadas uniformemente indica o **Composite**. O compartilhamento do estado intrínseco (tipo/textura) para suportar milhões de objetos em memória, enquanto o estado extrínseco (posição/tamanho) é passado no desenho, define o **Flyweight**.

## Pergunta 07

A alternativa correta é a **B) Adapter/Facade**.

A integração com o gateway internacional que possui formatos e nomes de métodos diferentes exige um **Adapter**. O oferecimento de um ponto de entrada único (`finalizarCompra()`) para orquestrar múltiplos subsistemas complexos define o **Facade**.

---

## Gabarito

- **Pergunta 01:** C
- **Pergunta 02:** A
- **Pergunta 03:** D
- **Pergunta 04:** C
- **Pergunta 05:** B
- **Pergunta 06:** B
- **Pergunta 07:** B
