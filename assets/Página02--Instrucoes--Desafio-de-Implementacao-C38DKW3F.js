import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`instruções`,children:`Instruções`}),`
`,(0,n.jsx)(r.h2,{id:`contexto`,children:`Contexto`}),`
`,(0,n.jsx)(r.p,{children:`Uma empresa mantém um sistema interno de geração de relatórios (SistemaRelatorios).\r
O código atual funciona, mas foi crescendo "na marra": a cada nova necessidade (cache, log, controle de acesso), alguém adicionou mais um parâmetro booleano e mais um bloco if dentro do mesmo método.`}),`
`,(0,n.jsx)(r.p,{children:`Você recebeu os seguintes arquivos-fonte (pacote relatorios):`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`GeradorRelatorio.java — interface do gerador de relatórios`}),`
`,(0,n.jsx)(r.li,{children:`GeradorRelatorioPDF.java e GeradorRelatorioExcel.java — implementações concretas`}),`
`,(0,n.jsx)(r.li,{children:`Usuario.java — classe de domínio simples (nome, autenticação, papel)`}),`
`,(0,n.jsx)(r.li,{children:`SistemaRelatorios.java — classe cliente que orquestra tudo (é aqui que estão os problemas)`}),`
`,(0,n.jsx)(r.li,{children:`Main.java — demonstração de uso com diferentes combinações de parâmetros`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Refatore o sistema utilizando exatamente dois padrões de projeto estruturais (dentre os estudados na disciplina - Adapter, Facade, Decorator, Proxy, Flyweight, Composite), de forma que:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`O controle de acesso (usuário autenticado e com papel ADMIN ou OPERADOR) deixe de estar misturado com a lógica de geração do relatório.`}),`
`,(0,n.jsx)(r.li,{children:`As funcionalidades de cache e de log deixem de depender de parâmetros booleanos e passem a poder ser combinadas livremente, sem exigir uma nova classe (ou um novo if) para cada combinação possível.`}),`
`,(0,n.jsx)(r.li,{children:`O comportamento observado ao rodar Main (mensagens de log, acerto/erro de cache, bloqueio de usuários sem permissão) continue equivalente ao original — pequenas diferenças na ordem das mensagens de log são aceitáveis, desde que justificadas.`}),`
`,(0,n.jsx)(r.li,{children:`As classes GeradorRelatorio, GeradorRelatorioPDF e GeradorRelatorioExcel podem ser reaproveitadas sem alteração na interface pública gerar(String).`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`código`,children:`Código`}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-srcmainjavabreduifpbpadroesestruturaisrelatoriosgeradorrelatoriojava`,children:`Arquivo 'src/main/java/br/edu/ifpb/padroes/estruturais/relatorios/GeradorRelatorio.java`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.padroes.estruturais.relatorios;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`interface`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`GeradorRelatorio`}),` {\r
    String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`gerar`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(String dadosBrutos)`}),`;\r
}
`]})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-srcmainjavabreduifpbpadroesestruturaisrelatoriosgeradorrelatorioexceljava`,children:`Arquivo 'src/main/java/br/edu/ifpb/padroes/estruturais/relatorios/GeradorRelatorioExcel.java`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.padroes.estruturais.relatorios;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`GeradorRelatorioExcel`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`implements`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`GeradorRelatorio`}),` {\r
    `,(0,n.jsx)(r.span,{className:`hljs-meta`,children:`@Override`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`gerar`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(String dadosBrutos)`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Simula processamento pesado de geração do relatório em Excel`}),`\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"[XLSX] Relatorio gerado a partir de: "`}),` + dadosBrutos;\r
    }\r
}
`]})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-srcmainjavabreduifpbpadroesestruturaisrelatoriosgeradorrelatoriopdfjava`,children:`Arquivo 'src/main/java/br/edu/ifpb/padroes/estruturais/relatorios/GeradorRelatorioPDF.java`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.padroes.estruturais.relatorios;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`GeradorRelatorioPDF`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`implements`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`GeradorRelatorio`}),` {\r
    `,(0,n.jsx)(r.span,{className:`hljs-meta`,children:`@Override`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`gerar`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(String dadosBrutos)`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Simula processamento pesado de geração do relatório em PDF`}),`\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"[PDF] Relatorio gerado a partir de: "`}),` + dadosBrutos;\r
    }\r
}
`]})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-srcmainjavabreduifpbpadroesestruturaisrelatoriosmainjava`,children:`Arquivo 'src/main/java/br/edu/ifpb/padroes/estruturais/relatorios/Main.java`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.padroes.estruturais.relatorios;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Main`}),` {\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`main`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(String[] args)`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`SistemaRelatorios`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`sistema`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`SistemaRelatorios`}),`();\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`Usuario`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`admin`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Usuario`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Ana"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`true`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"ADMIN"`}),`);\r
        `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`Usuario`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`visitante`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Usuario`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Bruno"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`true`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"VISITANTE"`}),`);\r
        `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`Usuario`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`naoLogado`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Usuario`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Carla"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`false`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"OPERADOR"`}),`);\r
\r
        System.out.println(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"--- Cenario 1: admin, com cache e log ---"`}),`);\r
        System.out.println(sistema.gerarRelatorio(admin, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"vendas-julho"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"PDF"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`true`}),`, `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`true`}),`));\r
