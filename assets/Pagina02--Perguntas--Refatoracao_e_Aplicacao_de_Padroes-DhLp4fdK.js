import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`refatoração-e-aplicacão-de-padrões`,children:`Refatoração e Aplicacão de Padrões`}),`
`,(0,n.jsx)(r.p,{children:`Você recebeu o código legado de um sistema de criação de personagens para um jogo RPG (código do pacote atv1). O sistema atual funciona, mas apresenta vários problemas de design que dificultam a manutenção, extensibilidade e testabilidade do código.`}),`
`,(0,n.jsx)(r.p,{children:`O jogo possui:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`3 Raças: Humano, Elfo, Orc`}),`
`,(0,n.jsx)(r.li,{children:`3 Classes: Guerreiro, Mago, Arqueiro`}),`
`,(0,n.jsx)(r.li,{children:`Sistema de Equipamentos: Armas e Armaduras específicas por classe`}),`
`,(0,n.jsx)(r.li,{children:`Sistema de Atributos: Força, Inteligência, Agilidade, Vida, Mana`}),`
`,(0,n.jsx)(r.li,{children:`Habilidades Especiais: Cada combinação raça/classe tem habilidades única.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Refatore o sistema utilizando os seguintes padrões:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Factory Method`}),`
`,(0,n.jsx)(r.li,{children:`Abstract Factory`}),`
`,(0,n.jsx)(r.li,{children:`Builder`}),`
`,(0,n.jsx)(r.li,{children:`Singleton`}),`
`,(0,n.jsx)(r.li,{children:`Prototype`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`estruturação-do-repositório`,children:`Estruturação do repositório`}),`
`,(0,n.jsx)(r.p,{children:`É um repositório em Java, sendo modificado pelo IntelliJ.`}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpgconfigconfiguracaojogo`,children:`arquivo atv1.rpg/config/ConfiguracaoJogo`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-Java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.ads.padroes.atv1.rpg.config;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`ConfiguracaoJogo`}),` {\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` nivelDificuldade;\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`ConfiguracaoJogo`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.nivelDificuldade = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getNivelDificuldade`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` nivelDificuldade;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`setNivelDificuldade`}),(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`(`,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` nivel)`]}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.nivelDificuldade = nivel;\r
    }\r
\r
}
`]})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpgarma`,children:`arquivo atv1.rpg/Arma`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-Java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Arma`}),` {\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` String nome;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` dano;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` String tipo;\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`Arma`}),(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`(String nome, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` dano, String tipo)`]}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.nome = nome;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.dano = dano;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.tipo = tipo;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getNome`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` nome;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getDano`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` dano;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getTipo`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` tipo;\r
    }\r
}
`]})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpgarmadura`,children:`arquivo atv1.rpg/Armadura`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-Java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Armadura`}),` {\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` String nome;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` defesa;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` String tipo;\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`Armadura`}),(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`(String nome, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` defesa, String tipo)`]}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.nome = nome;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.defesa = defesa;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.tipo = tipo;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getNome`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` nome;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getDefesa`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` defesa;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getTipo`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` tipo;\r
    }\r
