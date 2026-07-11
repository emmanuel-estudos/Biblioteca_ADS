# Página 02: Respostas

## Perguntas

### Pergunta 01

**Pergunta:** Onde cada um dos padrões foi utilizado? Por que eles foram necessários? Cite os nomes das classes utilizadas ao longo da explicação.

O padrão Singleton foi usado na classe ConfiguracaoJogo, sendo necessário porque as configurações de um jogo (nível de dificuldade, por exemplo) representam um estado global que não pode ter múltiplas instâncias diferentes existindo ao mesmo tempo.

O padrão Builder foi usado na classe Builder, dentro da classe Personagem (Personagem.Builder), sendo necessário para resolver o construtor na classe Personagem. Com a existência de muitos parâmetros para a criação de um personagem, esse padrão permite uma montagem passo a passo, deixando o código mais limpo e evitando a passagem de argumentos errados por falta de atenção ou organização.

O padrão Abstract Factory foi usado na interface FactoryPersonagem e nas suas implementações (HumanoGuerreiroFactory). Com o uso desse padrão, é garantido que se algum Guerreiro Humano for criado, ele receberá informações padrão correspondentes (Armadura, Arma, Habilidades, Atributos), tirando assim a necessidade de uso de múltiplos IF/ELSE, deixando o código mais legível e eliminando combinações inválidas antes permitidas.

O padrão Factory Method foi usado para a delegação da instanciação para as subclasses dentro da hierarquia da classe FactoryPersonagem, onde cada classe diz como os métodos funcionam (criarArma() e criarArmadura(), por exemplo) e também no método criarPersonagem da classe CriadorPersonagem, que opera aplicando a interface.

O padrão Prototype foi usado na classe Personagem, com a implementação da interface Cloneable e o método clone(). Foi aplicado no método criarPersonagemEspecial() da classe CriadorPersonagem. Foi necessário o uso porque a criação é custosa: em vez de construir um novo personagem do zero usando o Builder, um objeto base é clonado e são feitas alterações pontuais com base nos parâmetros passados (nome, força, arma, armadura, por exemplo).

### Pergunta 02

**Pergunta:** Com base no código resultante da sua implementação, como ele se adequa aos princípios SOLID?

O código resultante se adequa aos princípios SOLID porque:

As responsabilidades de cada classe estão bem definidas, com Personagem guardando os dados, Personagem.Builder construindo, FactoryPersonagem dizendo as regras de cada raça/classe e CriadorPersonagem atuando como um administrador. (S - Single Responsibility Principle).

Para a adição de uma nova raça, seria necessária a modificação de uma estrutura complexa de IF/ELSES, correndo o risco de quebrar algo que estava funcionando, mas agora o sistema está aberto para extensões e sem a necessidade de modificações, bastando apenas adicionar uma classe de personagem nova implementando a interface FactoryPersonagem. (O - Open/Closed Principle).

Qualquer classe concreta (HumanoGuerreiroFactory, por exemplo) pode ser passada para o método criarPersonagem() da classe CriadorPersonagem sem que o sistema quebre, já que o método espera uma interface genérica e segue o contrato estabelecido. (L - Liskov Substitution Principle).

A interface FactoryPersonagem é compacta e objetiva para o que é necessário para instanciar a família de atributos de um personagem. (I - Interface Segregation Principle).

A classe de alto nível CriadorPersonagem não depende mais das classes concretas de baixo nível 'hardcodadas', como Armas e Armaduras, por exemplo. Ela está inteiramente dependente da abstração FactoryPersonagem, o que permite a injeção de dependências e facilita a criação de testes unitários. (D - Dependency Inversion Principle).

## Arquivos

### arquivo atv1.rpg.config/ConfiguracaoJogo

```Java
package br.edu.ifpb.ads.padroes.atv1.rpg.config;

public class ConfiguracaoJogo {

    private static ConfiguracaoJogo instancia;
    private int nivelDificuldade;

    private ConfiguracaoJogo() {
        this.nivelDificuldade = 1;
    }

    public static synchronized ConfiguracaoJogo getInstancia() {
        if (instancia == null) {
            instancia = new ConfiguracaoJogo();
        }
        return instancia;
    }

    public int getNivelDificuldade() {
        return nivelDificuldade;
    }

    public void setNivelDificuldade(int nivel) {
        this.nivelDificuldade = nivel;
    }

}
```

### arquivo atv1.rpg/CriadorPersonagem

```Java
package br.edu.ifpb.ads.padroes.atv1.rpg;

import br.edu.ifpb.ads.padroes.atv1.rpg.FactoryPersonagem;

public class CriadorPersonagem {

    // Criação usando Builder e Factory Abstrato
    public static Personagem criarPersonagem(String nome, FactoryPersonagem factoryPersonagem) {

        int[] atributosBase = factoryPersonagem.getAtributosBase();

        return new Personagem.Builder(nome)
                .racaClasse(factoryPersonagem.getRaca(), factoryPersonagem.getClasse())
                .atributos(atributosBase[0], atributosBase[1], atributosBase[2], atributosBase[3], atributosBase[4])
                .equipamentos(factoryPersonagem.criarArma(), factoryPersonagem.criarArmadura())
                .habilidades(factoryPersonagem.criarHabilidades())
                .build();

    }

    // Usando Prototype para clonagem e modificação
    public static Personagem criarPersonagemEspecial(Personagem base) {
        // Verificando se o PersonagemBase existe
        if (base == null) return null;

        // Clonando o PersonagemBase (Prototype)
        Personagem Lendario = base.clone();

        if (Lendario.getRaca().equals("Humano") && Lendario.getClasse().equals("Guerreiro")) {
            Lendario.setNome(Lendario.getNome() + " , o Salvador");
            Lendario.setForca(50);
            Lendario.setArma(new Arma("Excalibur", 50, "Espada"));
            Lendario.setArmadura(new Armadura("Armadura do Rei", 30, "Pesada"));
        }

        return Lendario;
    }

}
```

