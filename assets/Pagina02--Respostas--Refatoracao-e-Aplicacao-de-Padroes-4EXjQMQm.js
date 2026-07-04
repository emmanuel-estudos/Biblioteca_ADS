import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`página-02-respostas`,children:`Página 02: Respostas`}),`
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
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-Java`,children:`package br.edu.ifpb.ads.padroes.atv1.rpg.config;\r
\r
public class ConfiguracaoJogo {\r
\r
    private static ConfiguracaoJogo instancia;\r
    private int nivelDificuldade;\r
\r
    private ConfiguracaoJogo() {\r
        this.nivelDificuldade = 1;\r
    }\r
\r
    public static synchronized ConfiguracaoJogo getInstancia() {\r
        if (instancia == null) {\r
            instancia = new ConfiguracaoJogo();\r
        }\r
        return instancia;\r
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
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpgcriadorpersonagem`,children:`arquivo atv1.rpg/CriadorPersonagem`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-Java`,children:`package br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
import br.edu.ifpb.ads.padroes.atv1.rpg.FactoryPersonagem;\r
\r
public class CriadorPersonagem {\r
\r
    // Criação usando Builder e Factory Abstrato\r
    public static Personagem criarPersonagem(String nome, FactoryPersonagem factoryPersonagem) {\r
\r
        int[] atributosBase = factoryPersonagem.getAtributosBase();\r
\r
        return new Personagem.Builder(nome)\r
                .racaClasse(factoryPersonagem.getRaca(), factoryPersonagem.getClasse())\r
                .atributos(atributosBase[0], atributosBase[1], atributosBase[2], atributosBase[3], atributosBase[4])\r
                .equipamentos(factoryPersonagem.criarArma(), factoryPersonagem.criarArmadura())\r
                .habilidades(factoryPersonagem.criarHabilidades())\r
                .build();\r
\r
    }\r
\r
    // Usando Prototype para clonagem e modificação\r
    public static Personagem criarPersonagemEspecial(Personagem base) {\r
        // Verificando se o PersonagemBase existe\r
        if (base == null) return null;\r
\r
        // Clonando o PersonagemBase (Prototype)\r
        Personagem Lendario = base.clone();\r
\r
        if (Lendario.getRaca().equals("Humano") && Lendario.getClasse().equals("Guerreiro")) {\r
            Lendario.setNome(Lendario.getNome() + " , o Salvador");\r
            Lendario.setForca(50);\r
            Lendario.setArma(new Arma("Excalibur", 50, "Espada"));\r
            Lendario.setArmadura(new Armadura("Armadura do Rei", 30, "Pesada"));\r
        }\r
\r
        return Lendario;\r
    }\r
\r
}
`})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpgfactorypersonagem`,children:`arquivo atv1.rpg/FactoryPersonagem`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-Java`,children:`package br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
import br.edu.ifpb.ads.padroes.atv1.rpg.Arma;\r
import br.edu.ifpb.ads.padroes.atv1.rpg.Armadura;\r
\r
// Factory Abstrato\r
public interface FactoryPersonagem {\r
    String getRaca();\r
    String getClasse();\r
    int[] getAtributosBase(); // Para [força, inteligência, agilidade, vida, mana]\r
    Arma criarArma(); // para [nome, dano, tipo]\r
    Armadura criarArmadura(); // para [nome, defesa, tipo]\r
    String[] criarHabilidades();\r
}
`})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpghumanoguerreirofactory`,children:`arquivo atv1.rpg/HumanoGuerreiroFactory`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-Java`,children:`package br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
public class HumanoGuerreiroFactory implements FactoryPersonagem {\r
\r
    @Override\r
    public String getRaca() {\r
        return "Humano";\r
    }\r
\r
    @Override\r
    public String getClasse() {\r
        return "Guerreiro";\r
    }\r
\r
    @Override\r
    public int[] getAtributosBase() {\r
        // [força, inteligência, agilidade, vida, mana]\r
        return new int[]{20, 15, 30, 100, 10};\r
    }\r
\r
    @Override\r
    public Arma criarArma() {\r
        // [nome, dano, tipo]\r
        return new Arma("Espada de Ferro Básica", 10, "Espada");\r
    }\r
\r
    @Override\r
    public Armadura criarArmadura() {\r
        // [nome, defesa, tipo]\r
        return new Armadura("Armadura de Placas Leves", 15, "Leve");\r
    }\r
\r
    @Override\r
    public String[] criarHabilidades() {\r
        return new String[]{"Investida", "Bloqueio", "Esquiva"};\r
    }\r
}
`})}),`
`,(0,n.jsx)(r.h3,{id:`arquivo-atv1rpgpersonagem`,children:`arquivo atv1.rpg/Personagem`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-Java`,children:`package br.edu.ifpb.ads.padroes.atv1.rpg;\r
\r
public class Personagem implements Cloneable {\r
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
    // Construtor Privado: a criação só ocorrerá via Builder\r
    private Personagem(Builder builder) {\r
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
    public void setForca(int forca) {\r
        this.forca = forca;\r
    }\r
\r
    public void setArma(Arma arma) {\r
        this.arma = arma;\r
    }\r
\r
    public void setArmadura(Armadura armadura) {\r
        this.armadura = armadura;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return String.format("%s - %s %s (F:%d, I:%d, A:%d, V:%d, M:%d)",\r
                nome, raca, classe, forca, inteligencia, agilidade, vida, mana);\r
    }\r
\r
    @Override\r
    public Personagem clone() {\r
        try {\r
            return (Personagem) super.clone();\r
        } catch (CloneNotSupportedException e) {\r
            throw new AssertionError();\r
        }\r
    }\r
\r
    // Classe Builder usada internamente\r
    public static class Builder {\r
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
        public Builder(String nome) {\r
            this.nome = nome;\r
        }\r
\r
        public Builder racaClasse(String raca, String classe) {\r
            this.raca = raca;\r
            this.classe = classe;\r
            return this;\r
        }\r
\r
        public Builder atributos(int forca, int inteligencia, int agilidade, int vida, int mana) {\r
            this.forca = forca;\r
            this.inteligencia = inteligencia;\r
            this.agilidade = agilidade;\r
            this.vida = vida;\r
            this.mana = mana;\r
            return this;\r
        }\r
\r
        public Builder equipamentos(Arma arma, Armadura armadura) {\r
            this.arma = arma;\r
            this.armadura = armadura;\r
            return this;\r
        }\r
\r
        public Builder habilidades(String[] habilidades) {\r
            this.habilidades = habilidades;\r
            return this;\r
        }\r
\r
        public Personagem build() {\r
            return new Personagem(this);\r
        }\r
    }\r
\r
}
`})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};