\r
}
`]})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpgcriadorpersonagem`,children:`arquivo atv1.rpg/CriadorPersonagem`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-Java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`CriadorPersonagem`}),` {\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` Personagem `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`criarPersonagem`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(String nome, String raca, String classe)`}),` {\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`forca`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, inteligencia = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, agilidade = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, vida = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`, mana = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`;\r
        `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`Arma`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`arma`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`;\r
        `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`Armadura`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`armadura`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`;\r
        String[] habilidades = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`;\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (raca.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Humano"`}),`)) {\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (classe.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Guerreiro"`}),`)) {\r
                forca = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`15`}),`;\r
                inteligencia = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`8`}),`;\r
                agilidade = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`;\r
                vida = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`120`}),`;\r
                mana = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`30`}),`;\r
\r
                arma = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Arma`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Espada de Ferro"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`25`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Espada"`}),`);\r
                armadura = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Armadura`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Armadura de Placas"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`20`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Pesada"`}),`);\r
                habilidades = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`String`}),`[]{`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Investida"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Bloqueio"`}),`};\r
\r
            } `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`else`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (classe.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Mago"`}),`)) {\r
                forca = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`6`}),`;\r
                inteligencia = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`18`}),`;\r
                agilidade = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`8`}),`;\r
                vida = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`80`}),`;\r
                mana = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`150`}),`;\r
                arma = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Arma`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Cajado Mágico"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`15`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Cajado"`}),`);\r
                armadura = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Armadura`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Vestes Mágicas"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`8`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Leve"`}),`);\r
                habilidades = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`String`}),`[]{`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Bola de Fogo"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Cura"`}),`};\r
\r
            } `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`else`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (classe.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Arqueiro"`}),`)) {\r
                forca = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`;\r
                inteligencia = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`12`}),`;\r
                agilidade = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`16`}),`;\r
                vida = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`100`}),`;\r
                mana = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`70`}),`;\r
                arma = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Arma`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Arco Élfico"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`20`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Arco"`}),`);\r
                armadura = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Armadura`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Armadura de Couro"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`12`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Média"`}),`);\r
                habilidades = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`String`}),`[]{`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Tiro Certeiro"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Chuva de Flechas"`}),`};\r
            }\r
\r
        } `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`else`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (raca.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Elfo"`}),`)) {\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (classe.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Guerreiro"`}),`)) {\r
                forca = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`12`}),`;\r
                inteligencia = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`14`}),`;\r
                agilidade = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`16`}),`;\r
                vida = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`100`}),`;\r
                mana = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`60`}),`;\r
                arma = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Arma`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Lâmina Élfica"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`22`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Espada"`}),`);\r
                armadura = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Armadura`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Cota de Malha Élfica"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`15`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Média"`}),`);\r
                habilidades = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`String`}),`[]{`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Dança das Lâminas"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Agilidade Élfica"`}),`};\r
\r
            } `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`else`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (classe.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Mago"`}),`)) {\r
                forca = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`4`}),`;\r
                inteligencia = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`20`}),`;\r
                agilidade = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`14`}),`;\r
                vida = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`70`}),`;\r
                mana = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`180`}),`;\r
                arma = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Arma`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Cajado da Natureza"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`18`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Cajado"`}),`);\r
                armadura = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Armadura`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Mantos Élficos"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Leve"`}),`);\r
                habilidades = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`String`}),`[]{`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Magia da Natureza"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Teleporte"`}),`};\r
\r
            } `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`else`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (classe.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Arqueiro"`}),`)) {\r
                forca = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`8`}),`;\r
                inteligencia = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`16`}),`;\r
                agilidade = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`20`}),`;\r
                vida = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`90`}),`;\r
                mana = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`100`}),`;\r
                arma = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Arma`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Arco Longo Élfico"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`28`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Arco"`}),`);\r
                armadura = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Armadura`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Armadura de Couro Élfico"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`14`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Média"`}),`);\r
                habilidades = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`String`}),`[]{`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Tiro Múltiplo"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Camuflagem"`}),`};\r
            }\r
\r
        } `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`else`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (raca.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Orc"`}),`)) {\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (classe.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Guerreiro"`}),`)) {\r
                forca = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`20`}),`;\r
                inteligencia = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`6`}),`;\r
                agilidade = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`8`}),`;\r
                vida = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`150`}),`;\r
                mana = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`20`}),`;\r
                arma = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Arma`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Machado de Guerra"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`30`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Machado"`}),`);\r
                armadura = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Armadura`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Armadura Brutal"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`25`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Pesada"`}),`);\r
                habilidades = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`String`}),`[]{`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Fúria"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Pancada Devastadora"`}),`};\r
\r
            } `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`else`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (classe.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Mago"`}),`)) {\r
                `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// PROBLEMA: Combinação estranha, mas o código permite`}),`\r
                forca = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`;\r
                inteligencia = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`14`}),`;\r
                agilidade = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`6`}),`;\r
                vida = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`100`}),`;\r
                mana = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`120`}),`;\r
                arma = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Arma`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Cajado Tribal"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`12`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Cajado"`}),`);\r
                armadura = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Armadura`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Vestes Xamânicas"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`6`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Leve"`}),`);\r
                habilidades = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`String`}),`[]{`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Magia Sombria"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Invocação"`}),`};\r
