class TicTacToe {
    constructor() {       
        this._field = [[null, null, null],
         [null, null, null],
          [null, null, null]];
        this._currentPositionState;
        this._curPlayer = 'x';
        this._curPosition;
        this._finished = false;
        this._winner = null;
        this._fieldFull = false;
        this._draw = false;

    }

    getCurrentPlayerSymbol() {        
        return this._curPlayer;
    }

    nextTurn(rowIndex, columnIndex) {        
        if (!this._field[rowIndex][columnIndex]) {            
            this._field[rowIndex][columnIndex] = this._curPlayer;
            if (this._curPlayer === 'x') {
                this._curPlayer = 'o';                
            }
            else  {
                this._curPlayer = 'x';                
            };            
        };
        
        //check winner
        let checkedRowsX = this._field.some((val) => {            
            return val.every((val) => val === 'x');
        });
        let checkedRowsO = this._field.some((val) => {
            return val.every((val) => val === 'o');
        });
        let checkedColsX = false;
        let checkedColsO = false;

        for (let i = 0; i < this._field.length; i++) {
            let counterX = 0;
            let counterO = 0;
            for(let y = 0; y < this._field.length; y++) {
                if (this._field[y][i] === 'x') counterX++;
                if (this._field[y][i] === 'o') counterO++;
            }
            if (counterX === this._field.length) checkedColsX = true;
            if (counterO === this._field.length) checkedColsO = true;
        }

        let checkedLine1X = true;
        let checkedLine1O = true;
        let checkedLine2X = true;
        let checkedLine2O = true

        for (let i = 0; i < this._field.length; i++) {
            if (this._field[i][i] !== 'x') checkedLine1X = false;
            if (this._field[i][i] !== 'o') checkedLine1O = false;
            if (this._field[i][this._field.length - 1 - i] !== 'x') checkedLine2X = false;
            if (this._field[i][this._field.length - 1 - i] !== 'o') checkedLine2O = false;
            
        }

        if (checkedRowsX || checkedColsX || checkedLine1X || checkedLine2X ) {
            this._finished = true;
            this._winner = 'x'
        }
        if (checkedRowsO || checkedColsO || checkedLine1O || checkedLine2O ) {
            this._finished = true;
            this._winner = 'o'
        }

        //check field full
        this._fieldFull = this._field.every((val) => {
          return val.every((val) => val);
        });
        if (this._fieldFull && !this._winner) {
            this._draw = true;
            this._finished = true;
        }
        
        
    }

    isFinished() {
        return this._finished;

    }

    getWinner() {
        return this._winner;

    }

    noMoreTurns() {
        return this._fieldFull;

    }

    isDraw() {
        if (this._finished && !this._winner) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this._field[rowIndex][colIndex];
    };
}

module.exports = TicTacToe;
