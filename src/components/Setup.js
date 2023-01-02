import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// import SinglePlayer from './SinglePlayer';

const Setup = ({ players, setPlayers }) => {
  const [newPlayer, setNewPlayer] = useState('')

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players))

  }, [players])

  const removePlayer = (index) => {
    let newArr = [...players]
    newArr.splice(index, 1)
    setPlayers(newArr)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    let newPlayerList = []
    if (players) {
      newPlayerList = [...players]
    }
    newPlayerList.push(newPlayer)
    setPlayers(newPlayerList)
    setNewPlayer('')
  }

  return (
    <div className="setup">
      <NavLink to="scoreboard"><button>Start Game</button></NavLink>
      <form onSubmit={(event) => submitHandler(event)}>
        <input
          value={newPlayer}
          type="text"
          onChange={(event) => setNewPlayer(event.target.value)} />
        <button type="submit">Add Player</button>
      </form>
      <div className="players">

        {
          players
            ? players.map((player, index) => {
              return <div key={index} className="player">
                <div className="name">{player}</div>
                <button onClick={() => removePlayer(index)}> X</button>

              </div>
            })
            : <></>
        }
      </div>
    </div >
  );
}

export default Setup;