\r
            } `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`else`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (classe.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Arqueiro"`}),`)) {\r
                forca = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`14`}),`;\r
                inteligencia = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`8`}),`;\r
                agilidade = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`12`}),`;\r
                vida = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`120`}),`;\r
                mana = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`40`}),`;\r
                arma = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Arma`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Arco de Osso"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`24`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Arco"`}),`);\r
                armadura = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Armadura`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Couro de Besta"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`16`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Média"`}),`);\r
                habilidades = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`String`}),`[]{`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Tiro Brutal"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Intimidação"`}),`};\r
            }\r
        }\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Retorna null se combinação inválida`}),`\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (arma == `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`) {\r
            System.out.println(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Combinação inválida: "`}),` + raca + `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`" "`}),` + classe);\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`;\r
        }\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Personagem`}),`(nome, raca, classe, forca, inteligencia, agilidade,\r
                vida, mana, arma, armadura, habilidades);\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` Personagem `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`criarPersonagemEspecial`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(String nome, String raca, String classe)`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`Personagem`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`base`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` criarPersonagem(nome, raca, classe);\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (base == `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`) `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`;\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (raca.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Humano"`}),`) && classe.equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Guerreiro"`}),`)) {\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Personagem`}),`(nome + `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`" o Lendário"`}),`, raca, classe,\r
                    `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`18`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`12`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`140`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`40`}),`,\r
                    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Arma`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Excalibur"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`35`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Espada"`}),`),\r
                    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Armadura`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Armadura do Rei"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`30`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Pesada"`}),`),\r
                    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`String`}),`[]{`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Investida"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Bloqueio"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Liderança"`}),`});\r
        }\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` base;\r
    }\r
\r
}
`]})}),`
`,(0,n.jsx)(r.h2,{id:`arquivo-atv1rpgpersonagem`,children:`arquivo atv1.rpg/Personagem`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-Java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Personagem`}),` {\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` String nome;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` String raca;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` String classe;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` forca;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` inteligencia;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` agilidade;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` vida;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` mana;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` Arma arma;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` Armadura armadura;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` String[] habilidades;\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`Personagem`}),(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`(String nome, String raca, String classe, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` forca,\r
                      `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` inteligencia, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` agilidade, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` vida, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` mana,\r
                      Arma arma, Armadura armadura, String[] habilidades)`]}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.nome = nome;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.raca = raca;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.classe = classe;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.forca = forca;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.inteligencia = inteligencia;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.agilidade = agilidade;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.vida = vida;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.mana = mana;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.arma = arma;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.armadura = armadura;\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.habilidades = habilidades;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Getters e Setters básicos`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getNome`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` nome;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getRaca`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` raca;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getClasse`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` classe;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getForca`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` forca;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getInteligencia`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` inteligencia;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getAgilidade`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` agilidade;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getVida`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` vida;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getMana`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` mana;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` Arma `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getArma`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` arma;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` Armadura `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getArmadura`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` armadura;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String[] getHabilidades() {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` habilidades;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`setNome`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(String nome)`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.nome = nome;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-meta`,children:`@Override`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`toString`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` String.format(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"%s - %s %s (F:%d, I:%d, A:%d, V:%d, M:%d)"`}),`,\r
                nome, raca, classe, forca, inteligencia, agilidade, vida, mana);\r
    }\r
\r
}
`]})}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-01`,children:`Pergunta 01`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Pergunta:`}),` Onde cada um dos padrões foi utilizado? Por que eles foram necessários? Cite os nomes das classes utilizadas ao longo da explicação.`]}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-02`,children:`Pergunta 02`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Pergunta:`}),` Com base no código resultante da sua implementação, como ele se adequa aos princípios SOLID?`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};