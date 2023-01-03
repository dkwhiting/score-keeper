import React from 'react'

const SinglePlayer = ({ player, index, setCurrentPlayer }) => {

  const clickHandler = (event) => {
    setCurrentPlayer(player)
  }

  return (
    <div className="SinglePlayer" onClick={(event) => clickHandler(event)}>
      <div key={index} className="player">
        <div className="name">{player.name}</div>
        <div className="score">{player.score}</div>
      </div>
    </div>
  );
}

export default SinglePlayer;
