// import React, { useState } from 'react'

// import SinglePlayer from './SinglePlayer';

const Scoreboard = ({ players, setPlayers }) => {

  return (
    <div className="Scoreboard">
      {
        players
          ? players.map(player => {
            return (
              <div>{player}</div>
            )
          })
          : <></>
      }
    </div>
  );
}

export default Scoreboard;
