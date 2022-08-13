class GuessingGame {
    constructor() {}

    setRange(mini, maxi) {
        this.mini = mini;
        this.maxi = maxi;
        this.midi = Math.ceil((this.mini + this.maxi) / 2);
    }

    guess() {
        return this.midi;
    }

    lower() {
        this.maxi = this.midi;
        this.midi = Math.ceil((this.mini + this.maxi) / 2);

    }

    greater() {
        this.mini = this.midi;
        this.midi = Math.ceil((this.mini + this.maxi) / 2);
    }
}

module.exports = GuessingGame;
