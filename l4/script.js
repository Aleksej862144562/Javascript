// // console.log( null || 2 || undefined ); // 2 
// // console.log( alert(1) || 2 || alert(3) ); //  2 - alert  возвращает undefined.
// // console.log( 1 && null && 2 ); // null - ложное значение.
// // console.log( alert(1) && alert(2) ); // undefined ( undefined && undefined);
// // console.log( null || 2 && 3 || 4 ); // 3 Приоритет оператора && выше, чем ||. ( null ||  3 || 4 )

// // //Функция ничего не возращает - ложное.


// // // //  Напишите условие if для проверки, что переменная age находится в диапазоне между  14 и 90 включительно. «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// // let age = 10;

// // if (age >= 14 && age <= 90){
// //   console.log('Правельный возраст')
// // } else { 
// //   console.log('not')
// // }



// // // // Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно. Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// let age = 20;

// if (!(age >= 14 && age <= 90)) - // в  скобки заносим  отрезание есть.



// // // // Какие из перечисленных ниже alert выполнятся?

// if (-1 || 0) { alert( 'first' )}; // -1 first
// if (-1 && 0) { alert( 'second' )}; // 0 - не выполниться
// if (null || -1 && 1) { alert( 'third' )}; // 1 выполниться

// // // // Проверка логина
// // // // Напишите код, который будет спрашивать логин с помощью prompt.
// // // // Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

let msg1 = prompt('Кто там?', '');
let msg2;
let correctPassword = 1234;


console.log(msg1);

if (msg1 === null  msg1 === '') {
  alert("ОТМЕНЕНО!!!");
} 

else if (msg1 === 'Admin') {
  msg2 = prompt('Password', '');

  if (msg2 === null  msg2 === '') {
    alert("ОТМЕНЕНО!!!");
  } 

  else if (+msg2 === correctPassword) {
    alert("HI MASTER ADMIN");
  } 

  else {
    alert("WRONG PASSWORD")
  }
} 

else {
  alert("I do not know you! ")
}

