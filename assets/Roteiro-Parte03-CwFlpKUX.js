import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`atividade-03---parte-03`,children:`Atividade 03 - Parte 03`}),`
`,(0,n.jsx)(r.h2,{id:`criação-da-quarta-aba-vm4_local_internet_2`,children:`Criação da quarta aba: VM4_LOCAL_INTERNET_2`}),`
`,(0,n.jsxs)(r.p,{children:[`Se conecte via `,(0,n.jsx)(r.code,{children:`ssh`}),` com a outra VM3_LOCAL_INTERNET.`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`ssh ads@192.168.56.102`}),`
`,(0,n.jsx)(r.li,{children:`654123`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`vm3_local_internet`,children:`VM3_LOCAL_INTERNET`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`nc -lk 9001`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`vm4_local_internet_2`,children:`VM4_LOCAL_INTERNET_2`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`nc -lk 9002`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`vm2_gateway`,children:`VM2_GATEWAY`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`iptables -t nat -F`}),`
`,(0,n.jsx)(r.li,{children:`iptables -t nat -A PREROUTING -p tcp --dport 8000 -m statistic --mode random --probability .50 -j DNAT --to-destination 192.168.56.102:9001`}),`
`,(0,n.jsx)(r.li,{children:`iptables -t nat -A PREROUTING -p tcp --dport 8000 -m statistic --mode random --probability .50 -j DNAT --to-destination 192.168.56.102:9002 (mesmo comando, só trocando a porta)`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`vm3_local_internet-1`,children:`VM3_LOCAL_INTERNET`}),`
`,(0,n.jsxs)(r.p,{children:[`Saindo do `,(0,n.jsx)(r.code,{children:`ssh`}),`.`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Ctrl + D`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Rodando `,(0,n.jsx)(r.code,{children:`echo`}),`.`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`echo "Hello 1" | nc 10.3.150.90 8000`}),`
`,(0,n.jsx)(r.li,{children:`echo "Hello 2" | nc 10.3.150.90 8000`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Repita essa sequência mais 5 vezes.`}),`
`,(0,n.jsx)(r.h2,{id:`prints`,children:`Prints`}),`
`,(0,n.jsxs)(r.p,{children:[`Tire print das 4 abas, provando que você enviou os `,(0,n.jsx)(r.code,{children:`echo's`}),` e que eles chegaram na `,(0,n.jsx)(r.code,{children:`VM4_LOCAL_INTERNET_2`}),` e `,(0,n.jsx)(r.code,{children:`VM3_LOCAL_INTERNET`}),`.`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};