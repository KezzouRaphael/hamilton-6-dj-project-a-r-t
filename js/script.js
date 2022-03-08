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
  console.log(hreflink);
  let node = document.querySelector(hreflink);
  let content = document.querySelectorAll(".scheduler-content-month");
  for(el of content)
  {
    el.removeAttribute("class");
    el.setAttribute("class","scheduler-content-month");
  }
  node.setAttribute("class","scheduler-content-month active-content");
}