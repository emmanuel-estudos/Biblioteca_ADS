import React from 'react';
import { QuestaoLink } from '../QuestaoLink/QuestaoLink';
import * as S from './styles';

export interface QuestaoProps {
  children: React.ReactNode;
  linguagem?: string;
  slug?: string;
  label?: string;
}

export const Questao: React.FC<QuestaoProps> = ({
  children,
  linguagem = '',
  slug,
  label = 'Resolução em',
}) => {
  return (
    <S.QuestaoContainer>
      {/* Exibe "Questão 01" via CSS ::before */}
      <S.QuestaoHeader />
      
      <S.QuestaoDivider />

      {/* Conteúdo vindo do MDX */}
      <S.QuestaoConteudo>
        {children}
      </S.QuestaoConteudo>

      {/* Botão de resolução ao final */}
      <S.QuestaoFooter>
        <QuestaoLink linguagem={linguagem} slug={slug} label={label} />
      </S.QuestaoFooter>
    </S.QuestaoContainer>
  );
};

export default Questao;