import React from "react";
import { clearLocalStorage } from "../../lib/local-storage.jsx";
import { Button } from "../ui/button";


// Yes this is called CountdownToNextPuzzle but for our purposes we aren't time refreshing the puzzles.
function CountdownToNextPuzzle() {
  return (
    <div className="flex flex-row place-content-center mt-4">
      <Button variant="link" onClick={clearLocalStorage()}>Reset Puzzle Status</Button>
    </div>
  );
}

export default CountdownToNextPuzzle;
