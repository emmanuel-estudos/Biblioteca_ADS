# Respostas para as Perguntas da Página 01

## Builder × Factory Method

A alternativa que melhor atende à necessidade da equipe é a **B) Builder**.

O padrão **Builder** é indicado quando se deseja separar a construção de um objeto complexo de sua representação, permitindo que o mesmo processo de construção crie diferentes representações. No cenário descrito, ele resolve o problema de construtores com muitos parâmetros ("telescoping constructor") ao permitir a montagem passo a passo do objeto, oferecendo maior controle sobre o processo de construção e resultando em representações mais legíveis por meio de **Fluent Interfaces**.

## Factory Method × Abstract Factory

A alternativa correta é a **B)**.

O **Factory Method** foca em definir uma interface para criar um único produto, mas deixa as subclasses decidirem qual tipo de objeto concreto instanciar. Já o **Abstract Factory** fornece uma interface para a criação de **famílias de objetos** relacionados ou dependentes sem especificar suas classes concretas.

## Singleton + Abstract Factory

Sobre a combinação desses padrões, a afirmação correta é a **B)**.

É comum, embora não obrigatório, implementar uma **Abstract Factory como um Singleton**. Isso ocorre porque, em muitas aplicações, a classe de uma fábrica aparece apenas uma vez, sendo suficiente uma única instância para gerenciar a criação de toda uma família de produtos em um determinado contexto.

## Singleton como anti-padrão + DI/IoC

A alternativa correta é a **B)**.

Um dos problemas criticados no **Singleton** é a introdução de estado global e acoplamento forte, o que dificulta testes unitários. A **Injeção de Dependência (DI)** ajuda a mitigar esses problemas ao isolar a implementação de um objeto da construção de suas dependências, tornando-as explícitas, facilitando o baixo acoplamento e a criação de testes.

## Relacionar padrão e papel (Configurações)

A associação correta é a **B) II – I – III**.

- **(II) Prototype:** Clonar uma configuração existente e alterar poucos campos, criando novos objetos pela cópia de um modelo (instância-protótipo).
- **(I) Builder:** Montar passo a passo uma configuração complexa do zero, separando o processo de construção da representação final.
- **(III) Injeção de Dependência:** Fornecer ao objeto suas colaborações (dependências) externamente, em vez de deixar que ele as instancie internamente.

## Prototype × Factory Method

A alternativa correta é a **A) Apenas I e II**.

O **Prototype** favorece a criação por cópia de uma instância existente, o que é vantajoso quando a inicialização do zero é cara. Além disso, nesse padrão, o cliente interage apenas com a interface do protótipo (o método de clonagem), sem precisar conhecer a classe concreta do objeto que está sendo clonado. A afirmação III está incorreta porque o custo de criação depende da complexidade do objeto, não havendo uma regra fixa de que um padrão seja sempre mais "barato" que o outro.

## Inversão de Controle e Injeção de Dependência

A alternativa correta é a **B)**.

A fala do desenvolvedor está parcialmente equivocada porque a **Injeção de Dependência** é apenas uma das maneiras de implementar a **Inversão de Controle (IoC)**. Outros mecanismos, como o **Factory Method**, também aplicam IoC ao delegar a responsabilidade de decidir qual subclasse instanciar, tirando essa responsabilidade da classe principal.
