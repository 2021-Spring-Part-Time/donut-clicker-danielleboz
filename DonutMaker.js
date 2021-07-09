class DonutMaker {
    constructor(numDonuts, numAutoClickers, autoClickerCost) {
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.autoClickerCost = autoClickerCost;
    }

    addDonut() {
        this.numDonuts++;
    }

    addAutoClicker() {
        if(this.numDonuts >= 100) {
            this.numAutoClickers++;
            this.numDonuts -= 100;
        } //use this for 3
    }

    activateAutoClickers() {
        if(this.numAutoClickers > 0) {
            this.numDonuts += this.numAutoClickers * 1;
        }
    }

    calculateClickerCost() {
        if(this.autoClickerCost === 100) {
            this.numAutoClickers * (1+.10);
        }
    }
}

export default DonutMaker;