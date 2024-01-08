console.log("Hello World");

//Variables

let turnMusic = new Audio("music/melat-sound.mp3");
let gameOver = new Audio("music/gameover.mp3");
let music = new Audio("music/bg-music.mp3");
let turn = "X";

//Function that CheckTurn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//Function that Check Winner

const checkWinner = () => {};

//Game Logic

let boxes = document.querySelector(".box");
// console.log(boxes);
Array.from(boxes).forEach((element) => {
  let boxText = document.querySelector(".box-text");

  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      changeTurn();
      turnMusic.play();
      checkWinner();
      document.querySelector(".info")[0].innerText = "Turn for" + turn;
    }
  });
});
