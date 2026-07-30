import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`demonstração-source-nat`,children:`Demonstração Source NAT`}),`
`,(0,n.jsx)(r.h2,{id:`demonstração`,children:`Demonstração`}),`
`,(0,n.jsx)(r.p,{children:`Usaremos 3 máquinas virtuais (VMs). Uma simulando a internet aberta, uma apenas em rede local e uma fazendo a ponte entre elas.`}),`
`,(0,n.jsx)(r.h2,{id:`configurações-para-a-prática`,children:`Configurações para a Prática`}),`
`,(0,n.jsx)(r.p,{children:`VM1 = SEED 1.0 - Interface de Rede: Bridge - (internet) - IP: 10.3.150.146\r
VM2 = Ubuntu24s - Duas Interfaces de Rede: Host-Only e Bridge - (rede local) - IP:\r
DockerGUI - Interface de Rede: Host-Only - (Gateway) - IP: 192.168.56.`}),`
`,(0,n.jsx)(r.p,{children:`Entre em todas para pegar seus IPs.`}),`
`,(0,n.jsx)(r.h2,{id:`iniciando-a-ubuntu24s`,children:`Iniciando a Ubuntu24s`}),`
`,(0,n.jsxs)(r.p,{children:[`Faça `,(0,n.jsx)(r.em,{children:`login`}),` usando as credenciais `,(0,n.jsx)(r.strong,{children:`djr`}),` (nome) e `,(0,n.jsx)(r.strong,{children:`654123`}),` (senha).\r
Coloque também em `,(0,n.jsx)(r.em,{children:`SuperUsuário`}),` para ter todas as permissões, já que essa irá ser a VM principal que vamos treabalhar.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Inicia a interface gráfica, abra o LXTerminal e crie 3 abas: `,(0,n.jsx)(r.strong,{children:`VM1_INTERNET`}),` SEED, `,(0,n.jsx)(r.strong,{children:`VM2_GATEWAY`}),` DockerGUI, `,(0,n.jsx)(r.strong,{children:`VM3_IP_LOCAL`}),` Ubuntu24s. Faça `,(0,n.jsx)(r.code,{children:`ssh`}),` para conectar as VMs nessas abas.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Desse momento em diante, falaremos apenas dessas abas dentro da `,(0,n.jsx)(r.em,{children:`Ubuntu24s`}),` e não das VMs em si.`]}),`
`,(0,n.jsx)(r.h2,{id:`vm3_ip_local`,children:`VM3_IP_LOCAL`}),`
`,(0,n.jsxs)(r.p,{children:[`Faça `,(0,n.jsx)(r.code,{children:`ssh`}),` com o IP da []`]}),`
`,(0,n.jsx)(r.p,{children:`Se tentar dar ping com o IP da [], não vai dar certo.`}),`
`,(0,n.jsx)(r.p,{children:`Mesmo colocando uma máscara, não dará certo.`}),`
`,(0,n.jsx)(r.h2,{id:`vm2_gateway`,children:`VM2_GATEWAY`}),`
`,(0,n.jsx)(r.p,{children:`Se tentarmos dar ping nessa aba com o IP, dará certo.`}),`
`,(0,n.jsx)(r.h2,{id:`vm2_gateway-1`,children:`VM2_GATEWAY`}),`
`,(0,n.jsx)(r.p,{children:`iptables -t nat -F (para apagar)\r
iptables -t nat -L (para listar e ver se apagou)`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};