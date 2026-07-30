import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`refatoração-e-aplicacão-de-padrões`,children:`Refatoração e Aplicacão de Padrões`}),`
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
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-Java`,children:`package br.edu.ifpb.ads.padroes.atv1.rpg.config;\r
\r
public class ConfiguracaoJogo {\r
\r
    private int nivelDificuldade;\r
\r
    public ConfiguracaoJogo() {\r
        this.nivelDificuldade = 1;\r
    }\r
\r
    public int getNivelDificuldade() {\r
        return nivelDificuldade;\r
    }\r
\r
    public void setNivelDificuldade(int nivel) {\r
        this.nivelDificuldade = nivel;\r
    }\r
\r
}
`})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpgarma`,children:`arquivo atv1.rpg/Arma`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-Java`,children:`package br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
public class Arma {\r
\r
    private String nome;\r
    private int dano;\r
    private String tipo;\r
\r
    public Arma(String nome, int dano, String tipo) {\r
        this.nome = nome;\r
        this.dano = dano;\r
        this.tipo = tipo;\r
    }\r
\r
    public String getNome() {\r
        return nome;\r
    }\r
\r
    public int getDano() {\r
        return dano;\r
    }\r
\r
    public String getTipo() {\r
        return tipo;\r
    }\r
}
`})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpgarmadura`,children:`arquivo atv1.rpg/Armadura`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-Java`,children:`package br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
public class Armadura {\r
\r
    private String nome;\r
    private int defesa;\r
    private String tipo;\r
\r
    public Armadura(String nome, int defesa, String tipo) {\r
        this.nome = nome;\r
        this.defesa = defesa;\r
        this.tipo = tipo;\r
    }\r
\r
    public String getNome() {\r
        return nome;\r
    }\r
\r
    public int getDefesa() {\r
        return defesa;\r
    }\r
\r
    public String getTipo() {\r
        return tipo;\r
    }\r
\r
}
`})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpgcriadorpersonagem`,children:`arquivo atv1.rpg/CriadorPersonagem`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-Java`,children:`package br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
public class CriadorPersonagem {\r
\r
    public static Personagem criarPersonagem(String nome, String raca, String classe) {\r
\r
        int forca = 0, inteligencia = 0, agilidade = 0, vida = 0, mana = 0;\r
        Arma arma = null;\r
        Armadura armadura = null;\r
        String[] habilidades = null;\r
\r
        if (raca.equals("Humano")) {\r
            if (classe.equals("Guerreiro")) {\r
                forca = 15;\r
                inteligencia = 8;\r
                agilidade = 10;\r
                vida = 120;\r
                mana = 30;\r
\r
                arma = new Arma("Espada de Ferro", 25, "Espada");\r
                armadura = new Armadura("Armadura de Placas", 20, "Pesada");\r
                habilidades = new String[]{"Investida", "Bloqueio"};\r
\r
            } else if (classe.equals("Mago")) {\r
                forca = 6;\r
                inteligencia = 18;\r
                agilidade = 8;\r
                vida = 80;\r
                mana = 150;\r
                arma = new Arma("Cajado Mágico", 15, "Cajado");\r
                armadura = new Armadura("Vestes Mágicas", 8, "Leve");\r
                habilidades = new String[]{"Bola de Fogo", "Cura"};\r
\r
            } else if (classe.equals("Arqueiro")) {\r
                forca = 10;\r
                inteligencia = 12;\r
                agilidade = 16;\r
                vida = 100;\r
                mana = 70;\r
                arma = new Arma("Arco Élfico", 20, "Arco");\r
                armadura = new Armadura("Armadura de Couro", 12, "Média");\r
                habilidades = new String[]{"Tiro Certeiro", "Chuva de Flechas"};\r
            }\r
\r
        } else if (raca.equals("Elfo")) {\r
            if (classe.equals("Guerreiro")) {\r
                forca = 12;\r
                inteligencia = 14;\r
                agilidade = 16;\r
                vida = 100;\r
                mana = 60;\r
                arma = new Arma("Lâmina Élfica", 22, "Espada");\r
                armadura = new Armadura("Cota de Malha Élfica", 15, "Média");\r
                habilidades = new String[]{"Dança das Lâminas", "Agilidade Élfica"};\r
\r
            } else if (classe.equals("Mago")) {\r
                forca = 4;\r
                inteligencia = 20;\r
                agilidade = 14;\r
                vida = 70;\r
                mana = 180;\r
                arma = new Arma("Cajado da Natureza", 18, "Cajado");\r
                armadura = new Armadura("Mantos Élficos", 10, "Leve");\r
                habilidades = new String[]{"Magia da Natureza", "Teleporte"};\r
\r
            } else if (classe.equals("Arqueiro")) {\r
                forca = 8;\r
                inteligencia = 16;\r
                agilidade = 20;\r
                vida = 90;\r
                mana = 100;\r
                arma = new Arma("Arco Longo Élfico", 28, "Arco");\r
                armadura = new Armadura("Armadura de Couro Élfico", 14, "Média");\r
                habilidades = new String[]{"Tiro Múltiplo", "Camuflagem"};\r
            }\r
\r
        } else if (raca.equals("Orc")) {\r
            if (classe.equals("Guerreiro")) {\r
                forca = 20;\r
                inteligencia = 6;\r
                agilidade = 8;\r
                vida = 150;\r
                mana = 20;\r
                arma = new Arma("Machado de Guerra", 30, "Machado");\r
                armadura = new Armadura("Armadura Brutal", 25, "Pesada");\r
                habilidades = new String[]{"Fúria", "Pancada Devastadora"};\r
\r
            } else if (classe.equals("Mago")) {\r
                // PROBLEMA: Combinação estranha, mas o código permite\r
                forca = 10;\r
                inteligencia = 14;\r
                agilidade = 6;\r
                vida = 100;\r
                mana = 120;\r
                arma = new Arma("Cajado Tribal", 12, "Cajado");\r
                armadura = new Armadura("Vestes Xamânicas", 6, "Leve");\r
                habilidades = new String[]{"Magia Sombria", "Invocação"};\r
\r
            } else if (classe.equals("Arqueiro")) {\r
                forca = 14;\r
                inteligencia = 8;\r
                agilidade = 12;\r
                vida = 120;\r
                mana = 40;\r
                arma = new Arma("Arco de Osso", 24, "Arco");\r
                armadura = new Armadura("Couro de Besta", 16, "Média");\r
                habilidades = new String[]{"Tiro Brutal", "Intimidação"};\r
            }\r
        }\r
\r
        // Retorna null se combinação inválida\r
        if (arma == null) {\r
            System.out.println("Combinação inválida: " + raca + " " + classe);\r
            return null;\r
        }\r
\r
        return new Personagem(nome, raca, classe, forca, inteligencia, agilidade,\r
                vida, mana, arma, armadura, habilidades);\r
    }\r
\r
    public static Personagem criarPersonagemEspecial(String nome, String raca, String classe) {\r
        Personagem base = criarPersonagem(nome, raca, classe);\r
        if (base == null) return null;\r
\r
        if (raca.equals("Humano") && classe.equals("Guerreiro")) {\r
            return new Personagem(nome + " o Lendário", raca, classe,\r
                    18, 10, 12, 140, 40,\r
                    new Arma("Excalibur", 35, "Espada"),\r
                    new Armadura("Armadura do Rei", 30, "Pesada"),\r
                    new String[]{"Investida", "Bloqueio", "Liderança"});\r
        }\r
\r
        return base;\r
    }\r
\r
}
`})}),`
`,(0,n.jsx)(r.h2,{id:`arquivo-atv1rpgpersonagem`,children:`arquivo atv1.rpg/Personagem`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-Java`,children:`package br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
public class Personagem {\r
\r
    private String nome;\r
    private String raca;\r
    private String classe;\r
    private int forca;\r
    private int inteligencia;\r
    private int agilidade;\r
    private int vida;\r
    private int mana;\r
    private Arma arma;\r
    private Armadura armadura;\r
    private String[] habilidades;\r
\r
    public Personagem(String nome, String raca, String classe, int forca,\r
                      int inteligencia, int agilidade, int vida, int mana,\r
                      Arma arma, Armadura armadura, String[] habilidades) {\r
        this.nome = nome;\r
        this.raca = raca;\r
        this.classe = classe;\r
        this.forca = forca;\r
        this.inteligencia = inteligencia;\r
        this.agilidade = agilidade;\r
        this.vida = vida;\r
        this.mana = mana;\r
        this.arma = arma;\r
        this.armadura = armadura;\r
        this.habilidades = habilidades;\r
    }\r
\r
    // Getters e Setters básicos\r
    public String getNome() {\r
        return nome;\r
    }\r
\r
    public String getRaca() {\r
        return raca;\r
    }\r
\r
    public String getClasse() {\r
        return classe;\r
    }\r
\r
    public int getForca() {\r
        return forca;\r
    }\r
\r
    public int getInteligencia() {\r
        return inteligencia;\r
    }\r
\r
    public int getAgilidade() {\r
        return agilidade;\r
    }\r
\r
    public int getVida() {\r
        return vida;\r
    }\r
\r
    public int getMana() {\r
        return mana;\r
    }\r
\r
    public Arma getArma() {\r
        return arma;\r
    }\r
\r
    public Armadura getArmadura() {\r
        return armadura;\r
    }\r
\r
    public String[] getHabilidades() {\r
        return habilidades;\r
    }\r
\r
    public void setNome(String nome) {\r
        this.nome = nome;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return String.format("%s - %s %s (F:%d, I:%d, A:%d, V:%d, M:%d)",\r
                nome, raca, classe, forca, inteligencia, agilidade, vida, mana);\r
    }\r
\r
}
`})}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-01`,children:`Pergunta 01`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Pergunta:`}),` Onde cada um dos padrões foi utilizado? Por que eles foram necessários? Cite os nomes das classes utilizadas ao longo da explicação.`]}),`
`,(0,n.jsx)(r.h2,{id:`pergunta-02`,children:`Pergunta 02`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Pergunta:`}),` Com base no código resultante da sua implementação, como ele se adequa aos princípios SOLID?`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};