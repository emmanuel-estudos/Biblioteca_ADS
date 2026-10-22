export const config = {
	sigla: "IHC",
	nome: "Interação Humano-Computador",
	periodo: "6º Período",
	corPrimaria: '#06b6d4',
	corSecundaria: '#0369a1',

	// Mapeamento de arquivos da matéria (arquivo Materia.tsx)
	assuntos: {
		"Cap_01": "Aula 01: Introdução",
    "Cap_02": "Aula 02: Conceitos Básicos",
    "Cap_03": "Aula 03: Processo de Design",
	},

	// Mapeamento das pastas da aba 'Atividade' da matéria (arquivo Materia.tsx)
	atividades: {
		"atividade01": {
			nome: "Atividade 01",
			arquivos: {
				"Teste01": "Teste de arquivo 01"
			}
		},
		"atividade02": {
			nome: "Atividade 02",
			arquivos: {
				"Teste02": "Test de arquivo 02"
			}
		}
	}
};