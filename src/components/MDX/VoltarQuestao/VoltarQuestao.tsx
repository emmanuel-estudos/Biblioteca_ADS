import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './styles';

export interface VoltarQuestaoProps {
  /**
   * ID da questão na lista para a qual o usuário deve voltar.
   * Exemplo: "q001" direciona para .../Lista#q001
   */
  questaoId?: string;
  label?: string;
}

export const VoltarQuestao: React.FC<VoltarQuestaoProps> = ({
  questaoId,
  label = 'Voltar para a Questão na Lista',
}) => {
  const { periodo, materia, atividade } = useParams();
  const navigate = useNavigate();
  const [corPrimaria, setCorPrimaria] = useState<string | undefined>(undefined);

  // Busca a corPrimaria da matéria para manter a identidade visual
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

  const handleVoltar = () => {
    const rotaLista = `/${periodo}/${materia}/atividades/${atividade}/Lista`;
    const destinoComHash = questaoId ? `${rotaLista}#${questaoId}` : rotaLista;

    navigate(destinoComHash);

    // Se estivermos navegando com hash, força a rolagem suave até o elemento
    if (questaoId) {
      setTimeout(() => {
        const elemento = document.getElementById(questaoId);
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <S.BotaoVoltar onClick={handleVoltar} $corPrimaria={corPrimaria}>
      <S.SetaVoltar>&larr;</S.SetaVoltar>
      <span>{label}</span>
    </S.BotaoVoltar>
  );
};

export default VoltarQuestao;