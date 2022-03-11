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
  let preflink = e.target.getAttribute("pref");
  let node = document.querySelector(hreflink);
  let nodeP = document.querySelector(preflink);
  let content = document.querySelectorAll(".minidot");
  for(el of content)
  {
    el.removeAttribute("class");
    el.setAttribute("class","minidot");
  }
  node.setAttribute("class","minidot active-dot");
  let contentP = document.querySelectorAll(".event-desc");
  for(el of contentP)
  {
    el.removeAttribute("class");
    el.setAttribute("class","event-desc");
  }
  nodeP.setAttribute("class","event-desc active-content");
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
// // zoom button of gallery
//  let gallery= document.querySelector(".gallery");
//  if(gallery){
 
//    // if the class gallery is found  image tags
//    let children=gallery.children;
    
//   for(let i=0;i<children.length;i++){
//     // loop over the image tags

//       children[i].addEventListener("mouseenter",(e)=>{
//       //const box = e.target.getBoundingClientRect()
//       //const xCenter = box.left ;
//       //const yCenter = box.top;
//       //let imageContainer=e.target;
//       let ball=document.createElement("div");
//       ball.setAttribute("class","zoom");
//       children[i].append(ball);
//       zoom.style.top=yCenter+"px";
//       zoom.style.left=xCenter+"px";
//       console.log(children[i]);
//    });

//    children[i].addEventListener("mouseleave",(e)=>{
//       let ball=document.querySelector(".ball");
//       if(ball){
//         children[i].removeChild(ball);
//       }
//    });

//   }
   

//  }



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
    //console.log(sticky);
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

 




// script for media player
const audioPlayer = document.querySelector(".player");
if(audioPlayer)
{
  let startTime;
  let endTime;
  let slider;
  let playButton;
  const audio = new Audio(
    "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
  );
    
  //play button
  
  playButton=audioPlayer.querySelector(".player__control")
  if(playButton){
    playButton.addEventListener("click",(e)=>{
      if(audio.paused){
        audio.play();
        e.target.classList.replace("fa-pause","fa-play");
        
      }else{
        audio.pause();
        e.target.classList.replace("fa-play","fa-pause");
      }
    });
    //slider
  slider=audioPlayer.querySelector(".player__seekbar__slider");
  }
  setInterval(()=>{
    slider.style.width = (audio.currentTime/audio.duration)*100+"%";
    startTime=audioPlayer.querySelector(".player__time").textContent= getTimeCodeFromNum(audio.currentTime);
    endTime=audioPlayer.querySelector(".player__length").textContent= getTimeCodeFromNum(audio.duration);
  },500);
  
  //slide bar function

  

  audio.addEventListener(
    "loadeddata",
    () => {
      startTime=audioPlayer.querySelector(".player__time").textContent= getTimeCodeFromNum(audio.currentTime);
      endTime=audioPlayer.querySelector(".player__length").textContent= getTimeCodeFromNum(audio.duration);
      audio.volume = 1;
    },false);

    //turn 128 seconds into 2:08
  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }
  
  ////////////////COUNTDOWN
  // Set the date we're counting down to
  var countDownDate = new Date("April 20, 2022 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display
    document.getElementById("countdown-days").innerHTML = days;
    document.getElementById("countdown-hours").innerHTML = hours;
    document.getElementById("countdown-minutes").innerHTML = minutes; 
    document.getElementById("countdown-seconds").innerHTML = seconds;
  }, 1000);
}
