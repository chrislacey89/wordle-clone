import React from "react";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({guessedLetters}) {
  return (
    <div className="keyboard">
      {ROWS.map((row, index) => {
        return (
          <div className="keyboard-row">
            {row.map((letter, index) => {
              return (
                <div className="keyboard-letter ">
                  <p className={`centered ${guessedLetters[letter]}`}>{letter}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
