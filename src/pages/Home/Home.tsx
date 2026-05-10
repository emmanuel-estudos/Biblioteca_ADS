import * as s from './styles';

// Definição dos períodos disponíveis
const PERIODOS = [
  { id: '1-periodo', nome: '1º Período' },
  { id: '2-periodo', nome: '2º Período' },
  { id: '3-periodo', nome: '3º Período' },
  { id: '4-periodo', nome: '4º Período' },
  { id: '5-periodo', nome: '5º Período' },
  { id: '6-periodo', nome: '6º Período' },
];

export const Home = () => {
  return (
    <s.Container>
      <s.Title>Portal de Estudos ADS</s.Title>
      
      <s.Grid>
        {PERIODOS.map((p) => (
          <s.CardLink key={p.id} to={`/${p.id}`}>
            <s.PeriodCard>
              <span>Semestre Acadêmico</span>
              <h2>{p.nome}</h2>
            </s.PeriodCard>
          </s.CardLink>
        ))}
      </s.Grid>
    </s.Container>
  );
};
