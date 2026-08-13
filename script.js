let logo = document.querySelector(".logo");
let redcolor = true;

setInterval(() => {
    if(redcolor){
        logo.style.color = "#f00";
        redcolor = false;
    }else{
        logo.style.color = "#0f0";
        redcolor = true;
    }
} , 150)