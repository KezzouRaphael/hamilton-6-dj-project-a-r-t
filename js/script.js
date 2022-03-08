let carrouselLinks = document.querySelectorAll(".carrousel");

for(links of carrouselLinks)
{
  links.addEventListener("click",carrouselclicked);
}

function carrouselclicked(e){
  for(links of carrouselLinks)
  {
    links.removeAttribute("id");
  }
  e.target.setAttribute("id","active-list");
  let hreflink = e.target.getAttribute("href");
  let node = document.querySelector(hreflink);
  let content = document.querySelectorAll(".scheduler-content-month");
  for(el of content)
  {
    el.removeAttribute("class");
    el.setAttribute("class","scheduler-content-month");
  }
  node.setAttribute("class","scheduler-content-month active-content");
  e.preventDefault();
}

let buy =document.querySelectorAll(".event-button");
for(buttons of buy)
{
  buttons.addEventListener("click",buyTicketsPressed);
}

function buyTicketsPressed(e){
  let hreflink = e.target.getAttribute("href");
  let node = document.querySelector(hreflink);
  let content = document.querySelectorAll(".minidot");
  for(el of content)
  {
    el.removeAttribute("class");
    el.setAttribute("class","minidot");
  }
  node.setAttribute("class","minidot active-dot");
  e.preventDefault();
}
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