

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
   let zoom=document.querySelector(".zoom");
  
  for(let i=0;i<children.length;i++){
    // loop over the image tags
      children[i].addEventListener("mousemove",(e)=>{
      const box = e.target.getBoundingClientRect()
      const xCenter = (box.left + box.right) / 2;
      const yCenter = (box.top + box.bottom) / 2;
      console.log(box.height);
      let mover=document.querySelector(".mover");
      mover.appendChild(zoom);
      zoom.style.top=e.offsetY+"px";
      zoom.style.left=e.offsetX+"px";
      
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
