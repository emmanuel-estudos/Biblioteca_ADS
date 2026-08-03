export interface UltimaAtualizacaoData {
  mensagem: string;
  descricao?: string;
  dataHora?: string;
}

export const ultimaAtualizacaoInfo: UltimaAtualizacaoData = {
  mensagem: "DOCS (Segurança de Dados): Roteiro para a Atividade03",
  descricao: `
		- Passo a passo da atividade.\n
		- Contém um arquivo somente para as configurações iniciais.\n
		- A atividade possui 3 passos e cada um está em um arquivo.\n
		* Adição dos "terminais" para a ilustração de comandos.\n
		* Link para os vídeos e as VMs necessárias para realizar a atividade.
	`,
  // dataHora: "2026-07-31T16:30:00-03:00",
};