import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function updateGuesses(guess) {
    setGuesses([...guesses, checkGuess(guess, answer)]);
  }
  return (
    <>
      <GuessResults guesses={guesses}></GuessResults>

      <Form updateGuesses={updateGuesses}></Form>
    </>
  );
}

export default Game;
