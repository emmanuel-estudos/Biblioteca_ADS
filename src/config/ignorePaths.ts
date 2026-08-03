/**
 * Lista de caminhos (arquivos ou pastas) que devem ser ignorados
 * durante o build de produção (deploy para o GitHub Pages).
 */
export const IGNORED_PATHS_IN_PROD: string[] = [
	// P2 - Sistemas Operacionais
  'Sistemas-Operacionais-SO/atividades/Apresentacao/',

	// P5 - Padrões de Projeto
	'Arquitetura-e-Padroes-de-Projeto-de-Software/atividades/Prova02',

	// P5 - Segurança de Dados
	'Seguranca-de-Dados/atividades/atividade-quiz',
	'Seguranca-de-Dados/atividades/atividade03/segurança_de_redes-atividade_03-parte_01.png',
	'Seguranca-de-Dados/atividades/atividade03/segurança_de_redes-atividade_03-parte_02.png',
	
	// P5 - Extensão 01
	'Extensao-01/assuntos/JavaScript/',

  // Adicione novos caminhos aqui facilmente quando precisar:
  	// 'materia/atividades/PastaDaAtividade/',
		// 'materia/atividades/PastaDaAtividade/arquivo.extensao'
];