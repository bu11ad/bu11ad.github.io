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

var settings = document.getElementById('settings')
var shop = document.getElementById('openShop');
var back = document.getElementById('back');
var backSettings = document.getElementById('backSettings');
var h1Id = document.getElementById('h1');
var buttonId = document.getElementById('button');
var upgrade1button = document.getElementById('upgrade1');
var grey = document.getElementById('grey');
var popUp = document.getElementById('popUp');
var popUpClose = document.getElementById('close');
var popUpText = document.getElementById('mistake');
var much1 = parseInt(localStorage.getItem('much'));
var counter = parseInt(localStorage.getItem('count'));
var upgrade0 = parseInt(localStorage.getItem('upgrade'));
if(localStorage.getItem('count')){
	var counter = parseInt(localStorage.getItem('count'));
	h1Id.textContent = 'Cakes:' + counter;
	upgrade1button.textContent = 'buy +1 click (' + much1 + ')'
}
else{
	var counter = 0;
}
if(localStorage.getItem('upgrade')){
	var upgrade0 = parseInt(localStorage.getItem('upgrade'));
	h1Id.textContent = 'Cakes:' + counter;
	upgrade1button.textContent = 'buy +1 click (' + much1 + ')'
}
else{
	var upgrade0 = 1;
}
if(localStorage.getItem('much')){
	var much1 = parseInt(localStorage.getItem('much'));
	h1Id.textContent = 'Cakes:' + counter;
}
else{
	var much1 = 10;
}

popUpClose.addEventListener('click', function () {
	popUp.classList.add('hidden');
	grey.classList.add('hidden');
});

document.addEventListener('keydown', function (event) {
	if(event.keycode = 13){
		buttonId.blur();
	}
	if(event.keycode = 13){
		upgrade1button.blur();
	}
});

shop.addEventListener('click', function () {
	shop.classList.add('hidden');
	settings.classList.add('hidden');
	back.classList.remove('hidden');
	upgrade1button.classList.remove('hidden');
	
});

back.addEventListener('click', function () {
	back.classList.add('hidden');
	upgrade1button.classList.add('hidden');
	shop.classList.remove('hidden');
	settings.classList.remove('hidden');
});

settings.addEventListener('click', function () {
	shop.classList.add('hidden');
	settings.classList.add('hidden');
	backSettings.classList.remove('hidden');
});

backSettings.addEventListener('click', function () {
	backSettings.classList.add('hidden');
	settings.classList.remove('hidden');
	shop.classList.remove('hidden');
});

upgrade1button.addEventListener('click', function () {
	if(much1>counter){
		popUp.classList.remove('hidden');
		grey.classList.remove('hidden');
		popUpText.textContent = ' Error! do you think you can buy an upgrade when you dont have the money for it? You re wrong son!';
	}
	else{
	counter = counter - much1;
	upgrade0 = upgrade0 + 1;
	h1Id.textContent = 'Cakes:' + counter;
	much1 = much1 + 10;
	upgrade1button.textContent = 'buy +1 click (' + much1 + ')'
	}
});

buttonId.addEventListener('click', function () {
	counter = counter + upgrade0;
	h1Id.textContent = 'Cakes:' + counter;
	localStorage.setItem('count', counter);
	localStorage.setItem('upgrade', upgrade0);
	localStorage.setItem('much', much1);
});

