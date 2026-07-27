import { useMemo } from 'react';
import * as S from './styles';
import { ultimaAtualizacaoInfo } from './Dados';

export const UltimaAtualizacao = () => {
  const { dataFormatada, ehRecente, tempoRelativo } = useMemo(() => {
    let dataObj: Date;

    if (ultimaAtualizacaoInfo.dataHora) {
      dataObj = new Date(ultimaAtualizacaoInfo.dataHora);
    } else {
      dataObj = new Date();
    }

    const agora = new Date();
    const diferencaEmMs = agora.getTime() - dataObj.getTime();
    const UM_DIA_EM_MS = 24 * 60 * 60 * 1000;

    const ehRecente = diferencaEmMs >= 0 && diferencaEmMs <= UM_DIA_EM_MS;

    let tempoRelativoTexto = '';
    if (!ehRecente && diferencaEmMs > UM_DIA_EM_MS) {
      const totalHoras = Math.floor(diferencaEmMs / (1000 * 60 * 60));
      const dias = Math.floor(totalHoras / 24);
      const horasRestantes = totalHoras % 24;

      const textoDias = dias === 1 ? '1 dia' : `${dias} dias`;
      const textoHoras = horasRestantes === 1 ? '1 hora' : `${horasRestantes} horas`;

      if (horasRestantes > 0) {
        tempoRelativoTexto = `há ${textoDias} e ${textoHoras}`;
      } else {
        tempoRelativoTexto = `há ${textoDias}`;
      }
    }

    const formatada = new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(dataObj);

    return {
      dataFormatada: formatada,
      ehRecente,
      tempoRelativo: tempoRelativoTexto,
    };
  }, []);

  return (
    <S.Wrapper>
      <S.InfoContainer>
        {ehRecente && <S.Badge>Novidade</S.Badge>}
        
        <S.TextoContainer>
          <S.Mensagem>{ultimaAtualizacaoInfo.mensagem}</S.Mensagem>
          {ultimaAtualizacaoInfo.descricao && (
            <S.Descricao>{ultimaAtualizacaoInfo.descricao}</S.Descricao>
          )}
        </S.TextoContainer>
      </S.InfoContainer>

      <S.DataContainer>
        <S.DataHora dateTime={ultimaAtualizacaoInfo.dataHora || new Date().toISOString()}>
          Atualizado em: {dataFormatada}
        </S.DataHora>
        
        {!ehRecente && tempoRelativo && (
          <S.TempoDecorrido>({tempoRelativo})</S.TempoDecorrido>
        )}
      </S.DataContainer>
    </S.Wrapper>
  );
};