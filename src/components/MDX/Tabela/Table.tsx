import React from 'react';
import { TableWrapper, StyledTable } from './styles';

export type CustomTableProps = React.TableHTMLAttributes<HTMLTableElement>;

export const Table: React.FC<CustomTableProps> = ({ children, ...props }) => {
  return (
    <TableWrapper>
      <StyledTable {...props}>{children}</StyledTable>
    </TableWrapper>
  );
};