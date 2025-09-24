import React from "react";
import Header from "../Header";
import Game from "../Game";

import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleDataProvider";
import GameStatusProvider from "../../providers/GameStatusProvider";

function App() {
  return (
    <PuzzleDataProvider>
      <GameStatusProvider>
        <div className="bg-neutral-800 text-neutral-50 wrapper">
          <Toaster />
          <Header />
          <Game />
        </div>
      </GameStatusProvider>
    </PuzzleDataProvider>
  );
}

export default App;
