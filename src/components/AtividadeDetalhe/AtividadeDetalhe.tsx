import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import * as S from './styles';

export const AtividadeDetalhe = () => {
  const { periodo, materia, pasta } = useParams();
  const todosArquivos = import.meta.glob('/src/contents/**/*');

  const arquivos = useMemo(() => {
    const numero = periodo?.split('-')[0] || '';
    const pastaPeriodo = `periodo${numero.padStart(2, '0')}`;
    const caminhos = Object.keys(todosArquivos);

    return caminhos.filter(path => 
      path.toLowerCase().includes(`/${pastaPeriodo}/`) &&
      path.toLowerCase().includes(`/${materia?.toLowerCase()}/`) &&
      path.toLowerCase().includes(`/atividades/${pasta?.toLowerCase()}/`)
    ).map(path => ({
      path,
      nome: path.split('/').pop() || '',
      extensao: path.split('.').pop()?.toUpperCase()
    }));
  }, [periodo, materia, pasta, todosArquivos]);

  return (
    <>
      <Breadcrumbs />
      <S.Container>
        <S.Header>
          <h1>{pasta?.replace(/-/g, ' ')}</h1>
          <p>Arquivos disponíveis para download/leitura</p>
        </S.Header>

        <S.FileList>
          {arquivos.map((arq) => (
            <S.FileCard key={arq.path} href={arq.path} target="_blank" download>
              <div className="icon">
                {arq.extensao === 'MDX' ? '📄' : arq.extensao === 'PDF' ? '📕' : '📁'}
              </div>
              <div className="info">
                <strong>{arq.nome.replace(/-/g, ' ')}</strong>
                <span>Formato: {arq.extensao}</span>
              </div>
            </S.FileCard>
          ))}
        </S.FileList>

        {arquivos.length === 0 && <p>Nenhum arquivo encontrado nesta pasta.</p>}
      </S.Container>
    </>
  );
};