import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import EditScore from './EditScore';
import SinglePlayer from "./SinglePlayer";



const Scoreboard = ({ players, setPlayers }) => {
  const [currentPlayer, setCurrentPlayer] = useState(null)

  return (
    <div className="scoreboard">
      <div className="scores">
        {
          !currentPlayer
            ? players.length > 0
              ? players.map((player, index) => {

                return (
                  <SinglePlayer player={player} index={index} setCurrentPlayer={setCurrentPlayer} />
                )
              })
              : <h1>Add Players to Begin!</h1>
            : <EditScore players={players} setPlayers={setPlayers} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
        }
      </div>
      <div className="edit-players">
        {!currentPlayer
          ? <NavLink
            to="/" >
            {players.length > 0
              ? <button>Edit Players</button>
              : <button>Add Players</button>
            }
          </NavLink>
          : <></>
        }
      </div>
    </div>
  );
}

export default Scoreboard;
