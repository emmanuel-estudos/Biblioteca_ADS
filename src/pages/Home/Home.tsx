import { useMemo } from 'react';
import * as s from './styles';

export const Home = () => {
  // 1. Fazemos a varredura de todos os arquivos dentro de contents
  const todosArquivos = import.meta.glob('/src/contents/**/*');

  const periodosAutomaticos = useMemo(() => {
    const caminhos = Object.keys(todosArquivos);
    const pastasDetectadas = new Set<string>();

    caminhos.forEach(path => {
      // O caminho costuma ser: /src/contents/periodo01/materia/...
      const partes = path.split('/');
      
      // Localizamos a parte que vem logo após 'contents'
      const idxContents = partes.indexOf('contents');
      if (idxContents !== -1 && partes[idxContents + 1]) {
        const pastaPeriodo = partes[idxContents + 1];
        
        // Verificamos se segue o padrão "periodoXX"
        if (pastaPeriodo.startsWith('periodo')) {
          pastasDetectadas.add(pastaPeriodo);
        }
      }
    });

    // 2. Convertemos as pastas em objetos com ID e Nome, e ordenamos
    return Array.from(pastasDetectadas)
      .sort() // Garante que apareça periodo01, periodo02, etc.
      .map(pasta => {
        // Extrai os números (ex: "periodo02" -> 2)
        const numero = parseInt(pasta.replace('periodo', ''), 10);
        
        return {
          id: `${numero}-periodo`, // Mantém o padrão de URL: 2-periodo
          nome: `${numero}º Período` // Mantém o padrão visual: 2º Período
        };
      });
  }, [todosArquivos]);

  return (
    <s.Container>
      <s.Title>Portal de Estudos de ADS</s.Title>
      
      <s.Grid>
        {periodosAutomaticos.map((p) => (
          <s.CardLink key={p.id} to={`/${p.id}`}>
            <s.PeriodCard>
              <span>Semestre Acadêmico</span>
              <h2>{p.nome}</h2>
            </s.PeriodCard>
          </s.CardLink>
        ))}
      </s.Grid>

      {periodosAutomaticos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#64748b', marginTop: '2rem' }}>
          Nenhuma pasta de período detectada em src/contents/
        </p>
      )}
    </s.Container>
  );
};