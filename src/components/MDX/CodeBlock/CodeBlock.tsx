import React from 'react';
import * as S from './styles';

// Interface para Código Inline (uma crase: `código`)
export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

// Interface para Bloco de Código (três crases: ```código```)
export interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

// 1. Componente para código em linha (`texto`)
export const CodeInline: React.FC<CodeProps> = ({ children, ...props }) => {
  return <S.InlineCode {...props}>{children}</S.InlineCode>;
};

// 2. Componente para bloco de código multilinha (```código```)
export const CodePre: React.FC<PreProps> = ({ children, ...props }) => {
  let lang = 'Código Genérico';

  // Extrai a classe 'language-xxx' do elemento <code> interno gerado pelo MDX
  if (React.isValidElement(children)) {
    const className = (children.props as { className?: string }).className || '';
    const match = className.match(/language-(\w+)/);
    if (match && match[1]) {
      lang = match[1].toUpperCase();
    }
  }

  return (
    <S.PreBlock data-language={lang} {...props}>
      {children}
    </S.PreBlock>
  );
};