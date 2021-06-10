var bar = document.querySelector(".fa-bars"), 
    nav = document.querySelector(".c");

function func(){

    nav.classList.toggle("left")

    if(bar.classList.contains("fa-bars")){
        bar.classList.replace("fa-bars" , "fa-times")
    }
    else if(bar.classList.contains("fa-times")){
        bar.classList.replace("fa-times" , "fa-bars")
        
    }
}