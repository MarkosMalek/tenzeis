import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useCells must be used within cellsProvider");
  }
  return context;
};

export default useGame;
