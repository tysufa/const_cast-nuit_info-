function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let w = window.innerWidth;
let h = window.innerHeight; 
let cookieButton = document.querySelector("#Click")
let nbClicks = 0;
let clickL = 0;
let clickT = 0;
let clickSize = 0;

cookieButton.addEventListener('click', () => {
  if (nbClicks % 10 == 0){
    clickT = getRandomInt(h)+100;
    clickL = getRandomInt(w)+100;
    cookieButton.style.left = clickL + "px";
    cookieButton.style.top = clickT + "px";
    clickSize = getRandomInt(90) + 10;
    cookieButton.style.fontSize = clickSize + "px";
    cookieButton.style.position = "absolute";
  } else {
    cookieButton.style.color = "red";
    clickSize = getRandomInt(90) + 10;
    cookieButton.style.fontSize = clickSize + "px";
      if (getRandomInt(2)){
        clickT += clickSize;
      } else{
        clickT -= clickSize;
      }
      if (getRandomInt(2)){
        clickL += clickSize;
      } else{
        clickL -= clickSize;
      }
    cookieButton.style.left = clickL + "px";
    cookieButton.style.top = clickT + "px";
  }
  nbClicks++;
})
