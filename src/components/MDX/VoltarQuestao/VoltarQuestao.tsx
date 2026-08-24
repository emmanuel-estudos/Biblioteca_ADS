import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import * as S from './styles';

export interface VoltarQuestaoProps {
  questaoId?: string;
  label?: string;
}

export const VoltarQuestao: React.FC<VoltarQuestaoProps> = ({
  questaoId,
  label = 'Voltar',
}) => {
  const { periodo, materia, atividade } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [corPrimaria, setCorPrimaria] = useState<string | undefined>(undefined);

  // Se questaoId não for passado via prop, busca da Query String (?from=q002)
  const targetId = questaoId || searchParams.get('from') || '';

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
    const destinoComHash = targetId ? `${rotaLista}#${targetId}` : rotaLista;

    navigate(destinoComHash);
  };

  return (
    <S.BotaoVoltar onClick={handleVoltar} $corPrimaria={corPrimaria}>
      <S.SetaVoltar>&larr;</S.SetaVoltar>
      <span>{label}</span>
    </S.BotaoVoltar>
  );
};

export default VoltarQuestao;