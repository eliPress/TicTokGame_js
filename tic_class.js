function TicClass(_parent, _id) {
  this.parent = _parent;
  // האיי די ישמש אותנו בהמשך להבין מה האינדקס שלו במערך
  this.id = _id;
  // בודק אם נלחץ או לא 
  this.clicked = false;
  this.symbolBox = null;
}


TicClass.prototype.addToGame = function () {
  var newBox = $("<div class='box'>");
  $(this.parent).append(newBox);
  this.newBox = newBox;


  $(newBox).on("click", function () {
    // alert("aaa");
    if (!this.clicked) {
      this.clicked = true;
      if (turnPlayer == 1) {
        // alert("aaa")
        $(newBox).html(`<img src="_images/x.png">`);
        turnPlayer = 2;
        this.symbolBox = 1;
      }
      else {
        $(newBox).html(`<img src="_images/o.png">`);
        turnPlayer = 1;
        this.symbolBox = 2;
      }
      counter++;
      checkIfWin();
      checkIfGameEnd()
    }
  }.bind(this))
}

TicClass.prototype.resetBox = function () {
  $(this.newBox).empty();
  this.clicked = false;
  this.symbolBox = null;
}