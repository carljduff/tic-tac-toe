const create = (type) => {
    const element = document.createElement(type)
    return element
  }

  let btn = create('button')
  document.body.append(btn)
  btn.innerText = 'Button'
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
 
  if(Event.type == 'click') {

  }
    
    

function turn() {
  if(player[0].innerText == 'X') {
    title.innerText = 'PLAYER 1';
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
        for (let i = 0; i < 9; i++) {
          board.push(document.createElement('div'))
          board[i].className = 'grid';
          container.append(board[i]);
          // board[i].innerText = '';
          board[i].addEventListener('click', () => {
            // console.log(board[i])
            // console.log(i)
            if (round % 2 == 0) {
              board[i].innerText = player[0];
              title.innerText = "PLAYER 2"
              round++ 
            } else {
              board[i].innerText = player[1];
              title.innerText = 'PLAYER 1'
              round++
            }
          }); //giving event listener to each of them
        }
    }
  btn.addEventListener('click', reset)

  buildBoard();
  function reset() {
    
  }

// ---------------------------------------------------------------------BOARD BUILD--------------------------------------------------------------------------------