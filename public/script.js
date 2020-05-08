// Js copy from W3School
window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.pageYOffset >= header.offsetHeight) {
    navbar.classList.add("sticky")
  }else{
    navbar.classList.remove("sticky")
  }
  
}
 
// function naa() {
//  var na = document.getElementById('navbar-t')
//    na.classList.toggle('nav-height')
// console.log('work')
// }