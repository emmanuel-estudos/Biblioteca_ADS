# Inserção de Imagens e Ícones em Arquivos MDX

[← Voltar para o README](../README.md)

---

Todas as imagens e ícones inseridos nos arquivos MDX (seja via sintaxe Markdown padrão `![alt](src)` ou via componentes JSX) são padronizados automaticamente com a borda temática (`corPrimaria` configurada na matéria).

Os containers utilizam tags semânticas inline para evitar erros de hidratação HTML (como a inserção inadvertida de `<figure>` dentro de parágrafos `<p>`).

---

## Tipos de Imagem

Existem dois comportamentos de imagem suportados no projeto:

1. **Imagem de Referência (`tipo="referencia"`)**:
   * Usada para ilustrações de conteúdo, diagramas e gráficos.
   * Exibida de forma centralizada e responsiva.
   * O atributo `alt` (ou a prop `legenda`) é renderizado automaticamente como legenda em texto legível abaixo da imagem estilo artigo científico.
   * Se a imagem falhar ao carregar, a legenda é oculta para dar lugar apenas ao texto alternativo nativo do navegador.

2. **Ícone (`tipo="icone"` ou `<Icone/>`)**:
   * Usado para ilustrar linguagens, bancos de dados e ferramentas em sequência (ex: listagens de tecnologias).
   * **Sem legenda visual** sob nenhuma hipótese.
   * Dimensões padronizadas em **120px de largura × 60px de altura** (proporção retangular 2:1), garantindo alinhamento e uniformidade visual mesmo se a imagem original for muito grande.

---

## Formas de Uso em Arquivos `.mdx`

### 1. Imagem de Referência via Sintaxe Markdown Nativa

É o formato padrão ao usar `![texto](url)`. A imagem é tratada como referência e utiliza o texto dos colchetes como legenda visível:

```markdown
![Diagrama da arquitetura do banco de dados PostgreSQL](https://link-da-imagem.png)
```

---

### 2. Imagem de Referência via Componente JSX `<Imagem/>`

Permite maior controle sobre props como sobrescrever a legenda ou definir cores primárias customizadas para a borda:

```tsx
/* Legenda obtida automaticamente pelo alt */
<Imagem alt="Arquitetura do GCP BigTable" src="[https://link-da-imagem.png](https://link-da-imagem.png)"/>

/* Legenda personalizada explicitamente */
<Imagem alt="GCP BigTable" legenda="Visão geral da estrutura de armazenamento" src="[https://link-da-imagem.png](https://link-da-imagem.png)"/>
```

---

### 3. Ícone via Componente JSX `<Icone/>`

Ideal para exibir marcas, logos de tecnologias e bancos de dados lado a lado. O tamanho é reduzido automaticamente para 120×60px com borda e sem legenda abaixo:

```tsx
Os principais bancos de dados do tipo NoSQL são:

<Icone alt="Apache Cassandra" src="[https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-ar21~bgwhite.svg](https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-ar21~bgwhite.svg)"/>
<Icone alt="ScyllaDB" src="[https://www.vectorlogo.zone/logos/scylladb/scylladb-ar21~bgwhite.svg](https://www.vectorlogo.zone/logos/scylladb/scylladb-ar21~bgwhite.svg)"/>
<Icone alt="MongoDB" src="[https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21~bgwhite.svg](https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21~bgwhite.svg)"/>
```

*Também é possível usar o componente `<Imagem/>` explicitando o atributo `tipo="icone"`:*

```tsx
<Imagem alt="PostgreSQL" src="[https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21~bgwhite.svg](https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21~bgwhite.svg)" tipo="icone"/>
```

---

[← Voltar para o README](../README.md)
