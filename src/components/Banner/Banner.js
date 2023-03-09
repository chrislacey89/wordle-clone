import React from "react";

function Banner({ winState, resetGame, answer }) {
  const wonGame = winState === "win";
  return (

      <button className={`banner ${wonGame ? 'happy' : 'sad'}`} onClick={resetGame}>
        {wonGame
          ? "Congrats you win! Click to play again."
          : `You lose! Correct Word: ${answer}. Click to play again.`}
      </button>
  
  );
}

export default Banner;
