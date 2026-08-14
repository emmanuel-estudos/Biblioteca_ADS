import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`página-02-respostas`,children:`Página 02: Respostas`}),`
`,(0,n.jsx)(r.h2,{id:`perguntas`,children:`Perguntas`}),`
`,(0,n.jsx)(r.h3,{id:`pergunta-01`,children:`Pergunta 01`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Pergunta:`}),` Onde cada um dos padrões foi utilizado? Por que eles foram necessários? Cite os nomes das classes utilizadas ao longo da explicação.`]}),`
`,(0,n.jsx)(r.p,{children:`O padrão Singleton foi usado na classe ConfiguracaoJogo, sendo necessário porque as configurações de um jogo (nível de dificuldade, por exemplo) representam um estado global que não pode ter múltiplas instâncias diferentes existindo ao mesmo tempo.`}),`
`,(0,n.jsx)(r.p,{children:`O padrão Builder foi usado na classe Builder, dentro da classe Personagem (Personagem.Builder), sendo necessário para resolver o construtor na classe Personagem. Com a existência de muitos parâmetros para a criação de um personagem, esse padrão permite uma montagem passo a passo, deixando o código mais limpo e evitando a passagem de argumentos errados por falta de atenção ou organização.`}),`
`,(0,n.jsx)(r.p,{children:`O padrão Abstract Factory foi usado na interface FactoryPersonagem e nas suas implementações (HumanoGuerreiroFactory). Com o uso desse padrão, é garantido que se algum Guerreiro Humano for criado, ele receberá informações padrão correspondentes (Armadura, Arma, Habilidades, Atributos), tirando assim a necessidade de uso de múltiplos IF/ELSE, deixando o código mais legível e eliminando combinações inválidas antes permitidas.`}),`
`,(0,n.jsx)(r.p,{children:`O padrão Factory Method foi usado para a delegação da instanciação para as subclasses dentro da hierarquia da classe FactoryPersonagem, onde cada classe diz como os métodos funcionam (criarArma() e criarArmadura(), por exemplo) e também no método criarPersonagem da classe CriadorPersonagem, que opera aplicando a interface.`}),`
`,(0,n.jsx)(r.p,{children:`O padrão Prototype foi usado na classe Personagem, com a implementação da interface Cloneable e o método clone(). Foi aplicado no método criarPersonagemEspecial() da classe CriadorPersonagem. Foi necessário o uso porque a criação é custosa: em vez de construir um novo personagem do zero usando o Builder, um objeto base é clonado e são feitas alterações pontuais com base nos parâmetros passados (nome, força, arma, armadura, por exemplo).`}),`
`,(0,n.jsx)(r.h3,{id:`pergunta-02`,children:`Pergunta 02`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Pergunta:`}),` Com base no código resultante da sua implementação, como ele se adequa aos princípios SOLID?`]}),`
`,(0,n.jsx)(r.p,{children:`O código resultante se adequa aos princípios SOLID porque:`}),`
`,(0,n.jsx)(r.p,{children:`As responsabilidades de cada classe estão bem definidas, com Personagem guardando os dados, Personagem.Builder construindo, FactoryPersonagem dizendo as regras de cada raça/classe e CriadorPersonagem atuando como um administrador. (S - Single Responsibility Principle).`}),`
`,(0,n.jsx)(r.p,{children:`Para a adição de uma nova raça, seria necessária a modificação de uma estrutura complexa de IF/ELSES, correndo o risco de quebrar algo que estava funcionando, mas agora o sistema está aberto para extensões e sem a necessidade de modificações, bastando apenas adicionar uma classe de personagem nova implementando a interface FactoryPersonagem. (O - Open/Closed Principle).`}),`
`,(0,n.jsx)(r.p,{children:`Qualquer classe concreta (HumanoGuerreiroFactory, por exemplo) pode ser passada para o método criarPersonagem() da classe CriadorPersonagem sem que o sistema quebre, já que o método espera uma interface genérica e segue o contrato estabelecido. (L - Liskov Substitution Principle).`}),`
`,(0,n.jsx)(r.p,{children:`A interface FactoryPersonagem é compacta e objetiva para o que é necessário para instanciar a família de atributos de um personagem. (I - Interface Segregation Principle).`}),`
`,(0,n.jsx)(r.p,{children:`A classe de alto nível CriadorPersonagem não depende mais das classes concretas de baixo nível 'hardcodadas', como Armas e Armaduras, por exemplo. Ela está inteiramente dependente da abstração FactoryPersonagem, o que permite a injeção de dependências e facilita a criação de testes unitários. (D - Dependency Inversion Principle).`}),`
`,(0,n.jsx)(r.h2,{id:`arquivos`,children:`Arquivos`}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpgconfigconfiguracaojogo`,children:`arquivo atv1.rpg.config/ConfiguracaoJogo`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-Java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.ads.padroes.atv1.rpg.config;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`ConfiguracaoJogo`}),` {\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` ConfiguracaoJogo instancia;\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` nivelDificuldade;\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`ConfiguracaoJogo`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.nivelDificuldade = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`synchronized`}),` ConfiguracaoJogo `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getInstancia`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (instancia == `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`) {\r
            instancia = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`ConfiguracaoJogo`}),`();\r
        }\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` instancia;\r
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
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpgcriadorpersonagem`,children:`arquivo atv1.rpg/CriadorPersonagem`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-Java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`import`}),` br.edu.ifpb.ads.padroes.atv1.rpg.FactoryPersonagem;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`CriadorPersonagem`}),` {\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Criação usando Builder e Factory Abstrato`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` Personagem `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`criarPersonagem`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(String nome, FactoryPersonagem factoryPersonagem)`}),` {\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),`[] atributosBase = factoryPersonagem.getAtributosBase();\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Personagem`}),`.Builder(nome)\r
                .racaClasse(factoryPersonagem.getRaca(), factoryPersonagem.getClasse())\r
                .atributos(atributosBase[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`], atributosBase[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`], atributosBase[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`], atributosBase[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`3`}),`], atributosBase[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`4`}),`])\r
                .equipamentos(factoryPersonagem.criarArma(), factoryPersonagem.criarArmadura())\r
                .habilidades(factoryPersonagem.criarHabilidades())\r
                .build();\r
\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Usando Prototype para clonagem e modificação`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` Personagem `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`criarPersonagemEspecial`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(Personagem base)`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Verificando se o PersonagemBase existe`}),`\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (base == `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`) `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`;\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Clonando o PersonagemBase (Prototype)`}),`\r
        `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`Personagem`}),` `,(0,n.jsx)(r.span,{className:`hljs-variable`,children:`Lendario`}),` `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` base.clone();\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (Lendario.getRaca().equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Humano"`}),`) && Lendario.getClasse().equals(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Guerreiro"`}),`)) {\r
            Lendario.setNome(Lendario.getNome() + `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`" , o Salvador"`}),`);\r
            Lendario.setForca(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`50`}),`);\r
            Lendario.setArma(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Arma`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Excalibur"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`50`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Espada"`}),`));\r
            Lendario.setArmadura(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Armadura`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Armadura do Rei"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`30`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Pesada"`}),`));\r
        }\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` Lendario;\r
    }\r
\r
}
`]})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpgfactorypersonagem`,children:`arquivo atv1.rpg/FactoryPersonagem`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-Java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`import`}),` br.edu.ifpb.ads.padroes.atv1.rpg.Arma;\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`import`}),` br.edu.ifpb.ads.padroes.atv1.rpg.Armadura;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Factory Abstrato`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`interface`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`FactoryPersonagem`}),` {\r
    String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getRaca`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),`;\r
    String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getClasse`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),`;\r
    `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),`[] getAtributosBase(); `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Para [força, inteligência, agilidade, vida, mana]`}),`\r
    Arma `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`criarArma`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),`; `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// para [nome, dano, tipo]`}),`\r
    Armadura `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`criarArmadura`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),`; `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// para [nome, defesa, tipo]`}),`\r
    String[] criarHabilidades();\r
}
`]})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpghumanoguerreirofactory`,children:`arquivo atv1.rpg/HumanoGuerreiroFactory`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-Java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`HumanoGuerreiroFactory`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`implements`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`FactoryPersonagem`}),` {\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-meta`,children:`@Override`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getRaca`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Humano"`}),`;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-meta`,children:`@Override`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`getClasse`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Guerreiro"`}),`;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-meta`,children:`@Override`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),`[] getAtributosBase() {\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// [força, inteligência, agilidade, vida, mana]`}),`\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`int`}),`[]{`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`20`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`15`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`30`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`100`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`};\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-meta`,children:`@Override`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` Arma `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`criarArma`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// [nome, dano, tipo]`}),`\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Arma`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Espada de Ferro Básica"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Espada"`}),`);\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-meta`,children:`@Override`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` Armadura `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`criarArmadura`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// [nome, defesa, tipo]`}),`\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Armadura`}),`(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Armadura de Placas Leves"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`15`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Leve"`}),`);\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-meta`,children:`@Override`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String[] criarHabilidades() {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`String`}),`[]{`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Investida"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Bloqueio"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Esquiva"`}),`};\r
    }\r
}
`]})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpgpersonagem`,children:`arquivo atv1.rpg/Personagem`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-Java`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`package`}),` br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Personagem`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`implements`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Cloneable`}),` {\r
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
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Construtor Privado: a criação só ocorrerá via Builder`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`Personagem`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(Builder builder)`}),` {\r
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
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`setForca`}),(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`(`,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` forca)`]}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.forca = forca;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`setArma`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(Arma arma)`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.arma = arma;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`setArmadura`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(Armadura armadura)`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.armadura = armadura;\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-meta`,children:`@Override`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` String `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`toString`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` String.format(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"%s - %s %s (F:%d, I:%d, A:%d, V:%d, M:%d)"`}),`,\r
                nome, raca, classe, forca, inteligencia, agilidade, vida, mana);\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-meta`,children:`@Override`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` Personagem `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`clone`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`try`}),` {\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` (Personagem) `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`super`}),`.clone();\r
        } `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`catch`}),` (CloneNotSupportedException e) {\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`throw`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`AssertionError`}),`();\r
        }\r
    }\r
