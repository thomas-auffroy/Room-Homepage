function next_fct(event){
    if (event.key === "ArrowRight" || event.key === undefined){
      counter++;
        update(counter);;
    }
  }
  function previous_fct(event){
    if (event.key === "ArrowLeft" || event.key === undefined){
      counter--;
          update(counter);
    }
  }
  
  function update(counter){
    articles[counter % 3].style.display = "flex";
    articles[(counter+1) % 3].style.display = "none";
    articles[(counter+2) % 3].style.display = "none";
    
    let str = (counter%3 + 1).toString();
    let bg__config = 'url("images/desktop-image-hero-'+str+'.jpg")';
   
    header.style.backgroundImage = bg__config;
  }
  
  var buttons = document.querySelectorAll(".slider");
  var articles = document.querySelectorAll("article");
  var header = document.querySelector("header");
  var counter = 0;
  
  buttons[0].addEventListener("click", next_fct, false);
  document.addEventListener("keyup", next_fct, false);
  
  buttons[1].addEventListener("click", previous_fct, false);
  document.addEventListener("keyup", previous_fct, false);