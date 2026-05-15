import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styles';

export const TableOfContents = () => {
  const { slug } = useParams();
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const parseHeadings = () => {
      const elements = Array.from(document.querySelectorAll('article h2, article h3'))
        .map((elem) => {
          const text = elem.textContent || '';
          const id = elem.id || text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
          if (!elem.id) elem.id = id;
          return { id, text, level: Number(elem.tagName.substring(1)) };
        });
      setHeadings(elements);
    };

    const timer = setTimeout(parseHeadings, 150);
    return () => clearTimeout(timer);
  }, [slug]);

  if (headings.length === 0) return null;

  return (
    <S.TocContainer $isOpen={isOpen}>
      <S.ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '‹' : '☰'} 
      </S.ToggleButton>

      <S.TocWrapper $isOpen={isOpen}>
        <S.TocTitle>Nesta aula</S.TocTitle>
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