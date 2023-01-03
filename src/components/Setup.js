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
    newPlayerList.push({ 'name': newPlayer, 'score': 0 })
    setPlayers(newPlayerList)
    setNewPlayer('')
  }

  return (
    <div className="setup">
      <NavLink to="scoreboard"><button>Start Game</button></NavLink>
      <form onSubmit={(event) => submitHandler(event)}>

        <div className="input">
          <input
            value={newPlayer}
            type="text"
            onChange={(event) => setNewPlayer(event.target.value)} />
        </div>
        <div className="button">

          <button type="submit">Add</button>
        </div>
      </form>
      <div className="players">

        {
          players
            ? players.map((player, index) => {
              return <div key={index} className="player">
                <div className="name">{player.name}</div>
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
