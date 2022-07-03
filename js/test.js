// // на перший поверх - безкоштовно
// // 2-4 поверх - за кожний поверх 20грн
// // 5-7 поверх - за кожний поверз 30грн
// // більше 8 - 40грн

// // промпт - на якому поверсі проживає?
// // перевірка на НаН
// // Якщо коректно - месседж з вартістю підняття на поверх

// let input = Number(prompt("Введіть свій поверх"));
// console.log(input);

// if (isNaN(input)) {
//   alert("Ви ввели не число");
// }

// const freePrice = 0;
// const lowPrice = 20;
// const middlePrice = 30;
// const highPrice = 40;
// let totalPrice = 0;
// let message;

// if (input < 0) {
//   input *= -1;
//   console.log(input);
// }
// input = Math.ceil(input);
// for (let i = 0; i <= input; i += 1) {
//   if (input === 0 || input === 1) {
//     message = "Вартість безкоштовна";
//     break;
//   }

//   if (i >= 2 && i <= 4) {
//     totalPrice += lowPrice;
//   } else if (i >= 5 && i <= 7) {
//     totalPrice += middlePrice;
//   } else if (i >= 8) {
//     totalPrice += highPrice;
//   }
//   message = `Вартість підняття на ${input} поверх: ${totalPrice} грн`;
// }

// alert(message);
