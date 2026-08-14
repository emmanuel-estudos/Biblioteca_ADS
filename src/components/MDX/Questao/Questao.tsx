import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styles';
import { ORDEM_LINGUAGENS } from '../QuestaoLink/styles';

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

  // Função para ordenar os links de resolução conforme a ordem oficial do curso
  const renderizarLinksOrdenados = () => {
    if (!linksResolucao) return null;

    // Converte os elementos React recebidos em um Array
    const linksArray = React.Children.toArray(linksResolucao);

    // Desembrulha Fragmentos (<>...</>) caso tenham sido passados
    const elementosDesembrulhados: React.ReactNode[] = [];
    linksArray.forEach((child) => {
      if (React.isValidElement(child) && child.type === React.Fragment) {
        elementosDesembrulhados.push(
          ...React.Children.toArray((child.props as { children?: React.ReactNode }).children)
        );
      } else {
        elementosDesembrulhados.push(child);
      }
    });

    // Ordena os elementos de acordo com a prioridade em ORDEM_LINGUAGENS
    const ordenados = elementosDesembrulhados.sort((a, b) => {
      if (React.isValidElement(a) && React.isValidElement(b)) {
        const langA = (a.props as { linguagem?: string })?.linguagem?.toLowerCase() || '';
        const langB = (b.props as { linguagem?: string })?.linguagem?.toLowerCase() || '';

        const idxA = ORDEM_LINGUAGENS.indexOf(langA);
        const idxB = ORDEM_LINGUAGENS.indexOf(langB);

        const posA = idxA !== -1 ? idxA : 999;
        const posB = idxB !== -1 ? idxB : 999;

        return posA - posB;
      }
      return 0;
    });

    return ordenados;
  };

  const linksOrdenados = renderizarLinksOrdenados();

  return (
    <S.QuestaoContainer>
      <S.QuestaoHeader $corPrimaria={corPrimaria} />
      
      <S.QuestaoDivider />

      <S.QuestaoConteudo>
        {children}
      </S.QuestaoConteudo>

      {linksOrdenados && linksOrdenados.length > 0 && (
        <S.QuestaoFooter>
          {linksOrdenados}
        </S.QuestaoFooter>
      )}
    </S.QuestaoContainer>
  );
};

export default Questao;