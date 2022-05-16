function rollDice() {
    let goldCoins = 0;
    let numTries = 1;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + '!' + '\n\nNumber of rolls: ' + numTries);
        numTries++;
        if(roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if(roll < 5) {
            if(roll === 4) {
                alert('You will lose 1 gold coin.')
                goldCoins--;
            }
            alert('So far you have won a total of ' + goldCoins + ' gold coins!');
            continue;
        }
        alert('Congratulations, you win ' + roll + ' gold coins!')
        goldCoins += roll;
        alert('So far you have won a total of ' + goldCoins + ' gold coins!');
    }

    if(goldCoins === 0) {
        alert('Oh no!' + '\n\nYou have won no gold coins' + '\n\nLets play again!')
    }

    if(goldCoins > 1) {
        alert('Way to go!' + '\n\nYou have won a grand total of ' + goldCoins + ' gold coins!' + '\n\nLets play again!')
    }
}