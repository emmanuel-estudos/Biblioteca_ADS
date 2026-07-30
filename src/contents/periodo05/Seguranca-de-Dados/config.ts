export const config = {
	sigla: "SdD",
	nome: "Segurança de Dados",
	periodo: "5º Período",
	corPrimaria: '#06b6d4',
	corSecundaria: '#0369a1',
    
	// Mapeamento para arquivos da aba 'Assuntos' (Materia.tsx)
	assuntos: {
		"Configuracao-Ambiente-Atividade02--End-Points": "Configuração Atividade 02: End Points",

		"Topico-02--Contextualizando-a-Seguranca-da-Informacao": "Tópico 02: Contextualizando a Segurança da Informação",
		"Topico-03--Criptografia-Basica": "Tópico 03: Criptografia Básica",
		"Topico-04--Criptografia-Simetrica": "Tópico 04: Criptografia Simétrica",
		"Topico-05--Criptografia-de-Chave-Publica-ou-Assimetrica": "Tópico 05: Criptografia-de-Chave Pública ou Assimétrica",
		"Topico-06--Funcoes-de-Hash-Criptograficas": "Tópico 06: Funções de Hash Criptográficas",
		"Topico-07--ConfigurandoVMs": "Tópico 07: Configurando VMs",
		"Topico-08--Criptografia": "Tópico 08: Fundamentos de Criptografia",
	},
	// Mapeamento para aba de 'Atividades' (Materia.tsx)
	atividades: {
		"atividade01": {
			nome: "Atividade 01",
			arquivos: {
				"Teste": "Teste de arquivo"
			}
		},
		"atividade02": {
			nome: "Atividade 02: Mininet",
			arquivos: {
				"RoteiroDetalhado": "Roteiro de Execução (com explicações)",
				"Roteiro": "Roteiro (Passo a Passo)"
			}
		},
    "atividade-quiz": {
      nome: "Quiz LGPD (pessoal)",
      arquivos: {
        "Quiz-LGPD": "Quiz LGPD"
      }
    },
    "atividade03": {
      nome: "Atividade 03: Firewall com IPTABLES",
      arquivos: {
        "Roteiro": "Roteiro",
        "Contexto-Atividade": "Contexto da Atividade",
        "P_01--Configuracao-VMs": "Passo 01: Configuração das VMs",
        "P_02--Demonstracao-SNAT": "Passo 02: Demonstração Source Nat (SNAT)",
        "P_03--Demonstracao-DNAT": "Passo 03: Demonstração Destination Nat (DNAT)",
        "P_04--Demonstracao-Balanceamento": "Passo 04: Balanceamento de Cargas com IPTABLES",
        "Demonstracoes-Firewall-IpTables": "Demonstrações de Firewall usando IpTables",
      }
    }
	}
};