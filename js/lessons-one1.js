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

// // NUMBER

// // Целые числа
// let elementWidth = "50px";
// // const result = Number.parseInt(elementWidth);
// // console.log(result);
// elementWidth = Number.parseInt(elementWidth);
// console.log("elementWidth:", elementWidth);
// //  или матрёшка
// console.log("elementWidth:", Number.parseInt(elementWidth));

// // Числа с запятой
// let elementHeight = "198.25px";
// elementHeight = Number.parseFloat(elementHeight);
// console.log("elementHeight:", elementHeight);
// //  или матрёшка
// console.log("elementHeight:", Number.parseFloat(elementHeight));

// // Метод число.toFixed(digits) - 2 цифры после запятой, в форме числа
// let salary = 1300.16472;
// salary = salary.toFixed(2);
// salary = Number(salary);
// console.log(salary);
// //  или матрёшка
// console.log(Number(salary.toFixed(2)));

// // Приведение (преобразование) к числу с Number(value)
// let quantity = "30";
// let value = "Эту строку невозможно привести к числу";
// console.log(Number(quantity));
// console.log(Number(value));

// // Объект Math
// console.log(Math);
// console.log(Math.PI);

// // Возведение в степень
// const base = 3;
// const power = 5;
// console.log(Math.pow(base, power));
// // или
// console.log(base ** power);

// // ЗАДАЧА
// // Напиши скрипт, который просит пользователя ввести число и степень,
// //     возводит число в эту степень и выводит результат в консоль

// // // АЛГОРИТМ РЕШЕНИЯ
// // // 1. попросить ввести число и сохранить в переменную
// // let bases = prompt("Введите, пожалуйста, число.");
// // bases = Number.parseFloat(bases);
// // console.log(bases);

// // // 2. попросить ввести степень и сохранить в переменную
// // let powers = prompt(
// //   "Введите, пожалуйста, степень, в которую вы желаете возвести число."
// // );
// // powers = Number.parseFloat(powers);
// // console.log(powers);

// // // 3. возвести введенные данные в степень и вывести
// // console.log(bases ** powers);

// // Генератор случайных чисел
// console.log(Math.random());

// const max = 100;
// const min = 40;
// const result = Math.random() * (max - min) + min;
// console.log(Math.round(result));
// console.log(Number(result.toFixed(2)));

// // STRINGS - СТРОКИ

// // Длина строки, свойсво length
// const massage = "В этой строке 26 символов.";
// console.log(massage.length);

// // Конкатенации строк
// const firstName = "Viktor";
// const lastName = "Pavlovich";
// const fullName = firstName + " " + lastName;

// console.log(fullName);

// // ЗАДАЧА
// // Написать скрипт, который выведет строку в формате:
// //  "Гость x y поселяется в z номер q"

// const room = 716;
// const type = "VIP";

// const welcomeMsg =
//   "Гость " + fullName + " поселяется в " + type + " номер " + room;
// console.log(welcomeMsg);

// // Шаблонные строки - ставим не '', а литерал ``
// const quantity = 10;
// const orderMsg = `Вы заказваете ${quantity} холодильников`;
// console.log(orderMsg);
// const welcomeMassage = `Гость ${fullName} поселяется в ${type} номер ${room}`;
// console.log(welcomeMassage);

// // Нормализация пользовательского ввода методом toLowerCase
// let brand = "Realme";
// const normalseBrand = brand.toLowerCase();
// console.log(normalseBrand);
// // название бренда
// const inDb = prompt("Выбери бренд");
// const normalseInDb = inDb.toLowerCase();
// console.log(normalseInDb);
// // введено в поиск

// // сделать нормализацию не с первой буквы. Строка начинается с 0.
// brand = "ReAlMe";
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// // Поиск в строке
// const blasckListedWord1 = "спам";
// const blasckListedWord2 = "распродажа";

// const string1 = "Привет, я принц Абдул, это не спам, предлагаю тебе миллион";
// const string2 = "Самая большая РАСПРОДАЖА этой недели, н епропустите!";
// const string3 = "Рекламная компания #fatLiveSmatter";

