import{n as e,r as t}from"./lib-CrvGBhFj.js";import{t as n}from"./index-B7yjh-X-.js";var r=t(),i=`/Biblioteca_ADS/assets/SO-Sistemas_Operacionais-Arquitetura_de_Harvard-BXZVttHd.jpeg`;function a(t){let a={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...e(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:`conceitos-de-hardware`,children:`Conceitos de Hardware`}),`
`,(0,r.jsxs)(a.p,{children:[`A interação entre o sistema operacional e o `,(0,r.jsx)(a.em,{children:`hardware`}),` da máquina serve para que as aplicações tenham acesso aos serviços oferecidos pelo dispositivo.`]}),`
`,(0,r.jsxs)(a.p,{children:[`Precisamos entender o que compõe o `,(0,r.jsx)(a.em,{children:`hardware`}),` de um sistema computacional e como esses dispositivos são acessados.`]}),`
`,(0,r.jsx)(a.h2,{id:`breve-resumo`,children:`Breve Resumo`}),`
`,(0,r.jsx)(a.p,{children:`Este documento foca na estrutura básica de um sistema computacional e na comunicação interna entre seus componentes. O hardware típico é composto pelo processador (CPU), memória e dispositivos de entrada/saída (E/S). São apresentadas as duas arquiteturas principais de computadores: a de Harvard, que utiliza memórias e barramentos distintos para instruções e dados, visando desempenho e segurança, e a de Von Neumann, que utiliza uma única memória para ambos, priorizando a simplicidade de projeto e flexibilidade. O arquivo detalha os barramentos como canais de comunicação divididos em três tipos: Controle (sinais de comando), Endereços (origem/destino) e Dados (informação trafegada). Além disso, explica o papel do Clock como sinal digital que sincroniza a comunicação e determina a frequência de operação da CPU.`}),`
`,(0,r.jsx)(a.h2,{id:`composição-de-hardware-típico`,children:`Composição de Hardware Típico`}),`
`,(0,r.jsx)(a.p,{children:`O hardware de um sistema de computador típico é composto de:`}),`
`,(0,r.jsxs)(a.ul,{children:[`
`,(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:`Processador`}),` (execução das instruções das aplicações)`]}),`
`,(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:`Memória`}),` (armazenamento das aplicações em execução)`]}),`
`,(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:`Dispositivos`}),` de Entrada/Saída (armazenamento de dados e comunicação com o mundo externo)`]}),`
`]}),`
`,(0,r.jsx)(a.h2,{id:`arquitetura-de-um-computador`,children:`Arquitetura de um Computador`}),`
`,(0,r.jsx)(a.p,{children:`O hardware de um sistema de computador foi pensado seguindo duas arquiteturas diferentes:`}),`
`,(0,r.jsxs)(a.ul,{children:[`
`,(0,r.jsx)(a.li,{children:`Arquitetura de Harvard`}),`
`,(0,r.jsx)(a.li,{children:`Arquitetura de Von Neumann`}),`
`]}),`
`,(0,r.jsx)(a.h2,{id:`arquitetura-de-harvard`,children:`Arquitetura de Harvard`}),`
`,(0,r.jsx)(a.p,{children:`Duas regiões de memória distintas são utilizadas, uma para os programas (instruções) e outra para os dados acessados pelos programas.`}),`
`,(0,r.jsx)(a.p,{children:`Essa separação permite que o processador acesse os dois tipos de memória simultaneamente e de forma mais eficiente.`}),`
`,(0,r.jsx)(n,{src:i,alt:`Esquematicação da Arquitetura de Harvard`}),`
`,(0,r.jsx)(a.h3,{id:`vantagens`,children:`Vantagens`}),`
`,(0,r.jsxs)(a.ul,{children:[`
`,(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:`Busca e execução Simultânea de Instruções e Dados`}),`: permite um aumento de desempenho em determinadas situações;`]}),`
`,(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:`Maior largura de banda de memória`}),`: instruções e dados possuem barramentos distintos;`]}),`
`,(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:`Segurança Aprimorada`}),`: A separação física entre instruções e dados pode contribuir para uma segurança aprimorada, pois dificulta certos tipos de ataques, como ataques de injeção de código.`]}),`
`]}),`
`,(0,r.jsx)(a.h3,{id:`desvantagens`,children:`Desvantagens`}),`
`,(0,r.jsxs)(a.ul,{children:[`
`,(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:`Complexidade de projeto`}),`: a separação física de barramentos de instruções e dados pode tornar o projeto de hardware mais complexo;`]}),`
`,(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:`Custo`}),`: os dispositivos que utilizam arquitetura Harvard podem ser mais caros de produzir devido à complexidade adicional do hardware;`]}),`
`,(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:`Uso ineficiente de recursos`}),`: pode haver uma utilização ineficiente de recursos, especialmente se as instruções e os dados não forem acessados em taxas balanceadas;`]}),`
`]})]})}function o(t={}){let{wrapper:n}={...e(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(a,{...t})}):a(t)}export{o as default};