class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.res = this.max - this.min;
        this.res = Math.floor(this.res/2);
        this.res = this.max - this.res;
        this.mid = this.res;
        return this.mid;
    }

    lower() {
        this.max = this.mid;
    }

    greater() {
        this.min = this.mid;
    }
}

module.exports = GuessingGame;
