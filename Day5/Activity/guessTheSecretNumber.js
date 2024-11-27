

export function guessTheSecretNumber() {
    console.log("Welcome to Guess the Secret Number Game")
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0
    let guessedNumber;
    do {
        guessedNumber = Number(prompt("Guess the number between 1 and 10:"));
        if(guessedNumber === secretNumber){
            console.log(`Congratulations! You guessed the correct number: ${secretNumber}`);
            console.log(`It took you ${attempts + 1} attempts.`);
            return;
        } else if (guessedNumber < secretNumber) {
            console.log("Too low! Try again.");
            
        } else if (guessedNumber > secretNumber) {
            console.log("Too high! Try again.");
        }
        attempts++;

    } while (guessedNumber !== secretNumber);
}