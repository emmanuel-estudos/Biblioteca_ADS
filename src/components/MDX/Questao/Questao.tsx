import React from 'react';
import * as S from './styles';

export interface QuestaoProps {
  children: React.ReactNode;
  linksResolucao?: React.ReactNode;
  id?: string; // ID para ser usado como âncora de rolagem (ex: "q001")
}

export const Questao: React.FC<QuestaoProps> = ({
  children,
  linksResolucao,
  id,
}) => {
  return (
    <S.QuestaoContainer id={id}>
      <S.QuestaoHeader />
      
      <S.QuestaoDivider />

      <S.QuestaoConteudo>
        {children}
      </S.QuestaoConteudo>

      {linksResolucao && (
        <S.QuestaoFooter>
          {linksResolucao}
        </S.QuestaoFooter>
      )}
    </S.QuestaoContainer>
  );
};

export default Questao;