// console.log(string1.toLowerCase().includes(blasckListedWord1));
// console.log(string1.toLowerCase().includes(blasckListedWord2));

// console.log(string2.toLowerCase().includes(blasckListedWord1));
// console.log(string2.toLowerCase().includes(blasckListedWord2));

// console.log(string3.toLowerCase().includes(blasckListedWord1));
// console.log(string3.toLowerCase().includes(blasckListedWord2));

// // ОПЕРАТОРЫ СРАВНЕНИЯ
// console.log(5 > 10);
// console.log(15 > 10);

// // операнды приводятся к числу
// console.log(true < false);
// // true = 1
// // false = 0

// // Нестрогое равенство ==
// const isNotEqual = 1 == true;
// console.log(isNotEqual);

// // Строгое равенство
// const isEqual = 1 === true;
// console.log(isEqual);

// // LOGICAL OPERATORS

// // Приведение к булю - к false приводит всего 6 значений
// console.log(Boolean(0));
// // Оператор И (&&) - запинается на false, выдаёт в консоль то, на чём запнулось или последний операнд
// console.log(5 && 6 && 7 && "hello");
// console.log(5 && 6 && null && "hello");
// // Логическое ИЛИ (||) - запинается на true, выдаёт в консоль то, на чём запнулось или последний операнд
// console.log(false || null || 1 || 0);
// console.log(false || null || undefined || 0);
// // Логическое НЕ (!) - делает false > true, а true > false
// console.log(!5);
// console.log(!null);

// // SEGMENT
// // Поствлена задача проверить попадает ли определенное число в отрезок о обозначениями x1 и x2

// const x1 = 10;
// const x2 = 30;
// const number = 50;

// // Алгоритм:
// // 1. проверить вхождение до х1
// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
// // 2. после х2
// console.log(`Число ${number} попадает в отрезок от ${x2}?`, number > x2);
// // 3. от х1 до х2
// console.log(
//   `Число ${number} попадает в отрезок от ${x1} до ${x2}?`,
//   number > x1 && number < x2
// );
// // 4. до х1 или после х2
// console.log(
//   `Число ${number} попадает в отрезок до ${x1} или после ${x2}?`,
//   number < x1 || number > x2
// );

// // CHAT
// // Поставлена залдача написать скрипт для проверки пользователя на возможность открыть с ним чат.
// // Для этого он должен быть другом, онлайн, без режима не беспокоить

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("Можно открыть чат?", canOpenChat);

// // SUBSCRIPTION
// // Задача написать скрипт проверки подписки пользователя при доступе к контенту
// // Три типа подписки: free, pro, vip. Получить доступ могут пользователи pro и vip

// const sub = "pro";
// const canAccessContent = sub === "pro" || sub === "vip";
// console.log("Есть доступ к контенту?", canAccessContent);

// // BRANCHING - ветвление. Выполнение кода по условию. Код выполняется если в скобках if написаноое приводится к true

// // Оператор ветвления
// if (1) {
//   // тело
//   console.log("Hello");
// }

// if (null) {
//   console.log("Привет");
// }

// // Оператор ветвления if...else - если оператор if - false, то выполняется else
// if (5 > 30) {
//   console.log("x > y");
// } else {
//   console.log("x < y");
// }

// // Множественное ветвление
// const salary = 852;
// if (salary <= 500) {
//   console.log("Level 1");
// } else if (salary > 500 && salary <= 1000) {
//   console.log("Level 2");
// } else if (salary > 1000 && salary <= 2000) {
//   console.log("Level 3");
// } else {
//   console.log("Level 4");
// }

// // Тернарный оператор
// const balance = 1000;
// // let massage;

// // if (balance >= 0) {
// //   massage = "Positive balance";
// // } else {
// //   massage = "Negative balance";
// // }
// // это можно записать по такому принципу
// // const massage = условие? выражение1 : выражение2;

// const massage = balance >= 0 ? "Positive balance" : "Negative balance";

// console.log(massage);

// PURCHASE

// DISCOUNT
