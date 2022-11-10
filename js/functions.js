function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;

    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
let computerMove = 'камнем';
let playerMove = 'бумагой';

printMessage('Я играл ' + computerMove + ' ! Если Ваш ход - бумага, Вы выиграли!');