export interface UltimaAtualizacaoData {
  mensagem: string;
  descricao?: string;
  dataHora?: string;
}

// Preencha aqui a data e a hora separadamente:
const dataPtBr = "25/10/2026"; // DD/MM/YYYY
const hora = "15:00";          // HH:mm ou HH:mm:ss
const fusoHorario = "-03:00";  // Fuso de Brasília

// Função auxiliar para converter PT-BR + Hora em ISO 8601
const criarDataHoraISO = (data: string, horaStr: string, fuso: string = "-03:00") => {
  const [dia, mes, ano] = data.split('/');
  const horaComSegundos = horaStr.length === 5 ? `${horaStr}:00` : horaStr;

  return `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}T${horaComSegundos}${fuso}`;
};

// Montagem do objeto final exportado
export const ultimaAtualizacaoInfo: UltimaAtualizacaoData = {
  mensagem: "DOCS: Atividades feitas.",
  descricao: `
    - (DAC) Desenvolvimento de Aplicações Corporativas: Primeira atividade para casa.\n
    - (SD) Sistemas Distribuídos: Atividades 01-03.\n
		- (PI_VC) Processamento de Imagens e Visão Computacional: questões do Tópico 05.
  `,
  dataHora: criarDataHoraISO(dataPtBr, hora, fusoHorario),
};