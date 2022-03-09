<!-- HTML Rendering

element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element

document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream -->

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


## What Needs to Happen

# Model
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

3. Turn Data
* Stores whose turn it is.

*(Not for sure if I need this)*
4. Current Player Data
* Stores the information for who's the current player. 

*(Not for sure if I need this)*
5. End Game Data
* Stores the information for when the game is ended.

*(Not for sure if I need this)*
6. State Data
* The data that will update the state 

# View
1. Display Board
* There will be a _function_ or _something_ that builds the board.

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



# Controller
1. Build the Board
* The board must be dynamically built using javascript.
* 
* Build the Turn 
* 
* 
* 




