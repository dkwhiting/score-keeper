import React, { useState } from 'react'
import EditScore from './EditScore';
import SinglePlayer from "./SinglePlayer";



const Scoreboard = ({ players, setPlayers }) => {
  const [currentPlayer, setCurrentPlayer] = useState(null)

  return (
    <div className="scoreboard">

      {
        !currentPlayer
          ? players
            ? players.map((player, index) => {

              return (
                <SinglePlayer player={player} index={index} setCurrentPlayer={setCurrentPlayer} />
              )
            })
            : <></>
          : <EditScore players={players} setPlayers={setPlayers} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
      }
    </div>
  );
}

export default Scoreboard;
