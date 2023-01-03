import React, { useState } from 'react'

const EditScore = ({ players, setPlayers, currentPlayer, setCurrentPlayer }) => {
  const [newScore, setNewScore] = useState(0)

  const addHandler = () => {
    const editPlayers = [...players]
    for (let player of Object.values(editPlayers)) {
      if (player.name === currentPlayer.name) {
        let score = +player.score
        score += +newScore
        player.score = +score
        setPlayers(editPlayers)
        setCurrentPlayer(null)

      }
    }
  }

  const subHandler = () => {
    const editPlayers = [...players]
    for (let player of Object.values(editPlayers)) {
      if (player.name === currentPlayer.name) {
        let score = +player.score
        score -= +newScore
        player.score = +score
        setPlayers(editPlayers)
        setCurrentPlayer(null)
      }
    }
  }

  return (
    <div className="edit-score">
      {currentPlayer.name}
      Current Score: {currentPlayer.score}
      <input value={newScore} onChange={(event) => setNewScore(event.target.value)}></input>
      <button onClick={() => addHandler()}>+</button>
      <button onClick={() => subHandler()}>-</button>
      <button onClick={() => setCurrentPlayer(null)}>Reset</button>
    </div>
  );
}

export default EditScore;
