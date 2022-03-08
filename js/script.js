
window.onscroll = function() {myFunction()};

let navbar = document.querySelector("nav");
let sticky = navbar.offsetTop;

 
function myFunction() {
 console.log(sticky);
  if (window.pageYOffset >= 10) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}