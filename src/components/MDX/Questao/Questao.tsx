import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styles';

export interface QuestaoProps {
  children: React.ReactNode;
  linksResolucao?: React.ReactNode;
}

export const Questao: React.FC<QuestaoProps> = ({
  children,
  linksResolucao,
}) => {
  const { materia } = useParams<{ materia?: string }>();
  const [corPrimaria, setCorPrimaria] = useState<string | undefined>(undefined);

  useEffect(() => {
    let cancelado = false;

    const carregarConfig = async () => {
      if (!materia) return;

      const todasConfigs = import.meta.glob('/src/contents/**/config.ts');
      const materiaLower = materia.toLowerCase();

      const caminhoConfig = Object.keys(todasConfigs).find((path) =>
        path.toLowerCase().includes(`/${materiaLower}/config.ts`)
      );

      if (caminhoConfig) {
        const modConfig = (await todasConfigs[caminhoConfig]()) as {
          config: { corPrimaria?: string };
        };

        if (!cancelado && modConfig.config?.corPrimaria) {
          setCorPrimaria(modConfig.config.corPrimaria);
        }
      }
    };

    carregarConfig();

    return () => {
      cancelado = true;
    };
  }, [materia]);

  return (
    <S.QuestaoContainer>
      {/* O título "Questão 01" agora usa a corPrimaria do config.ts da matéria */}
      <S.QuestaoHeader $corPrimaria={corPrimaria} />
      
      <S.QuestaoDivider />

      {/* Conteúdo do MDX */}
      <S.QuestaoConteudo>
        {children}
      </S.QuestaoConteudo>

      {/* Renderiza os links de resolução se houver */}
      {linksResolucao && (
        <S.QuestaoFooter>
          {linksResolucao}
        </S.QuestaoFooter>
      )}
    </S.QuestaoContainer>
  );
};

export default Questao;