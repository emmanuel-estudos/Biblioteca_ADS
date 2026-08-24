import { HTMLAttributes, ReactNode } from 'react';

// Interfaces do CodeBlock
export interface CodeProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export interface PreProps extends HTMLAttributes<HTMLPreElement> {
  children?: ReactNode;
}

// Interfaces globais do MDX (se necessário)
export interface MDXComponentProps {
  children?: ReactNode;
  className?: string;
}