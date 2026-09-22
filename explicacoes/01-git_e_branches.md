# Git, Branches e Deploy

[← Voltar para o README](../README.md)

---

## Fluxo de Branches

* **`main`**: Contém apenas a versão final e estável do código.
* **`develop`**: Ambiente ativo de desenvolvimento. Todo código novo deve ser implementado aqui.

## Transferência de Arquivos entre Branches

Para trazer arquivos e pastas finalizados da branch `develop` para a `main`, execute o seguinte comando estando no terminal da branch `main`:

```bash
git restore --source develop "caminho/para/arquivo01.mdx" "caminho/para/arquivo02.mdx"
```

---

## Deploy no GitHub Pages

O projeto utiliza a branch `gh-pages` para a publicação estática. Para enviar as atualizações presentes na `main` para produção:

```bash
npm run deploy
```

---

## Ocultar Arquivos e Rotas Privadas

Caso existam arquivos ou pastas que não devam ficar acessíveis na versão pública do GitHub Pages, cadastre os caminhos relativos no arquivo de configuração:

* Arquivo: `src/config/ignorePaths.ts`

---

[← Voltar para o README](../README.md)
