let win = 0;
let loss = 0;
let tie = 0;

function choice(user) {
    const random = (Math.random());
    let computer;
    let userchoice;
    let computerchoice;
    let result;

    if (random <= 0.33) {
        computer = 1;
        computerchoice = "Rock";
    }
    else if (random > 0.33 && random <= 0.66) {
        computer = 2;
        computerchoice = "Paper";
    }
    else {
        computer = 3;
        computerchoice = "Scissor";
    }

    if (user === 1) {
        userchoice = "Rock";
        if (computer === 1) {
            result = "Tie";
        }
        if (computer === 2) {
            result = "Loss";
        }
        if (computer === 3) {
            result = "Win";
        }
    }
    else if (user === 2) {
        userchoice = "Paper";
        if (computer === 2) {
            result = "Tie";
        }
        if (computer === 3) {
            result = "Loss";
        }
        if (computer === 1) {
            result = "Win";
        }
    }
    else if (user === 3) {
        userchoice = "Scissor";
        if (computer === 3) {
            result = "Tie";
        }
        if (computer === 1) {
            result = "Loss";
        }
        if (computer === 2) {
            result = "Win";
        }
    }

    if (result === "Win") {
        win += 1
    }
    else if (result === "Loss") {
        loss += 1
    }
    else {
        tie += 1
    }

    let Total = win + loss + tie;

    alert(`You picked: ${userchoice}, Computer picked: ${computerchoice}
Result: ${result}

Score:
Win: ${win}, Losses: ${loss}, Tie: ${tie}

Total games played: ${Total}`);
}