\r
        System.out.println(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"--- Cenario 2: mesma consulta (deve vir do cache) ---"`}),`);\r
        System.out.println(sistema.gerarRelatorio(admin, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"vendas-julho"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"PDF"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`true`}),`, `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`true`}),`));\r
\r
        System.out.println(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"--- Cenario 3: admin, sem cache, com log, outro tipo ---"`}),`);\r
        System.out.println(sistema.gerarRelatorio(admin, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"vendas-agosto"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"EXCEL"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`false`}),`, `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`true`}),`));\r
\r
        System.out.println(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"--- Cenario 4: visitante (sem permissao) ---"`}),`);\r
        System.out.println(sistema.gerarRelatorio(visitante, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"vendas-julho"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"PDF"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`true`}),`, `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`false`}),`));\r
\r
        System.out.println(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"--- Cenario 5: usuario nao autenticado ---"`}),`);\r
        System.out.println(sistema.gerarRelatorio(naoLogado, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"vendas-julho"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"PDF"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`true`}),`, `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`true`}),`));\r
    }\r
}
`]})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-srcmainjavabreduifpbpadroesestruturaisrelatoriossistemarelatoriosjava`,children:`Arquivo 'src/main/java/br/edu/ifpb/padroes/estruturais/relatorios/SistemaRelatorios.java`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.padroes.estruturais.relatorios;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`import`}),` java.util.HashMap;\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`import`}),` java.util.Map;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`SistemaRelatorios`}),` {\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`GeradorRelatorio`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`geradorPDF`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`GeradorRelatorioPDF`}),`();\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`GeradorRelatorio`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`geradorExcel`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`GeradorRelatorioExcel`}),`();\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` Map<String, String> cache = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`HashMap`}),`<>();\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`gerarRelatorio`}),(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`(Usuario usuario, String dadosBrutos, String tipo,\r
                                  `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`boolean`}),` usarCache, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`boolean`}),` gerarLog)`]}),` {\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// ---- Controle de acesso misturado com a regra de negócio ----`}),`\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (!usuario.isAutenticado()) {\r
            System.out.println(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"[ERRO] Usuario nao autenticado tentou gerar relatorio."`}),`);\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`;\r
        }\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (!usuario.getPapel().equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"ADMIN"`}),`) && !usuario.getPapel().equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"OPERADOR"`}),`)) {\r
            System.out.println(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"[ERRO] Usuario sem permissao para gerar relatorios: "`}),` + usuario.getNome());\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`;\r
        }\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`String`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`chaveCache`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` tipo + `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`":"`}),` + dadosBrutos;\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// ---- Cache espalhado dentro do método de negócio ----`}),`\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (usarCache && cache.containsKey(chaveCache)) {\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (gerarLog) {\r
                System.out.println(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"[LOG] Retornando resultado do cache para "`}),` + usuario.getNome());\r
            }\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` cache.get(chaveCache);\r
        }\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (gerarLog) {\r
            System.out.println(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"[LOG] Usuario "`}),` + usuario.getNome() + `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`" solicitou relatorio tipo "`}),` + tipo);\r
        }\r
\r
        String resultado;\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (tipo.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"PDF"`}),`)) {\r
            resultado = geradorPDF.gerar(dadosBrutos);\r
        } `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`else`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (tipo.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"EXCEL"`}),`)) {\r
            resultado = geradorExcel.gerar(dadosBrutos);\r
        } `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`else`}),` {\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`throw`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`IllegalArgumentException`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Tipo de relatorio desconhecido: "`}),` + tipo);\r
        }\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (usarCache) {\r
            cache.put(chaveCache, resultado);\r
        }\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (gerarLog) {\r
            System.out.println(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"[LOG] Relatorio gerado com sucesso para "`}),` + usuario.getNome());\r
        }\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` resultado;\r
    }\r
}
`]})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-srcmainjavabreduifpbpadroesestruturaisrelatoriosusuariojava`,children:`Arquivo 'src/main/java/br/edu/ifpb/padroes/estruturais/relatorios/Usuario.java`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.padroes.estruturais.relatorios;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Usuario`}),` {\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` String nome;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`boolean`}),` autenticado;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` String papel; `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// "ADMIN", "OPERADOR", "VISITANTE"`}),`\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`Usuario`}),(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`(String nome, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`boolean`}),` autenticado, String papel)`]}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.nome = nome;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.autenticado = autenticado;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.papel = papel;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getNome`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` nome;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`boolean`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`isAutenticado`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` autenticado;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getPapel`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` papel;\r
    }\r
}
`]})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};