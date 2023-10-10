var Player = [
  { Title: "Player 1", TotalScore: 0, currentScore: 0 },
  { Title: "Player 2", TotalScore: 0, currentScore: 0 },
];
var playerIndex = null;
var imgElement = document.getElementById("#imgs");
var total1 = document.getElementById("#total1");
var current1 = document.getElementById("#current1");
var current2 = document.getElementById("#current2");
var total2 = document.getElementById("#total2");
var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");

function NewGame() {
  playerOne.style = "background-color : #dddfe647";
  this.playerIndex = 0;
  Player[1].TotalScore = 0;
  Player[0].TotalScore = 0;
  Player[0].currentScore = 0;
  Player[1].currentScore = 0;
  console.log(Player[this.playerIndex].Title);
  generateScore1();
  generateScore2();
  imgElement.innerHTML = `<img src="assets/img/dice1.png" class="dice" alt="" />`;
}
function winner(playerIndex) {
  if (
    Player[this.playerIndex].TotalScore >= 30 ||
    Player[this.playerIndex].currentScore >= 30
  ) {
    return console.log(
      `Winner : ${Player[this.playerIndex].Title} \r\n start new game`
    );
  }
}

function resetPlayerScore(random, playerIndex) {
  if (random == 1) {
    Player[playerIndex].currentScore = 0;
    console.log(
      Player[playerIndex].Title,
      ": You got num 1 will replace the turn"
    );
    this.playerIndex = this.playerIndex === 1 ? 0 : 1;
  } else {
    console.log(
      `current2 score  : ${Player[playerIndex].currentScore} - ${Player[playerIndex].Title}`
    );
  }
}
function generateDiceImage(random) {
  imgElement.innerHTML = `<img src="assets/img/dice${random}.png" class="dice" alt="" />`;
}
function generateScore2() {
  let totalScore = Player[1].TotalScore;
  let currentScore = Player[1].currentScore;
  if (totalScore == 0) {
    total2.innerHTML = `Total Is <span style="text-decoration: underline" >00</span>`;
  } else {
    total2.innerHTML = `Total Is <span style="text-decoration: underline" >${totalScore}</span>`;
  }
  if (currentScore == 0) {
    current2.innerHTML = `current Is <span style="text-decoration: underline" >00</span>`;
  } else {
    current2.innerHTML = `current Is <span style="text-decoration: underline" >${currentScore}</span>`;
  }
}
function generateScore1() {
  let totalScore = Player[0].TotalScore;
  let currentScore = Player[0].currentScore;
  if (totalScore == 0) {
    total1.innerHTML = `Total Is <span style="text-decoration: underline" >00</span>`;
  } else {
    total1.innerHTML = `Total Is <span style="text-decoration: underline" >${totalScore}</span>`;
  }
  if (currentScore == 0) {
    current1.innerHTML = `current Is <span style="text-decoration: underline" >00</span>`;
  } else {
    current1.innerHTML = `current Is <span style="text-decoration: underline" >${currentScore}</span>`;
  }
}
function specifyPlayerScore(playerIndex) {
  if (playerIndex === 0) {
    generateScore1();
    playerOne.style = "background-color : #dddfe647";
    playerTwo.style = "background-color : none";
  } else if (playerIndex === 1) {
    playerTwo.style = "background-color : #dddfe647";
    playerOne.style = "background-color : none";
    generateScore2();
  }
}

function GenerateRandomNumber(playerIndex) {
  if (Player[this.playerIndex].currentScore >= 30) {
    winner(this.playerIndex);
  } else {
    random = Math.floor(Math.random() * 6 + 1);
    resetPlayerScore(random, this.playerIndex);
    let play = Player[this.playerIndex];
    play.currentScore += random;
  }
  generateDiceImage(random);
}
function hold(playerIndex) {
  if (this.playerIndex == null) {
    console.log("Click On new game");
  } else {
    Player[this.playerIndex].TotalScore +=
      Player[this.playerIndex].currentScore;
    Player[this.playerIndex].currentScore = 0;
    console.log(
      `This is the total score for ${Player[this.playerIndex].Title} : ${
        Player[this.playerIndex].TotalScore
      }   we will replece the turn`
    );
    this.playerIndex = playerIndex === 1 ? 0 : 1;
      specifyPlayerScore(this.playerIndex);
  }
}
function roll(playerIndex) {
  if (this.playerIndex == null) {
    console.log("Click On new game");
  } else {
    if (Player[playerIndex].TotalScore >= 30) {
      return false;
    } else {
      playerIndex = this.playerIndex;
      GenerateRandomNumber(playerIndex);
      specifyPlayerScore(this.playerIndex);
    }
  }
}
