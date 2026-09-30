import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as S from './styles';
import { TRADUCAO_NOMES } from '../../utils/traducoes';

export interface BreadcrumbsProps {
  abaAtiva?: 'atividades' | 'assuntos';
}

/**
 * Identifica se um segmento da URL representa uma questão
 * e retorna o nome formatado com base na posição relativa no DOM (ex: Questão 001).
 */
const obterNomeQuestaoFormatado = (value: string, listaIdsDom: string[]): string | null => {
  const valLower = value.toLowerCase();
  
  // Verifica se o segmento possui padrão de identificador de questão (ex: q1, q-01, questao-1, q1-titulo)
  const isPadraoQuestao = /^(q|questao)[-_]?\d+/i.test(valLower);

  // Procura o índice do contêiner correspondente no DOM
  let indexNoDom = -1;

  if (listaIdsDom.length > 0) {
    indexNoDom = listaIdsDom.findIndex((idDom) => {
      const idLower = idDom.toLowerCase();
      
      // 1. Match exato de ID
      if (idLower === valLower) return true;
      
      // 2. Match de prefixo (ex: idDom = "q1-exercicio-der", value = "q1")
      if (idLower.startsWith(`${valLower}-`) || valLower.startsWith(`${idLower}-`)) return true;

      // 3. Match pelos dígitos
      const digitosVal = valLower.replace(/\D/g, '');
      const digitosDom = idLower.replace(/\D/g, '');
      if (digitosVal && digitosDom && digitosVal === digitosDom) return true;

      return false;
    });
  }

  // Se não corresponder a um padrão de questão nem existir no DOM, ignora
  if (!isPadraoQuestao && indexNoDom === -1) {
    return null;
  }

  // Posição 1-based no DOM
  let posicaoFinal: number | null = null;

  if (indexNoDom !== -1) {
    posicaoFinal = indexNoDom + 1;
  } else {
    // Fallback: extrai o número do próprio parâmetro caso o DOM ainda não tenha carregado
    const digitos = value.replace(/\D/g, '');
    if (digitos) {
      posicaoFinal = parseInt(digitos, 10);
    }
  }

  if (posicaoFinal !== null && !isNaN(posicaoFinal)) {
    const numeroFormatado = String(posicaoFinal).padStart(3, '0');
    return `Questão ${numeroFormatado}`;
  }

  return null;
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
  const location = useLocation();
  const { periodo, materia, atividade, slug } = useParams<{
    periodo?: string;
    materia?: string;
    atividade?: string;
    slug?: string;
  }>();

  const [traducoesCustom, setTraducoesCustom] = useState<Record<string, string>>({});
  const [corPrimaria, setCorPrimaria] = useState<string | undefined>(undefined);
  const [corSecundaria, setCorSecundaria] = useState<string | undefined>(undefined);
  const [questoesIds, setQuestoesIds] = useState<string[]>([]);

  const pathnames = location.pathname.split('/').filter((x) => x);

  // Sincroniza os contêineres de questão renderizados na página com o Breadcrumbs
  useEffect(() => {
    const atualizarQuestoes = () => {
      const elementos = Array.from(
        document.querySelectorAll<HTMLElement>('[data-questao-container]')
      );
      const ids = elementos.map((el) => el.id || '');
      
      setQuestoesIds((prev) => {
        if (prev.length === ids.length && prev.every((id, i) => id === ids[i])) {
          return prev;
        }
        return ids;
      });
    };

    atualizarQuestoes();
    const timer = setTimeout(atualizarQuestoes, 100);

    // MutationObserver para capturar alterações e montagens dinâmicas no DOM
    const observer = new MutationObserver(atualizarQuestoes);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);

  useEffect(() => {
    let cancelado = false;

    const carregarConfig = async () => {
      if (!materia) {
        setTraducoesCustom({});
        setCorPrimaria(undefined);
        setCorSecundaria(undefined);
        return;
      }

      const todasConfigs = import.meta.glob('/src/contents/**/config.ts');
      const materiaLower = materia.toLowerCase();

      const caminhoConfig = Object.keys(todasConfigs).find((path) =>
        path.toLowerCase().includes(`/${materiaLower}/config.ts`)
      );

      if (caminhoConfig) {
        const modConfig = (await todasConfigs[caminhoConfig]()) as {
          config: {
            corPrimaria?: string;
            corSecundaria?: string;
            atividades?: Record<string, { nome: string; arquivos?: Record<string, string> }>;
            assuntos?: Record<string, string>;
          };
        };

        const configData = modConfig.config;
        const novasTraducoes: Record<string, string> = {};

        // ROTA DE ATIVIDADES
        if (atividade && configData.atividades) {
          const chaveAtividade = Object.keys(configData.atividades).find(
            (k) => k.toLowerCase() === atividade.toLowerCase()
          );

          if (chaveAtividade) {
            const atividadeObj = configData.atividades[chaveAtividade];
            novasTraducoes[atividade.toLowerCase()] = atividadeObj.nome;

            if (slug && atividadeObj.arquivos) {
              const chaveArquivo = Object.keys(atividadeObj.arquivos).find(
                (k) => k.toLowerCase() === slug.toLowerCase()
              );

              if (chaveArquivo) {
                novasTraducoes[slug.toLowerCase()] = atividadeObj.arquivos[chaveArquivo];
              }
            }
          }
        } 
        // ROTA DE ASSUNTOS
        else if (slug && configData.assuntos) {
          const chaveAssunto = Object.keys(configData.assuntos).find(
            (k) => k.toLowerCase() === slug.toLowerCase()
          );

          if (chaveAssunto) {
            novasTraducoes[slug.toLowerCase()] = configData.assuntos[chaveAssunto];
          }
        }

        if (!cancelado) {
          setCorPrimaria(configData.corPrimaria);
          setCorSecundaria(configData.corSecundaria);
          setTraducoesCustom(novasTraducoes);
        }
      }
    };

    carregarConfig();

    return () => {
      cancelado = true;
    };
  }, [materia, atividade, slug, location.pathname]);

  const formatarNome = (value: string) => {
    // 1. Tenta formatar como questão baseada na ordem relativa no DOM
    const nomeQuestao = obterNomeQuestaoFormatado(value, questoesIds);
    if (nomeQuestao) {
      return nomeQuestao;
    }

    // 2. Traduções customizadas vindas do config.ts da matéria
    const valLower = value.toLowerCase();
    if (traducoesCustom[valLower]) {
      return traducoesCustom[valLower];
    }

    // 3. Dicionário de traduções globais
    if (TRADUCAO_NOMES[value]) {
      return TRADUCAO_NOMES[value];
    }

    // 4. Fallback padrão
    return value.replace(/-/g, ' ');
  };

  const obterDestino = (index: number, value: string) => {
    if ((value === 'atividades' || value === 'assuntos') && periodo && materia) {
      return `/${periodo}/${materia}`;
    }

    return `/${pathnames.slice(0, index + 1).join('/')}`;
  };

  // Encontra o índice de onde a matéria começa no caminho
  const indiceMateria = materia 
    ? pathnames.findIndex(p => p.toLowerCase() === materia.toLowerCase()) 
    : -1;

  return (
    <S.BreadcrumbsContainer aria-label="breadcrumb">
      <S.BreadcrumbsList>
        <S.BreadcrumbsItem>
          <Link to="/">Início</Link>
        </S.BreadcrumbsItem>

        {pathnames.map((value, index) => {
          const to = obterDestino(index, value);
          const isLast = index === pathnames.length - 1;
          const nomeFormatado = formatarNome(value);

          const isDentroDaMateria = indiceMateria !== -1 && index >= indiceMateria;

          return (
            <S.BreadcrumbsItem 
              key={to + index} 
              $isLast={isLast} 
              $corPrimaria={corPrimaria}$isDentroDaMateria={isDentroDaMateria}
            >
              <S.Separator 
                $corSecundaria={corSecundaria}$isDentroDaMateria={isDentroDaMateria}
              >
                /
              </S.Separator>

              {isLast ? (
                <span className="item-nome">{nomeFormatado}</span>
              ) : (
                <Link to={to}>{nomeFormatado}</Link>
              )}
            </S.BreadcrumbsItem>
          );
        })}
      </S.BreadcrumbsList>
    </S.BreadcrumbsContainer>
  );
};