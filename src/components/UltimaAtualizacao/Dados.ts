export interface UltimaAtualizacaoData {
  mensagem: string;
  descricao?: string;
  dataHora?: string;
}

export const ultimaAtualizacaoInfo: UltimaAtualizacaoData = {
  mensagem: "FEAT(ui): adiciona identificador de linguagem aos blocos de codigo mdx",
  descricao: `
		- Atualiza o CodeBlock.tsx com suporte a tipagens exportadas e extração dinâmica da linguagem via className\n
		- Adiciona etiquetas estilizadas no topo esquerdo e rodape direito do PreBlock\n
		- Aplica fallback "CODIGO GENERICO" caso a linguagem nao seja especificada\n
		-	Configura posicionamento relativo para manter as etiquetas presas ao container do bloco.\n
		- Configura o rehype-highlight no Vite para identificar palavras reservadas do codigo
	`,
  dataHora: "2026-08-12T14:36:00-03:00",
};