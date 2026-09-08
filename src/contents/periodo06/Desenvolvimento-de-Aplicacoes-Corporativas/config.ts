export const config = {
	sigla: "DAC",
	nome: "Desenvolvimento de Aplicações Corporativas",
	periodo: "6º Período",
	corPrimaria: '#06b6d4',
	corSecundaria: '#0369a1',

	// Mapeamento de arquivos da matéria (arquivo Materia.tsx)
	assuntos: {
		"aula01-IA": "Aula 01: Inteligência Artificial",
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
		"atividade02": {
			nome: "Atividade 02",
			arquivos: {
				"Teste02": "Test de arquivo 02"
			}
		}
	}
};