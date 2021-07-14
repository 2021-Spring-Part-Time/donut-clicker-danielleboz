import DonutMaker from './DonutMaker.js';

var bakerModalBtn = document.querySelector('.header__baker_modalBtn');
var backDrop = document.querySelector('.header__modal_backdrop');
var bakerModal = document.querySelector('.header__baker_modalContent');

function openBakerModal() {
    backDrop.style.display = 'block';
    bakerModal.style.display = 'block';
}

function closeBakerModal() {
    backDrop.style.display = 'none';
    bakerModal.style.display = 'none';
}

bakerModalBtn.addEventListener('click', () => {
    openBakerModal();
});

backDrop.addEventListener('click', () => {
    closeBakerModal();
    closeContactModal();
});

var contactModalBtn = document.querySelector('.header__contact_modalBtn');
var contactModal = document.querySelector('.header__contact_modalContent');

function openContactModal() {
    backDrop.style.display = 'block';
    contactModal.style.display = 'block';
}

function closeContactModal() {
    backDrop.style.display = 'none';
    contactModal.style.display = 'none';
}

contactModalBtn.addEventListener('click', () => {
    openContactModal();
});

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