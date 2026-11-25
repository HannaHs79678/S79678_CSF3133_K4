// Game variables
let gameStarted = false;
let wins = 0;
let losses = 0;
let draws = 0;

// Store every round result
let results = [];
let round = 0;

//1.Start Game
function startGame() {
    let name = document.getElementById("playerName").value;
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    document.getElementById("welcome").innerHTML = "Welcome, " + name + "!";
    document.getElementById("startTime").innerHTML = "Game started on: " + new Date();
    gameStarted = true;
}

//2.Generate Computer Choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

//3.Play Round
function playRound(playerChoice) {
    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    let computerChoice = getComputerChoice();
    //Update images
    document.getElementById("playerImg").src = playerChoice + ".png";
    document.getElementById("computerImg").src = computerChoice + ".png";
    let result;

    if (playerChoice === computerChoice) {
        result = "Draw";
        draws++;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        result = "Win";
        wins++;
    } else {
        result = "Lose";
        losses++;
    }
    round++;
    results.push(result);

    //Display result
    document.getElementById("result").innerHTML = "You chose " + playerChoice + ". Computer chose " + computerChoice + ". You " + result + "!";

    // Change result colour
    if (result === "Win") {
        document.getElementById("result").style.color = "green";
    } else if (result === "Lose") {
        document.getElementById("result").style.color = "red";
    } else {
        document.getElementById("result").style.color = "grey";
    }

    //Update scoreboard
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    //Add new row to history table
    document.getElementById("history").innerHTML +=
        "<tr>" +
        "<td>" + round + "</td>" +
        "<td>" + playerChoice + "</td>" +
        "<td>" + computerChoice + "</td>" +
        "<td>" + result + "</td>" +
        "</tr>";
}

//4.Show Summary Function
function showSummary() {
    // Count total wins
    let totalWins = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === "Win") {
            totalWins++;
        }
    }
    // Calculate total rounds
    let totalRounds = results.length;
    // Calculate winning percentage
    let percentage = 0;
    if (totalRounds > 0) {
        percentage = Math.round((totalWins / totalRounds) * 100);
    }

    // Display summary
    document.getElementById("summary").innerHTML = "You played " + totalRounds + " rounds and won " + percentage + "%";
}

//5.Reset Game Function
function resetGame() {
    //Reset scores
    wins = 0;
    losses = 0;
    draws = 0;
    round = 0;

    //Empty results array
    results = [];

    //Reset scoreboard
    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    //Clear history table & keep header row
    document.getElementById("history").innerHTML =
        "<tr>" +
        "<th>Round</th>" +
        "<th>You</th>" +
        "<th>Computer</th>" +
        "<th>Result</th>" +
        "</tr>";

    //Clear Player Name
    document.getElementById("playerName").value = "";

    //Clear result and summary
    document.getElementById("result").innerHTML = "";
    document.getElementById("summary").innerHTML = "";

    //Reset images
    document.getElementById("playerImg").src = "rock.png";
    document.getElementById("computerImg").src = "rock.png";

    //Stop the game
    gameStarted = false;

    //Clear welcome message and start time
    document.getElementById("welcome").innerHTML = "";
    document.getElementById("startTime").innerHTML = "";
}
