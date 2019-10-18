class GuessingGame {
    constructor() {
    	this.min = 0;
    	this.max = 0;
    	this.currGuess = 0;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	this.currGuess = Math.round(this.min + (this.max - this.min)/2);
    	return this.currGuess;
    }

    lower() {
    	this.max = this.currGuess;
    }

    greater() {
    	this.min = this.currGuess;
    }
}

module.exports = GuessingGame;
