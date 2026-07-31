export interface UltimaAtualizacaoData {
  mensagem: string;
  descricao?: string;
  dataHora?: string;
}

export const ultimaAtualizacaoInfo: UltimaAtualizacaoData = {
  mensagem: "DOCS (Segurança de Dados): Roteiro para a Atividade02",
  descricao: `
		- Passo a passo da atividade\n
		- Contém vídeo de apoio de terceiros, mas não abarca tudo\n
		* Adição do tópico "Possível Erro: '/etc/network/interfaces'": trata o travamento da aba após a execução do script VXLAN.
	`,
  dataHora: "2026-07-30T16:20:00-03:00",
};