let gallery = document.querySelectorAll(".gallery-images");
if(gallery){
  for(pictures of gallery)
  {
    pictures.addEventListener("mouseover",onhoverfunction);
    pictures.addEventListener("mouseleave",outhoverfunction);
  }
  let zoombutton = document.querySelectorAll(".zoom");
  for(pictures of zoombutton)
  {
    pictures.addEventListener("click",zoomClicked);
  }
  // Get the modal
  var modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
}
function zoomClicked(e){
  modal.style.display = "block";
  let imgZoomed = document.createElement("img");
  let divspan = document.getElementsByClassName("modal-content").item(0);
  imgZoomed.setAttribute("src","/images/"+e.target.getAttribute("id")+"-original.jpg");
  modal.replaceChildren(divspan,imgZoomed);
}
function onhoverfunction(e){
  let ref = e.target.getAttribute("ref");
  let node = document.querySelector(ref);
  if(node)
    node.style.display = "inline";
}
function outhoverfunction(e){
  let ref = e.target.firstElementChild.getAttribute("ref");
  let node = document.querySelector(ref);
  if(node)
    node.style.display = "none";
}