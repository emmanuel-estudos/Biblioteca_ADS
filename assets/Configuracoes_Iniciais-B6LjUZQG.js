import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components},{Aba:i,Abas:o,Code:s,Comentario:c,Linha:l,Terminal:u}=r;return i||a(`Aba`,!0),o||a(`Abas`,!0),s||a(`Code`,!0),c||a(`Comentario`,!0),l||a(`Linha`,!0),u||a(`Terminal`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`atv-03---configurações-iniciais`,children:`Atv 03 - Configurações Iniciais`}),`
`,(0,n.jsx)(r.h2,{id:`configurações-de-rede-no-virtualbox`,children:`Configurações de Rede no VirtualBox`}),`
`,(0,n.jsx)(r.p,{children:`Antes de iniciar as VMs, verifique se suas Interfaces de Rede estão configuradas dessa forma:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`SEED = interface em bridge`}),`
`,(0,n.jsx)(r.li,{children:`DockerGUI = 1 interface bridge e 1 interface host-Only`}),`
`,(0,n.jsxs)(r.li,{children:[`U26s = interface host-Only - verifique se o nome está com `,(0,n.jsx)(r.strong,{children:`VirtualBox Host-Only Ethernet Adapter`})]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`u26s`,children:`U26s`}),`
`,(0,n.jsx)(r.p,{children:`Faça login.`}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`U26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{children:`Entrando`}),(0,n.jsx)(l,{texto:`u26s login`,children:`ads`}),(0,n.jsx)(l,{texto:`Password:`,children:` 654123`}),(0,n.jsx)(c,{children:`Verificando IP`}),(0,n.jsx)(l,{texto:`ads@u26s:~$`,children:`ifconfig`})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`Anote o IP referente ao `,(0,n.jsx)(r.code,{children:`enp0s3`}),`. Exemplo: `,(0,n.jsx)(r.code,{children:`192.168.56.102`}),`.`]}),`
`,(0,n.jsx)(r.h2,{id:`seed1`,children:`SEED1`}),`
`,(0,n.jsx)(r.p,{children:`Procure na barra lateral, localizada na esquerda, o quarto item. Este é o terminal dessa máquina.`}),`
`,(0,n.jsx)(r.p,{children:`Ao abrir, descubra o IP. O terminal pode abrir todo em branco ou aparecendo uma mensagem contendo a data de hoje, assim como está abaixo.`}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`SEED 1.0`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{children:`Descobrindo IP`}),(0,n.jsx)(l,{texto:`[data]seed@VM:^$`,children:`ifconfig`})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`Pegue o IP referente ao `,(0,n.jsx)(r.strong,{children:`enp0s3`}),`. Exemplo: `,(0,n.jsx)(r.code,{children:`10.3.150.81`}),`.`]}),`
`,(0,n.jsx)(r.h2,{id:`dockergui`,children:`DockerGUI`}),`
`,(0,n.jsxs)(r.p,{children:[`Faça login, se transforme em `,(0,n.jsx)(r.em,{children:`SuperUsuário`}),` e inicie a interface gráfica.`]}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`DockerGUI`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{children:`Login normal`}),(0,n.jsx)(l,{texto:`dut login`,children:`djr`}),(0,n.jsx)(l,{texto:`Password:`,children:`654123`}),(0,n.jsxs)(c,{children:[`Se transformando em `,(0,n.jsx)(r.em,{children:`SuperUsuário`})]}),(0,n.jsx)(l,{texto:`djr@dut:~$`,children:`sudo su`}),(0,n.jsx)(l,{texto:`[sudo] password for djr:`,children:`654123`}),(0,n.jsx)(c,{children:`Iniciando a interface gráfica`}),(0,n.jsx)(l,{texto:`root@dut:/home/djr#`,children:`startx`})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`Abra o `,(0,n.jsx)(r.em,{children:`LXTerminal`}),` seguindo o caminho: `,(0,n.jsx)(r.em,{children:`Menu`}),` --> `,(0,n.jsx)(r.em,{children:`Acessórios`}),` --> `,(0,n.jsx)(r.em,{children:`LXTerminal`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Crie 3 abas com o comando `,(0,n.jsx)(r.code,{children:`Ctrl + Shift + T`}),` e renomei elas para `,(0,n.jsx)(r.code,{children:`VM1_INTERNET`}),`, `,(0,n.jsx)(r.code,{children:`VM2_GATEWAY`}),`, `,(0,n.jsx)(r.code,{children:`VM3_LOCAL_INTERNET`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`Os números das VMs não importa. O importante é saber qual se refere a Internet, Gateway e Internet Local.`}),`
`,(0,n.jsx)(r.h2,{id:`vídeos`,children:`Vídeos`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Vídeo 01: `,(0,n.jsx)(r.a,{href:`https://youtu.be/vkYRBAmntVY?si=CUy5WNBKBtuGHhOv`,children:`clique aqui`})]}),`
`,(0,n.jsxs)(r.li,{children:[`Vídeo 02: `,(0,n.jsx)(r.a,{href:`https://youtu.be/K0V3CXuxUmk?si=O2IQGWT-1O49FKMP`,children:`clique aqui`})]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`vms`,children:`VMs`}),`
`,(0,n.jsxs)(r.p,{children:[`Essas são as `,(0,n.jsx)(r.a,{href:`https://drive.google.com/drive/folders/1cb_9Lz1Inz56wgGWNtxEQnBqh0595op3`,children:`VMs`}),` necessárias para a atividade.`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};