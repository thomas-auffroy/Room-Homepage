function next_fct(event){
    if (event.key === "ArrowRight" || event.key === undefined){
        counter++;
        update(counter);
    }
  }
function previous_fct(event){
    if (event.key === "ArrowLeft" || event.key === undefined){
        counter--;
        update(counter);
    }
}
  
function update(target){
    let device;
    if (window.innerWidth > 380)
        device = "desktop";
    else
        device = "mobile";

    if (target < 0)
        target = (3 + target % 3) % 3;
    target = Math.abs(target);
    articles[target % 3].style.display = "flex";
    articles[(target+1) % 3].style.display = "none";
    articles[(target+2) % 3].style.display = "none";
    
    let str = (target%3 + 1).toString();
    let bg__config = 'url("images/'+device+'-image-hero-'+str+'.jpg")';
   
    header.style.backgroundImage = bg__dark + bg__config;
}

function underline(event){
    name_ = event.target.innerHTML;
  
    let len = name_.length;
    event.target.innerHTML = name_.substring(0, 1) + "<u>" + name_.substring(1, len - 1) + "</u>" + name_.substring(len - 1);
}
  
function reset(event){
    event.target.innerHTML = name_;
}

function mobile_menu_display(){
    document.querySelector(".container").classList.add("darkness");
    document.querySelector("nav").style.display = "flex";
    document.querySelector("nav").classList.add("anim__forward");
    close__button.style.display = "unset";
    bg__dark = "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),";
    update(counter);
}
function mobile_menu_close(){
    document.querySelector(".container").classList.remove("darkness");
    document.querySelector("nav").classList.remove("anim__forward");
    document.querySelector("nav").style.display = "";
    close__button.style.display = "none";
    bg__dark = "";
    update(counter);
}
  
var buttons = document.querySelectorAll(".slider");
var articles = document.querySelectorAll("article");
var header = document.querySelector("header");
var nav__text = document.querySelectorAll("li");
var hamburger = document.getElementById("mobile-menu");
var close__button = document.getElementById("close");
var name_;
var bg__dark = "";
var counter = 0;

buttons[0].addEventListener("click", next_fct, false);
document.addEventListener("keyup", next_fct, false);
  
buttons[1].addEventListener("click", previous_fct, false);
document.addEventListener("keyup", previous_fct, false);

nav__text.forEach(el => el.firstChild.addEventListener("mouseenter", underline, false));
nav__text.forEach(el => el.firstChild.addEventListener("mouseleave", reset, false));

hamburger.addEventListener("click", mobile_menu_display, false);
close__button.addEventListener("click", mobile_menu_close, false);

document.body.addEventListener("mousedown",function(){
    document.body.classList.remove("using-keyboard");
},false)
      
document.body.addEventListener("keydown",function(event){
    if (event.key === "Tab")
        document.body.classList.add("using-keyboard");
},false)
      
update(counter);