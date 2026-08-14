import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styles';

export interface QuestaoLinkProps {
  linguagem?: string;
  slug?: string;
  label?: string;
}

export const QuestaoLink: React.FC<QuestaoLinkProps> = ({
  linguagem = '',
  slug = '',
  label = 'Resolução em',
}) => {
  const { periodo, materia, atividade } = useParams();
  const keyLang = linguagem ? linguagem.toLowerCase() : '';

  // Inclui '/atividades/' para bater exatamente com a rota registrada no App.tsx
  const destino = `/${periodo}/${materia}/atividades/${atividade}/${slug}`;

  return (
    <S.LinkContainer to={destino}>
      <S.StatusDot />
      <span>{label}</span>
      {keyLang && <span style={{ textTransform: 'capitalize' }}>{keyLang}</span>}
      <S.Seta>&rarr;</S.Seta>
    </S.LinkContainer>
  );
};

export default QuestaoLink;