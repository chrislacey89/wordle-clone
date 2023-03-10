import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import Banner from "../Banner/Banner";
import GuessResults from "../GuessResults/GuessResults";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// Pick a random word on every pageload.

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [winState, setWinState] = React.useState("running");
  const [guessedLetters, setGuessedLetters] = React.useState({});
  const lastGuessHasBeenMade = guesses.length + 1 === NUM_OF_GUESSES_ALLOWED;
  function updateGuesses(guess) {
    setGuesses([...guesses, checkGuess(guess, answer)]);
    setGuessedLetters(setLetters(guess));
    if (lastGuessHasBeenMade && guess !== answer) {
      setWinState("lose");
    }
    if (guess === answer) {
      setWinState("win");
    }
  }
  function setLetters(guess){
    const guessedLettersCopy = {...guessedLetters};
    for (let i = 0; i < guess.length; i++) {
      if (!guessedLettersCopy[guess[i]]) {
        guessedLettersCopy[guess[i]] = 'incorrect';
      }
      if(answer.includes(guess[i])){
        guessedLettersCopy[guess[i]] = 'misplaced';
      }
      if (guess[i] === answer[i]){
        guessedLettersCopy[guess[i]] = 'correct';
      }
    }
    return guessedLettersCopy
  }
  
  function resetGame() {
    setGuesses([]);
    setWinState("running");
    setAnswer(sample(WORDS));
    setGuessedLetters({})
  }
  return (
    <>
      <GuessResults guesses={guesses}/>
      {winState !== "running" && (
        <Banner resetGame={resetGame} winState={winState} answer={answer} />
      )}
      <Keyboard guessedLetters={guessedLetters}/>

      <Form
        disabled={winState !== "running"}
        updateGuesses={updateGuesses}/>
    </>
  );
}

export default Game;
