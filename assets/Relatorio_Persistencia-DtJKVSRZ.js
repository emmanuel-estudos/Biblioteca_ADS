import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`relatório`,children:`Relatório`}),`
`,(0,n.jsx)(r.p,{children:`Alunos:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Emanuel Franklyn de Lima Maciel`}),`
`,(0,n.jsx)(r.li,{children:`Emmanuel Florêncio Leite`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`descrição-de-cenários`,children:`Descrição de Cenários`}),`
`,(0,n.jsx)(r.h3,{id:`visão-geral`,children:`Visão Geral`}),`
`,(0,n.jsx)(r.p,{children:`O protocolo 2PC funciona em duas etapas principais para qualquer transação distribuída (inserção, atualização ou exclusão):`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Preparação (Prepare)`}),`: O coordenador pergunta aos participantes (PostgreSQL e MongoDB) se eles conseguem realizar a operação. Cada banco faz as validações, bloqueia os recursos necessários e responde com um `,(0,n.jsx)(r.code,{children:`ACK`}),` (confirmação de que está pronto) ou um `,(0,n.jsx)(r.code,{children:`FAILED`}),` (caso algo dê errado).`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Confirmação (Commit)`}),`: Se todos os participantes confirmarem no passo anterior, o coordenador manda efetivar a alteração (`,(0,n.jsx)(r.code,{children:`COMMIT`}),`) em ambos.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Desfazimento (Rollback)`}),`: Se qualquer participante falhar na preparação, o coordenador aciona o desfazimento (`,(0,n.jsx)(r.code,{children:`ROLLBACK`}),`), fazendo com que nenhum banco aplique a alteração, garantindo que os dados permaneçam sincronizados e íntegros.`]}),`
`,(0,n.jsx)(r.h3,{id:`inserção`,children:`Inserção`}),`
`,(0,n.jsxs)(r.p,{children:[`O sistema insere três itens no inventário sequencialmente: `,(0,n.jsx)(r.code,{children:`keyboard-01`}),`, `,(0,n.jsx)(r.code,{children:`mouse-01`}),` e `,(0,n.jsx)(r.code,{children:`monitor-01`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`Passo a passo do sistema:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Início (`,(0,n.jsx)(r.code,{children:`BEGIN`}),`): Abre a transação distribuída bloqueando as leituras de forma consistente (`,(0,n.jsx)(r.code,{children:`readMode=blocking`}),`).`]}),`
`,(0,n.jsxs)(r.li,{children:[`Preparação (`,(0,n.jsx)(r.code,{children:`PREPARE`}),`): O sistema pergunta ao PostgreSQL e ao MongoDB se podem inserir o item.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Confirmação (`,(0,n.jsx)(r.code,{children:`ACK`}),`): Ambos os bancos respondem positivamente (Prepare ACK).`]}),`
`,(0,n.jsxs)(r.li,{children:[`Efetivação (`,(0,n.jsx)(r.code,{children:`COMMIT`}),`): Como ambos concordaram, o coordenador solicita a gravação final. Os dois bancos aplicam a mudança e liberam os bloqueios.`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Resultado: O item é gravado com sucesso idêntico em ambas as bases de dados.`}),`
`,(0,n.jsx)(r.h3,{id:`cenário-01-falha-do-mongodb`,children:`Cenário 01: Falha do MongoDB`}),`
`,(0,n.jsxs)(r.p,{children:[`O sistema tenta inserir o item `,(0,n.jsx)(r.code,{children:`headset-01`}),` (e posteriormente atualizar `,(0,n.jsx)(r.code,{children:`keyboard-01`}),`), mas uma falha é injetada propositalmente no momento em que o MongoDB tenta se preparar.`]}),`
`,(0,n.jsx)(r.p,{children:`Passo a passo do sistema:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:`A transação começa, e o PostgreSQL e o MongoDB iniciam a fase de preparação.`}),`
`,(0,n.jsxs)(r.li,{children:[`O MongoDB retorna um erro (`,(0,n.jsx)(r.code,{children:`PREPARE FAILED participant=mongo`}),`).`]}),`
`,(0,n.jsx)(r.li,{children:`O PostgreSQL ainda consegue responder positivamente, mas como um dos participantes falhou, a regra de ouro do 2PC é acionada: abortar tudo.`}),`
`,(0,n.jsxs)(r.li,{children:[`Rollback: O sistema envia um comando de cancelamento (`,(0,n.jsx)(r.code,{children:`ROLLBACK`}),`) para todos os participantes. Ambos descartam qualquer alteração pendente e liberam os bloqueios.`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Resultado: A operação é cancelada e o banco permanece exatamente igual a antes, sem inconsistências.`}),`
`,(0,n.jsx)(r.h3,{id:`cenário-02-falha-do-postgresql`,children:`Cenário 02: Falha do PostgreSQL`}),`
`,(0,n.jsxs)(r.p,{children:[`Uma tentativa de inserção do item `,(0,n.jsx)(r.code,{children:`webcam-01`}),` (ou atualização do `,(0,n.jsx)(r.code,{children:`mouse-01`}),`) é realizada, mas agora a falha é injetada no lado do PostgreSQL.`]}),`
`,(0,n.jsx)(r.p,{children:`Passo a passo do sistema:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`O MongoDB responde OK na fase de preparação, mas o PostgreSQL falha (`,(0,n.jsx)(r.code,{children:`PREPARE FAILED participant=postgres`}),`).`]}),`
`,(0,n.jsx)(r.li,{children:`Novamente, o coordenador identifica que a transação não pode ser concluída com segurança.`}),`
`,(0,n.jsxs)(r.li,{children:[`O protocolo executa o `,(0,n.jsx)(r.code,{children:`ROLLBACK`}),` geral em ambos os bancos.`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Resultado: Nenhuma alteração é persistida, provando que o sistema protege a integridade independentemente de qual dos bancos falhe.`}),`
`,(0,n.jsx)(r.h3,{id:`leitura-bloqueada-e-atualizações-concorrentes`,children:`Leitura Bloqueada e Atualizações Concorrentes`}),`
`,(0,n.jsxs)(r.p,{children:[`O sistema realiza atualizações nos itens (`,(0,n.jsx)(r.code,{children:`keyboard-01`}),`, `,(0,n.jsx)(r.code,{children:`mouse-01`}),` e `,(0,n.jsx)(r.code,{children:`monitor-01`}),`) enquanto testa a consistência de leitura simultânea (polling).`]}),`
`,(0,n.jsx)(r.p,{children:`Passo a passo do sistema:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Enquanto uma transação de escrita está ocorrendo, leituras externas que tentam acessar os dados encontram o aviso: `,(0,n.jsx)(r.code,{children:`READ BLOCKED waiting for 2PC commit or rollback completion`}),`.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Isso acontece porque o modo de leitura está configurado como `,(0,n.jsx)(r.code,{children:`blocking`}),` (bloqueante), impedindo que aplicações leiam dados "sujos" ou incompletos enquanto o 2PC ainda está decidindo se vai salvar ou cancelar.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Assim que o commit é concluído, as leituras são liberadas e o sistema verifica que dezenas de leituras foram feitas sem nenhuma divergência entre os bancos (`,(0,n.jsx)(r.code,{children:`0 divergencias`}),`).`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`exclusão-de-registro`,children:`Exclusão de Registro`}),`
`,(0,n.jsxs)(r.p,{children:[`Um registro temporário chamado `,(0,n.jsx)(r.code,{children:`to-delete`}),` é inserido e depois removido utilizando o mesmo fluxo de 2 fases.`]}),`
`,(0,n.jsx)(r.p,{children:`Passo a passo do sistema:`}),`
`,(0,n.jsxs)(r.p,{children:[`O item passa pelo `,(0,n.jsx)(r.code,{children:`BEGIN`}),`, `,(0,n.jsx)(r.code,{children:`PREPARE`}),` em ambos os bancos, recebe os `,(0,n.jsx)(r.code,{children:`ACKs`}),` de sucesso e é devidamente deletado de forma síncrona tanto no PostgreSQL quanto no MongoDB, encerrando o ciclo de testes.`]}),`
`,(0,n.jsx)(r.h2,{id:`logs`,children:`Logs`}),`
`,(0,n.jsx)(r.p,{children:`[2026-11-02T20:54:13.032Z] 2PC scenario report - 2026-11-02T20:54:13.032Z
[2026-11-02T20:54:13.062Z] Read consistency mode: blocking
[2026-11-02T20:54:13.094Z] Tabela/colecao inventory criada com lock automatico nos dois bancos
[2026-11-02T20:54:13.095Z] [2PC 7c69dd54-4a60-41f5-aebd-142237acf794] BEGIN operations=1 table=inventory order=postgres -> mongo readMode=blocking
[2026-11-02T20:54:13.095Z] [2PC 7c69dd54-4a60-41f5-aebd-142237acf794] PREPARE START participant=postgres
[2026-11-02T20:54:13.095Z] [2PC 7c69dd54-4a60-41f5-aebd-142237acf794] PREPARE START participant=mongo
[2026-11-02T20:54:13.104Z] [2PC 7c69dd54-4a60-41f5-aebd-142237acf794] PREPARE ACK participant=postgres
[2026-11-02T20:54:13.108Z] [2PC 7c69dd54-4a60-41f5-aebd-142237acf794] PREPARE ACK participant=mongo
[2026-11-02T20:54:13.108Z] [2PC 7c69dd54-4a60-41f5-aebd-142237acf794] PREPARE COMPLETE participants=postgres,mongo
[2026-11-02T20:54:13.108Z] [2PC 7c69dd54-4a60-41f5-aebd-142237acf794] COMMIT START participants=postgres,mongo
[2026-11-02T20:54:13.108Z] [2PC 7c69dd54-4a60-41f5-aebd-142237acf794] COMMIT REQUEST participant=postgres
[2026-11-02T20:54:13.108Z] [2PC 7c69dd54-4a60-41f5-aebd-142237acf794] COMMIT REQUEST participant=mongo
[2026-11-02T20:54:13.114Z] [2PC 7c69dd54-4a60-41f5-aebd-142237acf794] COMMIT ACK participant=postgres
[2026-11-02T20:54:13.115Z] [2PC 7c69dd54-4a60-41f5-aebd-142237acf794] COMMIT ACK participant=mongo
[2026-11-02T20:54:13.115Z] [2PC 7c69dd54-4a60-41f5-aebd-142237acf794] COMMIT COMPLETE all participants acknowledged
[2026-11-02T20:54:13.115Z] [2PC 7c69dd54-4a60-41f5-aebd-142237acf794] END reads released
[2026-11-02T20:54:13.115Z] INSERT COMMITTED | key=keyboard-01
[2026-11-02T20:54:13.117Z] Banco completo depois do INSERT keyboard-01
+------------+-------------+---------------------+----------+-------+--------+
| database   | sku         | description         | quantity | price | active |
+------------+-------------+---------------------+----------+-------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard | 20       | 249.9 | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard | 20       | 249.9 | true   |
+------------+-------------+---------------------+----------+-------+--------+
[2026-11-02T20:54:13.117Z] [2PC e9fee73e-39df-47b2-a2d7-8a4c493e7405] BEGIN operations=1 table=inventory order=postgres -> mongo readMode=blocking
[2026-11-02T20:54:13.117Z] [2PC e9fee73e-39df-47b2-a2d7-8a4c493e7405] PREPARE START participant=postgres
[2026-11-02T20:54:13.117Z] [2PC e9fee73e-39df-47b2-a2d7-8a4c493e7405] PREPARE START participant=mongo
[2026-11-02T20:54:13.126Z] [2PC e9fee73e-39df-47b2-a2d7-8a4c493e7405] PREPARE ACK participant=postgres
[2026-11-02T20:54:13.128Z] [2PC e9fee73e-39df-47b2-a2d7-8a4c493e7405] PREPARE ACK participant=mongo
[2026-11-02T20:54:13.128Z] [2PC e9fee73e-39df-47b2-a2d7-8a4c493e7405] PREPARE COMPLETE participants=postgres,mongo
[2026-11-02T20:54:13.128Z] [2PC e9fee73e-39df-47b2-a2d7-8a4c493e7405] COMMIT START participants=postgres,mongo
[2026-11-02T20:54:13.128Z] [2PC e9fee73e-39df-47b2-a2d7-8a4c493e7405] COMMIT REQUEST participant=postgres
[2026-11-02T20:54:13.128Z] [2PC e9fee73e-39df-47b2-a2d7-8a4c493e7405] COMMIT REQUEST participant=mongo
[2026-11-02T20:54:13.132Z] [2PC e9fee73e-39df-47b2-a2d7-8a4c493e7405] COMMIT ACK participant=mongo
[2026-11-02T20:54:13.132Z] [2PC e9fee73e-39df-47b2-a2d7-8a4c493e7405] COMMIT ACK participant=postgres
[2026-11-02T20:54:13.132Z] [2PC e9fee73e-39df-47b2-a2d7-8a4c493e7405] COMMIT COMPLETE all participants acknowledged
[2026-11-02T20:54:13.132Z] [2PC e9fee73e-39df-47b2-a2d7-8a4c493e7405] END reads released
[2026-11-02T20:54:13.132Z] INSERT COMMITTED | key=mouse-01
[2026-11-02T20:54:13.134Z] Banco completo depois do INSERT mouse-01
+------------+-------------+---------------------+----------+-------+--------+
| database   | sku         | description         | quantity | price | active |
+------------+-------------+---------------------+----------+-------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard | 20       | 249.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse      | 35       | 99.9  | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard | 20       | 249.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse      | 35       | 99.9  | true   |
+------------+-------------+---------------------+----------+-------+--------+
[2026-11-02T20:54:13.134Z] [2PC 96a747d8-2de1-47aa-b05d-4ab67824bccc] BEGIN operations=1 table=inventory order=postgres -> mongo readMode=blocking
[2026-11-02T20:54:13.134Z] [2PC 96a747d8-2de1-47aa-b05d-4ab67824bccc] PREPARE START participant=postgres
[2026-11-02T20:54:13.134Z] [2PC 96a747d8-2de1-47aa-b05d-4ab67824bccc] PREPARE START participant=mongo
[2026-11-02T20:54:13.142Z] [2PC 96a747d8-2de1-47aa-b05d-4ab67824bccc] PREPARE ACK participant=postgres
[2026-11-02T20:54:13.145Z] [2PC 96a747d8-2de1-47aa-b05d-4ab67824bccc] PREPARE ACK participant=mongo
[2026-11-02T20:54:13.145Z] [2PC 96a747d8-2de1-47aa-b05d-4ab67824bccc] PREPARE COMPLETE participants=postgres,mongo
[2026-11-02T20:54:13.145Z] [2PC 96a747d8-2de1-47aa-b05d-4ab67824bccc] COMMIT START participants=postgres,mongo
[2026-11-02T20:54:13.145Z] [2PC 96a747d8-2de1-47aa-b05d-4ab67824bccc] COMMIT REQUEST participant=postgres
[2026-11-02T20:54:13.145Z] [2PC 96a747d8-2de1-47aa-b05d-4ab67824bccc] COMMIT REQUEST participant=mongo
[2026-11-02T20:54:13.148Z] [2PC 96a747d8-2de1-47aa-b05d-4ab67824bccc] COMMIT ACK participant=mongo
[2026-11-02T20:54:13.149Z] [2PC 96a747d8-2de1-47aa-b05d-4ab67824bccc] COMMIT ACK participant=postgres
[2026-11-02T20:54:13.149Z] [2PC 96a747d8-2de1-47aa-b05d-4ab67824bccc] COMMIT COMPLETE all participants acknowledged
[2026-11-02T20:54:13.149Z] [2PC 96a747d8-2de1-47aa-b05d-4ab67824bccc] END reads released
[2026-11-02T20:54:13.149Z] INSERT COMMITTED | key=monitor-01
[2026-11-02T20:54:13.150Z] Banco completo depois do INSERT monitor-01
+------------+-------------+---------------------+----------+--------+--------+
| database   | sku         | description         | quantity | price  | active |
+------------+-------------+---------------------+----------+--------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| PostgreSQL | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| MongoDB    | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
+------------+-------------+---------------------+----------+--------+--------+
[2026-11-02T20:54:13.152Z] Banco completo ANTES de falha no MongoDB
+------------+-------------+---------------------+----------+--------+--------+
| database   | sku         | description         | quantity | price  | active |
+------------+-------------+---------------------+----------+--------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| PostgreSQL | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| MongoDB    | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
+------------+-------------+---------------------+----------+--------+--------+
[2026-11-02T20:54:13.152Z] [2PC a90b42e3-7081-4d71-a929-9b96f46e4565] BEGIN operations=1 table=inventory order=postgres -> mongo readMode=blocking
[2026-11-02T20:54:13.152Z] [2PC a90b42e3-7081-4d71-a929-9b96f46e4565] PREPARE START participant=postgres
[2026-11-02T20:54:13.152Z] [2PC a90b42e3-7081-4d71-a929-9b96f46e4565] PREPARE START participant=mongo
[2026-11-02T20:54:13.152Z] [2PC a90b42e3-7081-4d71-a929-9b96f46e4565] PREPARE FAILED participant=mongo
[2026-11-02T20:54:13.158Z] [2PC a90b42e3-7081-4d71-a929-9b96f46e4565] PREPARE ACK participant=postgres
[2026-11-02T20:54:13.158Z] [2PC a90b42e3-7081-4d71-a929-9b96f46e4565] ROLLBACK START preparedParticipants=2
[2026-11-02T20:54:13.163Z] [2PC a90b42e3-7081-4d71-a929-9b96f46e4565] ROLLBACK ACK participant=mongo
[2026-11-02T20:54:13.166Z] [2PC a90b42e3-7081-4d71-a929-9b96f46e4565] ROLLBACK ACK participant=postgres
[2026-11-02T20:54:13.166Z] [2PC a90b42e3-7081-4d71-a929-9b96f46e4565] ROLLBACK COMPLETE
[2026-11-02T20:54:13.166Z] [2PC a90b42e3-7081-4d71-a929-9b96f46e4565] END reads released
[2026-11-02T20:54:13.166Z] INSERT FAILED AND ROLLED BACK | key=headset-01 | Injected failure on mongo prepare
[2026-11-02T20:54:13.167Z] Banco completo DEPOIS de falha no MongoDB
+------------+-------------+---------------------+----------+--------+--------+
| database   | sku         | description         | quantity | price  | active |
+------------+-------------+---------------------+----------+--------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| PostgreSQL | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| MongoDB    | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
+------------+-------------+---------------------+----------+--------+--------+
[2026-11-02T20:54:13.169Z] Banco completo ANTES de falha no PostgreSQL
+------------+-------------+---------------------+----------+--------+--------+
| database   | sku         | description         | quantity | price  | active |
+------------+-------------+---------------------+----------+--------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| PostgreSQL | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| MongoDB    | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
+------------+-------------+---------------------+----------+--------+--------+
[2026-11-02T20:54:13.169Z] [2PC 5c0ee315-1e06-4459-bf9b-4e44d999e9e4] BEGIN operations=1 table=inventory order=mongo -> postgres readMode=blocking
[2026-11-02T20:54:13.169Z] [2PC 5c0ee315-1e06-4459-bf9b-4e44d999e9e4] PREPARE START participant=mongo
[2026-11-02T20:54:13.169Z] [2PC 5c0ee315-1e06-4459-bf9b-4e44d999e9e4] PREPARE START participant=postgres
[2026-11-02T20:54:13.169Z] [2PC 5c0ee315-1e06-4459-bf9b-4e44d999e9e4] PREPARE FAILED participant=postgres
[2026-11-02T20:54:13.178Z] [2PC 5c0ee315-1e06-4459-bf9b-4e44d999e9e4] PREPARE ACK participant=mongo
[2026-11-02T20:54:13.179Z] [2PC 5c0ee315-1e06-4459-bf9b-4e44d999e9e4] ROLLBACK START preparedParticipants=2
[2026-11-02T20:54:13.182Z] [2PC 5c0ee315-1e06-4459-bf9b-4e44d999e9e4] ROLLBACK ACK participant=mongo
[2026-11-02T20:54:13.184Z] [2PC 5c0ee315-1e06-4459-bf9b-4e44d999e9e4] ROLLBACK ACK participant=postgres
[2026-11-02T20:54:13.184Z] [2PC 5c0ee315-1e06-4459-bf9b-4e44d999e9e4] ROLLBACK COMPLETE
[2026-11-02T20:54:13.184Z] [2PC 5c0ee315-1e06-4459-bf9b-4e44d999e9e4] END reads released
[2026-11-02T20:54:13.184Z] INSERT FAILED AND ROLLED BACK | key=webcam-01 | Injected failure on postgres prepare
[2026-11-02T20:54:13.185Z] Banco completo DEPOIS de falha no PostgreSQL
+------------+-------------+---------------------+----------+--------+--------+
| database   | sku         | description         | quantity | price  | active |
+------------+-------------+---------------------+----------+--------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| PostgreSQL | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| MongoDB    | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
+------------+-------------+---------------------+----------+--------+--------+
[2026-11-02T20:54:13.187Z] Banco completo ANTES de falha de update no MongoDB
+------------+-------------+---------------------+----------+--------+--------+
| database   | sku         | description         | quantity | price  | active |
+------------+-------------+---------------------+----------+--------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| PostgreSQL | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| MongoDB    | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
+------------+-------------+---------------------+----------+--------+--------+
[2026-11-02T20:54:13.190Z] [2PC 05b67271-4932-4e74-a726-27358c926544] BEGIN operations=1 table=inventory order=postgres -> mongo readMode=blocking
[2026-11-02T20:54:13.190Z] [2PC 05b67271-4932-4e74-a726-27358c926544] PREPARE START participant=postgres
[2026-11-02T20:54:13.190Z] [2PC 05b67271-4932-4e74-a726-27358c926544] PREPARE START participant=mongo
[2026-11-02T20:54:13.190Z] [2PC 05b67271-4932-4e74-a726-27358c926544] PREPARE FAILED participant=mongo
[2026-11-02T20:54:13.198Z] [2PC 05b67271-4932-4e74-a726-27358c926544] PREPARE ACK participant=postgres
[2026-11-02T20:54:13.198Z] [2PC 05b67271-4932-4e74-a726-27358c926544] ROLLBACK START preparedParticipants=2
[2026-11-02T20:54:13.202Z] [2PC 05b67271-4932-4e74-a726-27358c926544] ROLLBACK ACK participant=mongo
[2026-11-02T20:54:13.206Z] [2PC 05b67271-4932-4e74-a726-27358c926544] ROLLBACK ACK participant=postgres
[2026-11-02T20:54:13.206Z] [2PC 05b67271-4932-4e74-a726-27358c926544] ROLLBACK COMPLETE
[2026-11-02T20:54:13.206Z] [2PC 05b67271-4932-4e74-a726-27358c926544] END reads released
[2026-11-02T20:54:13.206Z] UPDATE FAILED AND ROLLED BACK | key=keyboard-01 | Injected failure on mongo prepare
[2026-11-02T20:54:13.207Z] Banco completo DEPOIS de falha de update no MongoDB
+------------+-------------+---------------------+----------+--------+--------+
| database   | sku         | description         | quantity | price  | active |
+------------+-------------+---------------------+----------+--------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| PostgreSQL | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| MongoDB    | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
+------------+-------------+---------------------+----------+--------+--------+
[2026-11-02T20:54:13.208Z] Banco completo ANTES de falha de update no PostgreSQL
+------------+-------------+---------------------+----------+--------+--------+
| database   | sku         | description         | quantity | price  | active |
+------------+-------------+---------------------+----------+--------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| PostgreSQL | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| MongoDB    | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
+------------+-------------+---------------------+----------+--------+--------+
[2026-11-02T20:54:13.209Z] [2PC 98047b31-750a-4b0a-bc76-d55b44491246] BEGIN operations=1 table=inventory order=mongo -> postgres readMode=blocking
[2026-11-02T20:54:13.209Z] [2PC 98047b31-750a-4b0a-bc76-d55b44491246] PREPARE START participant=mongo
[2026-11-02T20:54:13.209Z] [2PC 98047b31-750a-4b0a-bc76-d55b44491246] PREPARE START participant=postgres
[2026-11-02T20:54:13.209Z] [2PC 98047b31-750a-4b0a-bc76-d55b44491246] PREPARE FAILED participant=postgres
[2026-11-02T20:54:13.218Z] [2PC 98047b31-750a-4b0a-bc76-d55b44491246] PREPARE ACK participant=mongo
[2026-11-02T20:54:13.219Z] [2PC 98047b31-750a-4b0a-bc76-d55b44491246] ROLLBACK START preparedParticipants=2
[2026-11-02T20:54:13.222Z] [2PC 98047b31-750a-4b0a-bc76-d55b44491246] ROLLBACK ACK participant=mongo
[2026-11-02T20:54:13.223Z] [2PC 98047b31-750a-4b0a-bc76-d55b44491246] ROLLBACK ACK participant=postgres
[2026-11-02T20:54:13.223Z] [2PC 98047b31-750a-4b0a-bc76-d55b44491246] ROLLBACK COMPLETE
[2026-11-02T20:54:13.223Z] [2PC 98047b31-750a-4b0a-bc76-d55b44491246] END reads released
[2026-11-02T20:54:13.223Z] UPDATE FAILED AND ROLLED BACK | key=mouse-01 | Injected failure on postgres prepare
[2026-11-02T20:54:13.224Z] Banco completo DEPOIS de falha de update no PostgreSQL
+------------+-------------+---------------------+----------+--------+--------+
| database   | sku         | description         | quantity | price  | active |
+------------+-------------+---------------------+----------+--------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| PostgreSQL | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard | 20       | 249.9  | true   |
| MongoDB    | monitor-01  | 27 inch monitor     | 12       | 1299.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse      | 35       | 99.9   | true   |
+------------+-------------+---------------------+----------+--------+--------+
[2026-11-02T20:54:13.224Z] Polling iniciado: 10ms por 250ms para keyboard-01
[2026-11-02T20:54:13.240Z] [2PC 34ec9a2e-9ed3-4c11-9f63-2d0142b08843] BEGIN operations=1 table=inventory order=postgres -> mongo readMode=blocking
[2026-11-02T20:54:13.240Z] [2PC 34ec9a2e-9ed3-4c11-9f63-2d0142b08843] PREPARE START participant=postgres
[2026-11-02T20:54:13.240Z] [2PC 34ec9a2e-9ed3-4c11-9f63-2d0142b08843] PREPARE START participant=mongo
[2026-11-02T20:54:13.244Z] READ BLOCKED waiting for 2PC commit or rollback completion
[2026-11-02T20:54:13.248Z] [2PC 34ec9a2e-9ed3-4c11-9f63-2d0142b08843] PREPARE ACK participant=postgres
[2026-11-02T20:54:13.249Z] [2PC 34ec9a2e-9ed3-4c11-9f63-2d0142b08843] PREPARE ACK participant=mongo
[2026-11-02T20:54:13.249Z] [2PC 34ec9a2e-9ed3-4c11-9f63-2d0142b08843] PREPARE COMPLETE participants=postgres,mongo
[2026-11-02T20:54:13.249Z] [2PC 34ec9a2e-9ed3-4c11-9f63-2d0142b08843] COMMIT START participants=postgres,mongo
[2026-11-02T20:54:13.249Z] [2PC 34ec9a2e-9ed3-4c11-9f63-2d0142b08843] COMMIT REQUEST participant=postgres
[2026-11-02T20:54:13.249Z] [2PC 34ec9a2e-9ed3-4c11-9f63-2d0142b08843] COMMIT REQUEST participant=mongo
[2026-11-02T20:54:13.253Z] [2PC 34ec9a2e-9ed3-4c11-9f63-2d0142b08843] COMMIT ACK participant=mongo
[2026-11-02T20:54:13.254Z] [2PC 34ec9a2e-9ed3-4c11-9f63-2d0142b08843] COMMIT ACK participant=postgres
[2026-11-02T20:54:13.254Z] [2PC 34ec9a2e-9ed3-4c11-9f63-2d0142b08843] COMMIT COMPLETE all participants acknowledged
[2026-11-02T20:54:13.254Z] [2PC 34ec9a2e-9ed3-4c11-9f63-2d0142b08843] END reads released
[2026-11-02T20:54:13.484Z] Polling finalizado: 20 leituras, 0 divergencias
[2026-11-02T20:54:13.484Z] UPDATE COMMITTED | key=keyboard-01
[2026-11-02T20:54:13.485Z] Banco completo depois do UPDATE keyboard-01
+------------+-------------+-------------------------------+----------+--------+--------+
| database   | sku         | description                   | quantity | price  | active |
+------------+-------------+-------------------------------+----------+--------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard - updated | 15       | 259.9  | true   |
| PostgreSQL | monitor-01  | 27 inch monitor               | 12       | 1299.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse                | 35       | 99.9   | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard - updated | 15       | 259.9  | true   |
| MongoDB    | monitor-01  | 27 inch monitor               | 12       | 1299.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse                | 35       | 99.9   | true   |
+------------+-------------+-------------------------------+----------+--------+--------+
[2026-11-02T20:54:13.485Z] Polling iniciado: 10ms por 250ms para mouse-01
[2026-11-02T20:54:13.487Z] [2PC 6ebef360-5e2d-484b-a880-3a45db0be855] BEGIN operations=1 table=inventory order=postgres -> mongo readMode=blocking
[2026-11-02T20:54:13.487Z] [2PC 6ebef360-5e2d-484b-a880-3a45db0be855] PREPARE START participant=postgres
[2026-11-02T20:54:13.487Z] [2PC 6ebef360-5e2d-484b-a880-3a45db0be855] PREPARE START participant=mongo
[2026-11-02T20:54:13.498Z] READ BLOCKED waiting for 2PC commit or rollback completion
[2026-11-02T20:54:13.499Z] [2PC 6ebef360-5e2d-484b-a880-3a45db0be855] PREPARE ACK participant=postgres
[2026-11-02T20:54:13.501Z] [2PC 6ebef360-5e2d-484b-a880-3a45db0be855] PREPARE ACK participant=mongo
[2026-11-02T20:54:13.501Z] [2PC 6ebef360-5e2d-484b-a880-3a45db0be855] PREPARE COMPLETE participants=postgres,mongo
[2026-11-02T20:54:13.501Z] [2PC 6ebef360-5e2d-484b-a880-3a45db0be855] COMMIT START participants=postgres,mongo
[2026-11-02T20:54:13.501Z] [2PC 6ebef360-5e2d-484b-a880-3a45db0be855] COMMIT REQUEST participant=postgres
[2026-11-02T20:54:13.501Z] [2PC 6ebef360-5e2d-484b-a880-3a45db0be855] COMMIT REQUEST participant=mongo
[2026-11-02T20:54:13.505Z] [2PC 6ebef360-5e2d-484b-a880-3a45db0be855] COMMIT ACK participant=mongo
[2026-11-02T20:54:13.505Z] [2PC 6ebef360-5e2d-484b-a880-3a45db0be855] COMMIT ACK participant=postgres
[2026-11-02T20:54:13.505Z] [2PC 6ebef360-5e2d-484b-a880-3a45db0be855] COMMIT COMPLETE all participants acknowledged
[2026-11-02T20:54:13.505Z] [2PC 6ebef360-5e2d-484b-a880-3a45db0be855] END reads released
[2026-11-02T20:54:13.737Z] Polling finalizado: 20 leituras, 0 divergencias
[2026-11-02T20:54:13.737Z] UPDATE COMMITTED | key=mouse-01
[2026-11-02T20:54:13.739Z] Banco completo depois do UPDATE mouse-01
+------------+-------------+-------------------------------+----------+--------+--------+
| database   | sku         | description                   | quantity | price  | active |
+------------+-------------+-------------------------------+----------+--------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard - updated | 15       | 259.9  | true   |
| PostgreSQL | monitor-01  | 27 inch monitor               | 12       | 1299.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse - updated      | 28       | 109.9  | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard - updated | 15       | 259.9  | true   |
| MongoDB    | monitor-01  | 27 inch monitor               | 12       | 1299.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse - updated      | 28       | 109.9  | true   |
+------------+-------------+-------------------------------+----------+--------+--------+
[2026-11-02T20:54:13.739Z] Polling iniciado: 10ms por 250ms para monitor-01
[2026-11-02T20:54:13.741Z] [2PC 6c37c934-0fb7-4a36-926a-2d2d0de9af0b] BEGIN operations=1 table=inventory order=postgres -> mongo readMode=blocking
[2026-11-02T20:54:13.741Z] [2PC 6c37c934-0fb7-4a36-926a-2d2d0de9af0b] PREPARE START participant=postgres
[2026-11-02T20:54:13.741Z] [2PC 6c37c934-0fb7-4a36-926a-2d2d0de9af0b] PREPARE START participant=mongo
[2026-11-02T20:54:13.751Z] READ BLOCKED waiting for 2PC commit or rollback completion
[2026-11-02T20:54:13.751Z] [2PC 6c37c934-0fb7-4a36-926a-2d2d0de9af0b] PREPARE ACK participant=postgres
[2026-11-02T20:54:13.755Z] [2PC 6c37c934-0fb7-4a36-926a-2d2d0de9af0b] PREPARE ACK participant=mongo
[2026-11-02T20:54:13.755Z] [2PC 6c37c934-0fb7-4a36-926a-2d2d0de9af0b] PREPARE COMPLETE participants=postgres,mongo
[2026-11-02T20:54:13.755Z] [2PC 6c37c934-0fb7-4a36-926a-2d2d0de9af0b] COMMIT START participants=postgres,mongo
[2026-11-02T20:54:13.755Z] [2PC 6c37c934-0fb7-4a36-926a-2d2d0de9af0b] COMMIT REQUEST participant=postgres
[2026-11-02T20:54:13.755Z] [2PC 6c37c934-0fb7-4a36-926a-2d2d0de9af0b] COMMIT REQUEST participant=mongo
[2026-11-02T20:54:13.758Z] [2PC 6c37c934-0fb7-4a36-926a-2d2d0de9af0b] COMMIT ACK participant=mongo
[2026-11-02T20:54:13.760Z] [2PC 6c37c934-0fb7-4a36-926a-2d2d0de9af0b] COMMIT ACK participant=postgres
[2026-11-02T20:54:13.760Z] [2PC 6c37c934-0fb7-4a36-926a-2d2d0de9af0b] COMMIT COMPLETE all participants acknowledged
[2026-11-02T20:54:13.760Z] [2PC 6c37c934-0fb7-4a36-926a-2d2d0de9af0b] END reads released
[2026-11-02T20:54:13.992Z] Polling finalizado: 21 leituras, 0 divergencias
[2026-11-02T20:54:13.992Z] UPDATE COMMITTED | key=monitor-01
[2026-11-02T20:54:13.995Z] Banco completo depois do UPDATE monitor-01
+------------+-------------+-------------------------------+----------+--------+--------+
| database   | sku         | description                   | quantity | price  | active |
+------------+-------------+-------------------------------+----------+--------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard - updated | 15       | 259.9  | true   |
| PostgreSQL | monitor-01  | 27 inch monitor - updated     | 10       | 1249.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse - updated      | 28       | 109.9  | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard - updated | 15       | 259.9  | true   |
| MongoDB    | monitor-01  | 27 inch monitor - updated     | 10       | 1249.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse - updated      | 28       | 109.9  | true   |
+------------+-------------+-------------------------------+----------+--------+--------+
[2026-11-02T20:54:13.995Z] [2PC 6f3547c1-90be-4aed-b27e-c968a43512fa] BEGIN operations=1 table=inventory order=postgres -> mongo readMode=blocking
[2026-11-02T20:54:13.995Z] [2PC 6f3547c1-90be-4aed-b27e-c968a43512fa] PREPARE START participant=postgres
[2026-11-02T20:54:13.995Z] [2PC 6f3547c1-90be-4aed-b27e-c968a43512fa] PREPARE START participant=mongo
[2026-11-02T20:54:14.008Z] [2PC 6f3547c1-90be-4aed-b27e-c968a43512fa] PREPARE ACK participant=postgres
[2026-11-02T20:54:14.010Z] [2PC 6f3547c1-90be-4aed-b27e-c968a43512fa] PREPARE ACK participant=mongo
[2026-11-02T20:54:14.010Z] [2PC 6f3547c1-90be-4aed-b27e-c968a43512fa] PREPARE COMPLETE participants=postgres,mongo
[2026-11-02T20:54:14.010Z] [2PC 6f3547c1-90be-4aed-b27e-c968a43512fa] COMMIT START participants=postgres,mongo
[2026-11-02T20:54:14.010Z] [2PC 6f3547c1-90be-4aed-b27e-c968a43512fa] COMMIT REQUEST participant=postgres
[2026-11-02T20:54:14.010Z] [2PC 6f3547c1-90be-4aed-b27e-c968a43512fa] COMMIT REQUEST participant=mongo
[2026-11-02T20:54:14.014Z] [2PC 6f3547c1-90be-4aed-b27e-c968a43512fa] COMMIT ACK participant=mongo
[2026-11-02T20:54:14.014Z] [2PC 6f3547c1-90be-4aed-b27e-c968a43512fa] COMMIT ACK participant=postgres
[2026-11-02T20:54:14.014Z] [2PC 6f3547c1-90be-4aed-b27e-c968a43512fa] COMMIT COMPLETE all participants acknowledged
[2026-11-02T20:54:14.014Z] [2PC 6f3547c1-90be-4aed-b27e-c968a43512fa] END reads released
[2026-11-02T20:54:14.014Z] INSERT COMMITTED | key=to-delete
[2026-11-02T20:54:14.015Z] Banco completo depois do INSERT to-delete
+------------+-------------+-------------------------------+----------+--------+--------+
| database   | sku         | description                   | quantity | price  | active |
+------------+-------------+-------------------------------+----------+--------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard - updated | 15       | 259.9  | true   |
| PostgreSQL | monitor-01  | 27 inch monitor - updated     | 10       | 1249.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse - updated      | 28       | 109.9  | true   |
| PostgreSQL | to-delete   | Mechanical keyboard           | 20       | 249.9  | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard - updated | 15       | 259.9  | true   |
| MongoDB    | monitor-01  | 27 inch monitor - updated     | 10       | 1249.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse - updated      | 28       | 109.9  | true   |
| MongoDB    | to-delete   | Mechanical keyboard           | 20       | 249.9  | true   |
+------------+-------------+-------------------------------+----------+--------+--------+
[2026-11-02T20:54:14.016Z] [2PC b57112fd-151f-4d6e-b4cb-aee399233863] BEGIN operations=1 table=inventory order=postgres -> mongo readMode=blocking
[2026-11-02T20:54:14.016Z] [2PC b57112fd-151f-4d6e-b4cb-aee399233863] PREPARE START participant=postgres
[2026-11-02T20:54:14.016Z] [2PC b57112fd-151f-4d6e-b4cb-aee399233863] PREPARE START participant=mongo
[2026-11-02T20:54:14.025Z] [2PC b57112fd-151f-4d6e-b4cb-aee399233863] PREPARE ACK participant=postgres
[2026-11-02T20:54:14.026Z] [2PC b57112fd-151f-4d6e-b4cb-aee399233863] PREPARE ACK participant=mongo
[2026-11-02T20:54:14.026Z] [2PC b57112fd-151f-4d6e-b4cb-aee399233863] PREPARE COMPLETE participants=postgres,mongo
[2026-11-02T20:54:14.026Z] [2PC b57112fd-151f-4d6e-b4cb-aee399233863] COMMIT START participants=postgres,mongo
[2026-11-02T20:54:14.026Z] [2PC b57112fd-151f-4d6e-b4cb-aee399233863] COMMIT REQUEST participant=postgres
[2026-11-02T20:54:14.026Z] [2PC b57112fd-151f-4d6e-b4cb-aee399233863] COMMIT REQUEST participant=mongo
[2026-11-02T20:54:14.029Z] [2PC b57112fd-151f-4d6e-b4cb-aee399233863] COMMIT ACK participant=mongo
[2026-11-02T20:54:14.030Z] [2PC b57112fd-151f-4d6e-b4cb-aee399233863] COMMIT ACK participant=postgres
[2026-11-02T20:54:14.030Z] [2PC b57112fd-151f-4d6e-b4cb-aee399233863] COMMIT COMPLETE all participants acknowledged
[2026-11-02T20:54:14.030Z] [2PC b57112fd-151f-4d6e-b4cb-aee399233863] END reads released
[2026-11-02T20:54:14.030Z] DELETE COMMITTED | key=to-delete
[2026-11-02T20:54:14.031Z] Banco completo depois do DELETE
+------------+-------------+-------------------------------+----------+--------+--------+
| database   | sku         | description                   | quantity | price  | active |
+------------+-------------+-------------------------------+----------+--------+--------+
| PostgreSQL | keyboard-01 | Mechanical keyboard - updated | 15       | 259.9  | true   |
| PostgreSQL | monitor-01  | 27 inch monitor - updated     | 10       | 1249.9 | true   |
| PostgreSQL | mouse-01    | Wireless mouse - updated      | 28       | 109.9  | true   |
| MongoDB    | keyboard-01 | Mechanical keyboard - updated | 15       | 259.9  | true   |
| MongoDB    | monitor-01  | 27 inch monitor - updated     | 10       | 1249.9 | true   |
| MongoDB    | mouse-01    | Wireless mouse - updated      | 28       | 109.9  | true   |
+------------+-------------+-------------------------------+----------+--------+--------+
[2026-11-02T20:54:14.034Z] Relatorio salvo em 2pc-report.txt`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};