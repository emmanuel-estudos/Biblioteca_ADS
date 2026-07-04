import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import * as S from './styles';

export const Periodo = () => {
  const { periodo } = useParams<{ periodo: string }>();
  const [materias, setMaterias] = useState<Array<{
    id: string;
    nome: string;
    corPrimaria: string;
    corSecundaria: string;
  }>>([]);
  const [carregando, setCarregando] = useState(true);

  // Mapeamos dinamicamente os arquivos de configuração de cada matéria do projeto
  const todasConfigs = import.meta.glob('/src/contents/**/config.ts');

  // Lógica memorizada para normalizar o nome da pasta (ex: "1-periodo" -> "periodo01")
  const nomePastaReal = useMemo(() => {
    if (!periodo) return '';
    const numero = periodo.split('-')[0];
    return `periodo${numero.padStart(2, '0')}`.toLowerCase();
  }, [periodo]);

  useEffect(() => {
    const carregarMaterias = async () => {
      if (!nomePastaReal) return;
      
      try {
        setCarregando(true);
        
        // Filtra apenas as configurações pertencentes ao período selecionado
        const caminhosFiltrados = Object.keys(todasConfigs).filter(path => 
          path.toLowerCase().includes(`/src/contents/${nomePastaReal}/`)
        );

        // Importa as configurações de forma assíncrona
        const promessas = caminhosFiltrados.map(async (path) => {
          const partes = path.split('/');
          const idxPeriodo = partes.findIndex(p => p.toLowerCase() === nomePastaReal);
          const slugMateria = partes[idxPeriodo + 1]; // ex: "materia01"

          const modConfig = (await todasConfigs[path]()) as {
            config: { nome: string; corPrimaria: string; corSecundaria: string }
          };

          return {
            id: slugMateria,
            nome: modConfig.config.nome,
            corPrimaria: modConfig.config.corPrimaria || '#3498db',
            corSecundaria: modConfig.config.corSecundaria || '#2c3e50'
          };
        });

        const resultado = await Promise.all(promessas);
        
        // Ordena as matérias em ordem alfabética de pasta (materia01, materia02...)
        resultado.sort((a, b) => a.id.localeCompare(b.id));
        setMaterias(resultado);
      } catch (error) {
        console.error("Erro ao carregar dados do arquivo config.ts:", error);
      } finally {
        setCarregando(false);
      }
    };

    carregarMaterias();
  }, [nomePastaReal]);

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
          {materias.map((m) => (
            <S.MateriaCard 
              key={m.id} 
              to={`/${periodo}/${m.id}`}
              $corPrimaria={m.corPrimaria}
              $corSecundaria={m.corSecundaria}
            >
              <h2>{m.nome}</h2>
            </S.MateriaCard>
          ))}
        </S.MateriaGrid>
        
        {!carregando && materias.length === 0 && (
          <div style={{ textAlign: 'center', marginTop: '2rem', color: '#64748b' }}>
            <p>Nenhuma matéria encontrada para o {exibirTitulo()}.</p>
            <small>Caminho verificado: src/contents/{nomePastaReal}/</small>
          </div>
        )}
      </S.Container>
    </>
  );
};