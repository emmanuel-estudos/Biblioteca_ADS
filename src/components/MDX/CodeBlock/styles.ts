import styled from 'styled-components';

// 1. Estilização para CÓDIGO INLINE (uma única crase `exemplo`)
export const InlineCode = styled.code`
  color: ${props => props.theme.corPrimaria};
  padding: 0.2rem 0.4rem;
  font-family: 'Fira Code', Consolas, Monaco, monospace;
  font-size: 0.9em;
  font-weight: 500;
`;

export const CopyButton = styled.button`
  position: absolute;
  top: 0.4rem;
  right: 0.5rem;
  background-color: #212121;
  color: #ffffff;
  border: 1px solid #333333;
  border-radius: 4px;
  padding: 0.35rem 0.45rem;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;

  img {
    width: 16px;
    height: 16px;
    display: block;
    filter: brightness(0) invert(1);
  }

  &:hover {
    background-color: #333333;
  }
`;

// 2. Estilização para BLOCO DE CÓDIGO (três crases ```)
export const PreBlock = styled.pre`
  position: relative;
  background-color: #000000; /* Fundo Preto Puro (Monokai) */
  color: #d8a228;            /* Cor base para parênteses, chaves e pontuação */
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #222222;
  margin: 1.5rem 0;
  overflow-x: auto;
  font-family: 'Fira Code', Consolas, Monaco, monospace;
  font-size: 0.9375rem;
  line-height: 1.6;
  tab-size: 2; -moz-tab-size: 2;

  code {
    background-color: transparent;
    padding: 0;
    border: none;
    border-radius: 0;
    color: inherit;
    font-family: inherit;
  }

  /* ========================================================= */
  /* PALETA MONOKAI EXACT MATCH (C / C++)                      */
  /* ========================================================= */

  /* Diretivas (#include, #define) */
  .hljs-meta,
  .hljs-meta .hljs-keyword,
  .hljs-meta-keyword {
    color: #f92672; /* Rosa Magenta */
    font-weight: 600;
    font-style: normal;
  }

  /* Cabeçalho dentro de #include (<stdio.h>) */
  .hljs-meta .hljs-string {
    color: #e6db74; /* Amarelo Monokai */
  }

  /* Tipos primitivos e palavras reservadas (void, int, float, return) */
  .hljs-keyword,
  .hljs-type,
  .hljs-selector-tag {
    color: #66d9ef; /* Ciano / Azul Claro */
    font-style: italic;
  }

  /* Nomes de Funções e Chamadas (main, printf, scanf) */
  .hljs-built_in,
  .hljs-title,
  .hljs-title.hljs-function,
  .hljs-function {
    color: #a6e22e; /* Verde Monokai */
    font-style: normal;
  }

  /* Parâmetros de funções e seus parênteses () */
  .hljs-params {
    color: #d8a228; /* Amarelo Queimado nos parênteses */
  }

  /* Variáveis e identificadores (num1, num2, media) */
  .hljs-variable,
  .hljs-params .hljs-variable {
    color: #f8f8f2; /* Branco Off-white */
  }

  /* Strings em geral ("Informe os tres numeros: ") */
  .hljs-string {
    color: #e6db74; /* Amarelo Monokai */
  }

  /* Especificadores de formato e escapes dentro de strings (%d, %.2f, \n) */
  .hljs-string .hljs-subst,
  .hljs-string .hljs-symbol,
  .hljs-string .hljs-char__specifier,
  .hljs-string .hljs-escape,
  .hljs-symbol,
  .hljs-subst {
    color: #ae81ff; /* Roxo / Lilás Monokai */
  }

  /* Números isolados (3, 0.5) */
  .hljs-number,
  .hljs-literal {
    color: #ae81ff; /* Roxo / Lilás Monokai */
  }

  /* Operadores (&, =, /, +, %) */
  .hljs-operator,
  .hljs-params .hljs-operator,
  .hljs-punctuation .hljs-operator {
    color: #f92672; /* Rosa / Vermelho Magenta */
  }

  /* Símbolos e Pontuação geral */
  .hljs-punctuation,
  .token.punctuation {
    color: #d8a228; /* Amarelo Queimado */
  }

  /* Comentários (// declarando variáveis) */
  .hljs-comment {
    color: #fd971f; /* Laranja Monokai */
    font-style: italic;
  }

  /* ========================================================= */
  /* ETIQUETAS SUPERIOR E INFERIOR                             */
  /* ========================================================= */
  &::before {
    content: attr(data-language);
    position: absolute;
    top: 0;
    left: 0;
    background-color: #1e1e1e;
    color: #ffd866;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    padding: 0.25rem 0.6rem;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 7px;
    text-transform: uppercase;
    user-select: none;
  }

  &::after {
    content: attr(data-language);
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #1e1e1e;
    color: #ffd866;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    padding: 0.25rem 0.6rem;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 7px;
    text-transform: uppercase;
    user-select: none;
  }
`;