"use strict";
let maxNumber = 100
let flag = 10


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const numberRandom = function (max) {
  return Math.floor(Math.random() * (maxNumber + 1))
}



const userNumber = function () {
  let number
  do {
    number = prompt(" Введи число.")
    if (!isNumber(number) === false)
      return number
    if (number === null) {
      alert("Игра окончена!")
      break
    }
  }
  while (!isNumber(number))


}



const userTry = function () {
  if (flag<1) {
    let request
    request = prompt("Попытки закончились, хотите сыграть еще?", "Да или Нет");
    if (request == "Да") {
      
      flag = 10;
      return gameBot();
    }   

  } else if (flag>=1) {
    gameInside()
  }

}

const gameBot = function () { 
  numberRandom(); 
  alert("Угадай число от 1 до 100.");
  gameInside()
  
}  

function gameInside(){
  
  
  let numberrandom = numberRandom();
  console.log(numberrandom);
  let usernumber = userNumber();
  
  if (usernumber === null) {
    alert("Игра окончена!");

  } else if (usernumber == numberrandom) {
    let request
    request = prompt("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?", "Да или Нет");
    if (request === "Да") {
      gameBot();
    } else if (request !== "Да"); { 
      alert("Игра окончена!");
      
    }


  } else if (usernumber > numberrandom) {
    flag--
    alert("Загаданное число меньше. Попробуй еще! Количество попыток: ", flag);
    userTry();
    
  } else if (usernumber < numberrandom) {
    flag--
    alert("Загаданное число больше. Попробуй еще! Количество попыток: " + flag);
    userTry();
    
  }
  

}  

gameBot()






