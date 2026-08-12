# Respostas Abertas

Aqui estão as respostas fundamentadas para as **Perguntas Abertas**, tomando como base o código inicial do `SistemaRelatorios`:

---

### **Pergunta 01**

**Por que o uso de parâmetros booleanos (`usarCache`, `gerarLog`) para ligar/desligar comportamentos é considerado indesejável?**

**Resposta:**
O uso de *flags* booleanas para alterar o comportamento de um método é uma prática inadequada (*code smell*) por diversos motivos:

1. **Violação do Princípio da Responsabilidade Única (SRP):** Força um único método a gerenciar múltiplos cenários operacionais (gerar relatório, gerenciar armazenamento/recuperação de cache e emitir logs de auditoria).
2. **Explosão Combinatória e Complexidade Ciclomática:** A cada nova funcionalidade adicionada via booleano (ex: `enviarPorEmail`, `comCriptografia`), o número de caminhos de execução dentro do método dobra ($2^n$), enchendo o código de blocos `if/else` e dificultando a leitura, manutenção e testes unitários.
3. **Acoplamento Forte:** Impede a adição de novos comportamentos sem modificar a assinatura do método e o código interno existente.

É considerado uma Violação Princípio da Responsabilidade Única (SRP), forçando um único método a lidar com vários cenários. Cada nova funcionalidade gera um novo caminho de execução, deixando cada vez mais difícil a manutenção e leitura.

---

### **Pergunta 02**

**Que problema surge por a verificação de autenticação/permissão estar misturada com a lógica de geração do relatório dentro do mesmo método?**

**Resposta:**
O acoplamento direto das regras de segurança (autenticação e autorização por papel) com a lógica de negócio (geração do relatório) gera os seguintes problemas:

1. **Dificuldade de Reutilização e Testes:** Não é possível testar a geração do relatório de forma isolada, nem reutilizar a lógica de geração em contextos onde a segurança é tratada em outro nível (ex: tarefas agendadas em segundo plano).
2. **Duplicação de Código:** Se outro serviço do sistema (ex: geração de gráficos ou exportação de dados) precisar das mesmas regras de permissão para `ADMIN` e `OPERADOR`, esse trecho de validação precisará ser duplicado em vários pontos do sistema.
3. **Rigidez e Falta de Extensibilidade:** Alterações nas políticas de acesso (ex: adicionar o papel `GERENTE` ou mudar o formato das credenciais) forçam a modificação direta da classe responsável pela geração do relatório, aumentando o risco de introduzir bugs no domínio principal.

Com esse acoplamento, muito dificilmente um código vai poder ser reutilizado, então a cada geração de relatório todas as regras têm que ser repetidas e isso gera a duplicação de código desnecessária. Se houver alterações em regras de negócio, a manutenção de código terá que ser feita em vários lugares, aumentando a chance de erros.

---

### **Pergunta 03**

**Identifique qual padrão você aplicou para cada um dos dois problemas do enunciado.**

**Resposta:**

* **Para o Controle de Acesso (Segurança):** Foi aplicado o padrão **Proxy** (especificamente o *Protection Proxy* ou Proxy de Proteção). A classe `ProxySeguranca` intercepta as chamadas, valida se o usuário está autenticado e possui a role necessária e, somente em caso positivo, repassa a execução para o gerador real.
* **Para as funcionalidades de Cache e Log:** Foi aplicado o padrão **Decorator**. As classes `CacheDecorator` e `LogDecorator` envolvem dynamicamente a instância do gerador de relatórios, adicionando responsabilidades de armazenamento e auditoria em tempo de execução, eliminando a necessidade dos parâmetros booleanos e dos comandos condicionais no método principal.

Padrão Proxy para a segurança, interceptando as chamadas, valida se o usuário está autenticado e possui a role necessária. Somente em caso positivo repassa a execução para o gerador real.

Padrão Decorator para Cache e Log, adicionando responsabilidades de armazenamento e auditoria em tempo de execução. Tira a necessidade de vários valores boleanos.

---

### **Pergunta 04**

**Que princípio(s) de design (SRP, OCP etc.) o método `gerarRelatorio` viola no código original?**

**Resposta:**
O método `gerarRelatorio` no código original viola principalmente dois princípios do SOLID:

1. **Single Responsibility Principle - SRP (Princípio da Responsabilidade Única):**
* *Violação:* O método possui múltiplos motivos para mudar: alterar a regra de segurança/papéis de usuário, alterar a estratégia do cache, mudar a forma como o log é emitido ou alterar os tipos de relatórios suportados.


2. **Open/Closed Principle - OCP (Princípio do Aberto/Fechado):**
* *Violação:* O código não está fechado para modificação nem aberto para extensão. Para adicionar um novo comportamento cross-cutting (ex: compactar em `.zip` ou enviar log para a nuvem) ou um novo formato de relatório, é necessário abrir a classe `SistemaRelatorios` e modificar diretamente o método `gerarRelatorio`, adicionando mais parâmetros ou estruturas `if/else`.

Single Responsibility Principle - SRP (Princípio da Responsabilidade Única): possui vários motivos para ocorrer mudanças no arquivo. Caso ocorra alguma mudança nas regras de segurança, estratégias de cache, mudanças na forma de emissão do log ou relatórios gerados ele teria que ser alterado.

Open/Closed Principle - OCP (Princípio do Aberto/Fechado): não está nem aberto para modificação nem aberto para extensão. Se for preciso adicionar um novo comportamento, um novo formato de relatório, é necessário adicionar mais IF/ELSE na classe.