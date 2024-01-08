console.log("Hello from Index File");

//Sounds
const music = new Audio("music/melat-sound.mp3");
const winSound = new Audio("music/borat-disco.mp3");
//Select Element

const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset");
const boxText = document.querySelector(".box-text");
let heading = document.querySelector(".heading");
let imageBox = document.querySelector(".img-box");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const changeTurn = () => {
  return turn0 === "X" ? "0" : "X";
};

const disableBox = () => {
  boxes.forEach((box) => {
    box.classList.add("box-disable");
  });
};

const enableBox = () => {
  boxes.forEach((box) => {
    box.classList.remove("box-disable");
    box.innerText = "";
  });
};

resetBtn.addEventListener("click", () => {
  turn0 = true;
  heading.innerText = "Welcome to TIC TAC TOE";
  resetBtn.innerText = "Reset";
  winSound.pause();
  winSound.currentTime = 0;
  imageBox.classList.add("hidden");
  enableBox();
});

const checkWinner = () => {
  for (pattern of winPatterns) {
    // console.log(pattern);
    let pos1Val = boxes[pattern[1]].innerText;
    let pos2Val = boxes[pattern[0]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        heading.innerText = `Winner is ${pos1Val}`;
        console.log("winner Found");
        winSound.play();
        imageBox.classList.remove("hidden");
        disableBox();
        resetBtn.innerText = "Play Again";
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.classList.add("box-disable");
    checkWinner();
    music.play();
  });
});
