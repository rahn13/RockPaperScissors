    <script>

const userInput = prompt('Enter Rock/Paper/Scissors');

function getComputerChoice() {
   let randomNumber = Math.floor(Math.random() * 3);
   if (randomNumber === 0) {
    return 'Rock'
   } else if (randomNumber === 1) {
    return 'Paper'
   }else{
    return 'Scissors'
   }
}

function playGame() {
    const computerChoice = getComputerChoice();
    console.log(`O computador escolheu ${computerChoice}`);
    console.log(`Tu escolheste o ${userInput}`);

    if (computerChoice === userInput) {
        console.log('Empate');
    } else if (
        (userInput === 'Scissors' && computerChoice === 'Paper') ||
        (userInput === 'Rock' && computerChoice === 'Scissors') ||
        (userInput === 'Paper' && computerChoice === 'Rock')
    ) {
        console.log('Congrats! You win!');
    } else {
        console.log('Ups, You Lose!');
    }
}

playGame();


    </script>