### arquivo atv1.rpg/FactoryPersonagem

```Java
package br.edu.ifpb.ads.padroes.atv1.rpg;

import br.edu.ifpb.ads.padroes.atv1.rpg.Arma;
import br.edu.ifpb.ads.padroes.atv1.rpg.Armadura;

// Factory Abstrato
public interface FactoryPersonagem {
    String getRaca();
    String getClasse();
    int[] getAtributosBase(); // Para [força, inteligência, agilidade, vida, mana]
    Arma criarArma(); // para [nome, dano, tipo]
    Armadura criarArmadura(); // para [nome, defesa, tipo]
    String[] criarHabilidades();
}
```

### arquivo atv1.rpg/HumanoGuerreiroFactory

```Java
package br.edu.ifpb.ads.padroes.atv1.rpg;

public class HumanoGuerreiroFactory implements FactoryPersonagem {

    @Override
    public String getRaca() {
        return "Humano";
    }

    @Override
    public String getClasse() {
        return "Guerreiro";
    }

    @Override
    public int[] getAtributosBase() {
        // [força, inteligência, agilidade, vida, mana]
        return new int[]{20, 15, 30, 100, 10};
    }

    @Override
    public Arma criarArma() {
        // [nome, dano, tipo]
        return new Arma("Espada de Ferro Básica", 10, "Espada");
    }

    @Override
    public Armadura criarArmadura() {
        // [nome, defesa, tipo]
        return new Armadura("Armadura de Placas Leves", 15, "Leve");
    }

    @Override
    public String[] criarHabilidades() {
        return new String[]{"Investida", "Bloqueio", "Esquiva"};
    }
}
```

### arquivo atv1.rpg/Personagem

```Java
package br.edu.ifpb.ads.padroes.atv1.rpg;

public class Personagem implements Cloneable {

    private String nome;
    private String raca;
    private String classe;
    private int forca;
    private int inteligencia;
    private int agilidade;
    private int vida;
    private int mana;
    private Arma arma;
    private Armadura armadura;
    private String[] habilidades;

    // Construtor Privado: a criação só ocorrerá via Builder
    private Personagem(Builder builder) {
        this.nome = nome;
        this.raca = raca;
        this.classe = classe;
        this.forca = forca;
        this.inteligencia = inteligencia;
        this.agilidade = agilidade;
        this.vida = vida;
        this.mana = mana;
        this.arma = arma;
        this.armadura = armadura;
        this.habilidades = habilidades;
    }

    // Getters e Setters básicos
    public String getNome() {
        return nome;
    }

    public String getRaca() {
        return raca;
    }

    public String getClasse() {
        return classe;
    }

    public int getForca() {
        return forca;
    }

    public int getInteligencia() {
        return inteligencia;
    }

    public int getAgilidade() {
        return agilidade;
    }

    public int getVida() {
        return vida;
    }

    public int getMana() {
        return mana;
    }

    public Arma getArma() {
        return arma;
    }

    public Armadura getArmadura() {
        return armadura;
    }

    public String[] getHabilidades() {
        return habilidades;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setForca(int forca) {
        this.forca = forca;
    }

    public void setArma(Arma arma) {
        this.arma = arma;
    }

    public void setArmadura(Armadura armadura) {
        this.armadura = armadura;
    }

    @Override
    public String toString() {
        return String.format("%s - %s %s (F:%d, I:%d, A:%d, V:%d, M:%d)",
                nome, raca, classe, forca, inteligencia, agilidade, vida, mana);
    }

    @Override
    public Personagem clone() {
        try {
            return (Personagem) super.clone();
        } catch (CloneNotSupportedException e) {
            throw new AssertionError();
        }
    }

    // Classe Builder usada internamente
    public static class Builder {
        private String nome;
        private String raca;
        private String classe;
        private int forca;
        private int inteligencia;
        private int agilidade;
        private int vida;
        private int mana;
        private Arma arma;
        private Armadura armadura;
        private String[] habilidades;

        public Builder(String nome) {
            this.nome = nome;
        }

        public Builder racaClasse(String raca, String classe) {
            this.raca = raca;
            this.classe = classe;
            return this;
        }

        public Builder atributos(int forca, int inteligencia, int agilidade, int vida, int mana) {
            this.forca = forca;
            this.inteligencia = inteligencia;
            this.agilidade = agilidade;
            this.vida = vida;
            this.mana = mana;
            return this;
        }

        public Builder equipamentos(Arma arma, Armadura armadura) {
            this.arma = arma;
            this.armadura = armadura;
            return this;
        }

        public Builder habilidades(String[] habilidades) {
            this.habilidades = habilidades;
            return this;
        }

        public Personagem build() {
            return new Personagem(this);
        }
    }

}
```
