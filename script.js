const burger = document.querySelector('.burger');

const navigation = document.querySelector('nav');

const lien = document.querySelector('a');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    navigation.classList.toggle('active'); 
    lien.classList.toggle('active');
    
});