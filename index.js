l = document.querySelector(".left");
l.addEventListener('click', () => {
  l.classList.toggle('anim');
  setTimeout(() => {  l.classList.toggle('anim'); }, 500);
})
