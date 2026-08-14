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
  const destino = `/${periodo}/${materia}/atividades/${atividade}/${slug}`;

  return (
    <S.LinkContainer to={destino} $linguagem={linguagem}>
      <S.StatusDot $linguagem={linguagem} />
      <span>{label}</span>
      {keyLang && <span style={{ textTransform: 'capitalize' }}>{keyLang}</span>}
      <S.Seta $linguagem={linguagem}>&rarr;</S.Seta>
    </S.LinkContainer>
  );
};

export default QuestaoLink;