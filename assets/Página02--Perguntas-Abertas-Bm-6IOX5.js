import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`perguntas-abertas`,children:`Perguntas Abertas`}),`
`,(0,n.jsx)(r.h2,{id:`contexto`,children:`Contexto`}),`
`,(0,n.jsx)(r.p,{children:`Responda considerando a situação iniciar do código recebido, da versão`}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-01`,children:`Pergunta 01`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado-01`,children:`Enunciado 01`}),`
`,(0,n.jsx)(r.p,{children:`Por que o uso de parâmetros booleanos (usarCache, gerarLog) para ligar/desligar comportamentos é considerado indesejável?`}),`
`,(0,n.jsx)(r.h3,{id:`respostas-01`,children:`Respostas 01`}),`
`,(0,n.jsx)(r.p,{children:`O uso de flags booleanas para alterar o comportamento de um método é uma prática inadequada (code smell) por diversos motivos:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Violação do Princípio da Responsabilidade Única (SRP): Força um único método a gerenciar múltiplos cenários operacionais (gerar relatório, gerenciar armazenamento/recuperação de cache e emitir logs de auditoria).`}),`
`,(0,n.jsx)(r.li,{children:`Explosão Combinatória e Complexidade Ciclomática: A cada nova funcionalidade adicionada via booleano (ex: enviarPorEmail, comCriptografia), o número de caminhos de execução dentro do método dobra ($2^n$), enchendo o código de blocos if/else e dificultando a leitura, manutenção e testes unitários.`}),`
`,(0,n.jsx)(r.li,{children:`Acoplamento Forte: Impede a adição de novos comportamentos sem modificar a assinatura do método e o código interno existente.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`"É considerado uma Violação Princípio da Responsabilidade Única (SRP), forçando um único método a lidar com vários cenários. Cada nova funcionalidade gera um novo caminho de execução, deixando cada vez mais difícil a manutenção e leitura."`}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-02`,children:`Pergunta 02`}),`
`,(0,n.jsx)(r.h3,{id:`enunciado-02`,children:`Enunciado 02`}),`
`,(0,n.jsx)(r.p,{children:`Que problema surge por a verificação de autenticação/permissão estar misturada com a lógica de geração do relatório dentro do mesmo método?`}),`
`,(0,n.jsx)(r.h3,{id:`resposta-02`,children:`Resposta 02`}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-03`,children:`Pergunta 03`}),`
`,(0,n.jsx)(r.p,{children:`Identifique qual padrão você aplicou para cada um dos dois problemas do enunciado.`}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-04`,children:`Pergunta 04`}),`
`,(0,n.jsx)(r.p,{children:`Que princípio(s) de design (SRP, OCP etc.) o método gerarRelatorio viola no código original?`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};