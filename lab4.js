// 1 задание
/*
const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

function giveParcel() {
  const name = peopleWaiting.shift();
  alert(
    `${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`,
  );
}

function leaveQueueWithoutParcel() {
  const name = peopleWaiting.pop();
  alert(`${name} не получил(а) посылку и ушел(ла) из очереди`);
}

giveParcel();
giveParcel();

giveParcel();

while (peopleWaiting.length > 0) {
  leaveQueueWithoutParcel();
}
// Задание 2
function getSumOfSequence(number) {
  const arr = [];

  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }

  return arr[0] + arr[arr.length - 1];
}

console.log(getSumOfSequence(5));

// Задание 3
const coffees = ["Latte", "Cappuccino", "Americano"];

const coffeeName = prompt("Поиск кофе по названию").trim();
const index = coffees.findIndex(
  (coffee) => coffee.toLowerCase() === coffeeName.toLowerCase(),
);

if (index !== -1) {
  alert(
    `Держите ваш любимый кофе ${coffees[index]}. Он ${index + 1}-й по популярности в нашей кофейне.`,
  );
} else {
  alert("К сожалению, такого вида кофе нет в наличии");
}

// Задание 4
const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((price) => price + 0.5);

coffees.forEach((coffee, index) => {
  alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`);
});

// Задание 5
const clientsEstimations = [];

function askClientToGiveEstimation() {
  const estimation = Number(
    prompt("Как вы оцениваете нашу кофейню от 1 до 10?"),
  );

  if (estimation >= 1 && estimation <= 10) {
    clientsEstimations.push(estimation);
  }
}

for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter((e) => e > 5);
const notGoodEstimations = clientsEstimations.filter((e) => e <= 5);

alert(`
Всего оценок: ${clientsEstimations.length}
Положительных оценок: ${goodEstimations.length}
Отрицательных оценок: ${notGoodEstimations.length}
`);

// Задание 6
const numbers = [10, 4, 100, -5, 54, 2];

let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum1 += numbers[i] ** 3;
}

let sum2 = 0;
for (let num of numbers) {
  sum2 += num ** 3;
}

let sum3 = 0;
numbers.forEach((num) => {
  sum3 += num ** 3;
});

const sum4 = numbers.reduce((acc, num) => acc + num ** 3, 0);

console.log(sum1, sum2, sum3, sum4);
*/
