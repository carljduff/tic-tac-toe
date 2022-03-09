
## Things to Keep in Mind

* MVC
* Model and View communicates to the controller. 
* Model does nothing but stores all data.
* View renders the display and initializes the Event Listeners.
* Controller communicates to the Model and View.
* Game tiles should only be clickable once.
* If the game is over, the tiles should not click.
* If someone wins, display who, otherwise display tie.
* A Restart Game button that sets the state to start over.
* Two players (X & O).
* Must use at least one Class.

## Procedures

1. Board will be built with 9 tiles, display the title and restart button.
2. Tiles will be clickable.
3. Player 1 will start by clicking on a tile.
4. After player 1 clicks on a tile, it will fill the innertext with the player symbol.
5. After the innertext is filled, it will be player 2's turn.
6. Player 2 will click a tile to be filled with their symbol.
7. This process repeats until the fifth click.
8. After the fifth click, check for a win.
9. If a winning condition is met, display the player that won.
10. If not then continue with the next player.
11. Check after each click to see if a winning condition is met.
12. If all nine tiles are filled and a winning condition has not been met, display that the game was a tie.
13. The Restart Game button will clear the state and take it back to the original state.
14. Repeat.

# Object Oriented

## Model
1. Board Data
* Board will be an array [0, 1, 2, 3, 4, 5, 6, 7, 8]

2. Win Data (Eight Possible Wins)
* [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

3. Current Player Data
* Stores the information for who's the current player. 

4. State Data
* The data that will update the state 

*(Not for sure if I need this)*
5. End Game Data
* Stores the information for when the game is ended.


## View
1. Display Board
* There will be a _function_ or _something_ that builds the board in the controller.

2. Restart Game Button (resets state)
* The state must be reset to restart the game.
* The board must clear.

3. Display Title
* "Tic-Tac-Toe" in the innertext of the HTML element.

4. Display whose turn it is.
* Display this in the paragraph HTML element.

5. Display who wins (or tie)
* Replace the paragraph HTML element with the winner or tie.

6. Symbols X & O on clicks
* The turn symbols will be displayed on the board when clicked.



## Controller
1. Board
* The board must be dynamically built using javascript.
* Must be clickable.
* 3 x 3 Grid:
* 606px H&W for container, 200px with 1px border for each tile, flex-wrap.
* Array [0-8].
* Array.map will do the same thing to every index.

2. Tiles
* Once clicked on a tile, the player's symbol must be added.
* The tile must be disabled and cannot be clicked on until reset.

3. Turn 
* Is the current player X or O? 
* Player X will turn the innerText of the tile to "X".
* Player O will turn the innerText of the tile to "O".
* Who just clicked? If X clicked then it's O's turn.

4. Display Winner 
* When the fifth click is clicked, start checking for winning conditions. 
* When one player's symbols hit a winning condition, the game is won.
* If no one hits a winning condition, the game is a tie.

5. Restart Game
* A function that will reset the state data.
* The board must be cleared.
* All tiles become clickable again.
* All data is reset.

<!-- HTML Rendering

element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element

document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream -->






