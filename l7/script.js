// let one = document.querySelector('.one')
// setTimeout(function() { 
//   one.classList.add('active')
  
//  }, 2000);
//  setTimeout(function() { 
//   one.classList.remove('active')
  
//  }, 3000);




let list = document.querySelector('.navigation').children;

console.log(list)
for  (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function(){
    if (list[i].classList.contains('active')){
      return
    } else {
      for  (let i = 0; i < list.length; i++){
        list[i].classList.remove('active')
      }
      list[i].classList.add('active')
    }
  } )
}



 