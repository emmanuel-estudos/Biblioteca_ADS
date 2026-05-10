// src/mdx.d.ts
declare module '*.mdx' {
  import type { ComponentType } from 'react'

  // Definimos que o componente aceita um objeto de props genérico, mas seguro
  const MDXComponent: ComponentType<Record<string, unknown>>
  export default MDXComponent
}
