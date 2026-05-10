import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import * as S from './styles';
import { TRADUCAO_NOMES } from '../../utils/traducoes';

export const Periodo = () => {
  const { periodo } = useParams<{ periodo: string }>();
  
  const todosArquivos = import.meta.glob('/src/contents/**/*');
  
  const materias = useMemo(() => {
    const caminhos = Object.keys(todosArquivos);
    const materiasSet = new Set<string>();
    
    if (!periodo) return [];

    // Lógica para encontrar a pasta (ex: 2-periodo -> periodo02)
    const numero = periodo.split('-')[0];
    const nomePastaReal = `periodo${numero.padStart(2, '0')}`;
    
    caminhos.forEach(path => {
      const pathNormalizado = path.replace(/\/+/g, '/');
      
      if (pathNormalizado.includes(`/${nomePastaReal}/`)) {
        const partes = pathNormalizado.split('/');
        const idx = partes.indexOf(nomePastaReal);
        
        if (idx !== -1 && partes[idx + 1]) {
          const possivelMateria = partes[idx + 1];
          
          if (!possivelMateria.includes('.') && !['assuntos', 'atividades'].includes(possivelMateria)) {
            materiasSet.add(possivelMateria);
          }
        }
      }
    });

    return Array.from(materiasSet).sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: 'base' }));
  }, [periodo, todosArquivos]);

  const exibirTitulo = () => {
    if (!periodo) return 'Período';
    const numero = periodo.split('-')[0];
    return `${numero}º Período`;
  };

  return (
    <>
      <Breadcrumbs />
      <S.Container>
        <h1>Matérias do {exibirTitulo()}</h1>
        
        <S.MateriaGrid>
          {materias.map((materia) => (
            <S.MateriaCard key={materia} to={`/${periodo}/${materia}`}>
              {/* MÉTODO DE TRADUÇÃO: 
                Tenta pegar do dicionário, se não existir, usa o replace padrão.
              */}
              {TRADUCAO_NOMES[materia] || materia.replace(/-/g, ' ')}
            </S.MateriaCard>
          ))}
        </S.MateriaGrid>
        
        {materias.length === 0 && (
          <div style={{ textAlign: 'center', marginTop: '2rem', color: '#64748b' }}>
            <p>Nenhuma matéria encontrada para o {exibirTitulo()}.</p>
            <small>
              Caminho: src/contents/periodo{periodo?.split('-')[0].padStart(2, '0')}/
            </small>
          </div>
        )}
      </S.Container>
    </>
  );
};