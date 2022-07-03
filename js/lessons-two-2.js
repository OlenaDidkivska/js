// // написать функцию calculateTotalPrice (items)
// //  которая принимает массив цен (чисел) и возвращает их сумму

// const calculateTotalPrice = function (items) {
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return `Сумма чисел: ${total}`;
// };

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

// // напиши функцию logItems(items) для перебора и логирования массива

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
// logItems([1, 2, 3, 4, 5]);
// logItems(["клавиатура", "наушники", "часы"]);

// // Напиши функцию findLogin(allLogins, login) для поиска логина
// // Если логина нет, вывести сообщение "Пользователь [логин] не найден"
// // Если нашли логин, вывести сообщение "Пользователь [логин] найден"

// const logins = ["m4ngoDoge", "k1widab3st", "poli1scute", "aj4xth3n4n"];

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, "aj4xth3n4n"));
// console.log(findLogin(logins, "avocad3r"));
// console.log(findLogin(logins, "k1widab3st"));
// console.log(findLogin(logins, "poli1scute"));

// // Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве.
// // * при условии что числа уникальные (не повторяются)

// const findSmallesNumber = function (numbers) {
//   let smallesNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallesNumber) {
//       smallesNumber = number;
//     }
//   }
//   return smallesNumber;
// };

// console.log(findSmallesNumber([3, 6, 12, -2, 15]));
// console.log(findSmallesNumber([100, 54, 8, 12, 47]));
// console.log(findSmallesNumber([7, 21, 84, 15, 4]));

// /* Напиши функцию changeCase(string) которое заменяет регистр
//  * каждого смвола в строке на противоположный.
//  * Например, если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT"
//  */

// const changeCase = function (string) {
//   const letters = string.split("");
//   let invertedString = "";
//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();
//     invertedString += isInLowerCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }
//   return invertedString;
// };

// console.log(changeCase("qweRTY"));
// console.log(changeCase("mAnGo"));
// console.log(changeCase("ElEnA"));

// /* Напиши функцию slagify(string) которая получает строку и возвращает
//  * URL-slug
//  * строка состоит только из букв и пробелов
//  */

// const slagify = function (string) {
//   return string.toLowerCase().split(" ").join("-");
// };

// console.log(slagify("Top 10 benefits of React framework"));
// console.log(slagify("Azure Statics Web Apps are Awesome"));
// console.log(slagify("Technical writing tips for non-native English speakers"));

// ARGUMENTS
// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// //Вначале может быть произвольноое количество аргументов
// // Например, const fn = function (a, b, c, ...args) {

// const fn = function (a, ...args) {
//   console.log(`${a}: `);
//   console.log(args);
// };

// fn("hello", 1, 2, 3);
// fn("hi", 1, 2, 3, 4, 5);
// fn("aloha", 1, 2, 3, 4, 5, 6, 7);

// /** Напиши функцию add для сложения произвольного количества аргументов (чисел)
//  * Оперрация ...(rest)
//  */

// const add = function (...args) {
//   console.log(args);

//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

// /**Напиши функцию filterNumbers(array [,number1, ...]) которая:
//  * -первым аргументом принимает массив чисел
//  * - после первого аргумента может быть произвольное количество других аргументов которые будут числами
//  * - функция должна вернуть новый массив, в котором будут только те аргументы, - начиная со второго
//  * для которых есть аналог в оригинальном массиве
//  */

// const filterNumbers = function (numbers, ...args) {
//   console.log(numbers, args);
//   let array = [];
//   for (const arg of args) {
//     if (numbers.includes(arg)) {
//       array.push(arg);
//     }
//   }
//   return array;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

// function getExtremeElements(array) {
//   // Change code below this line
//   let elements = [];
//   elements.push(array[0], array[array.length - 1]);
//   return elements;
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const messageLength = message.split(" ").length;
//   let price = messageLength * pricePerWord;

//   return price;
//   // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

//   return firstArray.concat(secondArray).slice(0, maxLength);

//   // Change code above this line
// }

// function findLongestWord(string) {
//   // Change code below this line
//   const stringArray = string.split(" ");
//   let longestWord = stringArray[0];

//   for (let i = 0; i < stringArray.length; i += 1) {
//     if (stringArray[i].length > longestWord.length) {
//       longestWord = stringArray[i];
//     }
//   }
//   return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function filterArray(numbers, value) {
//   // Change code below this line
//   let array = [];
//   for (const number of numbers) {
//     if (number > value) {
//       array.push(number);
//     }
//     return array;
//     // Change code above this line
//   }
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let numbers = [];
//   for (const element of array1) {
//     if (array2.includes(element)) {
//       numbers.push(element);
//     }
//   }
//   return numbers;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// function includes(array, value) {
//   // Change code below this line
//   for (const element of array) {
//     if (element == value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// );
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));

// function switchOfStuff(val) {
//   let answer = "";
//   // Змініть код лише під цим рядком
//   switch (val) {
//     case a:
//       answer = "apple";
//       break;
//     case b:
//       answer = "bird";
//       break;
//     case c:
//       answer = "cat";
//       break;
//     default:
//       answer = "stuff";
//       break;
//   }

//   // Змініть код лише над цим рядком
//   return answer;
// }

// switchOfStuff(1);

// * Examples 1
function calcBMI(weight, height) {
  // 1. змінити коми на крапки
  const parseWeight = weight.replace(",", ".");
  const parseHeight = height.replace(",", ".");
  // 2. Привести до числа
  const weightNum = Number(parseWeight);
  const heightNum = Number(parseHeight);
  // 3.Перевірка на число
  if (isNaN(weightNum) || isNaN(heightNum)) return "Введіть число";
  // 4. Провести ділення
  const calc = (weightNum / Math.pow(heightNum, 2)).toFixed(1);
  return Number(calc);
}

const bmi = calcBMI("78.3", "1,69");
console.log(bmi);
