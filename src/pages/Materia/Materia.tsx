import * as s from './styles'
import { Breadcrumbs } from '../../components/Breadcrumbs'

export const Materia = () => {
  return (
    <>
      <Breadcrumbs />
      <s.Container>
        <h1>Essa é a página das matérias</h1>
        {/* Futuramente aqui entrará a lógica de Assuntos e Atividades */}
      </s.Container>
    </>
  );
};