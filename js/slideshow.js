//////////////GLOBALS
let tablet = window.matchMedia("(min-width: 480px)");
let desktop = window.matchMedia("(min-width: 800px)");  
let slideIndex = 1;
///////////SPONSORS
const slides = document.getElementsByClassName("slideshow-container-sponsors-content");
const dots = document.getElementsByClassName("slideshow-container-sponsors-dot");
let dotsQ = document.querySelectorAll(".slideshow-container-sponsors-dot");
for(dot of dotsQ){
  dot.addEventListener("click",currentSlide);
}
window.onresize = resizeWindow;
function resizeWindow(){
  if(desktop.matches)
  {
    showSlides(4);
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
      dots[i].className = dots[i].className.replace(" current", "");
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
        dots[i].className = dots[i].className.replace(" current", "");
    }
    dots[1].style.display = "none";
    dots[3].style.display = "none";
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex].style.display="block";
    dots[slideIndex-1].className += " current";
  }
  else{//mobile
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" current", "");
    }
    dots[1].style.display = "inline-block";
    dots[3].style.display = "inline-block";
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " current";
  }

}
/////////TICKETS
const slidesTicket = document.getElementsByClassName("slideshow-container-tickets-content");
const dotsTicket = document.getElementsByClassName("slideshow-container-tickets-dot");
let dotsTicketQ = document.querySelectorAll(".slideshow-container-tickets-dot");
for(dot of dotsTicketQ){
  dot.addEventListener("click",currentSlideTickets);
}
// Thumbnail image controls
function currentSlideTickets(e) {
  let number = e.target.getAttribute("number");
  showSlidesTickets(slideIndex = number);
}
function showSlidesTickets(n) {
  let i;

  if(desktop.matches){
    for (i = 0; i < slidesTicket.length; i++) {
      slidesTicket[i].style.display = "block";
    }
    for (i = 0; i < dotsTicket.length; i++) {
      dotsTicket[i].style.display = "inline-block";
      dotsTicket[i].className = dotsTicket[i].className.replace(" current", "");
    }
  }
  else if(tablet.matches)
  {
    if (n > slidesTicket.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slidesTicket.length}
    for (i = 0; i < slidesTicket.length; i++) {
        slidesTicket[i].style.display = "none";
    }
    for (i = 0; i < dotsTicket.length; i++) {
        dotsTicket[i].className = dotsTicket[i].className.replace(" current", "");
    }
    //dotsTicket[2].style.display = "none";
    slidesTicket[slideIndex-1].style.display = "block";
    slidesTicket[slideIndex].style.display="block";
    dotsTicket[slideIndex-1].className += " current";
  }
  else{//mobile
    if (n > slidesTicket.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slidesTicket.length}
    for (i = 0; i < slidesTicket.length; i++) {
        slidesTicket[i].style.display = "none";
    }
    for (i = 0; i < dotsTicket.length; i++) {
        dotsTicket[i].className = dotsTicket[i].className.replace(" current", "");
    }
    dotsTicket[2].style.display = "inline-block";
    slidesTicket[slideIndex-1].style.display = "block";
    dotsTicket[slideIndex-1].className += " current";
  }

}