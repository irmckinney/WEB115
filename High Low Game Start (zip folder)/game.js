let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;

// Prompt user for a number between 1 and 10, or type 999 to exit.
userGuess = Number(prompt("Guess a number between 1 and 10 (or type 999 to exit):"));

// Create while loop that continues for as long as the user guesses are incorrect.
// Loop should count the number of guesses.
while (userGuess !== randomNumber) {

    // Loop should exit if user enters 999 and not display "Too high!"
    if (userGuess === 999) {
        alert("Game exited. Thanks for playing!");
        break;
    }

    attempts++;

    // If the guess is too low, the user should be prompted "Too low!" and be able to guess again.
    if (userGuess < randomNumber) {
        userGuess = Number(prompt("Too low! Guess again:"));
    }
    // If the guess is too high, the user should be prompted 'Too high!" and be able to guess again.
    else if (userGuess > randomNumber) {
        userGuess = Number(prompt("Too high! Guess again:"));
    }

// If anything else is entered, the user should be prompted that their input is invalid and 
// to guess again.
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        userGuess = Number(prompt("Invalid input. Please enter a number between 1 and 10 (or 999 to exit):"));
        continue;
    }
}

// If the guess is correct, the user should be alerted of their win and 
// be told the number of guesses they made.
if (userGuess === randomNumber) {
    attempts++;
    alert(`Congratulations, you've guessed it in ${attempts} tries!!`);
}