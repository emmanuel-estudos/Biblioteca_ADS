import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import * as S from '../Materia/styles'; // Reaproveita os estilos estruturais da Materia

interface ConfigMateria {
  nome: string;
  corPrimaria: string;
  corSecundaria: string;
  periodo: string;
  atividades?: Record<string, string>;
}

export const Atividades = () => {
  const { periodo, materia, atividade } = useParams<{ periodo: string; materia: string; atividade: string }>();
  
  const [configMateria, setConfigMateria] = useState<ConfigMateria>({
    nome: '',
    corPrimaria: '#2c3e50',
    corSecundaria: '#3498db',
    periodo: ''
  });

  const todosArquivos = import.meta.glob('/src/contents/**/*.{mdx,pdf,txt}');
  const todasConfigs = import.meta.glob('/src/contents/**/config.ts');

  const numeroPeriodo = periodo?.split('-')[0] || '';
  const nomePastaPeriodo = `periodo${numeroPeriodo.padStart(2, '0')}`;

  // Carrega as configurações (essencial para manter as cores de hover do tema dinâmico)
  useEffect(() => {
    const carregarConfig = async () => {
      const materiaLower = materia?.toLowerCase();
      const caminhoConfig = Object.keys(todasConfigs).find(path => 
        path.toLowerCase().includes(`/${materiaLower}/config.ts`)
      );

      if (caminhoConfig) {
        const modConfig = (await todasConfigs[caminhoConfig]()) as { config: ConfigMateria };
        setConfigMateria(modConfig.config);
      }
    };
    carregarConfig();
  }, [materia, todasConfigs]);

  // Filtra apenas os arquivos contidos estritamente dentro da pasta desta atividade
  const arquivosDaAtividade = useMemo(() => {
    const caminhos = Object.keys(todosArquivos);
    const materiaLower = materia?.toLowerCase();
    const periodoLower = nomePastaPeriodo.toLowerCase();
    const atividadeLower = atividade?.toLowerCase();

    return caminhos
      .filter(path => 
        path.toLowerCase().includes(`/${periodoLower}/${materiaLower}/atividades/${atividadeLower}/`)
      )
      .map(path => {
        const slugReal = path.split('/').pop()?.replace(/\.(mdx|pdf|txt)$/, '') || '';
        
        // REQUISITO: Se não catalogado, formata limpando traços e underlines
        const nomeExibicao = slugReal.replace(/[-_]/g, ' ');

        return { path, slug: slugReal, nomeExibicao };
      })
      .sort((a, b) => a.nomeExibicao.localeCompare(b.nomeExibicao));
  }, [nomePastaPeriodo, materia, atividade, todosArquivos]);

  // Captura o nome amigável da pasta da atividade configurado no config.ts
  const tituloAtividade = useMemo(() => {
    if (!atividade) return '';
    return configMateria.atividades?.[atividade] || atividade.replace(/[-_]/g, ' ');
  }, [atividade, configMateria]);

  return (
    <ThemeProvider theme={configMateria}>
      <Breadcrumbs />
      <S.PageWrapper>
        <S.Header>
          <h1>{tituloAtividade}</h1>
          <p style={{ color: '#64748b', marginTop: '0.5rem' }}>
            Arquivos referentes à atividade de {configMateria.nome || materia}
          </p>
        </S.Header>

        <S.ContentList>
          {arquivosDaAtividade.map(arquivo => (
            <S.ListItem key={arquivo.path}>
              {/* Encaminha para o visualizador de conteúdo do arquivo */}
              <Link to={`${window.location.pathname}/${arquivo.slug}`}>
                📄 {arquivo.nomeExibicao}
              </Link>
            </S.ListItem>
          ))}
        </S.ContentList>

        {arquivosDaAtividade.length === 0 && (
          <p style={{ textAlign: 'center', color: '#64748b', marginTop: '2rem' }}>
            Nenhum arquivo encontrado dentro desta pasta de atividade.
          </p>
        )}
      </S.PageWrapper>
    </ThemeProvider>
  );
};