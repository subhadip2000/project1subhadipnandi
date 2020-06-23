var slideIndex = 0;
var menu = document.getElementById('menu')
var nav = document.getElementById('nav')
var exit = document.getElementById('exit')

menu.addEventListener('click', function(e) {
    nav.classList.toggle('hide-mobile')
})

exit.addEventListener('click', function(e) {
    nav.classList.toggle('hide-mobile')
})
function carousel() {
  var i;
  var x = document.getElementsByClassName("tt");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4500); // Change image every 2 seconds
}
/*function myFunction1(){
    document.getElementsByClassName("im").style.width = "180px";
    document.getElementsByClassName("im").style.height= "240px";
}
function myFunction2(){
    document.getElementsByClassName("im").style.width = "150px";
    document.getElementsByClassName("im").style.height= "200px";
}

myFunction1();
myFunction2();*/
carousel();
