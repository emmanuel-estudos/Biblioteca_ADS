export interface UltimaAtualizacaoData {
  mensagem: string;
  descricao?: string;
  dataHora?: string;
}

export const ultimaAtualizacaoInfo: UltimaAtualizacaoData = {
  mensagem: "FEAT(router/mdx/Questao/Voltar): Sumário Lateral, Listas Ordenadas e Não Ordenadas, Títulos de Questões",
  descricao: `
		- Sumário Lateral: Faz com que, a cada mudança de arquivo, o sumário seja montado novamente. Evita que ele fique desssincronizado com o arquivo atual.\n
		- Listas: estilização específica para listas Ordenadas e Não Ordenadas, seguindo as cores Primárias e Secundárias definidas para cada matéria.\n
		- Questão: possibilita que questões tenham um título no lugar de apenas numeração.\n
		- Voltar: botão de voltar dentro do Sumário lateral, para voltar ao nível anterior do arquivo ou para a lista de origem da questão.
	`,
  dataHora: "2026-08-27T13:50:00-03:00",
};