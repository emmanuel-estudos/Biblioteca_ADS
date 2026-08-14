import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,em:`em`,h1:`h1`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`respostas-abertas`,children:`Respostas Abertas`}),`
`,(0,n.jsxs)(r.p,{children:[`Aqui estão as respostas fundamentadas para as `,(0,n.jsx)(r.strong,{children:`Perguntas Abertas`}),`, tomando como base o código inicial do `,(0,n.jsx)(r.code,{children:`SistemaRelatorios`}),`:`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h3,{id:`pergunta-01`,children:(0,n.jsx)(r.strong,{children:`Pergunta 01`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.strong,{children:[`Por que o uso de parâmetros booleanos (`,(0,n.jsx)(r.code,{children:`usarCache`}),`, `,(0,n.jsx)(r.code,{children:`gerarLog`}),`) para ligar/desligar comportamentos é considerado indesejável?`]})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Resposta:`}),`\r
O uso de `,(0,n.jsx)(r.em,{children:`flags`}),` booleanas para alterar o comportamento de um método é uma prática inadequada (`,(0,n.jsx)(r.em,{children:`code smell`}),`) por diversos motivos:`]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Violação do Princípio da Responsabilidade Única (SRP):`}),` Força um único método a gerenciar múltiplos cenários operacionais (gerar relatório, gerenciar armazenamento/recuperação de cache e emitir logs de auditoria).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Explosão Combinatória e Complexidade Ciclomática:`}),` A cada nova funcionalidade adicionada via booleano (ex: `,(0,n.jsx)(r.code,{children:`enviarPorEmail`}),`, `,(0,n.jsx)(r.code,{children:`comCriptografia`}),`), o número de caminhos de execução dentro do método dobra ($2^n$), enchendo o código de blocos `,(0,n.jsx)(r.code,{children:`if/else`}),` e dificultando a leitura, manutenção e testes unitários.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Acoplamento Forte:`}),` Impede a adição de novos comportamentos sem modificar a assinatura do método e o código interno existente.`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`É considerado uma Violação Princípio da Responsabilidade Única (SRP), forçando um único método a lidar com vários cenários. Cada nova funcionalidade gera um novo caminho de execução, deixando cada vez mais difícil a manutenção e leitura.`}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h3,{id:`pergunta-02`,children:(0,n.jsx)(r.strong,{children:`Pergunta 02`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Que problema surge por a verificação de autenticação/permissão estar misturada com a lógica de geração do relatório dentro do mesmo método?`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Resposta:`}),`\r
O acoplamento direto das regras de segurança (autenticação e autorização por papel) com a lógica de negócio (geração do relatório) gera os seguintes problemas:`]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Dificuldade de Reutilização e Testes:`}),` Não é possível testar a geração do relatório de forma isolada, nem reutilizar a lógica de geração em contextos onde a segurança é tratada em outro nível (ex: tarefas agendadas em segundo plano).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Duplicação de Código:`}),` Se outro serviço do sistema (ex: geração de gráficos ou exportação de dados) precisar das mesmas regras de permissão para `,(0,n.jsx)(r.code,{children:`ADMIN`}),` e `,(0,n.jsx)(r.code,{children:`OPERADOR`}),`, esse trecho de validação precisará ser duplicado em vários pontos do sistema.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Rigidez e Falta de Extensibilidade:`}),` Alterações nas políticas de acesso (ex: adicionar o papel `,(0,n.jsx)(r.code,{children:`GERENTE`}),` ou mudar o formato das credenciais) forçam a modificação direta da classe responsável pela geração do relatório, aumentando o risco de introduzir bugs no domínio principal.`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Com esse acoplamento, muito dificilmente um código vai poder ser reutilizado, então a cada geração de relatório todas as regras têm que ser repetidas e isso gera a duplicação de código desnecessária. Se houver alterações em regras de negócio, a manutenção de código terá que ser feita em vários lugares, aumentando a chance de erros.`}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h3,{id:`pergunta-03`,children:(0,n.jsx)(r.strong,{children:`Pergunta 03`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Identifique qual padrão você aplicou para cada um dos dois problemas do enunciado.`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Resposta:`})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Para o Controle de Acesso (Segurança):`}),` Foi aplicado o padrão `,(0,n.jsx)(r.strong,{children:`Proxy`}),` (especificamente o `,(0,n.jsx)(r.em,{children:`Protection Proxy`}),` ou Proxy de Proteção). A classe `,(0,n.jsx)(r.code,{children:`ProxySeguranca`}),` intercepta as chamadas, valida se o usuário está autenticado e possui a role necessária e, somente em caso positivo, repassa a execução para o gerador real.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Para as funcionalidades de Cache e Log:`}),` Foi aplicado o padrão `,(0,n.jsx)(r.strong,{children:`Decorator`}),`. As classes `,(0,n.jsx)(r.code,{children:`CacheDecorator`}),` e `,(0,n.jsx)(r.code,{children:`LogDecorator`}),` envolvem dynamicamente a instância do gerador de relatórios, adicionando responsabilidades de armazenamento e auditoria em tempo de execução, eliminando a necessidade dos parâmetros booleanos e dos comandos condicionais no método principal.`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Padrão Proxy para a segurança, interceptando as chamadas, valida se o usuário está autenticado e possui a role necessária. Somente em caso positivo repassa a execução para o gerador real.`}),`
`,(0,n.jsx)(r.p,{children:`Padrão Decorator para Cache e Log, adicionando responsabilidades de armazenamento e auditoria em tempo de execução. Tira a necessidade de vários valores boleanos.`}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h3,{id:`pergunta-04`,children:(0,n.jsx)(r.strong,{children:`Pergunta 04`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.strong,{children:[`Que princípio(s) de design (SRP, OCP etc.) o método `,(0,n.jsx)(r.code,{children:`gerarRelatorio`}),` viola no código original?`]})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Resposta:`}),`\r
O método `,(0,n.jsx)(r.code,{children:`gerarRelatorio`}),` no código original viola principalmente dois princípios do SOLID:`]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:`Single Responsibility Principle - SRP (Princípio da Responsabilidade Única):`})}),`
`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:`Violação:`}),` O método possui múltiplos motivos para mudar: alterar a regra de segurança/papéis de usuário, alterar a estratégia do cache, mudar a forma como o log é emitido ou alterar os tipos de relatórios suportados.`]}),`
`]}),`
`,(0,n.jsxs)(r.ol,{start:`2`,children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:`Open/Closed Principle - OCP (Princípio do Aberto/Fechado):`})}),`
`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:`Violação:`}),` O código não está fechado para modificação nem aberto para extensão. Para adicionar um novo comportamento cross-cutting (ex: compactar em `,(0,n.jsx)(r.code,{children:`.zip`}),` ou enviar log para a nuvem) ou um novo formato de relatório, é necessário abrir a classe `,(0,n.jsx)(r.code,{children:`SistemaRelatorios`}),` e modificar diretamente o método `,(0,n.jsx)(r.code,{children:`gerarRelatorio`}),`, adicionando mais parâmetros ou estruturas `,(0,n.jsx)(r.code,{children:`if/else`}),`.`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Single Responsibility Principle - SRP (Princípio da Responsabilidade Única): possui vários motivos para ocorrer mudanças no arquivo. Caso ocorra alguma mudança nas regras de segurança, estratégias de cache, mudanças na forma de emissão do log ou relatórios gerados ele teria que ser alterado.`}),`
`,(0,n.jsx)(r.p,{children:`Open/Closed Principle - OCP (Princípio do Aberto/Fechado): não está nem aberto para modificação nem aberto para extensão. Se for preciso adicionar um novo comportamento, um novo formato de relatório, é necessário adicionar mais IF/ELSE na classe.`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};