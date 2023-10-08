import { createContext } from 'react';

interface ContextProps {
  isPlaying: boolean
}

export const PlayerContext = createContext({} as ContextProps)