Com a base técnica (Vite, Tailwind, MDX) sólida e o servidor rodando sem erros, o próximo passo é criar o **"Cérebro"** do seu portal: o sistema que lê automaticamente suas pastas e arquivos.

Como você terá cerca de 30 matérias, não queremos criar rotas manualmente para cada uma. Vamos configurar a **infraestrutura de dados**.

Aqui está o plano para agora:

---

### 1. Organizar a Pasta de Conteúdo

Primeiro, vamos criar uma estrutura de exemplo para garantir que o código de leitura tenha o que ler. No seu terminal:

```bash
# Cria uma estrutura de exemplo: Periodo 2 -> Sistemas Operacionais
mkdir -p src/content/p2/sistemas-operacionais

```

Dentro de `sistemas-operacionais`, crie dois arquivos:

1. `config.ts` (Para as cores e ícones da matéria).
2. `aula01.mdx` (Um arquivo de teste).

\
**`config.ts`:**

```typescript
export const config = {
  nome: "Sistemas Operacionais",
  corPrimaria: "#2c3e50",
  corSecundaria: "#3498db",
  periodo: "2º Período",
};
```

---

### 2. Criar o Hook de Leitura Automática (`useContent`)

Este é o passo mais importante. Ele vai escanear sua pasta `src/content` e entregar para o React uma lista de tudo o que ele encontrou.

Crie o arquivo `src/hooks/useContent.ts`:

```typescript
// Hook para gerenciar e carregar o conteúdo das matérias
const allMdxFiles = import.meta.glob("../content/**/*.mdx");
const allConfigs = import.meta.glob("../content/**/config.ts", { eager: true });

export const useContent = () => {
  // Lista todas as matérias baseadas nas pastas que possuem config.ts
  const getMaterias = () => {
    return Object.keys(allConfigs).map((path) => {
      const parts = path.split("/");
      return {
        slug: parts[parts.length - 2], // nome da pasta da matéria
        periodo: parts[parts.length - 3], // nome da pasta do período
        // @ts-ignore - acessa o conteúdo do arquivo config.ts
        dados: allConfigs[path].config,
      };
    });
  };

  // Busca as aulas de uma matéria específica
  const getAulasByMateria = (periodo: string, materia: string) => {
    const prefix = `../content/${periodo}/${materia}/`;
    return Object.keys(allMdxFiles)
      .filter((path) => path.startsWith(prefix))
      .map((path) => ({
        id: path.split("/").pop()?.replace(".mdx", ""),
        fullPath: path,
      }));
  };

  return { getMaterias, getAulasByMateria, allMdxFiles };
};
```

---

### 3. Configurar as Rotas Dinâmicas

Agora vamos dizer ao React que a URL do site deve seguir o padrão das suas pastas. Instale o roteador se ainda não o fez (`npm install react-router-dom`) e ajuste o seu `src/main.tsx`:

Substitua o conteúdo de `src/main.tsx` para envolver o app no roteador:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Usamos HashRouter para o GitHub Pages
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
```

---

### 4. Criar o Componente de Gabarito (O seu preferido!)

Já que o ambiente aceita MDX, vamos criar o componente que você usará em todas as provas.

Crie `src/components/Gabarito.tsx`:

```tsx
import React from "react";

interface GabaritoProps {
  resposta: string;
  children: React.ReactNode;
}

export const Gabarito = ({ resposta, children }: GabaritoProps) => {
  return (
    <details className="my-6 border-l-4 border-primary bg-primary/5 rounded-r-lg group">
      <summary className="font-bold p-4 cursor-pointer text-primary list-none flex items-center">
        <span className="group-open:rotate-90 transition-transform mr-2">
          ▶
        </span>
        ✅ Ver Gabarito
      </summary>
      <div className="px-8 pb-4">
        <div className="bg-white p-4 rounded border border-primary/20 shadow-sm">
          <p className="font-bold text-lg mb-2">Resposta: {resposta}</p>
          <div className="text-gray-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </details>
  );
};
```

---

### Por que esse é o próximo passo ideal?

Com isso pronto, você já pode:

1. **Navegar:** Ir para `#/p2/sistemas-operacionais`.
2. **Carregar:** O sistema vai ler a aula automaticamente.
3. **Estilizar:** O componente de Gabarito já usa as variáveis de cor (`border-primary`) que definimos.

**O que você quer fazer agora?** Posso te ajudar a montar a **página de listagem das matérias** (a Home do portal) ou a **página que renderiza o MDX** na tela.
