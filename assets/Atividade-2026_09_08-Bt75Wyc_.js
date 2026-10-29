import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`atividade-02`,children:`Atividade 02`}),`
`,(0,n.jsx)(r.h2,{id:`instruções`,children:`Instruções`}),`
`,(0,n.jsx)(r.p,{children:`Pesquisar sobre Aplicações Inteligentes`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`como são desenvolvidas?`}),`
`,(0,n.jsx)(r.li,{children:`quais os principais problemas?`}),`
`,(0,n.jsx)(r.li,{children:`como são resolvidos os problemas?`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`como-são-desenvolvidas`,children:`Como são desenvolvidas?`}),`
`,(0,n.jsxs)(r.p,{children:[`O desenvolvimento dessas aplicações combina a engenharia de software tradicional com técnicas de `,(0,n.jsx)(r.strong,{children:`Inteligência Artificial`}),` e `,(0,n.jsx)(r.strong,{children:`Machine Learning`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`Costumam seguir o seguinte fluxo de desenvolvimento:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Definição do Problema e Coleta de Dados`}),`: Identificação clara do objetivo de negócio e mapeamento dos dados necessários (textos, imagens, tabelas ou áudios).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Engenharia de Dados`}),`: Limpeza, tratamento, rotulagem e estruturação dos dados para torná-los adequados ao aprendizado do algoritmo.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Treinamento ou Seleção de Modelos`}),`: Escolha de algoritmos adequados (redes neurais, árvores de decisão, LLMs) e treinamento do modelo ou ajuste fino (fine-tuning) de modelos pré-treinados.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Integração via APIs e Orquestração`}),`: Conexão do modelo treinado com a interface do usuário e o backend da aplicação. Hoje, utiliza-se frequentemente técnicas como RAG (Retrieval-Augmented Generation) para conectar modelos de linguagem a bancos de dados externos.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`MLOps e Monitoramento Contínuo`}),`: Implementação de esteiras automatizadas para testar, implantar e monitorar o desempenho do modelo em produção, garantindo que ele seja atualizado quando os dados mudarem.`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`quais-os-principais-problemas`,children:`Quais os principais problemas?`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Alucinações e Imprecisões`}),`: Modelos gerativos podem inventar fatos, gerar informações incorretas ou responder com alta confiança sobre tópicos que desconhecem.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Vieses e Discriminação`}),`: Se os dados de treinamento contiverem preconceitos históricos ou faltar representatividade, a aplicação reproduzirá e amplificará esses vieses.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Falta de Explicabilidade (Caixa-Preta)`}),`: Redes neurais profundas tomam decisões complexas, mas frequentemente é difícil rastrear ou explicar a lógica exata por trás de uma resposta ou diagnóstico.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Privacidade e Vazamento de Dados`}),`: Risco de dados sensíveis ou pessoais enviados pelos usuários serem incorporados indevidamente aos modelos ou expostos.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Alto Custo Computacional`}),`: O processamento de modelos avançados exige infraestrutura cara e gera consumo significativo de energia elétrica e recursos de hardware.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Vulnerabilidades de Segurança`}),`: Riscos como ataques de prompt injection (manipulação do comportamento do modelo) ou envenenamento de dados (data poisoning).`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`como-esses-problemas-estão-sendo-resolvidos`,children:`Como esses problemas estão sendo resolvidos?`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`RAG (Retrieval-Augmented Generation)`}),`: Em vez de confiar apenas na memória do modelo, a aplicação busca dados em fontes externas verificadas e atualizadas em tempo real antes de formular a resposta, reduzindo drasticamente as alucinações.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Barreiras de Proteção (Guardrails) e Moderação`}),`: Aplicação de filtros de entrada e saída que impedem a geração de conteúdo inadequado, ofensivo ou fora do escopo da aplicação.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`IA Explicável (XAI - Explainable AI)`}),`: Desenvolvimento de métodos de auditoria para mapear quais variáveis influenciaram a decisão do modelo, trazendo transparência para setores críticos como saúde e finanças.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Modelos Menores e Especializados (SLMs)`}),`: Substituição de modelos gigantes por modelos menores (Small Language Models), otimizados por quantização e destilação, reduzindo o custo e a latência de execução.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Técnicas de Alinhamento (RLHF e RLAIF)`}),`: Treinamento complementar baseado em feedback humano ou sintético para alinhar o comportamento da IA a valores éticos, de segurança e utilidade.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Conformidade e Governança`}),`: Adoção de regulamentações internacionais (como o AI Act e a LGPD) para garantir o consentimento no uso de dados e a transparência para o usuário final.`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`exemplos-de-aplicações-inteligentes`,children:`Exemplos de Aplicações Inteligentes`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Sistemas de Recomendação`}),`: Plataformas como Netflix, Spotify e e-commerces que analisam o comportamento do usuário em tempo real para sugerir conteúdos e produtos.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Agentes de Atendimento ao Cliente`}),`: Chatbots de nova geração capazes de compreender linguagem natural, consultar bancos de dados internos e resolver chamados complexos autonomamente.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Análise e Diagnóstico Médico`}),`: Softwares de visão computacional que auxiliam radiologistas na detecção precoce de tumores e anomalias em exames de imagem.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Detecção de Fraudes Financeiras`}),`: Sistemas bancários que analisam milhões de transações por segundo para bloquear operações suspeitas antes da conclusão.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Manutenção Preditiva na Indústria`}),`: Sensores de IoT combinados com algoritmos de ML que antecipam quando uma máquina vai falhar, agendando o conserto antes de uma paralisação.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Navegação e Veículos Autônomos`}),`: Sistemas de bordo em carros e drones que processam dados visuais e de sensores para tomar decisões de direção em tempo real.`]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};