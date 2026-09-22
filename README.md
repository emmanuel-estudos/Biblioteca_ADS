# Configurações e Documentação do Projeto

Bem-vindo à documentação do projeto. Para manter o repositório organizado, as instruções detalhadas de desenvolvimento, ambientes e uso dos componentes estão separadas na pasta [`explicacoes/`](./explicacoes/).

## Guia de Arquivos e Instruções

1. **[Git, Branches e Deploy](./explicacoes/01-git_e_branches.md)**
   - Regras de desenvolvimento (`main` vs `develop`).
   - Transferência de arquivos entre branches.
   - Deploy no GitHub Pages e proteção de rotas privadas (`ignorePaths.ts`).

2. **[Ambiente para Linguagem C](./explicacoes/02-configuracao_c.md)**
   - Download do WinLibs (GCC + MinGW-w64).
   - Configuração das Variáveis de Ambiente (`Path`).
   - Verificação e integração com o VS Code.

3. **[Ordem e Estilização de Linguagens](./explicacoes/03-ordenacao_linguagens.md)**
   - Configuração do componente `QuestaoLink.tsx`.
   - Ajuste de ordem de exibição (`ORDEM_LINGUAGENS`).
   - Cadastro de novas linguagens e temas de cores (`CORES_LINGUAGENS`).

4. **[Inserção de Imagens e Ícones em MDX](./explicacoes/04-componente_imagem.md)**
   - Padrão visual com bordas dinâmicas (`corPrimaria`).
   - Uso da sintaxe Markdown `![alt](src)` vs componentes JSX (`<Imagem />` e `<Icone />`).
   - Diferenças entre **Imagem de Referência** e **Ícones**.