let prices = [15000, 10000, 1000, 20000];
let items = ['Стол', 'Стул', 'Полотенце', 'Зеркало'];

	document.write('<h1> Распродажа! 50% скидки на все </h1>');
	document.write ('<ul>');

for (i = 0; i < items.length; i++) {
	document.write('<li>' + items[i] + '|Старая цена ' + prices[i] + '|Новая цена ' + prices[i]/2 + '</li>');
}

document.write ('</ul');
