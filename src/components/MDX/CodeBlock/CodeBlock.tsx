import React, { useState, useRef } from 'react';
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
  const preRef = useRef<HTMLPreElement>(null);
  const [copiado, setCopiado] = useState(false);
  const [iconError, setIconError] = useState(false);

  // Extrai a classe 'language-xxx' do elemento <code> interno gerado pelo MDX
  if (React.isValidElement(children)) {
    const className = (children.props as { className?: string }).className || '';
    const match = className.match(/language-(\w+)/);
    if (match && match[1]) {
      lang = match[1].toUpperCase();
    }
  }

  const handleCopy = async () => {
    if (!preRef.current) return;

    const codeElement = preRef.current.querySelector('code');
    const textoParaCopiar = codeElement ? codeElement.innerText : preRef.current.innerText;

    try {
      await navigator.clipboard.writeText(textoParaCopiar);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar código:', err);
    }
  };

  return (
    <S.PreBlock ref={preRef} data-language={lang} {...props}>
      <S.CopyButton onClick={handleCopy} aria-label={copiado ? 'Código copiado' : 'Copiar código'}>
        {!iconError ? (
          <img
            src={copiado ? '../../../../public/icons/check.svg' : '../../../../public/icons/copy.svg'}
            alt={copiado ? 'Copiado' : 'Copiar'}
            onError={() => setIconError(true)}
          />
        ) : (
          <span>{copiado ? 'Copiado!' : 'Copiar'}</span>
        )}
      </S.CopyButton>
      {children}
    </S.PreBlock>
  );
};