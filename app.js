let password = '1234'; 
let count = 3;

while (count>0) {
	let userattempt = prompt('Enter password', '')
	if (userattempt !== password) {
		alert ('Wrong password! You have ' + (count - 1) + ' more attempts');
		count--;
		if (count===0) {
			alert ('No attempts!');
		}
	} else {
		document.write('Congratulations!');
		break;
	}
}

