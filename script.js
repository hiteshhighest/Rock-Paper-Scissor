const score = JSON.parse(localStorage.getItem(`score`)) || {
    win: 0,
    loss: 0,
    tie: 0
};

let random, computer, userchoice, result, computerchoice = "Please choose first";

function print() {
    document.querySelector(`.js-computerchoice`).innerHTML = (`Computer says: ${computerchoice}`);
    document.querySelector(`.js-wins`).innerHTML = (`Wins: ${score.win}`);
    document.querySelector(`.js-loss`).innerHTML = (`Loss: ${score.loss}`);
    document.querySelector(`.js-ties`).innerHTML = (`Ties: ${score.tie}`);
};

print();

function choice(user) {
    random = (Math.random());

    if (random <= 1/3) {
        computer = 1;
        computerchoice = "Rock";
    }
    else if (random > 1/3 && random <= 2/3) {
        computer = 2;
        computerchoice = "Paper";
    }
    else {
        computer = 3;
        computerchoice = "Scissor";
    };

    if (user === 1) {
        userchoice = "Rock";
        if (computer === 1) {
            result = "Tie";
        }
        else if (computer === 2) {
            result = "Loss";
        }
        else if (computer === 3) {
            result = "Win";
        };
    }
    else if (user === 2) {
        userchoice = "Paper";
        if (computer === 2) {
            result = "Tie";
        }
        else if (computer === 3) {
            result = "Loss";
        }
        else if (computer === 1) {
            result = "Win";
        };
    }
    else if (user === 3) {
        userchoice = "Scissor";
        if (computer === 3) {
            result = "Tie";
        }
        else if (computer === 1) {
            result = "Loss";
        }
        else if (computer === 2) {
            result = "Win";
        };
    };

    if (result === "Win") {
        score.win += 1;
    }
    else if (result === "Loss") {
        score.loss += 1;
    }
    else {
        score.tie += 1;
    };

    localStorage.setItem(`score`, JSON.stringify(score));

    print();
}
