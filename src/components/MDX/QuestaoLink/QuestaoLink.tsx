import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { QuestaoContext } from '../Questao/QuestaoContext';
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
  const { questaoId } = useContext(QuestaoContext);

  const keyLang = linguagem ? linguagem.toLowerCase().trim() : '';
  const queryParam = questaoId ? `?from=${questaoId}` : '';
  const destino = `/${periodo}/${materia}/atividades/${atividade}/${slug}${queryParam}`;

  const nomeExibicao = S.getNomeLinguagem(keyLang);
  const textoCompleto = nomeExibicao ? `${label} ${nomeExibicao}` : label;

  return (
    <S.LinkContainer to={destino} $linguagem={linguagem}>
      <S.StatusDot $linguagem={linguagem} />
      <span>{textoCompleto}</span>
      <S.Seta $linguagem={linguagem}>&rarr;</S.Seta>
    </S.LinkContainer>
  );
};

export default QuestaoLink;