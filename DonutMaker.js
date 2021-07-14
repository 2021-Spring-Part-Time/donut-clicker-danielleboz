class DonutMaker {
    constructor(numDonuts, numAutoClickers, autoClickerCost, numMultipliers, multiplierCost, donutsPerClick) {
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.autoClickerCost = autoClickerCost;
        this.numMultipliers = numMultipliers;
        this.multiplierCost = multiplierCost;
        this.donutsPerClick = donutsPerClick;
    }

    getNumDonuts() {
        return Math.round(this.numDonuts);
    }

    getNumAutoClickers() {
        return this.numAutoClickers;
    }

    getAutoClickerCost() {
        return Math.round(this.autoClickerCost);
    }

    getNumMultipliers() {
        return this.numMultipliers
    }

    getMultiplierCost() {
        return Math.round(this.multiplierCost);
    }

    getDonutsPerClick() {
        return Math.round(this.donutsPerClick);
    }

    addDonut() {
        if(this.numMultipliers > 0) {
            this.numDonuts += Math.pow(1.2, this.numMultipliers);
        } else {
            this.numDonuts++;
        }
    }

    addAutoClicker() {
        if(this.numDonuts >= this.autoClickerCost) {
            this.numAutoClickers++;
            this.numDonuts -= this.autoClickerCost;
            this.autoClickerCost = Math.round(this.autoClickerCost * 1.10);
        } 
    }

    addMultiplier() {
        if(this.numDonuts >= this.multiplierCost) {
            this.numMultipliers++;
            this.numDonuts -= this.multiplierCost;
            this.multiplierCost = Math.round(this.multiplierCost * 1.10);
        }
    }

    activateAutoClickers() {
        if(this.numAutoClickers > 0 && this.numMultipliers == 0) {
            this.numDonuts += this.numAutoClickers;
        } else if(this.numAutoClickers > 0 && this.numMultipliers > 0) {
            this.numDonuts += Math.round(this.numAutoClickers * this.numMultipliers);
        }
    }

    activateMultipliers() {
        if(this.numMultipliers > 0) {
            this.numDonuts *= this.numMultipliers * 1.2;
        }
    }

    disableAutoClickerPurchase() {
        return this.numDonuts < this.autoClickerCost;
    }

    disableMultiplierPurchase() {
        return this.numDonuts < this.multiplierCost;
    }

}

export default DonutMaker;