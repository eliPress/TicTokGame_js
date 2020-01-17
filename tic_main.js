var turnPlayer = 1; // בודק התור של איזה שחקן כרגע
var counter = 0;
var boxes_ar = [];
var wins_ar = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

//console.log(wins_ar[5][1])

$(function () {
  createAllBoxes()
})

function createAllBoxes() {
  for (let i = 0; i < 9; i++) {
    let box = new TicClass(id_parent, i);
    box.addToGame();
    boxes_ar.push(box);
  }
}

function checkIfWin() {
  for (let i in wins_ar) {
    // מחזיר את המערך עם הרצף איי די של אותו נצחון
    let winIndex = wins_ar[i];
    if (boxes_ar[winIndex[0]].symbolBox == boxes_ar[winIndex[1]].symbolBox && boxes_ar[winIndex[1]].symbolBox == boxes_ar[winIndex[2]].symbolBox && boxes_ar[winIndex[0]].symbolBox != null) {
      resetGame(`player ${boxes_ar[winIndex[0]].symbolBox} win`);

    }
  }

}

function checkIfGameEnd() {
  if (counter >= 9) {
    resetGame("draw game over!")


  }
}

function resetGame(_message) {
  setTimeout(function () {
    alert(_message)
    boxes_ar.map(function (item) {
      item.resetBox()
      counter = 0;
    })
  }, 200);
}