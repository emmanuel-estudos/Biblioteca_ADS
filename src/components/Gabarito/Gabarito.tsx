import React from 'react';
import * as s from './styles'; // Importa todos os estilos nomeando-os como 'S'

interface GabaritoProps {
  resposta: string;
  children: React.ReactNode;
}

export const Gabarito = ({ resposta, children }: GabaritoProps) => {
  return (
    <s.Container>
      <s.Summary>
        <s.Icon>▶</s.Icon>
        ✅ Ver Gabarito
      </s.Summary>
      <s.ContentWrapper>
        <s.AnswerBox>
          <p style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem' }}>
            Resposta: {resposta}
          </p>
          <div style={{ color: '#374151', lineHeight: '1.625' }}>
            {children}
          </div>
        </s.AnswerBox>
      </s.ContentWrapper>
    </s.Container>
  );
};