import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`atividade-03---parte-01`,children:`Atividade 03 - Parte 01`}),`
`,(0,n.jsx)(r.h2,{id:`vm1_internet`,children:`VM1_INTERNET`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`dhclient eth1 (se não funcionar, veja se o adaptador de rede está como "1". se mesmo assim não der certo, tente `,(0,n.jsx)(r.code,{children:`dhclient eth1 -r`}),`)`]}),`
`,(0,n.jsx)(r.li,{children:`ssh seed@10.3.150.90`}),`
`,(0,n.jsx)(r.li,{children:`yes`}),`
`,(0,n.jsx)(r.li,{children:`dees`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`vm2_gateway`,children:`VM2_GATEWAY`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`iptables -t nat -A POSTROUTING -j MASQUERADE`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`vm3_local_internet`,children:`VM3_LOCAL_INTERNET`}),`
`,(0,n.jsxs)(r.p,{children:[`Vá na VM_U26s e dê `,(0,n.jsx)(r.code,{children:`ifconfig`}),` para pegar o IP referente ao `,(0,n.jsx)(r.code,{children:`enp0s3`}),` (192.168.56.102).`]}),`
`,(0,n.jsxs)(r.p,{children:[`se não der certo, vá na VM2_GATEWAY e coloque o `,(0,n.jsx)(r.code,{children:`dhclient eth1`}),` novamente. depois tente o `,(0,n.jsx)(r.code,{children:`ssh`}),` na VM3_LOCAL_INTERNET.`]}),`
`,(0,n.jsxs)(r.p,{children:[`"Are you sure you want to continue connectting (yes/no) ?" `,(0,n.jsx)(r.code,{children:`yes`})]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`senha: 654123`}),`
`,(0,n.jsx)(r.li,{children:`sudo su`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`vm2_gateway-1`,children:`VM2_GATEWAY`}),`
`,(0,n.jsx)(r.p,{children:`iptables -t nat -A POSTROUTING -j MASQUERADE`}),`
`,(0,n.jsx)(r.h2,{id:`vm3_local_internet-1`,children:`VM3_LOCAL_INTERNET`}),`
`,(0,n.jsxs)(r.p,{children:[`route add -net 10.3.150.90 (IP_SEED) netmask 255.255.255.0 gw (`,(0,n.jsx)(r.code,{children:`eth0`}),` da VM2_GATEWAY) 10.3.150.68`]}),`
`,(0,n.jsx)(r.p,{children:`se der erro de "route: netmask doesn't match route address": route add -net 10.3.150.0 netmask 255.255.255.0 gw 192.168.56.102 (IP_U26s)`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};