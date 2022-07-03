// // SWITCH
// // Задача написать скрипт выбора стоимости отеля по количеству звёзд
// // 1 = 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// // если в переменной stars что-то кроме чисел 1-5, выводим строку "Такого к-ва звёзд нет"
// const stars = 1;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   price = "Такого количества звёзд нет";
// }

// // При проверке именно на равенство лучше использовать методологию SWITCH
// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 70;
//     break;
//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log("Такого количества звёзд нет");
// }

// console.log(price);

// // ЦИКЛЫ - і-итерация; условие; пост-выражение - true / false. False - прекращает цикл

// for (let i = -100; i <= 200; i *= -2) {
//   console.log(i);
// }

// // Задача
// // 1. Сделать переменные
// const minSalary = 6500;
// const maxSalary = 11500;
// const employees = 18;
// let totalSalary = 0;

// // 2. Перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//   // Сгенерировать случайную зарплату
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );

//   console.log(`ЗП работника номер ${i} = ${salary}`);

//   // 4. Прибавить к тотал
//   totalSalary += salary;
// }

// // 5. Лог
// console.log("total salary: ", totalSalary);

// // Задача 1
// const answer = prompt("Яка офіційна назва в JavaScript?");

// if (answer.toLowerCase === "ECMAScript".toLowerCase) {
//   alert("Правильно!");
// } else {
//   alert("Це ECMAScript!");
// }

// // Задача 2 - Відображення часу

// const hours = 10;
// const minutes = 10;
// let time = "";

// if (hours > 0) {
//   time += `${hours} г. `;
// }
// if (minutes > 0) {
//   time += `${minutes} хв.`;
// }

// time ? console.log(time) : console.log("Немає часу");

// // ЗАДАЧА 3 - РОЗГАЛУЖЕННЯ

// const userInput = prompt("Введіть число");
// const parseAnswer = Number(userInput);

// if (parseAnswer > 0) {
//   console.log("Це позитивне число");
// } else if (parseAnswer === 0) {
//   console.log("Це нуль");
// } else if (parseAnswer < 0) {
//   console.log("Це негативне число");
// } else {
//   console.log("Це не число");
// }

// // ЗАДАЧА 4 - ФОРМАТУВАННЯ ПОСИЛАННЯ

// let link = "https://my-site.com/about";

// link.endsWith("/") ? console.log(`${link}`) : console.log(`${link}/`);

// // ЗАДАЧА 5

// /**** Форматування посилання (includes та логічне «І») ****/

// /*
// Умова завдання:
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
// Якщо ні, додай у кінець значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site".
// */

// let link = "https://my-site.com/about/";

// !link.endsWith("/") && link.includes("my-site")
//   ? console.log(`${link}/`)
//   : console.log(link);

// // if (!link.endsWith("/") && link.includes("my-site")) {
// //   console.log(`${link}/`);
// // } else {
// //   console.log(link);
// // }

// // Задача 6
// /**** if...else та логічні оператори ****/

// /*
// Умова завдання:
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.
// Якщо значення змінної hours:
// - менше 17, виводь рядок "Pending"
// - більше або рівне 17 і менше або дорівнює 24, виводь рядок "Expires"
// - більше 24, виводи рядок "Overdue"
// */

// const hours = 245;

// if (hours < 17) {
//   console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//   console.log("Expires");
// } else {
//   console.log("Overdue");
// }

// // ЗАДАЧА 7
// /**** Дедлайн здачі проекту (if...else) ****/

// /*
// Умова завдання:
// Напиши скрипт для відображення часу дедлайн здачі проекту. Використовуй конструкцію if...else.
// - Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// - Якщо до дедлайну 1 день - виведи рядок "Завтра"
// - Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// - Якщо до дедлайну 3+ днів - виведи рядок "Дата в майбутньому"
// */

// const daysUntilDeadline = 2;

// if (daysUntilDeadline === 0) {
//   console.log("Сьогодні");
// } else if (Math.ceil(daysUntilDeadline) === 1) {
//   console.log("Завтра");
// } else if (Math.ceil(daysUntilDeadline) === 2) {
//   console.log("Післязавтра");
// } else {
//   console.log("Дата в майбутньому");
// }

// // Задача 8
// /**** Дедлайн здачі проекта (switch) ****/

// /*
// Умова завдання:
// Напиши скрипт для відображення часу дедлайн здачі проекту. Використовуй конструкцію switch.
// - Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// - Якщо до дедлайну 1 день - виведи рядок "Завтра"
// - Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// - Якщо до дедлайну 3+ днів - виведи рядок "Дата в майбутньому"
// */

// const daysUntilDeadline = 3;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сьогодні");
//     break;
//   case 1:
//     console.log("Завтра");
//     break;
//   case 2:
//     console.log("Післязавтра");
//     break;
//   default:
//     console.log("Дата в майбутньому");
// }

// // ЗАДАЧА 9 - ЦИКЛ for

// const max = 154;
// const min = 26;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
//   continue;
// }
