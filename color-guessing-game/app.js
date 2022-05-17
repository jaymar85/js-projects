const COLORS_ARRAY = ["aqua", "blue", "coral", "gray", "green", "orange", "purple", "red", "white", "yellow"];

const startBtn = document.querySelector('#start');

startBtn.addEventListener('click', runGame);

function runGame() {
    let guess = ''
    let correct = false
    let numTries = 0

    const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
    const target = COLORS_ARRAY[targetIndex]
    console.log(target)

    do {
        guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.join(', ') + '\n\nWhat color am I thinking of?'  + '\n\nIt has taken you ' + numTries + ' tries so far.\n');
        numTries += 1;

        if (guess === null) {
            alert('The game has been aborted');
            return;
        }

        correct = checkGuess(guess.toLowerCase(), target)
    } while(!correct);

    document.body.style.background = guess;

    alert('Congrats, your awesome!' + '\n\nIt took you ' + numTries + ' guesses to finish the game!');
}

function checkGuess(guess, target) {
    let correct = false;

    if(!COLORS_ARRAY.includes(guess)) {
        alert("I don't recongize your color " + guess)
    } else if (guess > target) {
        alert("Your guess is incorrect & is higher than mine.");
    } else if (guess < target) {
        alert("Your guess is incorrect & is lower than mine.")
    } else {
        correct = true
    }

    return correct;
}