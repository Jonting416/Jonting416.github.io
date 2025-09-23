import React from "react";

// Yes this is called CountdownToNextPuzzle but for our purposes we aren't time refreshing the puzzles.
function CountdownToNextPuzzle() {
  return (
    <div className="flex flex-row place-content-center mt-4">
      <div>Refresh the page to get a new puzzle!</div>
    </div>
  );
}

export default CountdownToNextPuzzle;
