im1 = document.querySelector("#virus");
im1.addEventListener('click', () => {
  im1.classList.toggle('anim');
  setTimeout(() => {  im1.classList.toggle('anim'); }, 500);
  document.querySelector("body").style.filter = "brightness(0.5)";
})
