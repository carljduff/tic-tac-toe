class Board {
    constructor() {
        this.round = 0;
    }

    turn(e) {
        let element = document.getElementById(e.target.id);

        if (round % 2 == 0) {
            tilePlace.innerText = player[0];
            this.v.turnTitle.innerText = "O's TURN";
            round++ 

            
        } else {
            tilePlace.innerText = player[1];
            this.v.turnTitle.innerText = "X's TURN";
            round++
        }

    }
}