

var h1Id = document.getElementById('h1');
var buttonId = document.getElementById('button');
var counter = 0;
buttonId.addEventListener('click', function () {
	counter++;
	h1Id.textContent = 'Кексы:' + counter;
});