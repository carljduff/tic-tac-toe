const create = (type) => {
    const element = document.createElement(type)
    return element
  }

  
//-------------------------------------------------------------------TITLE------------------------------------------------------------------------------------------
  let title = create('div');
  document.body.append(title);
  title.innerText = "Tic-Tac-Toe"
//-------------------------------------------------------------------TITLE------------------------------------------------------------------------------------------


//--------------------------------------------------------------------PLAYER TURN-----------------------------------------------------------------------------------
let player = ['X', 'O']
let round = 0;

// let clicked = false;
// function click() {
//   // clicked = true;
//   if (clicked == false) {
//     console.log('click');
//   } 
// }
 
    function turn() {
      if (Event.type = 'click' && round == 0) {
       
        round++ 
        // console.log(round)
      }
    }
    
    




//--------------------------------------------------------------------PLAYER TURN-----------------------------------------------------------------------------------

    
// ---------------------------------------------------------------------BOARD BUILD---------------------------------------------------------------------------------
    let board = [];
    let container = create('div')
    container.className = 'container';
    // let title = document.getElementById('title');
    document.body.appendChild(container);
    
     function buildBoard() {
        // let clicked = false;
        for (i = 0; i < 9; i++) {
          board.push(document.createElement('div'))
          board[i].className = 'grid';
          container.append(board[i]);
          board[i].innerText = '';
          board[i].addEventListener('click', turn); //giving event listener to each of them
        }
      }
  
  
  buildBoard();

// ---------------------------------------------------------------------BOARD BUILD--------------------------------------------------------------------------------