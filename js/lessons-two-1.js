// // МАССИВЫ
// const friends = ["Polina", "Angelina", "Varvara"];
// console.table(friends);

// // Examples 1

// const genres = ["Jazz", "Blues"];
// genres.push("Rock&Roll");
// const lastElement = genres.length - 1;
// console.log(genres[lastElement]);
// const firstElement = genres.shift();
// console.log(firstElement);
// genres.unshift("Country", "Reggy");
// console.log(genres);
// genres.splice(0, 1, "Pop", "Dance");
// console.log(genres);

// // Exampes 2
// const values = "8 11";
// const arrNums = values.split(" ");
// console.log(arrNums);
// const sq = arrNums[0] * arrNums[1];
// console.log(sq);

// // Examples 3
// const fruits = ["apple", "orange", "banana", "lemon", "berry"];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// // Examples 4
// const names = "Jacob,William,Solomon,Artemis";
// const phones = "1111111,2222222,3333333,4444444";

// const namesArray = names.split(",");
// const phonesArray = phones.split(",");

// for (let i = 0; i < namesArray.length; i += 1) {
//   console.log(`${namesArray[i]}: ${phonesArray[i]}`);
// }

// // Examples 5
// const str = "Welcome to the future";
// const strArray = str.split(" ");
// // strArray.shift();
// // strArray.pop();
// // console.log(strArray.slice(1, -1).join(" "));

// // console.log(strArray);
// // console.log(strArray.join(" "));

// // Examples 6
// const str = "Welcome to the future";
// // const strArray = str.split(" ");
// let revercedStr = "";
// for (let i = str.length - 1; i >= 0; i -= 1) {
//   console.log(str[i]);
//   revercedStr += str[i];
// }

// // console.log(revercedStr);
// let secondVariant = str.split("").reverse().join("");
// console.log(secondVariant);

// Examples 7
const numbers = [33, 17, 94, 1, 23, 37];
let min = numbers[0];

for (const number of numbers) {
  if (number < min) {
    min = number;
  }
}
console.log(min);
