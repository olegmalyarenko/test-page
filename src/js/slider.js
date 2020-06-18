const buttonOne = document.getElementById('button1');
const buttonTwo = document.getElementById('button2');
const buttonThree = document.getElementById('button3');
const inputs = document.querySelectorAll('.inputs');
const slider = document.querySelector('.slider');


buttonOne.addEventListener('click', () => {
    inputs.forEach(el => {
        el.checked = false;
    });
    buttonOne.checked = true;
    slider.style.background = "url('images/a8b78e2c3b86ebbe67f934d9085fdc94.png') no-repeat center";
    slider.style.backgroundSize = "cover";


})

buttonTwo.addEventListener('click', () => {
    inputs.forEach(el => {
        el.checked = false;
    });
    buttonTwo.checked = true;
    slider.style.background = "url('images/4da1f49923358f8a595c9d796fb9f995.png') no-repeat center";
    slider.style.backgroundSize = "cover";
   

})

buttonThree.addEventListener('click', () => {
    inputs.forEach(el => {
        el.checked = false;
    });
    buttonThree.checked = true;
    slider.style.background = "url('images/ec063567d630439f5eeee95840f6dcd0.png') no-repeat center";
    slider.style.backgroundSize = "cover";
})