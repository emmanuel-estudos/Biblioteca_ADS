# Perguntas Abertas

## Contexto

Responda considerando a situação iniciar do código recebido, da versão 

## Pergunta 01

### Enunciado 01

Por que o uso de parâmetros booleanos (usarCache, gerarLog) para ligar/desligar comportamentos é considerado indesejável?

### Respostas 01

O uso de flags booleanas para alterar o comportamento de um método é uma prática inadequada (code smell) por diversos motivos:

- Violação do Princípio da Responsabilidade Única (SRP): Força um único método a gerenciar múltiplos cenários operacionais (gerar relatório, gerenciar armazenamento/recuperação de cache e emitir logs de auditoria).
- Explosão Combinatória e Complexidade Ciclomática: A cada nova funcionalidade adicionada via booleano (ex: enviarPorEmail, comCriptografia), o número de caminhos de execução dentro do método dobra ($2^n$), enchendo o código de blocos if/else e dificultando a leitura, manutenção e testes unitários.
- Acoplamento Forte: Impede a adição de novos comportamentos sem modificar a assinatura do método e o código interno existente.

"É considerado uma Violação Princípio da Responsabilidade Única (SRP), forçando um único método a lidar com vários cenários. Cada nova funcionalidade gera um novo caminho de execução, deixando cada vez mais difícil a manutenção e leitura."

## Pergunta 02

### Enunciado 02

Que problema surge por a verificação de autenticação/permissão estar misturada com a lógica de geração do relatório dentro do mesmo método?

### Resposta 02



## Pergunta 03

Identifique qual padrão você aplicou para cada um dos dois problemas do enunciado.

## Pergunta 04

Que princípio(s) de design (SRP, OCP etc.) o método gerarRelatorio viola no código original?
