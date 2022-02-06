"use strict";
let maxNumber = 100
let flag = 3


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const numRandom = function (max) {
  return Math.floor(Math.random() * (max + 1))
}


const gameBot = function () {

  let numberRandom = numRandom(maxNumber);
  alert("Угадай число от 1 до " + maxNumber);
  console.log(numberRandom)
  const start = function () {


    let number
    do {
      number = prompt(" Введи число.")

      if (number === null) {
        let an = alert("Игра окончена!");
        if (an === undefined) 
        return          

      }

    }

    while (!isNumber(number))

    if (number == numberRandom) {
      let request
      request = prompt("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?", "Да или Нет");
      if (request === "Да") {

        gameBot();
      } else if (request !== "Да"); {        
          let an = alert("Игра окончена!");
          if (an === undefined)
            return

        

      }

    } else if (flag <= 1) {
      let request
      request = confirm("Попытки закончились, хотите сыграть еще?", "Да или Нет");
      if (request !== false) {

        flag = 10;
        gameBot();
      }


    } else if (number > numberRandom) {
      flag--
      number = alert("Загаданное число меньше. Попробуй еще! Количество попыток: " + flag);
      start()


    } else if (number < numberRandom) {
      flag--
      number = alert("Загаданное число больше. Попробуй еще! Количество попыток: " + flag);
      start()
    }

  }
  start()
}


gameBot()


