

function affichageLettre(image1, lettre, timbre){
  let zoomed_on_baleine = false;
  image1.addEventListener('click', () =>{
    if (zoomed_on_baleine){
      zoomed_on_baleine = false;
      lettre.classList.toggle('anim');
      timbre.classList.toggle('anim');
      timbre.style.display = "none";
      lettre.style.display = "none";
    }else{
      zoomed_on_baleine = true;
      lettre.classList.toggle('anim');
      timbre.classList.toggle('anim');
      timbre.style.display = "";
      lettre.style.display = "";
    }
  })
}

let baleine = document.querySelector("#Ibaleine");
let lettreBaleine = document.querySelector("#lettreBaleine");
let timbreBaleine = document.querySelector("#timbreBaleine");

affichageLettre(baleine, lettreBaleine, timbreBaleine);

let dechet = document.querySelector("#Idechet");
let lettreDechet = document.querySelector("#lettreDechet");
let timbreDechet = document.querySelector("#timbreDechet");

affichageLettre(dechet, lettreDechet, timbreDechet);

let algue = document.querySelector("#Ialgue");
let lettreAlgue = document.querySelector("#lettreAlgue");
let timbreAlgue = document.querySelector("#timbreAlgue");

affichageLettre(algue, lettreAlgue, timbreAlgue);




//imVirus = document.querySelector("#virus");
//lettreVirus = document.querySelector("#lettreVirus");
//timbreVirus = document.querySelector("#timbreVirus");
//imVirus .addEventListener('click', () => {
//  if (zoomed_on_element){
//    lettreVirus.classList.toggle('anim');
//    timbreVirus.classList.toggle('anim');
//    document.querySelector("body").style.filter = "brightness(1)";
//    zoomed_on_element = false;
//    timbreVirus.style.display = "none";
//    lettreVirus.style.display = "none";
//  } else{
//    document.querySelector("body").style.backdropFilter = "brightness(0.5)";
//    //document.querySelector("div").style.opacity = 0.5;
//    //lettreVirus.style.filter = "brightness(2)";
//    //lettreVirus.style.opacity = 1;
//    lettreVirus.classList.toggle('anim');
//    timbreVirus.classList.toggle('anim');
//    zoomed_on_element = true;
//    timbreVirus.style.display = "";
//    lettreVirus.style.display = "";
//  }
//})
