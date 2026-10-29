import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`atividade-03---parte-01`,children:`Atividade 03 - Parte 01`}),`
`,(0,n.jsx)(r.h2,{id:`vm2_gateway`,children:`VM2_GATEWAY`}),`
`,(0,n.jsxs)(r.p,{children:[`Ative o `,(0,n.jsx)(r.code,{children:`eth1`}),`.`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`dhclient eth1`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`vm3_local_internet`,children:`VM3_LOCAL_INTERNET`}),`
`,(0,n.jsxs)(r.p,{children:[`Faça a conexão `,(0,n.jsx)(r.code,{children:`ssh`}),` com a `,(0,n.jsx)(r.strong,{children:`U26s`}),`.`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`ssh ads@192.168.56.102`}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`senha: 654123`}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`vm1_internet`,children:`VM1_INTERNET`}),`
`,(0,n.jsxs)(r.p,{children:[`Faça comexão `,(0,n.jsx)(r.code,{children:`ssh`}),` com a `,(0,n.jsx)(r.strong,{children:`SEED`})]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`ssh seed@10.3.150.90`}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`senha: dees`}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`vm2_gateway-1`,children:`VM2_GATEWAY`}),`
`,(0,n.jsxs)(r.p,{children:[`Adicione `,(0,n.jsx)(r.code,{children:`MASQUERADE`}),`.`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`iptables -t nat -A POSTROUTING -j MASQUERADE`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`vm3_local_internet-1`,children:`VM3_LOCAL_INTERNET`}),`
`,(0,n.jsx)(r.p,{children:`Crie a conexão com a VM1_INTERNET.`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`sudo su`}),`
`,(0,n.jsx)(r.li,{children:`654123`}),`
`,(0,n.jsx)(r.li,{children:`route add -net 10.3.150.0 netmask 255.255.255.0 gw 192.168.56.104 (eth0 da VM2_GATEWAY)`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Ative o `,(0,n.jsx)(r.code,{children:`telnet`}),`.`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`telnet 10.3.150.90 (IP_SEED)`}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`VM Login: seed`}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`senha: dees`}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`print`,children:`Print`}),`
`,(0,n.jsxs)(r.p,{children:[`Tire print da VM3_LOCAL_INTERNET quado tiver logado no `,(0,n.jsx)(r.code,{children:`telnet`}),`.`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};