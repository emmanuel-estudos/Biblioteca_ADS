/**
 * Lista de caminhos (arquivos ou pastas) que devem ser ignorados
 * durante o build de produção (deploy para o GitHub Pages).
 */
export const IGNORED_PATHS_IN_PROD: string[] = [
	// P1 - Algoritmos e Lógica de Programação
	'Algoritmos/assuntos/02-DesviosCondicionais.mdx',
	'Algoritmos/assuntos/03-Comandos-Repeticao.mdx',
	'Algoritmos/assuntos/04-Vetores_e_Matrizes.mdx',
	'Algoritmos/assuntos/04-Vetores_e_Matrizes.mdx',
	'Algoritmos/assuntos/06-Recursividade.mdx',
	'Algoritmos/assuntos/07-Ponteiros.mdx',
	'Algoritmos/assuntos/zLista de Exercícios programação.pdf',

	// P2 - Sistemas Operacionais
  'Sistemas-Operacionais-SO/atividades/Apresentacao/',

	// P5 - Padrões de Projeto
	'Arquitetura-e-Padroes-de-Projeto-de-Software/atividades/Prova01',
	'Arquitetura-e-Padroes-de-Projeto-de-Software/atividades/Prova02',
	'Arquitetura-e-Padroes-de-Projeto-de-Software/atividades/Prova03',

	// P5 - Segurança de Dados
	'Seguranca-de-Dados/atividades/atividade-quiz',
	'Seguranca-de-Dados/atividades/atividade03/segurança_de_redes-atividade_03-parte_01.png',
	'Seguranca-de-Dados/atividades/atividade03/segurança_de_redes-atividade_03-parte_02.png',
	
	// P5 - Extensão 01
	'Extensao-01/assuntos/JavaScript/',

	// P6 - Sistemas Distribuídos
	'SD-Sistemas_Distribuidos/Atividades/Atividade01/Forms.mdx',
	'SD-Sistemas_Distribuidos/Atividades/Atividade02/Forms.mdx',
	'SD-Sistemas_Distribuidos/Atividades/Atividade03/Forms.mdx',

	// P6 - Desenvolvimento de Aplicações Corporativas (DAC)
	'DAC-Desenvolvimento-de-Aplicacoes-Corporativas/atividades/Atividades-Casa/Atividade-2026_10_28.mdx',

  // Adicione novos caminhos aqui facilmente quando precisar:
  	// 'materia/atividades/PastaDaAtividade/',
		// 'materia/atividades/PastaDaAtividade/arquivo.extensao'

	// Arquivos de Configuração
	'contexto-projeto.md',
	'gerar-contexto.js'
];