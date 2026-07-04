import{r as e}from"./styled-components.browser.esm-DwctPZIE.js";var t=e.div`
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`,n=e.div`
  display: flex;
  gap: 1rem;
  background: hsla(160, 100%, 50%, 0.25); // Exemplo de cor dinâmica
  padding: 0.5rem 0.75rem 0;
`,r=e.div`
  background: ${e=>e.active?`#151515`:`#83ffbf`};
  color: ${e=>e.active?`white`:`black`};
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem 0.5rem 0 0;
  cursor: pointer;
  font-weight: ${e=>e.active?`bolder`:`normal`};
`,i=e.pre`
  background: #1e1e1e;
  color: #d1d5db;
  padding: 1rem;
  overflow-x: auto;
`,a=e.span`
  opacity: 0.75;
  filter: saturate(0);
`;export{t as Box,i as CodeBlock,a as Comment,r as Tab,n as TabsContainer};