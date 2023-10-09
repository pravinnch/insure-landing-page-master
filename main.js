 menu= document.querySelector(".menu");
 hamburger= document.querySelector(".hamburger");
 navright= document.querySelector(".nav-right");
closeImg= document.querySelector(".close")
openImg= document.querySelector(".open")

    hamburger.addEventListener('click', ()=>{

    navright.classList.toggle("show")
    closeImg.classList.toggle("close")
    openImg.classList.toggle("open")
    openImg.classList.toggle("opacity")
    
})