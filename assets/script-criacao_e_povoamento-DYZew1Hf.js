import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`script`,children:`Script`}),`
`,(0,n.jsx)(r.p,{children:`O Script abaixo cria das tabelas e as povoa para a resolução das questões.`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-sql`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`-- Remove tabelas se elas já existirem (evita erro na 1ª execução)`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`DROP`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`TABLE`}),` IF `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`EXISTS`}),` TrabalhaProjeto;\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`DROP`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`TABLE`}),` IF `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`EXISTS`}),` Dependente;\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`DROP`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`TABLE`}),` IF `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`EXISTS`}),` Projeto;\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`DROP`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`TABLE`}),` IF `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`EXISTS`}),` Departamento;\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`DROP`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`TABLE`}),` IF `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`EXISTS`}),` Empregado;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`-- Habilita o suporte a Chaves Estrangeiras no SQLite`}),`\r
PRAGMA foreign_keys `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`ON`}),`;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`-- Tabela Departamento criada antes para a Foreign Key funcionar`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`CREATE TABLE`}),` Departamento (\r
    CodDepartamento `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`INT`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`PRIMARY KEY`}),`,\r
    Nome `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`VARCHAR`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`20`}),`) `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`NOT NULL`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`UNIQUE`}),`,\r
    Gerente `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`VARCHAR`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`)\r
);\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`-- Tabela Empregado (CodDepartamento já embutido diretamente)`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`CREATE TABLE`}),` Empregado (\r
    Matricula `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`VARCHAR`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`) `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`PRIMARY KEY`}),`,\r
    Nome `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`VARCHAR`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`30`}),`) `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`NOT NULL`}),`,\r
    Salario `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`REAL`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`CHECK`}),` (Salario `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`>`}),` `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`),\r
    Supervisor `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`VARCHAR`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`),\r
    CodDepartamento `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`INT`}),`,\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`FOREIGN KEY`}),` (Supervisor) `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`REFERENCES`}),` Empregado(Matricula),\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`FOREIGN KEY`}),` (CodDepartamento) `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`REFERENCES`}),` Departamento(CodDepartamento)\r
);\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`CREATE TABLE`}),` Projeto (\r
    CodProjeto `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`INT`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`PRIMARY KEY`}),`,\r
    Nome `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`VARCHAR`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`30`}),`) `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`NOT NULL`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`UNIQUE`}),`,\r
    CodDepartamento `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`INT`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`NOT NULL`}),`,\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`FOREIGN KEY`}),` (CodDepartamento) `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`REFERENCES`}),` Departamento(CodDepartamento)\r
);\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`CREATE TABLE`}),` Dependente (\r
    Empregado `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`VARCHAR`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`),\r
    NomeDep `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`VARCHAR`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`30`}),`),\r
    Parentesco `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`VARCHAR`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`) `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`NOT NULL`}),`,\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`PRIMARY KEY`}),` (Empregado, NomeDep),\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`FOREIGN KEY`}),` (Empregado) `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`REFERENCES`}),` Empregado(Matricula)\r
);\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`CREATE TABLE`}),` TrabalhaProjeto (\r
    Empregado `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`VARCHAR`}),`(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`10`}),`),\r
    CodProjeto `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`INT`}),`,\r
    NumHoras `,(0,n.jsx)(r.span,{className:`hljs-type`,children:`SMALLINT`}),`,\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`PRIMARY KEY`}),` (Empregado, CodProjeto),\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`FOREIGN KEY`}),` (Empregado) `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`REFERENCES`}),` Empregado(Matricula),\r
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`FOREIGN KEY`}),` (CodProjeto) `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`REFERENCES`}),` Projeto(CodProjeto)\r
);\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`-- Povoamento: Departamentos`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Departamento `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Financeiro'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`NULL`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Departamento `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Vendas'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`NULL`}),`);\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`-- Povoamento: Empregados`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Empregado `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-3'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Carlos'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`4500`}),`, `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`NULL`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Empregado `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-4'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Joaquim'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`4500`}),`, `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`NULL`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Empregado `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-1'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'João'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2500`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-4'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Empregado `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-2'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Maria'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2500`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-3'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Empregado `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-5'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Ana'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`3000`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-4'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Empregado `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-6'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Patrícia'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2500`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-3'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Empregado `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-7'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Sérgio'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1000`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-3'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`);\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`-- Atualização dos Gerentes`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`UPDATE`}),` Departamento `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`SET`}),` Gerente `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-4'`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`WHERE`}),` CodDepartamento `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`;\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`UPDATE`}),` Departamento `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`SET`}),` Gerente `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-3'`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`WHERE`}),` CodDepartamento `,(0,n.jsx)(r.span,{className:`hljs-operator`,children:`=`}),` `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`;\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`-- Povoamento: Projetos`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Projeto `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Venda Fácil'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Projeto `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Max Lucro'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Projeto `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`3`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Cliente Feliz'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`);\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`-- Povoamento: Dependentes`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Dependente `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-2'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Marcos'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Filho'`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Dependente `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-2'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Luís'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Filho'`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Dependente `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-3'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Ana'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Cônjuge'`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` Dependente `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-3'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Felipe'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'Filho'`}),`);\r
\r
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`-- Povoamento: TrabalhaProjeto`}),`\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` TrabalhaProjeto `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-1'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`12`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` TrabalhaProjeto `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-1'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`3`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`12`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` TrabalhaProjeto `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-2'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`1`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`12`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` TrabalhaProjeto `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-2'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`12`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` TrabalhaProjeto `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-4'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`2`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`12`}),`);\r
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`INSERT INTO`}),` TrabalhaProjeto `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`VALUES`}),` (`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`'1111-4'`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`3`}),`, `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`12`}),`);
`]})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};