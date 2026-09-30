import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`atividade-03---configurações-iniciais`,children:`Atividade 03 - Configurações Iniciais`}),`
`,(0,n.jsx)(r.h2,{id:`configurações-de-rede-no-virtualbox`,children:`Configurações de Rede no VirtualBox`}),`
`,(0,n.jsx)(r.p,{children:`Antes de iniciar as VMs, verifique se suas Interfaces de Rede estão configuradas dessa forma:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`SEED = interface em bridge`}),`
`,(0,n.jsx)(r.li,{children:`DockerGUI = 1 interface bridge e 1 interface host-Only`}),`
`,(0,n.jsxs)(r.li,{children:[`U26s = interface host-Only - verifique se o nome está com `,(0,n.jsx)(r.strong,{children:`VirtualBox Host-Only Ethernet Adapter`})]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`seed1`,children:`SEED1`}),`
`,(0,n.jsxs)(r.p,{children:[`Descubra o IP com o comando `,(0,n.jsx)(r.code,{children:`ifconfig`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`inet addr: 10.3.150.90`}),`
`,(0,n.jsx)(r.p,{children:`A partir desse momento, quando houver referência para as VMs, serão referentes às abas.`}),`
`,(0,n.jsx)(r.h2,{id:`dockergui`,children:`DockerGUI`}),`
`,(0,n.jsxs)(r.p,{children:[`Logue na máquina com as credenciais de `,(0,n.jsx)(r.code,{children:`djr`}),` como nome e `,(0,n.jsx)(r.code,{children:`654123`}),` como senha.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Se transforme em `,(0,n.jsx)(r.em,{children:`SuperUsuário`}),`, coloque a senha novamente e inicie a interface gráfica com `,(0,n.jsx)(r.code,{children:`startx`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Abra o `,(0,n.jsx)(r.em,{children:`LXTerminal`}),` seguindo o caminho: `,(0,n.jsx)(r.em,{children:`Menu`}),` --> `,(0,n.jsx)(r.em,{children:`Acessórios`}),` --> `,(0,n.jsx)(r.em,{children:`LXTerminal`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Crie 3 abas com o comando `,(0,n.jsx)(r.code,{children:`Ctrl + Shift + T`}),` e renomei elas para `,(0,n.jsx)(r.code,{children:`VM1_INTERNET`}),`, `,(0,n.jsx)(r.code,{children:`VM2_GATEWAY`}),`, `,(0,n.jsx)(r.code,{children:`VM3_LOCAL_INTERNET`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`A ordem do número das VMs não importa. O importante é saber qual se refere a Internet, Gateway e Internet Local.`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};