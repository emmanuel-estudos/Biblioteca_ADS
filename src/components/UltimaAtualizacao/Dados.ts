export interface UltimaAtualizacaoData {
  mensagem: string;
  descricao?: string;
  dataHora?: string;
}

export const ultimaAtualizacaoInfo: UltimaAtualizacaoData = {
  mensagem: "DOCS (Segurança de Dados): Roteiros das Atividades 02 e 03",
  descricao: `
		- Correção de alguns pontos no roteiro da Atividade03.\n
		- Troca de números de IPs específicos para o nome do local a que ele se refere.
	`,
  // dataHora: "2026-07-31T16:30:00-03:00",
};