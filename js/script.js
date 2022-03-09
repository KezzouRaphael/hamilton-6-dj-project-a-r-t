

// parallax effect of header

window.onscroll = function() {parallax()};

 
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
