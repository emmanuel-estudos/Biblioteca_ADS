# Perguntas da Primeira Parte da Prova

## Builder × Factory Method

Uma equipe mantém uma classe Relatorio que, ao longo do tempo, acumulou um construtor com doze parâmetros — vários deles opcionais (cabeçalho, rodapé, marca d'água, formato de exportação, paginação, idioma). Chamadas como new Relatorio(titulo, null, null, "PDF", true, null, ...) tornaram-se frequentes e difíceis de ler, e é comum errar a ordem dos argumentos. A equipe quer que cada parte do relatório seja configurada de forma explícita e que a criação só produza objetos em estado consistente. Qual padrão atende melhor a essa necessidade e por quê?

A) Factory Method, porque centraliza a decisão de qual subclasse instanciar.
B) Builder, porque separa a construção de um objeto complexo de sua representação, permitindo montá-lo passo a passo.
C) Prototype, porque clonar um relatório existente é sempre mais barato.
D) Singleton, porque só deve existir um relatório por vez.

## Factory Method × Abstract Factory

Qual alternativa distingue corretamente os dois padrões?

A) Factory Method cria famílias de produtos relacionados; Abstract Factory cria um único produto via subclasses.
B) Factory Method define um método para criar um produto, delegando a decisão às subclasses; Abstract Factory provê uma interface para criar famílias de produtos relacionados.
C) Ambos usam herança exclusivamente; nenhum deles pode ser implementado via composição.
D) Abstract Factory é um caso particular do Builder, pois constrói objetos passo a passo.

## Singleton + Abstract Factory

Em um sistema de e-commerce, a equipe implementou uma ConexaoFabricaPagamentos que retorna famílias de objetos (gateway, validador, logger) conforme o país. Decidiu-se que deveria existir apenas uma instância dessa fábrica em toda a aplicação. Sobre a combinação desses padrões, é correto afirmar que:

A) Abstract Factory exige obrigatoriamente que a fábrica seja um Singleton, pois cria múltiplos produtos.
B) É comum (mas não obrigatório) implementar uma Abstract Factory como Singleton, já que normalmente basta uma única fábrica concreta ativa por contexto.
C) Singleton e Abstract Factory são mutuamente exclusivos, pois um cria objetos e o outro impede a criação.
D) Como o Singleton garante instância única, ele dispensa o uso de interfaces para os produtos criados.

## Singleton como anti-padrão + DI/IoC

Sobre a crítica ao Singleton e sua relação com Injeção de Dependência, assinale a alternativa correta:

A) Singleton facilita testes unitários porque o estado global é fácil de isolar entre testes.
B) Um problema do Singleton é introduzir estado/acoplamento global e dependências ocultas; a Injeção de Dependência ajuda a mitigar isso ao tornar as dependências explícitas e substituíveis.
C) DI e Singleton são incompatíveis: um contêiner de DI nunca pode fornecer uma instância com ciclo de vida único.
D) Inversão de Controle significa que a classe passa a controlar diretamente a criação de todas as suas dependências.

## Um framework precisa criar objetos Configuracao complexos. Frequentemente, novas configurações são pequenas variações de uma já existente, e o framework recebe suas colaborações de um contêiner. Relacione padrão e papel:

I. Builder
II. Prototype
III. Injeção de Dependência

( ) Clonar uma configuração existente e alterar poucos campos.
( ) Montar passo a passo uma configuração complexa do zero.
( ) Fornecer ao objeto suas colaborações sem que ele as instancie internamente.

A associação correta é:

A) I–II–III
B) II–I–III
C) III–II–I
D) II–III–I

## Prototype × Factory Method

Considere um editor gráfico onde criar um novo objeto do zero é caro (consulta a banco, parsing), mas já existe um objeto configurado em memória. Avalie:

I. Prototype favorece a criação por cópia de uma instância existente, evitando o custo de inicialização do zero.
II. Em Prototype, o cliente normalmente não precisa conhecer a classe concreta do objeto que está clonando.
III. Factory Method sempre produz objetos mais baratos que Prototype.

A) Apenas I e II.
B) Apenas I e III.
C) Apenas II e III.
D) I, II e III.

## Durante a revisão de código, um desenvolvedor afirma:

"Como usamos Injeção de Dependência, finalmente aplicamos Inversão de Controle no projeto — antes não tínhamos IoC em lugar nenhum."

Avaliando essa fala em relação aos conceitos envolvidos, qual alternativa é correta?

A) A fala está totalmente correta: Inversão de Controle só passa a existir quando se adota Injeção de Dependência.
B) A fala está parcialmente equivocada: Injeção de Dependência é apenas uma das técnicas que implementam IoC, e outros mecanismos já usados no projeto — como Factory Method, que delega a criação às subclasses
C) A fala está equivocada porque Injeção de Dependência e Inversão de Controle são conceitos sem qualquer relação entre si.
D) A fala está correta porque Inversão de Controle aplica-se exclusivamente a contêineres de Injeção de Dependência.
