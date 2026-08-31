import { useState } from 'react';
import * as S from './styles';

// Mapeia de forma síncrona todas as imagens da pasta contents
const todasImagens = import.meta.glob('/src/contents/**/*.{png,jpg,jpeg,webp,gif,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export interface ImagemProps {
  src: string | { default: string };
  alt?: string;
}

export function Imagem({ src, alt }: ImagemProps) {
  const [temErro, setTemErro] = useState(false);

  let urlImagem = typeof src === 'object' && src !== null && 'default' in src 
    ? src.default 
    : (src as string);

  // Se for um caminho relativo (ex: ./imagem.png) ou nome simples de arquivo
  if (typeof urlImagem === 'string' && !urlImagem.startsWith('http') && !urlImagem.startsWith('data:')) {
    const nomeArquivo = urlImagem.split('/').pop()?.toLowerCase();
    const caminhoLimpo = urlImagem.replace(/^\.\//, '').toLowerCase();

    if (nomeArquivo) {
      const caminhoEncontrado = Object.keys(todasImagens).find(key => {
        const keyLower = key.toLowerCase();
        return keyLower.endsWith(`/${caminhoLimpo}`) || keyLower.endsWith(`/${nomeArquivo}`);
      });

      if (caminhoEncontrado) {
        urlImagem = todasImagens[caminhoEncontrado];
      }
    }
  }

  // Padrão recomendado pela documentação oficial do React para redefinir estado quando um valor muda
  const [urlAnterior, setUrlAnterior] = useState(urlImagem);
  if (urlImagem !== urlAnterior) {
    setUrlAnterior(urlImagem);
    setTemErro(false);
  }

  return (
    <S.Container>
      <S.ElementoImagem 
        src={urlImagem} 
        alt={alt || 'Imagem'} 
        onError={() => setTemErro(true)} 
      />
      {alt && !temErro && <S.Legenda>{alt}</S.Legenda>}
    </S.Container>
  );
}