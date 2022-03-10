let player = ['X', 'O']
let round = 0;

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
            [2, 4, 6]
        ];
        this.currentPlayer = [];
        this.endGame = [];
        this.player = ['X', 'O'];
        this.round = 0;
    }

    // updateBoard = (move) => {
    //     console.log({move, element: this.board[move].textContent});
    // }


}

class View {
    constructor() {
        this.app = this.getElement('#app')
        this.title = this.createElement('h1')
        this.title.textContent = 'Tic-Tac-Toe'
        this.turnTitle = this.createElement('p')
        this.turnTitle.textContent = `X's Turn!`
        this.container = this.createElement('div')
        this.container.className = 'container'
        this.resetButton = this.createElement('button')
        this.resetButton.textContent = 'Reset Game'
        this.app.append(this.title, this.turnTitle, this.container, this.resetButton)
        
    }
    
   
    buildBoard = (board, handleCellEvent) => {
        for (let i = 0; i < 9; i++) {
            let tile = document.createElement('div');
            tile.setAttribute('data-index', i);
            board.push(tile)
            board[i].className = 'grid';
            this.container.append(board[i]);
            board[i].addEventListener('click', handleCellEvent);
        }

    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
        return element
    }

    getElement(selector) {
        const element = document.querySelector(selector)
        return element
    }



}

class Controller {
    constructor(model, view) {
        this.m = model;
        this.v = view;
        this.v.buildBoard(this.m.board, this.handleCellEvent)
        
    }


    handleCellEvent = (e) => {
        let targetIndex = e.target.dataset.index;
        // console.log(targetIndex)
        let tilePlace = this.m.board[targetIndex];
        // console.log(this.turnTitle)
    // }
    
    // playerTurn = () => {

        if (round % 2 == 0) {
            tilePlace.innerText = player[0];
            turnTitle.innerText = "O's TURN";
            console.log(turnTitle)
            round++ 
        } else {
            tilePlace.innerText = player[1];
            turnTitle.innerText = "X's TURN";
            round++
        }
    }
}



const app = new Controller(new Model(), new View())