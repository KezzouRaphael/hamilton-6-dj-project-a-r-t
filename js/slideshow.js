let tablet = window.matchMedia("(min-width: 480px)");
let desktop = window.matchMedia("(min-width: 800px)");  
const slides = document.getElementsByClassName("slideshow-container-sponsors-content");
const dots = document.getElementsByClassName("slideshow-container-sponsors-dot");
let slideIndex = 1;
showSlides(slideIndex);
let dotsQ = document.querySelectorAll(".slideshow-container-sponsors-dot");
for(dot of dotsQ){
  dot.addEventListener("click",currentSlide);
}
window.onresize = resizeWindow;
function resizeWindow(){
  if(desktop.matches)
  {
    showSlides(5);
  }
  else if(tablet.matches){
    showSlides(1);
  }
  else
  {
    showSlides(1);
  }
}

// Thumbnail image controls
function currentSlide(e) {
  let number = e.target.getAttribute("number");
  showSlides(slideIndex = number);
}
function showSlides(n) {
  let i;

  if(desktop.matches){
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].style.display = "inline-block";
      dots[i].className += " active";
    }
  }
  else if(tablet.matches)
  {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[1].style.display = "none";
    dots[3].style.display = "none";
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex].style.display="block";
    dots[slideIndex-1].className += " active";
  }
  else{//mobile
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[1].style.display = "inline-block";
    dots[3].style.display = "inline-block";
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

}