let one = document.querySelector('.one');
let two = document.querySelector('.two');

console.log(one, two)

one.addEventListener('click', function() {
    setTimeout (function() {

        two.remove();
    } , 2000)

}
)



function abc() {
    return 2 + 3
    
}

let result = abc()
console.log (result)