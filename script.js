'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');
console.log(btnOpenModel);

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModel = function(){
    console.log("Button Clicked");
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
}

for(let i = 0; i < btnOpenModel.length; i++)
{
    btnOpenModel[i].addEventListener('click', openModel);
}

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function(e){
    console.log(e);
    if(e.key == 'Escape' && !modal.classList.contains('hidden')){
        closeModal();   
    }
});