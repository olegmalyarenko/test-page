const buttonOne = document.getElementById('button1');
const buttonTwo = document.getElementById('button2');
const buttonThree = document.getElementById('button3');
const inputs = document.querySelectorAll('.inputs');
console.log(inputs);

buttonOne.addEventListener('click', () => {
    inputs.forEach(el => {
        el.checked = false;
    });
    buttonOne.checked = true;
    


})

buttonTwo.addEventListener('click', () => {
    inputs.forEach(el => {
        el.checked = false;
    });
    buttonTwo.checked = true;
   

})

buttonThree.addEventListener('click', () => {
    inputs.forEach(el => {
        el.checked = false;
    });
    buttonThree.checked = true;
    

})