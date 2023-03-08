import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";
function GuessResults({ guesses }) {
  const guessRows = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      <div className="guess-results">
        {guessRows.map((guess, rowIndex) => {
          return <Guess key={rowIndex} guessInfo={guesses?.[rowIndex]} />;
        })}
      </div>
    </div>
  );
}

export default GuessResults;
