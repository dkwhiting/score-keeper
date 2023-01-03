import React from 'react'

const AllPlayers = ({ player, index }) => {
  return (
    <div className="AllPlayers">
      <div key={index} className="player">
        <div className="name">{player.name}</div>
        <div className="score">{player.score}</div>
      </div>
    </div>
  );
}

export default AllPlayers;
