import { createContext } from 'react';

export interface QuestaoContextType {
  questaoId?: string;
}

export const QuestaoContext = createContext<QuestaoContextType>({});