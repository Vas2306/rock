
function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'камнем';
    }
    if(argMoveId == 2){
        return 'бумагой';
      }
      if(argMoveId == 3){
        return 'ножницами';
      } else {
    printMessage('Ничего неизвестно о ходе: ' + argMoveId + '.');
    return 'неизвестный ход';    
    }   
  }
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Рандомное число: ' + randomNumber);
  
  let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'камень';
}
if(randomNumber == 2){
    computerMove = 'бумага';
  }
if(randomNumber == 3){
    computerMove = 'ножницы';
  }*/  
let playerInput = prompt('Выбирай свой ход! 1: камень, 2: бумага, 3: ножницы.');

console.log('Игрок вписал: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'камень';
}
if(playerInput == '2'){
    playerMove = 'бумага';
  }
  if(playerInput == '3'){
    playerMove = 'ножницы';
  } else {
    playerMove = 'неизвестный ход';
  }*/

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Я играл ' + argComputerMove + ', a ты - ' + argPlayerMove);
    if(argComputerMove == 'камнем' && argPlayerMove == 'бумагой'){
        printMessage('Ты выиграл!');
      }
    if(argComputerMove == 'ножницами' && argPlayerMove == 'камнем'){
        printMessage('Ты выиграл!');
      } 
    if(argComputerMove == 'бумагой' && argPlayerMove == 'ножницами'){
        printMessage('Ты выиграл!');
      }
    if(argComputerMove == 'бумагой' && argPlayerMove == 'камнем'){
        printMessage('Ты проиграл!');
      }  
    if(argComputerMove == 'камнем' && argPlayerMove == 'ножницами'){
        printMessage('Ты проиграл!');
      } 
    if(argComputerMove == 'ножницами' && argPlayerMove == 'бумагой'){
        printMessage('Ты проиграл!')
      }
    if(argComputerMove == 'ножницами' && argPlayerMove == 'ножницами'){
        printMessage('Ничья!');
      }      
    if(argComputerMove == 'камнем' && argPlayerMove == 'камнем'){
        printMessage('Ничья!');
      }  
    if(argComputerMove == 'бумагой' && argPlayerMove == 'бумагой'){
        printMessage('Ничья!');
      }
    }


let result = displayResult(computerMove, playerMove);

/*printMessage('Твой ход - это: ' + playerMove);

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
  }*/