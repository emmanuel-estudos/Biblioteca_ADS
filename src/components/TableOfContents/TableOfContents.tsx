import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './styles';

export interface TableOfContentsProps {
  isArquivoResolucao?: boolean;
  onVoltar?: () => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  onVoltar,
}) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const parseHeadings = () => {
      const elements = Array.from(document.querySelectorAll('article h1, article h2, article h3'))
        .map((elem) => {
          const text = elem.textContent || '';
          const id = elem.id || text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
          if (!elem.id) elem.id = id;
          return { id, text, level: Number(elem.tagName.substring(1)) };
        });
      setHeadings(elements);
    };

    // Garante a leitura dos títulos no frame de renderização seguinte
    const handle = requestAnimationFrame(() => {
      parseHeadings();
    });

    // Observa mutações dentro da tag <article> caso o MDX insira elementos assincronamente
    const articleEl = document.querySelector('article');
    let observer: MutationObserver | null = null;

    if (articleEl) {
      observer = new MutationObserver(() => {
        parseHeadings();
      });
      observer.observe(articleEl, { childList: true, subtree: true });
    }

    return () => {
      cancelAnimationFrame(handle);
      if (observer) observer.disconnect();
    };
  }, [slug]);

  const handleVoltar = () => {
    if (onVoltar) {
      onVoltar();
    } else {
      navigate(-1);
    }
  };

  if (headings.length === 0) return null;

  return (
    <S.TocContainer $isOpen={isOpen}>
      <S.ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '‹' : '☰'}
      </S.ToggleButton>

      <S.TocWrapper $isOpen={isOpen}>
        <S.BotaoVoltarContainer onClick={handleVoltar}>
          <span>&larr;</span> Voltar
        </S.BotaoVoltarContainer>

        <S.TocTitle>Tópicos</S.TocTitle>
        <S.TocList>
          {headings.map((h) => (
            <S.TocLink
              key={h.id}
              href={`#${h.id}`}
              $level={h.level}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {h.text}
            </S.TocLink>
          ))}
        </S.TocList>
      </S.TocWrapper>
    </S.TocContainer>
  );
};