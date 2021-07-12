import DonutMaker from "./DonutMaker";

describe('The creation of DonutMaker', () => {
    test('Does it add a donut?', () => {
        const underTest = new DonutMaker(0, 0);
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(1);
    });
    test('Can it purchase an autoclicker AND remove spent donuts?', () => {
        const underTest = new DonutMaker(100, 0, 100, 0, 0);
        underTest.addAutoClicker();
        expect(underTest.numAutoClickers).toEqual(1);
        expect(underTest.numDonuts).toEqual(0);
    });
    test('Should not allow autoclicker purchase with 99 Donuts', () => {
        const underTest = new DonutMaker(99, 0, 100, 0, 0);
        underTest.addAutoClicker();
        expect(underTest.numAutoClickers).toEqual(0);
    });
    test('Will add donuts increase by the amount of autoClickers present when fired.', () => {
        const underTest = new DonutMaker(110, 2);
        underTest.activateAutoClickers();
        expect(underTest.numDonuts).toEqual(112);
    });
    test('Can it purchase a multiplier AND remove spent donuts?', () => {
        const underTest = new DonutMaker(10, 0, 0, 0, 10);
        underTest.addMultiplier();
        expect(underTest.numMultipliers).toEqual(1);
        expect(underTest.numDonuts).toEqual(0);
    });
    test('Should not allow multiplier purchase with 9 Donuts', () => {
        const underTest = new DonutMaker(9, 0, 0, 0, 10);
        underTest.addMultiplier();
        expect(underTest.numMultipliers).toEqual(0);
    });
    test('Donut count will increase by the multiplier amount when fired', () => {
        const underTest = new DonutMaker(100, 0, 0, 1);
        underTest.activateMultipliers();
        expect(underTest.numDonuts).toEqual(120);
    });
    test('Cost of each Donut Muliplier will go up with each purchase', () => {
        const underTest = new DonutMaker(100, 0, 0, 0, 10);
        underTest.addMultiplier();
        expect(underTest.multiplierCost).toEqual(11);
    });
    test('Cost of each Auto Clicker will go up with each purchase', () => {
        const underTest = new DonutMaker(100, 0, 100, 0, 0);
        underTest.addAutoClicker();
        expect(underTest.autoClickerCost).toEqual(110);
    });
    test('Amount of subsequent Donut Multipliers will go up to the power of Donut Multipliers', () => {
        const underTest = new DonutMaker(1000, 0, 100, 2, 12.1, 1.44);
        underTest.addDonut();
        expect(underTest.donutsPerClick).toEqual(1.44);
        expect(underTest.numDonuts).toEqual(1440);
    });

});