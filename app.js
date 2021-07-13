import DonutMaker from './DonutMaker.js';

var bakerModalBtn = document.querySelector('.header__baker_modalBtn');
var backdrop = document.querySelector('.header__modal_backdrop');
var bakerModal = document.querySelector('.header__baker_modalContent');
var contactModal = document.querySelector('.header__contact_modalBtn');

function openBakerModal() {
    bakerModal.style.display = 'block';
    backdrop.style.display = 'block';
}

function closeModal() {
    bakerModal.style.display = 'none';
    backdrop.style.display = 'none';
}

bakerModalBtn.onclick = openBakerModal();
backdrop.onclick = closeModal();

const mainDonutButton = document.querySelector('.main__donut_button'),
numDonutsDiv = document.getElementById('main__donutsMade_count');

const myDonutMaker = new DonutMaker(0, 0, 100, 0, 10, 1);

mainDonutButton.addEventListener('click', () => {
    myDonutMaker.addDonut();
    numDonutsDiv.innerHTML = myDonutMaker.getNumDonuts();
});

const mainAutoClickersButton = document.querySelector('.main__clickerSection_button'),
autoClickerCostSpan = document.getElementById('main__autoClicker_cost'),
purchasedAutoClickersSpan = document.getElementById('main__autoClickers_purchased');

mainAutoClickersButton.addEventListener('click', () => {
    myDonutMaker.addAutoClicker();
    autoClickerCostSpan.innerHTML = myDonutMaker.getAutoClickerCost();
    purchasedAutoClickersSpan.innerHTML = myDonutMaker.getNumAutoClickers();
    numDonutsDiv.innerHTML = myDonutMaker.getNumDonuts();
});

const mainMultipliersButton = document.querySelector('.main__multiplierSection_button'),
multiplierCostSpan = document.getElementById('main__multipliers_cost'),
purchasedMultipliersSpan = document.getElementById('main__multipliers_purchased');

mainMultipliersButton.addEventListener('click', () => {
    myDonutMaker.addMultiplier();
    multiplierCostSpan.innerHTML = myDonutMaker.getMultiplierCost();
    purchasedMultipliersSpan.innerHTML = myDonutMaker.getNumMultipliers();
    numDonutsDiv.innerHTML = myDonutMaker.getNumDonuts();
});

const mainResetButton = document.getElementById('main__reset_button');

mainResetButton.addEventListener('click', () => {
    window.location.reload();
});

setInterval (function () {
    myDonutMaker.activateAutoClickers();
    numDonutsDiv.innerHTML = myDonutMaker.getNumDonuts();
}, 1000);