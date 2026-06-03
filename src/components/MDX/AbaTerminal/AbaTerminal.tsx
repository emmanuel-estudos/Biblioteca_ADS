import * as S from './styles';

export interface TabProps {
  active?: boolean;
  children: React.ReactNode;
}

// Ele recebe "active" do MDX e passa "$active" para o estilo
export const AbaTerminal: React.FC<TabProps> = ({ active, children }) => {
  return (
    <S.Tab $active={!!active}>
      {children}
    </S.Tab>
  );
};