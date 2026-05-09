# 📚 Log de Configuração: Biblioteca ADS (React + TS + MDX)

Este documento registra a estrutura técnica e as ferramentas instaladas para o portal de estudos.

## 🛠️ Stack Tecnológica

- **Framework:** React 18 com TypeScript (via Vite).
- **Estilização:** Tailwind CSS v4 (Engine-first).
- **Processamento de Conteúdo:** MDX (Markdown + React Components).
- **Roteamento:** React Router Dom.

---

## 🚀 Passos Concluídos com Sucesso

### 1. Inicialização do Projeto

O projeto foi criado dentro de um repositório existente ignorando arquivos conflitantes:

```bash
npm create vite@latest . -- --template react-ts
npm install

```

### 2. Instalação de Dependências Críticas

Foram instalados os motores de roteamento, processamento de Markdown e estilização moderna:

```bash
# Roteamento e MDX
npm install react-router-dom
npm install -D @mdx-js/rollup @mdx-js/react

# Tailwind CSS v4 e PostCSS
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer

```

### 3. Configuração do Compilador (Vite)

O arquivo `vite.config.ts` foi ajustado para permitir a importação de arquivos `.mdx` como componentes React:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [mdx(), react()],
});
```

### 4. Ajuste de Estilização (Tailwind v4)

Devido às mudanças na versão 4 do Tailwind, a configuração do PostCSS foi ajustada manualmente para evitar erros de compatibilidade:

**`postcss.config.js`**

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```

**`src/index.css`**

```css
@import "tailwindcss";

:root {
  --primary: #2563eb; /* Cor alterada dinamicamente por matéria */
  --secondary: #3b82f6;
}
```

---

## 📂 Estrutura de Pastas Planejada

O projeto seguirá a estrutura de **Rotas Dinâmicas** para suportar as 30+ matérias:

```text
src/
├── content/          # Onde os arquivos .mdx serão escritos
│   └── periodo1/
│       └── materia/
│           └── aula01.mdx
├── hooks/            # Hook useContent.ts (leitura automática via glob)
├── components/       # Componentes como <Gabarito /> e <LayoutMateria />
└── pages/            # Paginação dinâmica (:periodo/:materia/:aula)

```

---

## 💡 Pontos de Atenção (Dicas de Ouro)

1. **Refresh no GitHub Pages:** Como é uma SPA, se houver erro 404 ao atualizar a página, usaremos o `HashRouter` ou um `404.html`.
2. **Importação Automática:** Usaremos o `import.meta.glob` para que novos arquivos `.mdx` apareçam no site automaticamente sem precisar mexer no código das rotas.
3. **Variáveis CSS:** Toda a identidade visual das matérias será controlada via `var(--primary)` no arquivo de configuração de cada disciplina.

---

**Status Atual:** Ambiente configurado e pronto para a criação do sistema de navegação automática.
