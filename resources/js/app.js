// console.log('OMNIFOOD');

// function stickyElement(e) {

//   var header = document.querySelector('header');
//   var headerHeight = getComputedStyle(header).height.split('px')[0];
//   var navbar = document.querySelector('.navbar');
//   var scrollValue = window.scrollY;

//   if (scrollValue > headerHeight){
//     navbar.classList.add('is-fixed');

//   } else if (scrollValue < headerHeight){
//     navbar.classList.remove('is-fixed');

//   }

// }

// window.addEventListener('scroll', stickyElement);

$(document).ready(function () {
  $("h1").click(function () {
    console.log("Inside Jquery element");
    $(this).css("background-color", "red");
  });
});

function stickyElement(e) {
  var header = document.querySelector("header");
  var headerHeight = parseFloat(getComputedStyle(header).height.split("px")[0]);
  var navbar = document.querySelector("nav");
  var scrollValue = window.scrollY;

  var backToTopButton = document.querySelector(".scrollToTopbutton");

  if (scrollValue > headerHeight - 60) {
    console.log(scrollValue, "", headerHeight);
    navbar.classList.add("sticky");
    backToTopButton.classList.add("show");
  } else if (scrollValue < headerHeight - 60) {
    navbar.classList.remove("sticky");
    backToTopButton.classList.remove("show");
  }
}

window.addEventListener("scroll", stickyElement);
