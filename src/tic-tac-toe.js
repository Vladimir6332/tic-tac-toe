class TicTacToe {
    constructor() {       
        this._field = [[], [], []];
        this._currentPositionState;

    }

    getCurrentPlayerSymbol() {
        


    }

    nextTurn(rowIndex, columnIndex) {
        if (!this._field[rowIndex][columnIndex]) {            
            this._currentPositinState = true;
            return true;
        };               
        this._currentPositionState = false;
        return false;
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;
