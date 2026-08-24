import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { QuestaoContext } from './QuestaoContext';
import * as S from './styles';

export interface QuestaoProps {
  children: React.ReactNode;
  linksResolucao?: React.ReactNode;
  id: string;
  titulo?: string;
}

const gerarSlug = (texto: string) =>
  texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

export const Questao: React.FC<QuestaoProps> = ({
  children,
  linksResolucao,
  id,
  titulo = '',
}) => {
  const location = useLocation();

  const tituloLimpo = titulo.trim();
  const slugTitulo = tituloLimpo ? gerarSlug(tituloLimpo) : '';
  const questaoIdFinal = slugTitulo ? `${id}-${slugTitulo}` : id;

  const numeroFormatado = id ? id.replace(/^q/i, '') : '';
  const textoTitulo = tituloLimpo !== '' 
    ? tituloLimpo 
    : (numeroFormatado ? `Questão ${numeroFormatado}` : 'Questão');

  useEffect(() => {
    if (location.hash === `#${questaoIdFinal}`) {
      const elemento = document.getElementById(questaoIdFinal);
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [questaoIdFinal, location.hash]);

  return (
    <QuestaoContext.Provider value={{ questaoId: questaoIdFinal }}>
      <S.QuestaoContainer id={questaoIdFinal}>
        <S.QuestaoHeader id={`header-${questaoIdFinal}`}>
          {textoTitulo}
        </S.QuestaoHeader>
        
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
    </QuestaoContext.Provider>
  );
};

export default Questao;