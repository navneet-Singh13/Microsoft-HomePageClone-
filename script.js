const menubtn = document.querySelector('.menu-btn') ; 

const mainmenu = document.querySelector('.main-menu')
menubtn.addEventListener('click' , function(e){ 
    e.preventDefault(); 
    mainmenu.classList.toggle('show'); 
    console.log( mainmenu) ; 
})
