// VARS

// const age = 10;
// const totalPrice = 210.64;
// const userName = "FinePoline";
// const massage = "Приветик";
// const isOpen = true;
// const shouldConfirm = false;

// console.log(5);
// console.log("Ціна", totalPrice, "грн");

// const type = typeof true;

// console.log(type);

// INPUTE

// console.log("Before");
// alert("Hello MOTO");
// console.log("After");

// const shouldRenew = confirm("Желаете продлить подписку?");
// console.log(shouldRenew);
// let quantity = prompt("Сколько Вам лет?");
// quantity = Number(quantity);
// console.log(quantity, "лет");
// console.log(typeof quantity);

// NUMBER

// Целые числа
let elementWidth = "50px";
// const result = Number.parseInt(elementWidth);
// console.log(result);
elementWidth = Number.parseInt(elementWidth);
console.log("elementWidth:", elementWidth);
//  или матрёшка
console.log("elementWidth:", Number.parseInt(elementWidth));

// Числа с запятой
let elementHeight = "198.25px";
elementHeight = Number.parseFloat(elementHeight);
console.log("elementHeight:", elementHeight);
//  или матрёшка
console.log("elementHeight:", Number.parseFloat(elementHeight));

// Метод число.toFixed(digits) - 2 цифры после запятой, в форме числа
let salary = 1300.16472;
salary = salary.toFixed(2);
salary = Number(salary);
console.log(salary);
//  или матрёшка
console.log(Number(salary.toFixed(2)));

// Приведение (преобразование) к числу с Number(value)
let quantity = "30";
let value = "Эту строку невозможно привести к числу";
console.log(Number(quantity));
console.log(Number(value));

// Объект Math
console.log(Math);
console.log(Math.PI);

// Возведение в степень
const base = 3;
const power = 5;
console.log(Math.pow(base, power));
// или
console.log(base ** power);

// ЗАДАЧА
// Напиши скрипт, который просит пользователя ввести число и степень,
//     возводит число в эту степень и выводит результат в консоль

// // АЛГОРИТМ РЕШЕНИЯ
// // 1. попросить ввести число и сохранить в переменную
// let bases = prompt("Введите, пожалуйста, число.");
// bases = Number.parseFloat(bases);
// console.log(bases);

// // 2. попросить ввести степень и сохранить в переменную
// let powers = prompt(
//   "Введите, пожалуйста, степень, в которую вы желаете возвести число."
// );
// powers = Number.parseFloat(powers);
// console.log(powers);

// // 3. возвести введенные данные в степень и вывести
// console.log(bases ** powers);

// Генератор случайных чисел
console.log(Math.random());

const max = 100;
const min = 40;
const result = Math.random() * (max - min) + min;
console.log(Math.round(result));
console.log(Number(result.toFixed(2)));
