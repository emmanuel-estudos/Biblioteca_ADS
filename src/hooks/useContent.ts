// Hook para gerenciar e carregar o conteúdo das matérias
const allMdxFiles = import.meta.glob('../content/**/*.mdx');
const allConfigs = import.meta.glob('../content/**/config.ts', { eager: true });

export const useContent = () => {
  // Lista todas as matérias baseadas nas pastas que possuem config.ts
  const getMaterias = () => {
    return Object.keys(allConfigs).map((path) => {
      const parts = path.split('/');
      return {
        slug: parts[parts.length - 2], // nome da pasta da matéria
        periodo: parts[parts.length - 3], // nome da pasta do período
        // @ts-ignore - acessa o conteúdo do arquivo config.ts
        dados: allConfigs[path].config,
      };
    });
  };

  // Busca as aulas de uma matéria específica
  const getAulasByMateria = (periodo: string, materia: string) => {
    const prefix = `../content/${periodo}/${materia}/`;
    return Object.keys(allMdxFiles)
      .filter((path) => path.startsWith(prefix))
      .map((path) => ({
        id: path.split('/').pop()?.replace('.mdx', ''),
        fullPath: path,
      }));
  };

  return { getMaterias, getAulasByMateria, allMdxFiles };
};
