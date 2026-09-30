import React, { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [posicao, setPosicao] = useState<number | null>(null);

  const tituloLimpo = titulo.trim();
  const slugTitulo = tituloLimpo ? gerarSlug(tituloLimpo) : '';
  const questaoIdFinal = slugTitulo ? `${id}-${slugTitulo}` : id;

  // Calcula a ordem relativa da questão entre todas as questões presentes na página
  useEffect(() => {
    if (containerRef.current) {
      const elementos = Array.from(
        document.querySelectorAll('[data-questao-container]')
      );
      const index = elementos.indexOf(containerRef.current);
      if (index !== -1) {
        setPosicao(index + 1);
      }
    }
  }, []);

  // Extrai os dígitos do ID como fallback inicial antes do cálculo no DOM
  const numeroId = id ? id.replace(/\D/g, '') : '';
  const numeroFinal = posicao !== null 
    ? posicao 
    : (numeroId ? parseInt(numeroId, 10) : null);

  // Formata o número garantindo no mínimo 3 dígitos (ex: 001, 002, 005)
  const numeroFormatado = numeroFinal !== null 
    ? String(numeroFinal).padStart(3, '0') 
    : '';

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
      <S.QuestaoContainer 
        id={questaoIdFinal} 
        ref={containerRef} 
        data-questao-container
      >
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