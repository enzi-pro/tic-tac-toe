class TicTacToe {
    constructor() {
        this.currentIsX = true;
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentIsX ? "x" : "o";
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex)) {
            return false;
        }
        this.field[rowIndex][columnIndex] = this.currentIsX ? "x" : "o";
        this.currentIsX = !this.currentIsX;
        return true;
    }

    isFinished() {
        return (this.getWinner() !== null) || this.isDraw();
    }

    getWinner() {
        for (let i = 0; i < this.field.length; i++) {
            if (this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]) {
                return this.field[i][0];
            } else if (this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) {
                return this.field[0][i];
            }
        }
        if ((this.field[0][0] === this.field[1][1]) && (this.field[0][0] === this.field[2][2])) {
            return this.field[0][0];
        }
        else if ((this.field[0][2] === this.field[1][1]) && (this.field[0][2] === this.field[2][0])) {
            return this.field[0][2];
        }
        else {
            return null;
        }
    }

    noMoreTurns() {
        let noTurns = true;
        for(let row of this.field) {
            for(let col of row) {
                noTurns = noTurns && (col !== null);
            }
        }
        return noTurns;
    }

    isDraw() {
        return this.noMoreTurns() && (this.getWinner() === null);
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex] ? this.field[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
