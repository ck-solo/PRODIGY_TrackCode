var boxes = document.querySelectorAll(".box");
var reset = document.querySelector("#reset-btn");
var newgame = document.querySelector("#new-btn");
var mess = document.querySelector("#msg");
var messcont = document.querySelector(".msg-container");
let turn0 = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Click");
    if (turn0) {
      box.innerText = "O";

      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const winPattern = [
  ["0", "1", "2"],
  ["0", "3", "6"],
  ["0", "4", "8"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["2", "4", "6"],
  ["3", "4", "5"],
  ["6", "7", "8"],
];

const resetGame =()=>{
    turn0 = true;
    EnableBox();
    messcont.classList.add("hide");

}

const disabledBox = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
const EnableBox = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };


var showWinner = (winner) => {
  msg.innerText = `Congratulation  ${winner} is the winner`;
  messcont.classList.remove("hide");
};

var checkWinner = () => {
  for (let pattern of winPattern) {
    let post1val = boxes[pattern[0]].innerText;
    let post2val = boxes[pattern[1]].innerText;
    let post3val = boxes[pattern[2]].innerText;
    if (post1val != "" && post2val != "" && post3val != "") {
      if (post1val === post2val && post2val === post3val) {
        console.log("Winner", post1val);
        showWinner(post1val);
        disabledBox();
      }
    }
  }
};


newgame.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)