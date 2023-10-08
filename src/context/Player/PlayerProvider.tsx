import type { FC, ReactElement } from "react"
import { PlayerContext } from "."


interface Props {
  children: ReactElement | ReactElement[]
}

export const PlayerProvider: FC<Props> = ({ children }) => {

  return (
    <PlayerContext.Provider
      value={{ isPlaying: false }}>
      {children}
    </PlayerContext.Provider>
  )
}