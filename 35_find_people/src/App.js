import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShareLayout from "./components/ShareLayout";
import GameBoard from "./pages/GameBoard";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import { levelData } from "./utils/data";
import { useState } from "react";

function App() {
  const [allLevelData, setAllLevelData] = useState(levelData);
  const [gameOver, setGameOver] = useState(true);
  const [chooseLevel, setChooseLevel] = useState({});
  const [levelCharacter, setLevelCharacter] = useState([]);
  const [player, setPlayer] = useState(null);
  const [playerCoords, setPlayerCoords] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route
            index
            element={
              <Home
                allLevelData={allLevelData}
                setChooseLevel={setChooseLevel}
                setLevelCharacter={setLevelCharacter}
                setGameOver={setGameOver}
                setPlayer={setPlayer}
              />
            }
          />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/ranking/:id" element={<Ranking />} />
          <Route
            path="/gameboard"
            element={
              <GameBoard
                gameOver={gameOver}
                setGameOver={setGameOver}
                chooseLevel={chooseLevel}
                setChooseLevel={setChooseLevel}
                levelCharacter={levelCharacter}
                player={player}
                setPlayer={setPlayer}
                setPlayerCoords={setPlayerCoords}
                playerCoords={playerCoords}
                setLevelCharacter={setLevelCharacter}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
