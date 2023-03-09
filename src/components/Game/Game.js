import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import Banner from "../Banner/Banner";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [winState, setWinState] = React.useState("running");
  const lastGuessHasBeenMade = guesses.length + 1 === NUM_OF_GUESSES_ALLOWED;
  function updateGuesses(guess) {
    setGuesses([...guesses, checkGuess(guess, answer)]);
    if (lastGuessHasBeenMade && guess !== answer) {
      setWinState("lose");
    }
    if (guess === answer) {
      setWinState("win");
    }
  }
  function resetGame() {
    setGuesses([]);
    setWinState('running')
    answer = sample(WORDS);
  }
  return (
    <>
      <GuessResults guesses={guesses}></GuessResults>
      {winState !== "running" && (
        <Banner resetGame={resetGame} winState={winState} answer={answer} />
      )}

      <Form
        disabled={winState !== "running"}
        updateGuesses={updateGuesses}></Form>
    </>
  );
}

export default Game;
