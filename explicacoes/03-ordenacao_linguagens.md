# Ordem e Estilização de Linguagens de Programação

[← Voltar para o README](../README.md)

---

O componente `QuestaoLink.tsx` gerencia e aplica a identidade visual dos links e blocos de questões conforme a linguagem de programação configurada.

## 1. Alterar a Ordem de Exibição

A prioridade de exibição das linguagens nos componentes de listagem e redirecionamento é definida no array `ORDEM_LINGUAGENS`:

```typescript
export const ORDEM_LINGUAGENS: string[] = [
  'c',
  'c++',
  'python',
  'py',
  'java',
  'js',
  'ts',
];
```

Para alterar a ordem de exibição, basta reordenar os elementos deste array.

---

## 2. Adicionar uma Nova Linguagem ou Alterar Temas

As cores e bordas de cada linguagem ficam centralizadas no objeto `CORES_LINGUAGENS`.

Para cadastrar uma nova linguagem:

1. Adicione a chave com o nome da linguagem em caixa baixa dentro de `CORES_LINGUAGENS`.
2. Configure o objeto `CorLinguagem` contendo as propriedades **cor**, **bg** (background) e **border**.
3. Inclua a chave no array `ORDEM_LINGUAGENS` caso ela deva aparecer em listagens ordenadas.

### Exemplo

```typescript
// 1. Cadastre as cores no objeto CORES_LINGUAGENS
export const CORES_LINGUAGENS: Record<string, CorLinguagem> = {
  // ... linguagens existentes
  
  php: {
    cor: '#777bb4',
    bg: 'rgba(119, 123, 180, 0.1)',
    border: 'rgba(119, 123, 180, 0.3)',
  },
};

// 2. Adicione ao array de ordenação (se aplicável)
export const ORDEM_LINGUAGENS: string[] = [
  // ...
  'php',
];
```

> **Nota:** Caso uma linguagem não esteja cadastrada em `CORES_LINGUAGENS`, o componente aplicará automaticamente o tema `default`.

---

[← Voltar para o README](../README.md)
