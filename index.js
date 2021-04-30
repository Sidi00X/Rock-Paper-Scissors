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
        }
        else if (player == 'scissors') {
            document.getElementById('result').innerHTML = 'You won';
        }
    }

    else if (player == 'paper') {
        if (computer == 'rock') {
            document.getElementById('result').innerHTML = 'You won!';
        }
        else if (player == 'scissors') {
            document.getElementById('result').innerHTML = 'You lost';
        }
    }

    else if (player == 'scissors') {
        if (computer == 'rock') {
            document.getElementById('result').innerHTML = 'You lost!';
        }
        else if (player == 'paper') {
            document.getElementById('result').innerHTML = 'You won';
        }
    }
}