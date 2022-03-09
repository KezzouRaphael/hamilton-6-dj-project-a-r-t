let carrouselLinks = document.querySelectorAll(".carrousel");


// parallax effect of header

window.onscroll = function() {parallax()};


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
///////Scroll-up
let buttonScroll = document.querySelector("#scroll-up-button");
buttonScroll.addEventListener("click",scrollClicked);

 
function parallax() {
  let navbar = document.querySelector("nav");
  //let sticky = navbar.offsetTop;
  if (window.pageYOffset >= 10) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

}

 
// zoom button of gallery
 let gallery= document.querySelector(".gallery");
 if(gallery){
 
   // if the class gallery is found  image tags
   let children=gallery.children;
    
  for(let i=0;i<children.length;i++){
    // loop over the image tags

      children[i].addEventListener("mouseenter",(e)=>{
      //const box = e.target.getBoundingClientRect()
      //const xCenter = box.left ;
      //const yCenter = box.top;
      //let imageContainer=e.target;
      let ball=document.createElement("div");
      ball.setAttribute("class","zoom");
      children[i].append(ball);
      //zoom.style.top=yCenter+"px";
      //zoom.style.left=xCenter+"px";
      console.log(children[i]);
   });

   children[i].addEventListener("mouseleave",(e)=>{
      let ball=document.querySelector(".ball");
      if(ball){
        children[i].removeChild(ball);
      }
   });

  }
   

 }



 // function that remove units form the sizes of elements
function getNumber(val){
  let number="";
  let arr=[...val];
  let newArr= arr.filter(function(val){
  if(/[0-9]/.test(val)){
      return val;
      }
  });

  for(itm of newArr){
      number+=itm;
  }

  return parseInt(number);
  }

  function myFunction() {
    console.log(sticky);
     if (window.pageYOffset >= 10) {
       navbar.classList.add("sticky")
     } else {
       navbar.classList.remove("sticky");
     }
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
       buttonScroll.style.display = "block";
     } else {
       buttonScroll.style.display = "none";
     }
   }

function scrollClicked(e){
  ///Go to top of page
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; //For Chrome , Firefox, IE, Opera
};

