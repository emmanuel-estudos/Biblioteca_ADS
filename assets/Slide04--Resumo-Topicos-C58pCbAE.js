import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`conceitos-de-hardware---parte-01`,children:`Conceitos de Hardware - Parte 01`}),`
`,(0,n.jsx)(r.p,{children:`O Sistema Operacional e o hardware interagem para que os programas/aplicações acessem os serviços dos dispositivos.`}),`
`,(0,n.jsx)(r.h2,{id:`composição-do-hardware`,children:`Composição do Hardware`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Processador: executa as instruções`}),`
`,(0,n.jsx)(r.li,{children:`Memória: armazenamento das aplicações em execução`}),`
`,(0,n.jsx)(r.li,{children:`Dispositivos de Entrada e Saída: armazenamento de dados e comunicação com o mundo externo`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`arquitetura-de-computadores`,children:`Arquitetura de Computadores`}),`
`,(0,n.jsx)(r.p,{children:`Os hardwares foram pensados de duas formas diferentes:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Arquitetura de Harvard`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Duas regiões separadas de memória: instruções e programas`}),`
`,(0,n.jsx)(r.li,{children:`O processsador acessa 2 tipos de memória diferentes ao mesmo Tempo`}),`
`,(0,n.jsxs)(r.li,{children:[`Vantagens:`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Busca e execução Simultânea de Instruções e Dados: aumento de desempenho`}),`
`,(0,n.jsx)(r.li,{children:`Maior largura de banda de memória: barramentos diferentes`}),`
`,(0,n.jsx)(r.li,{children:`Segurança Aprimorada: dificulta alguns tipos de ataque, como os de injeção de código`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`Desvantagens:`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Complexidade do projeto`}),`
`,(0,n.jsx)(r.li,{children:`Custo mais elevado`}),`
`,(0,n.jsx)(r.li,{children:`Uso ineficiente de recursos`}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`Arquitetura de Von Neumann`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Uma única região de memória: dados e programas juntos (programa armazenado)`}),`
`,(0,n.jsxs)(r.li,{children:[`Vantagens:`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Simplicidade de Projeto: único barramento`}),`
`,(0,n.jsx)(r.li,{children:`Custo menos elevado`}),`
`,(0,n.jsx)(r.li,{children:`Maior Flexibilidade: mais capacidade de implementação de algoritmos/programas sem a necessidade de modificar significativamente o hardware`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`Desvantagens:`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Gargalo de Desempenho: caso seja exigido muito acesso rápido e simultâneo`}),`
`,(0,n.jsx)(r.li,{children:`Menos seguro: mais suscetível a certos tipos de ataque, como o de injeção de código`}),`
`,(0,n.jsx)(r.li,{children:`Complexidade de Escalonamento: muitos processadores no mesmo barramento torna a estrutura mais complexa`}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`barramento`,children:`Barramento`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`São canais de comunicação que integram os dispositivos.`}),`
`,(0,n.jsx)(r.li,{children:`Formados por conexões que transportam informações.`}),`
`,(0,n.jsx)(r.li,{children:`Interligam dispositivos como: CPU, memória, controlador de E/S, entre outros...`}),`
`,(0,n.jsxs)(r.li,{children:[`Tipos de Barramento (bus)`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Controle`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`operações que devem ser realizadas, como: leitura, escrita, ativação de dispositivos, etc`}),`
`,(0,n.jsx)(r.li,{children:`gerencia a comunicação entre dispositivos`}),`
`,(0,n.jsxs)(r.li,{children:[`garante que a comunicação ocorra de forma eficiente`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`CLOCK - Sincroniza a comunicação`}),`
`,(0,n.jsx)(r.li,{children:`REQUEST - Solicita algo`}),`
`,(0,n.jsx)(r.li,{children:`ACK - Reconhece um sinal`}),`
`,(0,n.jsx)(r.li,{children:`RESPONSE - Responde à uma solicitação`}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`Endereço`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`transmite o endereço/destino das informações`}),`
`,(0,n.jsx)(r.li,{children:`especificar o endereço de memória ou o endereço de registro que a CPU deseja acessar.`}),`
`,(0,n.jsx)(r.li,{children:`a largura do barramento de endereços determina a quantidade de memória que o sistema pode endereçar.`}),`
`,(0,n.jsx)(r.li,{children:`distribuidos pela BIOS`}),`
`,(0,n.jsx)(r.li,{children:`A quantidade máxima de endereços de dispositivos e/ou dados depende diretamente da quantidade de bits do barramento de endereços. Exemplo: 8 bits = 2^8 = 256 endereços (0 a 255)`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`Dados`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`transmite os dados entre dispositivos`}),`
`,(0,n.jsx)(r.li,{children:`a quantidade de bits de dados do processador equivale as linhas de barramento de dados`}),`
`,(0,n.jsx)(r.li,{children:`a velocidade de transmissão depende da quantidade de barramento e da frequência do clock`}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`protocolos`,children:`Protocolos`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Padronizam a comunicação`}),`
`,(0,n.jsx)(r.li,{children:`Conjuntos de regras para os barramentos que devem ser seguidas pelos dispositivos para que não ocorra erros na comunicação.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`clock`,children:`Clock`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Sinal digital que varia em uma frequência predeterminada.`}),`
`,(0,n.jsx)(r.li,{children:`É a base para a troca de informações entre dispositivos.`}),`
`,(0,n.jsxs)(r.li,{children:[`Determina a `,(0,n.jsx)(r.strong,{children:`frequência de operações`}),` entre dispositivos e CPU.`]}),`
`,(0,n.jsx)(r.li,{children:`Determina a velocidade de transmissão de informações pelos barramentos.`}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};