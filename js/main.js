class Model {
  constructor() {
    this.board = [];
    this.winData = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    this.player = ["X", "O"];
    this.round = 0;
    this.game = 1;
    this.xscore = 0;
    this.oscore = 0;
    this.tie = 0;
    this.gameOver = false;
  }

  //need getters and setters
}

class View {
  constructor() {}

  // buildBoard = (placeholders...not set yet)
  buildBoard = (board, handleCellEvent, reset) => {
    this.app = this.getElement("#app");
    this.title = this.createElement("h1");
    this.title.id = "title";
    this.title.className = "title";
    this.title.textContent = "Tic-Tac-Toe";
    this.turnTitle = this.createElement("p");
    this.turnTitle.className = "turn";
    this.turnTitle.innerText = `X's Turn`;
    this.gameTitle = this.createElement("p");
    this.gameTitle.className = "game";
    this.gameTitle.textContent = `Round: 1`;
    this.scoreTitle = this.createElement("p");
    this.scoreTitle.className = "score";
    this.scoreTitle.textContent = "Score: X - 0 | O - 0 | Tie - 0";
    this.infoContainer = this.createElement("div");
    this.infoContainer.className = "info";
    this.infoContainer.append(this.turnTitle, this.gameTitle, this.scoreTitle);
    this.container = this.createElement("div");
    this.container.className = "container";
    this.container.id = "container";
    this.buttonContainer = this.createElement("div");
    this.buttonContainer.className = "btn-container";
    this.resetButton = this.createElement("button");
    this.buttonContainer.append(this.resetButton);
    this.resetButton.className = "btn";
    this.resetButton.textContent = "Reset Game";
    this.resetButton.id = "resetbtn";
    this.resetButton.addEventListener("click", reset);
    this.app.append(
      this.title,
      this.infoContainer,
      this.container,
      this.buttonContainer
    );
    for (let i = 0; i < 9; i++) {
      let tile = document.createElement("button");
      tile.setAttribute("data-index", i); //data-attribute.. data can then be used in the page's JavaScript to create a more engaging user experience
      tile.setAttribute("id", "grid");
      board.push(tile);
      board[i].className = "grid";
      this.container.append(board[i]);
      board[i].addEventListener("click", handleCellEvent);
    }
  };

  resetDom = () => {
    this.app.removeChild(this.container);
    this.app.removeChild(this.title);
    this.app.removeChild(this.infoContainer);
    this.app.removeChild(this.buttonContainer);
  };

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }
}

class Controller {
  //Giving the controller access to the view and model
  constructor(model, view) {
    this.m = model;
    this.v = view;
    //setting the parameters in buildboard
    this.v.buildBoard(this.m.board, this.handleCellEvent, this.reset);
  }

  handleCellEvent = (e) => {
    //get the data index of the tile when clicked
    let targetIndex = e.target.dataset.index;
    //accessing the data index of the board array in model
    let tilePlace = this.m.board[targetIndex];

    // document.getElementById('grid').disabled = true;
    let board = this.m.board;
    let player = this.m.player;
    let elems = document.getElementsByClassName("grid");

    for (let i = 0; i < elems.length; i++) {
      if (targetIndex == elems[i].dataset.index) {
        elems[i].disabled = true;
      }
    }

    //X starts...even rounds are X's turn, odd rounds are O's turn
    if (this.m.round % 2 == 0) {
      //making the innertext of the board index to X or O
      tilePlace.innerText = this.m.player[0];
      this.v.turnTitle.innerText = "O's TURN";

      //increase the round after the click
      this.m.round++;
    } else {
      tilePlace.innerText = this.m.player[1];
      this.v.turnTitle.innerText = "X's TURN";
      this.m.round++;
    }

    this.checkWin();

    if (this.m.round > 8) {
      this.v.turnTitle.textContent = `It's a Tie!`;
      this.m.gameOver = true;
    }

    if (this.m.gameOver == true) {
      this.v.resetButton.textContent = "Play Again";
      let elems = document.getElementsByClassName("grid");
      for (let i = 0; i < elems.length; i++) {
        elems[i].disabled = true;
      }

      if (this.v.turnTitle.innerText == `${this.m.player[0]} wins!`) {
        this.m.xscore++;
      } else if (this.v.turnTitle.innerText == `${this.m.player[1]} wins!`) {
        this.m.oscore++;
      } else if ((this.v.turnTitle.textContent = `It's a Tie!`)) {
        this.m.tie++;
      }
    }
  };

  reset = () => {
    if (this.v.resetButton.textContent == "Play Again") {
      this.v.resetDom();
      this.m.board = [];
      this.m.round = 0;
      this.m.gameOver = false;
      this.v.buildBoard(this.m.board, this.handleCellEvent, this.reset);
      this.m.game++;
      this.v.gameTitle.textContent = `Round: ${this.m.game}`;
      this.v.scoreTitle.textContent = `Score: X - ${this.m.xscore} | O - ${this.m.oscore} | Tie - ${this.m.tie}`;
    } else {
      this.v.resetDom();
      this.m.board = [];
      this.m.round = 0;
      this.m.gameOver = false;
      this.v.buildBoard(this.m.board, this.handleCellEvent, this.reset);
      this.m.game = 1;
    }
  };

  checkWin = () => {
    let board = this.m.board;
    let x = this.m.player[0];
    let o = this.m.player[1];

    switch (true) {
      case board[0].innerText == x &&
        board[1].innerText == x &&
        board[2].innerText == x:
      case board[3].innerText == x &&
        board[4].innerText == x &&
        board[5].innerText == x:
      case board[6].innerText == x &&
        board[7].innerText == x &&
        board[8].innerText == x:
      case board[0].innerText == x &&
        board[3].innerText == x &&
        board[6].innerText == x:
      case board[1].innerText == x &&
        board[4].innerText == x &&
        board[7].innerText == x:
      case board[2].innerText == x &&
        board[5].innerText == x &&
        board[8].innerText == x:
      case board[2].innerText == x &&
        board[4].innerText == x &&
        board[6].innerText == x:
      case board[0].innerText == x &&
        board[4].innerText == x &&
        board[8].innerText == x:
        this.v.turnTitle.innerText = `${this.m.player[0]} wins!`;
        this.m.gameOver = true;
        break;

      case board[0].innerText == o &&
        board[1].innerText == o &&
        board[2].innerText == o:
      case board[3].innerText == o &&
        board[4].innerText == o &&
        board[5].innerText == o:
      case board[6].innerText == o &&
        board[7].innerText == o &&
        board[8].innerText == o:
      case board[0].innerText == o &&
        board[3].innerText == o &&
        board[6].innerText == o:
      case board[1].innerText == o &&
        board[4].innerText == o &&
        board[7].innerText == o:
      case board[2].innerText == o &&
        board[5].innerText == o &&
        board[8].innerText == o:
      case board[2].innerText == o &&
        board[4].innerText == o &&
        board[6].innerText == o:
      case board[0].innerText == o &&
        board[4].innerText == o &&
        board[8].innerText == o:
        this.v.turnTitle.innerText = `${this.m.player[1]} wins!`;
        this.m.gameOver = true;
        break;
    }
  };
}

//creating a new instance
const app = new Controller(new Model(), new View());
