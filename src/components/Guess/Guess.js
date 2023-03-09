import React from "react";
import { range } from "../../utils";
function Guess({ guessInfo }) {
  const guessedLetters = range(5);
  return (
    <>
      <p className="guess">
        {guessedLetters.map((box, letterIndex) => {
          return (
            <span
              key={letterIndex}
              className={`cell ${guessInfo?.[letterIndex]?.status}`}>
              {guessInfo?.[letterIndex]?.letter}
            </span>
          );
        })}
      </p>
    </>
  );
}

export default Guess;
