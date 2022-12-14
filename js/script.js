let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Рандомное число: ' + randomNumber);

let computerMove = 'ход компьютера';

if(randomNumber == 1){
  computerMove = 'камень';
}
if(randomNumber == 2){
    computerMove = 'бумага';
  }
  if(randomNumber == 3){
    computerMove = 'ножницы';
  }  
let playerInput = prompt('Выбирай свой ход! 1: камень, 2: бумага, 3: ножницы.');

console.log('Игрок вписал: ' + playerInput);

let playerMove = 'неизвестный ход';

if(playerInput == '1'){
  playerMove = 'камень';
}
if(playerInput == '2'){
    playerMove = 'бумага';
  }
  if(playerInput == '3'){
    playerMove = 'ножницы';
  }
printMessage('Твой ход - это: ' + playerMove);

printMessage('Мой ход - это ' + computerMove);
if( computerMove == 'камень' && playerMove == 'бумага'){
    printMessage('Ты выиграл!');
  }
if( computerMove == 'ножницы' && playerMove == 'камень'){
    printMessage('Ты выиграл!');
  } 
if( computerMove == 'бумага' && playerMove == 'ножницы'){
    printMessage('Ты выиграл!');
  }
if( computerMove == 'бумага' && playerMove == 'камень'){
    printMessage('Ты проиграл!');
  }  
if( computerMove == 'камень' && playerMove == 'ножницы'){
    printMessage('Ты проиграл!');
  } 
if( computerMove == 'ножницы' && playerMove == 'бумага'){
    printMessage('Ты проиграл!');
  }
if( computerMove == 'ножницы' && playerMove == 'ножницы'){
    printMessage('Ничья!');
  }      
if( computerMove == 'камень' && playerMove == 'камень'){
    printMessage('Ничья!');
  }  
if( computerMove == 'бумага' && playerMove == 'бумага'){
    printMessage('Ничья!');
  }