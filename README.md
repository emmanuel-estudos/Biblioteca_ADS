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
