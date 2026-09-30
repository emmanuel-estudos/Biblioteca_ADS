import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`atividade-03---parte-02`,children:`Atividade 03 - Parte 02`}),`
`,(0,n.jsx)(r.h2,{id:`vm2_gateway`,children:`VM2_GATEWAY`}),`
`,(0,n.jsx)(r.p,{children:`Limpando as configurações definidas na etapa anterior.`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`iptables -t nat -F`}),`
`,(0,n.jsx)(r.li,{children:`iptables -t nat -A PREROUTING -p tcp --dport 2000 -j DNAT --to-destination 192.168.56.102:22 (IP_U26s)`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Pegue o IP`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`ifconfig`}),`
`,(0,n.jsx)(r.li,{children:`eth0: 10.3.150.68`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`vm1_internet`,children:`VM1_INTERNET`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`ssh -p 2000 ads@10.3.150.68`}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`yes`}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`senha 654123`}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`print`,children:`Print`}),`
`,(0,n.jsx)(r.p,{children:`Tire print na VM1_INTERNET depois de fazer o tópico anterior.`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};