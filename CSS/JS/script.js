
function taskOne() {
  console.log("Milica Dujaković")
}

function taskTwo(x) {
  var x = "Milica Dujaković"
  console.log(x)
}

function taskThree(x, y) {
  var x = 21
  var y = 3
  console.log(x + y, x - y, x * y, x / y, x % y)
}

function taskFour(arrey) {
  arrey = [2, 5, 3, 8, 6]
  var sum = 0
  for (i = 0; i < 5; i++) {
    sum = sum + arrey[i]
  }
  console.log("Zbir brojeva u nizu je " + sum)
}

function taskFive(x, y) {
  var x = "Milica"
  var y = "Dujaković"
  console.log(x + " " + y)
}

function taskSix() {
  var weekday = 3
  switch (weekday) {
    case 1:
      console.log("Monday")
      break;
    case 2:
      console.log("Tursday")
      break;
    case 3:
      console.log("Wednesday")
      break;
    case 4:
      console.log("Thursday")
      break;
    case 5:
      console.log("Friday")
      break;
    default:
      console.log("Error")
  }
}

function taskSeven() {
  var num = 13
  if (num % 2 == 0) {
    console.log("Broj je paran.")
  } else if (num % 2 >= 0) {
    console.log("Broj je neparan")
  }
}

function taskEight() {
  for (let i = 4; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")

    } else if (i % 3 === 0) {
      console.log("Fizz");

    } else if (i % 5 === 0) {
      a
      console.log("Buzz");

    } else {
      console.log(i);
    }
  }
}

function taskNine() {
  var sec = 90000
  var days = Math.floor(sec / (60 * 60 * 24))
  console.log(days)
  var hours = Math.floor(sec % (60 * 60 * 24) / 3600)
  console.log(hours)
  var minutes = Math.floor((sec % 3600) / 60)
  console.log(minutes)
  var seconds = Math.floor(sec % 60)
  console.log = (seconds)
}









