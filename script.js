var icon = document.getElementById("icon");
var search = document.getElementById("search");

icon.onclick = function(){
    if(search.getAttribute("class") == "seeMenu"){
        search.setAttribute("class", "");
    }
    else{
        search.setAttribute("class", "seeMenu");
    }
}
var myIndex = 0;
carousel();

function carousel(){
  var slide = document.getElementsByClassName("slide");
  for(i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  myIndex++;
  if(myIndex > slide.length) {myIndex = 1}
  slide[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}