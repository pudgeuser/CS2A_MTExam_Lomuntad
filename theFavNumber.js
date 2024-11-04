let favoriteNumber = 14;
let guess;

while (true) {
    // Prompt the user to guess their favorite number
    guess = prompt("Guess my favorite number:");

    // Convert the guess to a number
    guess = Number(guess);

    // Check if the guess is a valid number
    if (isNaN(guess)) {
        console.log("Please enter a valid number.");        continue; // Skip to the next iteration of the loop
    }

    // Compare the guess to the favorite number
    if (guess < favoriteNumber) {
        console.log("Too low! Try again.");
    } else if (guess > favoriteNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Correct! You've guessed my favorite number.");
        break; // Exit the loop if the guess is correct
    }
}