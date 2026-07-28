# Instruções - Desafio de implementação

Você foi contratado para desenvolver um sistema de processamento de pagamentos para um e-commerce. O sistema deve suportar múltiplos gateways de pagamento (PayPal, Stripe, PagSeguro) e ser facilmente extensível para novos provedores no futuro.
Para simular as APIs dos gateways, você deve criar bibliotecas mock que representem:

- PayPal SDK: Classes que simulem chamadas para API do PayPal
- Stripe SDK: Classes que simulem chamadas para API do Stripe
- PagSeguro SDK: Classes que simulem chamadas para API do PagSeguro

Crie um projeto simples, onde todos esses gateways serão usados por uma classe PagamentoService via uma abstração PagamentoGateway que será injetada.

Para configurar/usar a injeção de dependência, utilize uma biblioteca como Pico Container ou Google Guice. Para essa atividade, NÃO É PERMITIDO CRIAR UM PROJETO COM 'Spring Boot'/'Spring Framework'.

A classe principal desse projeto deve:

1. Obter um objeto do tipo PagamentoService já configurado via Pico/Guice.
2. Utilizar um método pagar(), que por sua vez irá chamar um método da abstração PagamentoGateway.
3. Obtenha um novo objeto do tipo PagamentoService, com um gateway diferente e repita o passo 2.

O sistema deve ser extensível, de forma que novos gateways (como Pix) possam ser adicionadas sem modificar a classe PagamentoService.