\r
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Classe Builder usada internamente`}),`\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Builder`}),` {\r
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
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`Builder`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(String nome)`}),` {\r
            `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.nome = nome;\r
        }\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` Builder `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`racaClasse`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(String raca, String classe)`}),` {\r
            `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.raca = raca;\r
            `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.classe = classe;\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`;\r
        }\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` Builder `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`atributos`}),(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`(`,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` forca, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` inteligencia, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` agilidade, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` vida, `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`int`}),` mana)`]}),` {\r
            `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.forca = forca;\r
            `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.inteligencia = inteligencia;\r
            `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.agilidade = agilidade;\r
            `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.vida = vida;\r
            `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.mana = mana;\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`;\r
        }\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` Builder `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`equipamentos`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(Arma arma, Armadura armadura)`}),` {\r
            `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.arma = arma;\r
            `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.armadura = armadura;\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`;\r
        }\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` Builder `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`habilidades`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`(String[] habilidades)`}),` {\r
            `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`.habilidades = habilidades;\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`;\r
        }\r
\r
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` Personagem `,(0,n.jsx)(r.span,{className:`hljs-title function_`,children:`build`}),(0,n.jsx)(r.span,{className:`hljs-params`,children:`()`}),` {\r
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` `,(0,n.jsx)(r.span,{className:`hljs-title class_`,children:`Personagem`}),`(`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`this`}),`);\r
        }\r
    }\r
\r
}
`]})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};