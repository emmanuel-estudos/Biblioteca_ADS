import styled from 'styled-components';

// 1. Estilização apenas para CÓDIGO INLINE (uma única crase `exemplo`)
export const InlineCode = styled.code`
  color: ${props => props.theme.corPrimaria};
  
  padding: 0.2rem 0.4rem;
  font-family: 'Fira Code', Consolas, Monaco, monospace;
  font-size: 0.9em;
  font-weight: 500;
  
`;

// 2. Estilização para BLOCO DE CÓDIGO (três crases ```)
export const PreBlock = styled.pre`
	position: relative;
  background-color: #19181a; /* Fundo Charcoal escuro */
  color: #f8f8f2;            /* Texto base (Off-white) */
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #2d2a2e;
  margin: 1.5rem 0;
  overflow-x: auto;
  font-family: 'Fira Code', Consolas, Monaco, monospace;
  font-size: 0.9375rem;
  line-height: 1.6;

  code {
    background-color: transparent;
    padding: 0;
    border: none;
    border-radius: 0;
    color: inherit;
    font-family: inherit;
  }

  /* ========================================================= */
  /* PALETA MONOKAI CHARCOAL PURPLE                            */
  /* ========================================================= */

  /* Palavras reservadas (import, export, const, let, function, return, if) */
  .hljs-keyword,
  .hljs-selector-tag {
    color: #ff61ef; /* Rosa/Roxo Magenta vibrante */
    font-weight: 600;
  }

  /* Nomes de funções e métodos chamados */
  .hljs-title.hljs-function,
  .hljs-function,
  .hljs-title {
    color: #a9dc76; /* Verde Monokai */
  }

  /* Strings ("texto", 'texto') */
  .hljs-string {
    color: #ffd866; /* Amarelo quente */
  }

  /* Números (123) e Booleans (true, false, null) */
  .hljs-number,
  .hljs-literal {
    color: #ab9df2; /* Purple/Roxo Monokai pastel */
  }

  /* Variáveis e parâmetros */
  .hljs-variable,
  .hljs-params {
    color: #f8f8f2; /* Branco leve */
  }

  /* Tipos, Classes e Interfaces (React.FC, string, number, interface) */
  .hljs-type,
  .hljs-class .hljs-title {
    color: #78dce8; /* Ciano / Azul piscina */
  }

  /* Atributos / Propriedades em JS/JSX/HTML */
  .hljs-attr,
  .hljs-property {
    color: #fc9867; /* Laranja Monokai */
  }

  /* Tags HTML / JSX (<div />, <span />) */
  .hljs-tag,
  .hljs-name {
    color: #ff61ef; /* Rosa / Roxo */
  }

  /* Comentários dentro do código */
  .hljs-comment {
    color: #72707e; /* Cinza Charcoal discreto */
    font-style: italic;
  }

	/* ========================================================= */
  /* ETIQUETA SUPERIOR ESQUERDA                               */
  /* ========================================================= */
  &::before {
    content: attr(data-language); /* Pega o texto do data-language */
    position: absolute;
    top: 0;
    left: 0;
    background-color: #2d2a2e;
    color: #ffd866; /* Amarelo Monokai para dar destaque */
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    padding: 0.25rem 0.6rem;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 7px;
    text-transform: uppercase;
    user-select: none;
  }

  /* ========================================================= */
  /* ETIQUETA INFERIOR DIREITA                                */
  /* ========================================================= */
  &::after {
    content: attr(data-language);
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #2d2a2e;
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