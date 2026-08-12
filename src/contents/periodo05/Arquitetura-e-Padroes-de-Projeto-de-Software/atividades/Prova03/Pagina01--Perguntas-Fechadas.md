# Perguntas Fechadas

## Contexto

vou fazer agora uma outra atividade sobre Arquitetura e Padrões de Projeto de Software, com foco em Padrões Estruturais.

## Pergunta 01

Uma aplicação precisa se comunicar com três bibliotecas de terceiros para processar **áudio**, **vídeo** e **legendas**, cada uma com uma interface própria e incompatível entre si. A equipe cria três classes que traduzem cada uma dessas interfaces para uma interface comum **IMidia**. Em seguida, cria uma classe **ConversorDeVideo** que usa as três classes anteriores internamente e expõe um único método `converter(arquivo)` para o restante do sistema.

As três classes tradutoras e a classe **ConversorDeVideo** representam, respectivamente:

A) Facade / Adapter
B) Decorator / Proxy
C) Adapter / Facade
D) Proxy / Decorator
E) Composite / Flyweight

## Pergunta 02

Um sistema de delivery de comida tem a seguinte arquitetura:

- Um Pedido pode conter **ItemSimples** ou **Combo** (que agrupa vários itens), tratados de forma uniforme.
- Um item pode ser "decorado" com adicionais (ex: ComQueijoExtra, ComBacon), que alteram o preço final sem que o cliente precise conhecer subclasses específicas para cada combinação.
- O sistema se comunica com uma API de um restaurante parceiro que usa um protocolo XML antigo, enquanto o restante do sistema trabalha com JSON.
- Antes de confirmar o pedido, uma camada verifica se o usuário está autenticado e se o cartão foi validado, controlando se a chamada real ao serviço de pagamento deve ou não ser efetivada.

Associe corretamente os padrões estruturais usados:

A) Composite (Pedido/Combo) — Decorator (adicionais) — Adapter (API XML) — Proxy (validação de pagamento)
B) Facade (Pedido/Combo) — Proxy (adicionais) — Decorator (API XML) — Composite (validação)
C) Decorator (Pedido/Combo) — Composite (adicionais) — Facade (API XML) — Adapter (validação)
D) Composite (Pedido/Combo) — Proxy (adicionais) — Facade (API XML) — Decorator (validação)
E) Adapter (Pedido/Combo) — Decorator (adicionais) — Proxy (API XML) — Composite (validação)

## Pergunta 03

Sobre o padrão Decorator, assinale a alternativa incorreta:

A) Permite adicionar responsabilidades a um objeto dinamicamente, em tempo de execução.
B) É uma alternativa mais flexível do que a herança para estender funcionalidades.
C) O decorador implementa a mesma interface do componente que está decorando.
D) É necessário criar uma subclasse para cada combinação possível de funcionalidades, tornando o número de classes proporcional ao número de combinações.
E) Vários decoradores podem ser empilhados (compostos) em torno de um mesmo componente.

## Pergunta 04

Duas equipes implementaram soluções que "envolvem" um objeto Servico original, expondo a mesma interface IServico:

Equipe A criou ServicoComLogAndCache, que adiciona funcionalidades de log e cache antes de delegar a chamada ao objeto real, podendo combinar várias dessas "camadas" dinamicamente.

Equipe B criou ServicoProtegido, que verifica se o usuário tem permissão antes de decidir se delega (ou não) a chamada ao objeto real, controlando o acesso a ele.

Assinale a alternativa correta:

A) Ambas as equipes implementaram o padrão Decorator.
B) Ambas as equipes implementaram o padrão Proxy.
C) Equipe A implementou Decorator; Equipe B implementou Proxy.
D) Equipe A implementou Proxy; Equipe B implementou Decorator.
E) Equipe A implementou Composite; Equipe B implementou Decorator.

## Pergunta 05: Composite x Decorator (semelhança estrutural)

Ambos os padrões Composite e Decorator costumam ser implementados com uma classe abstrata/interface comum da qual derivam tanto "folhas" quanto "envoltórios/composições", permitindo tratamento uniforme via recursão.

Qual é a principal diferença de intenção entre eles?

A) Composite existe para adicionar responsabilidades dinamicamente a um objeto; Decorator existe para representar hierarquias parte-todo.
B) Composite representa uma estrutura hierárquica de parte-todo, permitindo tratar objetos individuais e composições de forma uniforme; Decorator adiciona responsabilidades a um objeto individual sem alterar sua interface.
C) Ambos têm exatamente a mesma intenção, diferindo apenas na nomenclatura das classes.
D) Composite é usado exclusivamente para controle de acesso; Decorator para hierarquias de árvore.
E) Decorator só pode ser aplicado a objetos folha; Composite só pode ser aplicado a objetos compostos.

## Pergunta 06

Um editor gráfico permite agrupar formas (círculos, retângulos) em grupos que podem conter outros grupos, formando hierarquias arbitrárias, todas tratadas com a mesma interface Forma (com método desenhar()). Como o editor pode ter milhões de formas na tela, o time decidiu que o estado intrínseco de cada forma (como o tipo e a textura) seja compartilhado entre instâncias, enquanto posição e tamanho (estado extrínseco) são passados no momento do desenho.
Essa descrição combina quais dois padrões estruturais?

A) Decorator e Proxy
B) Composite e Flyweight
C) Facade e Adapter
D) Composite e Decorator
E) Flyweight e Adapter

## Pergunta 07

Uma equipe está integrando um sistema de e-commerce legado a um novo gateway de pagamentos internacional, cuja API expõe métodos com nomes e formatos de dados totalmente diferentes dos usados pelo sistema atual (ex: submitTransaction(xml) em vez de processPayment(json)). Ao mesmo tempo, essa equipe também quer oferecer para o time de frontend um único ponto de entrada simples, finalizarCompra(), que internamente orquestra estoque, pagamento e envio de e-mail — subsistemas complexos com várias classes.
Quais padrões estão sendo aplicados, respectivamente, nos dois problemas descritos?

A) Facade/Adapter
B) Adapter/Facade
C) Proxy/Facade
D) Adapter/Decorator
E) Facade/Proxy
