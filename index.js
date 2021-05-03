let pl_score = 0;
let cm_score = 0;

const playRound = player => {
    const computerSelection = () => {
        var x = Math.floor((Math.random() * 3) + 1);
        var list = ['rock', 'paper', 'scissors'];

        if (x == 1) {
            return list[x-1];
        }
        else if (x == 2){
            return list[x-1];
        }
        else {
            return list[x-1];
        }
    }

    const computer = computerSelection();

    if (player == computer) {
        document.getElementById('result').innerHTML = 'Draw';
    }

    else if (player == 'rock') {
        if (computer == 'paper') {
            document.getElementById('result').innerHTML = 'You lost!';
            cm_score++;
        }
        else if (player == 'scissors') {
            document.getElementById('result').innerHTML = 'You won';
            pl_score++;
        }
    }

    else if (player == 'paper') {
        if (computer == 'rock') {
            document.getElementById('result').innerHTML = 'You won!';
            pl_score++;
        }
        else if (player == 'scissors') {
            document.getElementById('result').innerHTML = 'You lost';
            cm_score++;
        }
    }

    else if (player == 'scissors') {
        if (computer == 'rock') {
            document.getElementById('result').innerHTML = 'You lost!';
            cm_score++;
        }
        else if (player == 'paper') {
            document.getElementById('result').innerHTML = 'You won';
            pl_score++;
        }
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
            playRound(button.id);
            document.getElementById('score').innerHTML = pl_score + ' Vs ' + cm_score;

            if (pl_score == 5) {
                document.getElementById('result').innerHTML = 'YOU WON !!!';
            }
            else if (cm_score == 5) {
                document.getElementById('result').innerHTML = 'YOU LOST !!!';
            }
    });
});