var x = window.matchMedia("(max-width: 60rem)");


if(x.matches){
    let menubaricon = document.querySelector(".menu_icon");
    let menubarSide = document.querySelector("#left_div_11Coloum");
    let menuIcon2FoeClose = document.querySelector(".menu_icon_click");
    let leftDiv = document.querySelector("#left_div");
    let RIGHTDIVhoverFORcloseSIDEBAR = document.querySelector("#right_div");
    
    menubaricon.addEventListener("click",function(){
        menubarSide.style.display="block";
        menubaricon.style.display="none";
        menuIcon2FoeClose.style.display="block";
        leftDiv.style.height="80rem";
    })
    menuIcon2FoeClose.addEventListener("click",function(){
        menubarSide.style.display="none";
        menubaricon.style.display="block";
        menuIcon2FoeClose.style.display="none";
        leftDiv.style.height="20rem";
    })
    
    RIGHTDIVhoverFORcloseSIDEBAR.addEventListener("click",function(){
        menubarSide.style.display="none";
        menubaricon.style.display="block";
        menuIcon2FoeClose.style.display="none";
        leftDiv.style.height="20rem";
    })
}else{
    
}














