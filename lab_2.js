/*
// Задание 1
const EXISTING_LOGIN = "the_best_user";
const EXISTING_PASSWORD = "12345678";

const userLogin = prompt("Введите логин").trim();
const userPassword = prompt("Введите пароль").trim();

if (userLogin === EXISTING_LOGIN && userPassword === EXISTING_PASSWORD) {
  alert(`Добро пожаловать, ${userLogin}!`);
} else {
  alert("Логин и (или) Пароль введены неверно");
}
// Задание 2
let correctAnswers = 0;
let wrongAnswers = 0;

if (Number(prompt("Сколько будет 2 + 2?")) === 4) correctAnswers++;
else wrongAnswers++;

if (Number(prompt("Сколько будет 2 * 2?")) === 4) correctAnswers++;
else wrongAnswers++;

if (Number(prompt("У Дени было 5 блоков. 3 съел, 1 отдал. Сколько осталось?")) === 1)
  correctAnswers++;
else wrongAnswers++;

if (Number(prompt("У Маши было 10 конфет. В итоге сколько?")) === 12)
  correctAnswers++;
else wrongAnswers++;

if (Number(prompt("Сколько будет 2 + 2 * 2?")) === 6)
  correctAnswers++;
else wrongAnswers++;

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${wrongAnswers}`);
// Задание 3
alert(confirm("JavaScript появился в 1995 году?") ? "Верно" : "Неверно");
alert(
  confirm("Спецификация JavaScript называется ECMAScript?")
    ? "Верно"
    : "Неверно"
);
alert(confirm("JavaScript был создан за 1 месяц?") ? "Верно" : "Неверно");
// Задание 4
let i = 0;

while (i < 3) {
  let newStudent = prompt("Введите имя нового студента!").trim();
  if (newStudent) {
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  i++;
}

let j = 0;

do {
  let newStudent = prompt("Введите имя нового студента!").trim();
  if (newStudent) {
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  j++;
} while (j < 3);
// Задание 5
let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

alert(sum); 
// Задание 6
let clientName = "Игорь";
let totalSpent = 110;
let todaySpent = 25;

let discount = 0;

if (totalSpent >= 500) discount = 0.3;
else if (totalSpent >= 300) discount = 0.2;
else if (totalSpent >= 100) discount = 0.1;

let discountedAmount = todaySpent * (1 - discount);
totalSpent += discountedAmount;

alert(`Скидка: ${discount * 100}%`);
alert(`Итоговая сумма покупок: ${totalSpent}$`);
// Задание 7
const name = prompt("Введите имя клиента").trim();
const today = Number(prompt("Сколько клиент потратил сегодня?"));
const total = Number(prompt("Сколько клиент потратил за все время?"));

if (isNaN(today) || isNaN(total)) {
  alert("Ошибка: введены некорректные данные");
} else {
  let discount = 0;

  if (total >= 500) discount = 0.3;
  else if (total >= 300) discount = 0.2;
  else if (total >= 100) discount = 0.1;

  const finalSum = total + today * (1 - discount);
  alert(`Клиент ${name}, итоговая сумма покупок: ${finalSum}$`);
}
*/
