export const config = {
	sigla: "Extensão 02",
	nome: "Práticas Curriculares em Sociedade 02",
	periodo: "6º Período",
	corPrimaria: '#06b6d4',
	corSecundaria: '#0369a1',

	// Mapeamento de arquivos da matéria (arquivo Materia.tsx)
	assuntos: {
		"Teste": "Teste de Arquivo",
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