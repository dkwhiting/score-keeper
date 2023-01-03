import React, { useState } from 'react'

const EditScore = ({ players, setPlayers, currentPlayer, setCurrentPlayer }) => {
  const [newScore, setNewScore] = useState('')

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
      <h1>{currentPlayer.name}</h1>
      <h2>Score: {currentPlayer.score}</h2>
      <input value={newScore} onChange={(event) => setNewScore(event.target.value)}></input>
      <div className="edit-buttons">

        <button className="add" onClick={() => addHandler()}>+</button>
        <button className="subtract" onClick={() => subHandler()}>-</button>
      </div>
      <button onClick={() => setCurrentPlayer(null)}>Go Back</button>
    </div>
  );
}

export default EditScore;
