"use strict";
let maxNumber = 100
let flag = 10


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const numberRandom = function (max) {
  return Math.floor(Math.random() * (maxNumber + 1))
}


const gameBot = function () { 
  numberRandom();
  let numberrandom = numberRandom();
  alert("Угадай число от 1 до 100.");
  
  const start = function (){
    
    
    let number
    do {
      number = prompt(" Введи число.")
      if (!isNumber(number) === false)
        


      if (number === null) {
        alert("Игра окончена!")
        break
      }
    }

    while (!isNumber(number))    

      if (number == numberrandom) {
      let request
      request = prompt("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?", "Да или Нет");
      if (request === "Да") {
        
        gameBot();
      } else if (request !== "Да"); { 
        alert("Игра окончена!");
        
      }
    
    } else if (flag <= 1) {
      let request
      request = confirm("Попытки закончились, хотите сыграть еще?", "Да или Нет");
      if (request !== false) {

        flag = 10;                     
        gameBot();
      } 


    } else if (number > numberrandom) {
      flag--
      number=alert("Загаданное число меньше. Попробуй еще! Количество попыток: "+ flag);
      start()
      
      
    } else if (number < numberrandom) {
      flag--
      number=alert("Загаданное число больше. Попробуй еще! Количество попыток: "+ flag);
      start()   
    } 
    
  }
start() 
}  


gameBot()


