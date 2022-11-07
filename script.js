const burger = document.querySelector('.burger');

const navigation = document.querySelector('nav');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    navigation.classList.toggle('active')
});





