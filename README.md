# Configurações

Os arquivos presentes na `main` devem ser aqueles em sua versão final. O desenvolvimento de arquivos deve acontecer na branch `develop`.

## Transferência de Arquivos entre Branchs

Para passar os arquivos e pastas da branch `develop` para a `main`, use o comando abaixo no terminal da `main`:

```bash
git restore --source develop "caminho/para/arquivo01.mdx" "caminho/para/arquivo02.mdx"
```

## GitHub Pages

Já existe uma branch específica para o uso do GitHub Pages. Às vezes há arquivos em suas versões finais que não precisam estar "públicos".

Para mandar os arquivos da branch `main` para a `gh-pages`, use o comando abaixo:

```bash
npm run deploy
```

## Arquivos não devem ficar públicos

Para cadastrar um arquivo ou uma pasta como "protegida" de ir para o GitHub Pages, vá no arquivo [ignorePaths.ts](./src/config/ignorePaths.ts) e coloque o caminho relativo.

## Arquivos na Linguagem C

### Download e Extração

1. Baixe a versão compactada em `.zip` do WinLibs (GCC + MinGW-w64 UCRT) no site oficial `winlibs.com`.
2. Extraia o conteúdo baixado.

### Adicionar o GCC às Variáveis de Ambiente (Path)

1. Pressione a tecla Windows, digite **Variáveis de Ambiente** e selecione **Editar** as variáveis de ambiente do sistema.
2. Clique no botão **Variáveis de Ambiente...** no canto inferior direito.
3. Na seção **Variáveis do usuário** (ou **Variáveis do sistema**), localize e selecione a variável **Path**.
4. Clique em **Editar...** e, na janela que abrir, clique em **Novo**.
5. Cole o caminho exato da pasta **bin**, depois da extração do arquivo `.zip`:

```plaintext
C:\caminho\da\pasta\extraida\bin
```

6. Clique em OK em todas as janelas abertas para salvar as alterações.

### Verificar a Instalação

Feche todos os terminais abertos (incluindo o VS Code, caso esteja aberto).

Abra um novo terminal (PowerShell ou Prompt de Comando interno do VS Code) e execute:

```bash
gcc --version
```

Se a instalação foi concluída com êxito, o terminal exibirá as informações da versão do compilador:

```plaintext
gcc (WinLibs ...) 14.x.x
Copyright (C) 2024 Free Software Foundation, Inc.
```

### Configuração no VS Code (Opcional)

Abra o VS Code e pressione `Ctrl + Shift + P`.

Selecione **C/C++: Editar Configurações (UI)**.

No campo Caminho do compilador (Compiler path), informe o caminho para o arquivo `bin` da pasta extraída:

```plaintext
C:\caminho\da\pasta\extraida\bin
```

No campo Modo do IntelliSense, altere para windows-gcc-x64.

## Ordem de Exibição de Arquivos de Resolução

O componente `QuestaoLink.tsx` é responsável por gerenciar e aplicar a identidade visual dos links de questões conforme a linguagem de programação configurada dentro dos **CodeBlock**s.

### Ordem de Exibição

A ordem de exibição das linguagens nos componentes de redirecionamento é definida no array `ORDEM_LINGUAGENS`:

```typescript
export const ORDEM_LINGUAGENS: string[] = [
  'c',
  'c++',
  'python', 'py',
  'java',
  'js',
  'ts',
];
```

Para alterar a prioridade de exibição, basta reordenar os elementos deste array.

### Como Adicionar uma Nova Linguagem ou Estilização

As cores e temas de cada linguagem ficam centralizados no objeto `CORES_LINGUAGENS`. Para cadastrar uma nova linguagem:

1. Adicione a chave com o nome da linguagem em caixa baixa dentro de `CORES_LINGUAGENS`.
2. Configure o objeto `CorLinguagem` contendo as propriedades **cor**, **bg (background)** e **border**.
3. (Opcional) Inclua a nova chave no array `ORDEM_LINGUAGENS` caso ela deva aparecer em listagens ordenadas.

#### Exemplo de Adição de Nova Linguagem ou Estilização

```typescript
// 1. Adicione a cor no objeto CORES_LINGUAGENS
export const CORES_LINGUAGENS: Record<string, CorLinguagem> = {
  // ... linguagens existentes
  
  php: {
    cor: '#777bb4',
    bg: 'rgba(119, 123, 180, 0.1)',
    border: 'rgba(119, 123, 180, 0.3)',
  },
};

// 2. Se necessário, inclua na lista de ordem
export const ORDEM_LINGUAGENS: string[] = [
  // ...
  'php',
];
```

Caso uma linguagem não esteja cadastrada em CORES_LINGUAGENS, o componente aplicará automaticamente o tema `default`.
