import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

export default defineConfig({
  plugins: [
    {
      enforce: 'pre', 
      ...mdx({
        // Habilita o uso do MDXProvider
        providerImportSource: '@mdx-js/react',
        // Adiciona suporte a tabelas e listas de tarefas do GitHub
        remarkPlugins: [remarkGfm],
        // Aqui você adicionaria outros plugins de rehype se quisesse
        rehypePlugins: [
          // Adiciona IDs automaticamente aos títulos
          rehypeSlug,
        ],
      })
    }, 
    react()
  ],
})