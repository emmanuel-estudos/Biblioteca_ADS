import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`builder-e-objetos-imutáveis`,children:`Builder e Objetos Imutáveis`}),`
`,(0,n.jsx)(r.h2,{id:`explicação-do-padrão`,children:`Explicação do Padrão`}),`
`,(0,n.jsx)(r.p,{children:`O Builder é um padrão criacional que separa o processo de construção de um objeto complexo da sua representação final. Desse modo, o mesmo processo passo a passo de construção pode produzir diferentes configurações e representações do objeto.`}),`
`,(0,n.jsxs)(r.p,{children:[`O material fundamenta o padrão explicando a importância de Objetos Imutáveis (cuja instância não pode ser modificada após a criação, como `,(0,n.jsx)(r.code,{children:`String`}),` e `,(0,n.jsx)(r.code,{children:`Integer`}),` em Java), que previnem efeitos colaterais severos de concorrência e estados inválidos.`]}),`
`,(0,n.jsx)(r.h2,{id:`por-que-usar-o-padrão`,children:`Por que usar o padrão?`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Garantia de Imutabilidade`}),`: Permite criar objetos complexos com atributos finais (`,(0,n.jsx)(r.code,{children:`private final`}),`) que são validados antes da instanciação real.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Eliminação de Construtores Telescópicos`}),`: Evita o antipadrão de ter múltiplos construtores sobrecarregados misturando parâmetros opcionais e obrigatórios.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Legibilidade com Fluent Interfaces`}),`: A construção do código torna-se extremamente limpa e legível através do encadeamento de métodos explicativos.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Isolamento da Lógica de Construção`}),`: Retira da classe principal a responsabilidade de validar e montar suas partes constituintes.`]}),`
`,(0,n.jsx)(r.h2,{id:`exemplo-apresentado-no-slide`,children:`Exemplo apresentado no slide`}),`
`,(0,n.jsxs)(r.p,{children:[`O slide apresenta uma classe `,(0,n.jsx)(r.code,{children:`Usuario`}),` contendo muitos atributos, divididos entre obrigatórios e opcionais:`]}),`
`,(0,n.jsxs)(r.p,{children:[`Obrigatórios: `,(0,n.jsx)(r.code,{children:`nome`}),`, `,(0,n.jsx)(r.code,{children:`sobrenome`}),`.\r
Opcionais: `,(0,n.jsx)(r.code,{children:`idade`}),`, `,(0,n.jsx)(r.code,{children:`telefone`}),`, `,(0,n.jsx)(r.code,{children:`endereco`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`O Problema: Criar um objeto imutável dessa classe exigiria um construtor gigante com todos os parâmetros. Se o cliente não quiser informar a `,(0,n.jsx)(r.code,{children:`idade`}),` ou o `,(0,n.jsx)(r.code,{children:`telefone`}),`, ele seria obrigado a passar valores como `,(0,n.jsx)(r.code,{children:`null`}),` ou `,(0,n.jsx)(r.code,{children:`0`}),` no construtor, deixando o código confuso, feio e propenso a erros de ordem de parâmetros.`]}),`
`,(0,n.jsx)(r.h2,{id:`solução-do-problema-apresentado-no-slide`,children:`Solução do problema apresentado no slide`}),`
`,(0,n.jsxs)(r.p,{children:[`A solução é criar uma classe interna estática chamada `,(0,n.jsx)(r.code,{children:`Builder`}),`. Esse Builder possui métodos para receber cada atributo opcional de forma encadeada, retornando a si mesmo (`,(0,n.jsx)(r.code,{children:`return this`}),`). O construtor da classe principal `,(0,n.jsx)(r.code,{children:`Usuario`}),` torna-se privado e aceita apenas o `,(0,n.jsx)(r.code,{children:`Builder`}),` como parâmetro, extraindo os dados e garantindo a imutabilidade após a chamada do método finalizador `,(0,n.jsx)(r.code,{children:`.build()`}),`.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-java`,children:`public class Usuario {\r
  private final String nome; // Obrigatório\r
  private final String sobrenome; // Obrigatório\r
  private final int idade; // Opcional\r
\r
  private Usuario(Builder builder) {\r
    this.nome = builder.nome;\r
    this.sobrenome = builder.sobrenome;\r
    this.idade = builder.idade;\r
  }\r
\r
  public static class Builder {\r
    private final String nome;\r
    private final String sobrenome;\r
    private int idade = 0; // Padrão\r
\r
    public Builder(String nome, String sobrenome) {\r
        this.nome = nome;\r
        this.sobrenome = sobrenome;\r
    }\r
\r
    public Builder idade(int idade) {\r
        this.idade = idade;\r
        return this;\r
    }\r
\r
    public Usuario build() {\r
        return new Usuario(this);\r
    }\r
  }\r
}\r
\r
// Uso prático (Fluent Interface)\r
Usuario u = new Usuario.Builder("Ana", "Costa").idade(30).build();
`})}),`
`,(0,n.jsx)(r.p,{children:`Nota: O material cita que frameworks modernos como Project Lombok (via @Builder) e Immutables automatizam essa estrutura para poupar escrita de código.`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};