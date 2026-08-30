export interface UltimaAtualizacaoData {
  mensagem: string;
  descricao?: string;
  dataHora?: string;
}

// Preencha aqui a data e a hora separadamente:
const dataPtBr = "30/08/2026"; // DD/MM/YYYY
const hora = "04:00";          // HH:mm ou HH:mm:ss
const fusoHorario = "-03:00";  // Fuso de Brasília

// Função auxiliar para converter PT-BR + Hora em ISO 8601
const criarDataHoraISO = (data: string, horaStr: string, fuso: string = "-03:00") => {
  const [dia, mes, ano] = data.split('/');
  const horaComSegundos = horaStr.length === 5 ? `${horaStr}:00` : horaStr;

  return `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}T${horaComSegundos}${fuso}`;
};

// Montagem do objeto final exportado
export const ultimaAtualizacaoInfo: UltimaAtualizacaoData = {
  mensagem: "DOCS: adição das matérias do 6º período",
  descricao: `
    - (DAC) Desenvolvimento de Aplicações Corporativas.\n
    - (IHC) Interação Humano-Computador.\n
    - (Extensão 02) Práticas Curriculares em Sociedade 02.\n
    - (PDM) Programação para Dispositivos Móveis.\n
    - (SD) Sistemas Distribuídos.
  `,
  dataHora: criarDataHoraISO(dataPtBr, hora, fusoHorario),
};