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
    }



}

class View {
    constructor() {
        this.app = this.getElement('#app')
        this.title = this.createElement('h1')
        this.title.textContent = 'Tic-Tac-Toe'
        this.container = this.createElement('div')
        this.turnTitle = this.createElement('p')
        // this.turnTitle.textContent = `It's ${players} turn!`
        this.container.className = 'container'
        // this.grid = document.querySelectorAll('.grid')
        this.resetButton = this.createElement('button')
        this.resetButton.textContent = 'Reset Game'
        this.app.append(this.title, this.container, this.turnTitle, this.resetButton)
        

        
    }
    
    turnEvent = (fn) => {
        this.grid.addEventListener('click', fn)
    }
    
    buildBoard = (board) => {
        for (let i = 0; i < 9; i++) {
         board.push(document.createElement('div'))
         board[i].className = 'grid';
         this.container.append(board[i]);
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
        this.v.buildBoard(this.m.board)
        this.v.turnEvent(this.buildBoard)
    }

    turn = () => {
        console.log('test')
    }

}



const app = new Controller(new Model(), new View())