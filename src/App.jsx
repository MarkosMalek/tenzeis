import "./App.css";
import { GameProvider } from "./context/GameContext.jsx";
import GameUI from "./components/GameUI";

function App() {
  return (
    <GameProvider>
      <GameUI />
    </GameProvider>
  );
}

export default App;
