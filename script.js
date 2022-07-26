const area = document.getElementById("area");
let move = 0;
let result = "";
const contentWrapper = document.getElementById("content");
const modalResult = document.getElementById("modal-result-wrapper");
const overlay = document.getElementById("overlay");
// const btnClose = document.getElementsByClassName("btn-danger");
const btnClose = document.getElementById("btn-close");
const closeBox = document.getElementsByClassName("box");

area.addEventListener("click", (e) => {
  if ((e.target.className = "box")) {
    move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "O");
    move++;
    check();
  }
});

const check = () => {
  const boxes = document.getElementsByClassName("box");
  const winvar = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (i = 0; i < winvar.length; i++) {
    if (
      boxes[winvar[i][0]].innerHTML === "X" &&
      boxes[winvar[i][1]].innerHTML === "X" &&
      boxes[winvar[i][2]].innerHTML === "X"
    ) {
      result = "X win";
      winningResult(result);
    } else if (
      boxes[winvar[i][0]].innerHTML === "O" &&
      boxes[winvar[i][1]].innerHTML === "O" &&
      boxes[winvar[i][2]].innerHTML === "O"
    ) {
      result = "O win";
      winningResult(result);
    }
    if (move === 9 && (result !== "X win" || result !== "O win")) {
      result = "Draw";
      winningResult(result);
    }
  }
};

const winningResult = (winner) => {
  contentWrapper.innerHTML = `${winner}`;
  modalResult.style.display = "block";
};

const closeModal = () => {
  modalResult.style.display = "none";
  location.reload();
};

/* const disableBox = () => {
   closeBox.style.
 } */

overlay.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);
