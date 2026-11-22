const pictures = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const choices = ['rock', 'paper', 'scissors'];
let playerscore = 0;
let computerscore = 0;
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');


pictures.forEach((picture) => {
    picture.addEventListener('click', () => {
       
        const player = picture.dataset.choice;

        
        pictures.forEach((p) => p.classList.remove('selected'));
        picture.classList.add('selected');

        
        const computer = choices[Math.floor(Math.random() * 3)];

        const winner = getWinner(player, computer);
        
        
        result.textContent = `You chose ${player}, computer chose ${computer}. ${winner}`;
        if (winner === 'You win!') {
            playerscore++;
            playerScoreElement.textContent = playerscore;
        }
        else if (winner === 'Computer wins!') {
            computerscore++;
            computerScoreElement.textContent = computerscore;
        }
    });
});

function getWinner(player, computer) {
    
    if (player === computer) {
        return 'Draw!';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function resetGame() {
    
    pictures.forEach((p) => p.classList.remove('selected'));
    
    result.textContent = '';
    playerscore = 0;
    computerscore = 0;
    playerScoreElement.textContent = playerscore;
    computerScoreElement.textContent = computerscore;
}
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGame);




