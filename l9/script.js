// // 1. Напишите функцию fill, которая заполняет новый массив предоставленным значением.



// function fill(amount, item) {
//   let result = [];

//   for(let i=0; i < amount; i++){
//     result.push(item);
//   }
//   return result
// }



// function fill() {
//   let result = [];

//   result.fill(5,"hello")
//   return result
// }



// 2. Напишите функцию Compact, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

 
// let arr = [0, 1, false, 2, undefined, '', 3, null];
// let compactArray = compact(arr)
// console.log(compactArray) 

// function compact(array) {
//   let result = array.filter(function(item) {
//     return item > 0
//   })
//   return result
// }


// 3. Напишите функцию мультипликатор ( умножатель ), которая принимает параметром массив и множитель, и возвращает новый массив, элементы которого умножены на переданный в параметрах множитель.


// let array = [10, 20, 30, 40, 50];
// let multiArray = multiplicator(array, 5);
// console.log(multiArray) // ==> [50, 100, 150, 200, 250]

// function multiplicator(array, mult) {
//   let result = array.map(function(item)  {
//     return item * +mult
//   })
//   return result
// }

// 4. Напишите функцию alphabet которая принимает в себя массив разрозненных букв, сортирует 
// их по порядку и выводит в консоль, так же в консоль выводится число обозначающие 
// сколько не хватает букв для полного алфавита

let ruAlphabet = 33;
let engAlphabet = 26;
 
 
let array = ['q', 'z', 'a', 'e', 'f', 't', 'b', 's', 'm', 'j', 'y', 'k', 'i', 'l', 'x', 'o'];
alphabet(array, engAlphabet); // ==> ['a', 'b', 'c', 'd'.....] 10 букв не хватает до оригинального алфавита

function alphabet(array, engAlphabet) {
  console.log(array.sort())
  console.log(lang - array.length);
}