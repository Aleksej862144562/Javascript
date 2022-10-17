
document.querySelector('button').addEventListener('click', function () {

  let input = document.querySelector('input');
  let inputText = input.value

  localStorage.setItem('input', inputText);

});






