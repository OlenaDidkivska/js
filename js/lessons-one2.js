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

// const hours = 0;
// const minutes = 2;

// if (hours === 0 && minutes === 0) {
//   console.log("Немає часу");
// } else if (minutes === 0) {
//   console.log(`${hours} г.`);
// } else if (hours === 0) {
//   console.log(`${minutes} хв.`);
// } else {
//   console.log(`${hours} г. ${minutes} хв.`);
// }
