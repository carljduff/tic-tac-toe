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
    
        this.player = ['X', 'O'];
        this.round = 0;
    }

    //need getters and setters
}

class View {
    constructor() {
        
    }
    
    
    // buildBoard = (placeholders...not set yet)
    buildBoard = (board, handleCellEvent) => {
        this.app = this.getElement('#app')
        this.title = this.createElement('h1')
        this.title.className = 'title';
        this.title.textContent = 'Tic-Tac-Toe'
        this.turnTitle = this.createElement('p')
        this.turnTitle.className = 'turn';
        this.turnTitle.innerText = `X's Turn`;
        this.container = this.createElement('div')
        this.container.className = 'container'
        this.buttonContainer = this.createElement('div')
        this.buttonContainer.className = 'btn-container'
        this.buttonContainer.append(this.resetButton);
        this.resetButton = this.createElement('button')
        this.resetButton.className = 'btn'
        this.resetButton.textContent = 'Reset Game'
        this.app.append(this.title, this.turnTitle, this.container, this.resetButton)
        for (let i = 0; i < 9; i++) {
            let tile = document.createElement('div');
            tile.setAttribute('data-index', i); //data-attribute.. data can then be used in the page's JavaScript to create a more engaging user experience
            tile.setAttribute('id', 'grid') 
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
    //Giving the controller access to the view and model
    constructor(model, view) {
        this.m = model;
        this.v = view;
        //setting the parameters in buildboard
        this.v.buildBoard(this.m.board, this.handleCellEvent)
        
    } 


    handleCellEvent = (e) => {
        //get the data index of the tile when clicked
        let targetIndex = e.target.dataset.index; 
        //accessing the data index of the board array in model
        let tilePlace = this.m.board[targetIndex];
        
        //X starts...even rounds are X's turn, odd rounds are O's turn
        if (this.m.round % 2 == 0) {
        //making the innertext of the board index to X or O
            tilePlace.innerText = this.m.player[0];
            this.v.turnTitle.innerText = "O's TURN";
        //increase the round after the click 
            this.m.round++   
        } else {
            tilePlace.innerText = this.m.player[1];
            this.v.turnTitle.innerText = "X's TURN";
            this.m.round++
        }
        
        this.checkWin();
       
    }


    //checking for a win...needs updated to read data from model instead of being hard coded
   checkWin = () => {
       
        if (this.m.board[0].innerText == this.m.player[0] && this.m.board[1].innerText == this.m.player[0] && this.m.board[2].innerText == this.m.player[0]) {
            this.v.turnTitle.innerText = `${this.m.player[0]} wins!`
        } else if (this.m.round > 8) { 
                this.v.turnTitle.textContent = `It's a Tie!`;
        }
    }
    



}


//creating a new instance
const app = new Controller(new Model(), new View())