document.addEventListener('DOMContentLoaded', function() {
    const modalButtons = document.querySelector('.submit__button');
    const  overlay      = document.querySelector('#overlay-modal');
    const  closeButtons = document.querySelector('.js-modal-close');
    
    
    modalButtons.addEventListener('click', function(e) {
          
          e.preventDefault();
          alert('Заявка отправлена!');
          const modalElem = document.querySelector('.modal[data-modal="1"]');
          
          modalElem.classList.add('active');
          overlay.classList.add('active');
       }); // end click
   
 }); // end ready