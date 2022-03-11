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
  try{
    if(desktop.matches)
    {
      showSlides(4);
      showSlidesTickets(3);
      showSlidesTickets(99);
    }
    else if(tablet.matches){
      showSlides(1);
      showSlidesTickets(1);
      showSlidesNews(1);
    }
    else
    {
      showSlides(1);
      showSlidesTickets(1);
      showSlidesNews(1);
    }
  }
  catch(error){
    console.error("Don't worry just press a button to patch");
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
    dotsTicket[2].style.display = "none";
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
/////////////////////////////////RECENT NEWS
const slidesNews = document.getElementsByClassName("slideshow-container-recent-news-content");
const dotsNews = document.getElementsByClassName("slideshow-container-recent-news-dot");
let dotsNewsQ = document.querySelectorAll(".slideshow-container-recent-news-dot");
for(dot of dotsNewsQ){
  dot.addEventListener("click",currentSlideNews);
}
// Thumbnail image controls
function currentSlideNews(e) {
  let number = e.target.getAttribute("number");
  showSlidesNews(slideIndex = number);
}
function showSlidesNews(n) {
  try{
    let i;

  if(desktop.matches){
    if (n > slidesNews.length) {slideIndex = 2}
    if (n < 1) {slideIndex = slidesNews.length-1}
    for (i = 0; i < slidesNews.length; i++) {
      slidesNews[i].style.display = "none";
    }
    for (i = 0; i < dotsNews.length; i++) {
      dotsNews[i].className = dotsNews[i].className.replace(" current", "");
    }
    dotsNews[0].style.display = "inline-block";
    dotsNews[1].style.display = "none";
    dotsNews[2].style.display = "none";
    dotsNews[3].style.display = "inline-block";
    dotsNews[4].style.display = "none";
    dotsNews[5].style.display = "none";
    slidesNews[parseInt(slideIndex)-1].style.display = "block";
    slidesNews[slideIndex].style.display="block";
    slidesNews[parseInt(slideIndex)+1].style.display="block";
    //
  }
  else if(tablet.matches)
  {
    if (n > slidesNews.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slidesNews.length}
    for (i = 0; i < slidesNews.length; i++) {
      slidesNews[i].style.display = "none";
    }
    for (i = 0; i < dotsNews.length; i++) {
      dotsNews[i].className = dotsNews[i].className.replace(" current", "");
    }
    dotsNews[0].style.display = "inline-block";
    dotsNews[1].style.display = "none";
    dotsNews[2].style.display = "inline-block";
    dotsNews[3].style.display = "none";
    dotsNews[4].style.display = "inline-block";
    dotsNews[5].style.display = "none";
    slidesNews[slideIndex-1].style.display = "block";
    slidesNews[slideIndex].style.display="block";
    dotsNews[slideIndex-1].className += " current";
  }
  else{//mobile
    if (n > slidesNews.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slidesNews.length}
    for (i = 0; i < slidesNews.length; i++) {
      slidesNews[i].style.display = "none";
    }
    for (i = 0; i < dotsNews.length; i++) {
      dotsNews[i].className = dotsNews[i].className.replace(" current", "");
    }
    dotsNews[0].style.display = "inline-block";
    dotsNews[1].style.display = "inline-block";
    dotsNews[2].style.display = "inline-block";
    dotsNews[3].style.display = "inline-block";
    dotsNews[4].style.display = "inline-block";
    dotsNews[5].style.display = "inline-block";
    slidesNews[slideIndex-1].style.display = "block";
    dotsNews[slideIndex-1].className += " current";
  }
  }
  catch(error){
        console.error("Don't worry press a button in recent news to fix");
  }
}