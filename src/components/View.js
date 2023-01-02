import React, { useState } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Scoreboard from './Scoreboard';
import Setup from './Setup';

const View = () => {
  const [players, setPlayers] = useState(JSON.parse(localStorage.getItem('players')))

  return (
    <Routes>
      <Route
        path="/"
        element={<Setup players={players} setPlayers={setPlayers} />}
      />
      <Route
        exact path="scoreboard"
        element={<Scoreboard players={players} setPlayers={setPlayers} />}
      />
    </Routes>
  );
}

export default View;
