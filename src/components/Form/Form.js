import React from "react";

function Form({ disabled, updateGuesses }) {
  const [guess, setGuess] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(guess);
    updateGuesses(guess);
    setGuess("");
  }
  function handleChange(e) {
    // don't set guess if it would go over 5 chars
    if (e.target.value.length > 5) return;
    // don't set guess if it contains non-letter characters
    if (!e.target.value.match(/^[A-Za-z\s]*$/)) return;
    setGuess(e.target.value.toUpperCase());
  }
  return (
    <form onSubmit={handleSubmit} className="guess guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        required
        id="guess-input"
        name="guess"
        type="text"
        value={guess}
        // regex pattern - min 5 chars, max 5 chars, only letters
        pattern="[A-Z]{5}"
        onChange={handleChange}
        title="5 letters only"
      />
    </form>
  );
}

export default Form;
