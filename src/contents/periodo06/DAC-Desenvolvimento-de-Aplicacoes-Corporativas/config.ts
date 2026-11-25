export const config = {
	sigla: "DAC",
	nome: "Desenvolvimento de Aplicações Corporativas",
	periodo: "6º Período",
	corPrimaria: '#06b6d4',
	corSecundaria: '#0369a1',

	// Mapeamento de arquivos da matéria (arquivo Materia.tsx)
	assuntos: {
		"aula01-IA": "Aula 01: Inteligência Artificial",
    "aula02-Persistencia_de_Dados": "Aula 02: Persistência de Dados"
	},

	// Mapeamento das pastas da aba 'Atividade' da matéria (arquivo Materia.tsx)
	atividades: {
		"Atividades-Sala": {
			nome: "Atividades de Sala",
			arquivos: {
				"Atividade-2026_08_24": "Atividade 01 - 24/08/2026",
        "Atividade-2026_09_08": "Atividade 02 - 08/09/2026"
			}
		},
		"Atividades-Casa": {
			nome: "Atividades de Casa",
			"Atividade_02": {
				nome: "Atividade 02 - (28/10/2026)",
				arquivos: {
					"Atividade-2026_10_28": "Atividade 02"
				}
			},
			"Atividade_03": {
				nome: "Atividade 03 - (03/11/2026)",
				arquivos: {
					"Relatorio_Persistencia": "Atividade 03: Relatório de Persistência"
				}
			},
			"Atividade_04": {
				nome: "Atividade 04 - (09/11/2026)",
				arquivos: {
					"Respostas": "Respostas"
				}
			},
			"Atividade_05": {
				nome: "Atividade 05 - (24/11/2026)",
				arquivos: {
					"Respostas": "Respostas"
				}
			}
		}
	}
};