const burger=document.querySelector('.burger-nav')
const menu=document.querySelector('header nav ul');
burger.addEventListener('click',()=>{
    menu.classList.toggle('open');
});