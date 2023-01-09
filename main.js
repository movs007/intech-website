const navSlider = () => {
  const menuTrigger = document.querySelector(".menu-trigger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const header = document.querySelector("header")

  menuTrigger.addEventListener('click' , () => {
     //Toggle Nav
    nav.classList.toggle('nav-active');
    header.classList.toggle("sticky");
    //Animate links
    navLinks.forEach((link,index) => {
      if (link.style.animation){
        link.style.animation = '' ;
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    menuTrigger.classList.toggle('toggle');
  });
  
   
};
//Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0);
});
navSlider();

const section = document.querySelectorAll("section");
const navli = document.querySelectorAll(".nav-links li")

window.addEventListener("scroll", () => {
  let current = " ";
  console.log(section.offsetTop)
  section.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight /2 ) {
      current = section.getAttribute('id');
    }
  })

  navli.forEach( li =>{
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  })
})
 
const myslide = document.querySelectorAll(".myslider");
const dash = document.querySelectorAll(".dash");
// Slide show home page
function slideShow(n) {
  let i;
  for( i=0;i<myslide.length;i++){
    myslide[i].style.display = "none";
  }
  for(i=0;i<dash.length;i++){
    dash[i].classList.remove('activeDash');
  }
  if(n > myslide.length){
    counter = 1;
  }
  if(n < 1){
    counter = myslide.length;
  }
  myslide[counter -1].style.display = "block";
  dash[counter -1].classList.add('activeDash');
}

let counter = 1;
slideShow(counter);

let timer = setInterval(autoSlide,8000);
function autoSlide (){
  counter += 1;
  slideShow(counter);
}


const resetTimer = () => {
  clearInterval(timer);
  timer = setInterval(() => {
    counter += 1;
   slideShow(counter);}, 8000);
}
const currentSlide = (n) => {
  counter = n;
  slideShow(counter);
  resetTimer();
}

dash.addEventListener('click',(n) => {
  counter = n;
  slideShow(counter);
  resetTimer();
});



