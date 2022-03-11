let slideIndex = 1;
showSlides(slideIndex);
let dots = document.querySelectorAll(".slideshow-container-sponsors-dot");
for(dot of dots){
  dot.addEventListener("click",currentSlide);
}
// Thumbnail image controls
function currentSlide(e) {
  let number = e.target.getAttribute("number");
  console.log(number);
  showSlides(slideIndex = number);
}
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slideshow-container-sponsors-content");
  const dots = document.getElementsByClassName("slideshow-container-sponsors-dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}