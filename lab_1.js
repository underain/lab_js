// Задание 1
/*
const myName = "Влад";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Никита Михайлович";
const reasonText = "хочу создавать сайты и веб-приложения";
const numberOfMonth = 3;

const text = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.

Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;

console.log(text);

// Задание 2
let myInfoText = text;

myInfoText = myInfoText.replaceAll("JavaScript", "JAVASCRIPT").toUpperCase();

console.log(myInfoText);

console.log("Длина строки:", myInfoText.length);

console.log("Первый символ:", myInfoText[0]);

console.log("Последний символ:", myInfoText[myInfoText.length - 1]);

// Задание 3
let userName = prompt("Как вас зовут?");

userName = userName.trim().toLowerCase();

alert(`Вас зовут ${userName}`);

// Задание 4
let userAge = prompt("Сколько вам лет?");

userAge = Number(userAge.trim());

alert(`Вас зовут ${userName} и вам ${userAge} лет`);
// Задание 5
let userString = prompt("Введите текст для обрезки").trim();
let startSliceIndex = Number(
  prompt("Введите индекс, с которого нужно начать обрезку строки")
);
let endSliceIndex = Number(
  prompt("Введите индекс, которым нужно закончить обрезку строки")
);

let slicedString = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${slicedString}`);

// Задание 6
let userText = prompt("Введите текст").trim();
let wordFromText = prompt("Введите слово из текста").trim();

let indexOfWord = userText.indexOf(wordFromText);

let resultText = userText.slice(0, indexOfWord);

alert(`Результат: ${resultText}`);
*/
