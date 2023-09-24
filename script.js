var massiveText = [
	'Важно помнить одно правило Кекс',
	'Ты заблудилься? Нет ты нашел путь к Кексам',
	'Кликай Кликай я все равно ничего не получу',
	'Кекс Вика выбери меня',
	'Шоколаде мармеладе это шедевральный Кексиаде',
	'Я супер пупер секси я шоколадный Кексик',
	'Все ребят обновлений не будет у создателя передоз Кексом'
];
var randomNumber = Math.floor(Math.random() * 7);
alert(massiveText[randomNumber]);


var shop = document.getElementById('openShop');
var back = document.getElementById('back');
var h1Id = document.getElementById('h1');
var buttonId = document.getElementById('button');
var upgrage1button = document.getElementById('upgrade1');
var much1 = 10;
var counter = 0;
var upgrade0 = 1;
shop.addEventListener('click', function () {
	shop.classList.add('hidden');
	back.classList.remove('hidden');
	upgrage1button.classList.remove('hidden');
});

back.addEventListener('click', function () {
	back.classList.add('hidden');
	upgrage1button.classList.add('hidden');
	shop.classList.remove('hidden');
});

upgrage1button.addEventListener('click', function () {
	counter = counter - much1;
	upgrade0 = upgrade0 + 1;
	h1Id.textContent = 'Cakes:' + counter;
	much1 = much1 + 10;
	upgrage1button.textContent = 'buy +1 click (' + much1 + ')'
});

buttonId.addEventListener('click', function () {
	counter = counter + upgrade0;
	h1Id.textContent = 'Cakes:' + counter;
});

