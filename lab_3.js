/*
// Задание 1
function getName1(name) {
  return `Имя равно ${name}`;
}

const getName2 = function (name) {
  return `Имя равно ${name}`;
};

const getName3 = (name) => `Имя равно ${name}`;

console.log(getName1("Влад"));
console.log(getName2("Влад"));
console.log(getName3("Влад"));
// Задание 2
function getSumOfNumbers(number, type = "odd") {
  let sum = 0;

  for (let i = 0; i <= number; i++) {
    if (type === "even" && i % 2 === 0) sum += i;
    else if (type === "odd" && i % 2 !== 0) sum += i;
    else if (type === "") sum += i;
  }

  return sum;
}
// Задание 3
function getDivisorsCount(number = 1) {
  if (number <= 0 || !Number.isInteger(number)) {
    alert("number должен быть целым числом и больше нуля");
    return;
  }

  let count = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) count++;
  }

  return count;
}
// Задание 4
function checkQuestionAnswer(question, correctAnswer) {
  const userAnswer = prompt(question).trim().toLowerCase();
  const correct = correctAnswer.trim().toLowerCase();

  alert(userAnswer === correct ? "Ответ верный" : "Ответ неверный");
}

checkQuestionAnswer("Арбуз это фрукт или ягода?", "Ягода");
checkQuestionAnswer("Сколько в среднем зубов у взрослого человека?", "32");
checkQuestionAnswer("Как называется самая маленькая птица в мире?", "Колибри");
// Задание 5
function showSuccessMessage(message) {
  console.log(message);
}

function showErrorMessage(message) {
  console.error(message);
}

function checkTextOnErrorSymbol(
  text,
  errorSymbol,
  successCallback,
  errorCallback
) {
  const index = text.indexOf(errorSymbol);

  if (index !== -1) {
    errorCallback(
      `Найден запрещённый символ "${errorSymbol}" на позиции ${index}`
    );
  } else {
    successCallback("Запрещённые символы отсутствуют");
  }
}
*/
