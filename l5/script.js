// Напишите 2 цикла. Один будет считать от 10 до 0, другой от 0 до 10. 
// Напишите с помощью FOR и с помощью WHILE. 
// В конечном результате будет 4 цикла.
// ++ - Инкримет
// -- - дизинримент

// for (let i = 0; i <= 10; i++ ){
//     console.log(i);
// }

// for (let i = 10; i >= 0; i-- ){
//     console.log(i);
// }

// let i = 0; 
// while (i <= 10) {
//     console.log(i);
// 	i++;
    
// }

// let i = 10; 
// while (i >= 0) {
//     console.log(i);
// 	i--;
    
// }

// // Создайте массив разных данных простых типов ( примитивов), не менее 15 элементов в массиве. 
// // Создайте переменную с пустой строкой. Пройдитесь циклом FOR по массиву. 
// // В теле цикла ( там где мы пишем код {} ) сделайте проверку,
// // если элемент массива при переводе в булевое значение будет положительным, 
// // тогда запишите его в строку, разделяя её пробелом. 



// let arr = [1, 2, [2,3], 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let x = "";

// for (let i = 0; i < arr.length; i++){
//     if(arr[i]) { 
//     x += "" + arr[1] + " "  
// }
// }

// console.log(x);

// Создайте массив разных данных простых типов ( примитивов), 
// не менее 15 элементов в массиве. Создайте ещё одну переменную с 
// пустым массивом. Пройдитесь циклом FOR по массиву. В теле цикла 
// ( там где мы пишем код {} ) сделайте проверку, если 
// элемент массива при переводе в булевое значение будет
// положительным, тогда запишите его в  ранее созданную 
// переменную с пустым массивом. В результате получится массив 
// положительных элементов. Но я хочу чтобы массив был длиной максимум 
// в 3 элемента. 
// Урежьте массив до 3 элементов с помощью свойства length
// Урежьте массив до 3 элементов с помощью splice. ( Как удалить от 3-го до последнего элемента Вам придется самостоятельно найти в Gogle )


let arr = [1, 2, [2,3], 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let arr2 = [];

for (let i = 0; i < arr.length; i++){
    if(arr[i]) { 
    arr2.push(arr[i])
}
}

arr2.splice(3, arr.length - 3)
console.log(arr2)