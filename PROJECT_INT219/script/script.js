let menuBtn = document.querySelector(".hamburgerMenu");
let showMenu = document.querySelector("#showMenu");
let navBar = document.querySelector("nav");
let arrowUp = document.querySelector(".fa-up");
let clicked = false;

// add events to the elements
menuBtn.addEventListener("click", showNavBar);
document.addEventListener("scroll", scrollPage);

// functions
function showNavBar() {
  if (clicked == false) {               //for nav bar to come in when the desktop is small
    showMenu.style.display = "inline-block";
    showMenu.style.animation = "show .3s ease 0s 1 normal both";
    navBar.style.display = "inline-block";
    navBar.style.animation = "show .3s ease 0s 1 normal both";

    clicked = true;
  } else if (clicked == true) {          //for nav bar to go in when the desktop is small
    showMenu.style.animation = "hide .3s ease 0s 1 normal both";
    navBar.style.animation = "hide .3s ease 0s 1 normal both";
    setTimeout(() => {
      showMenu.style.display = "none";
      navBar.style.display = "none";
    }, 300);

    clicked = false;
  }
}

function scrollPage() {        //for little arrow that comes at the bottom left of the page
  if (window.scrollY == 0) {
    arrowUp.style.opacity = 0;
    arrowUp.style.cursor = "initial";
  } else {
    arrowUp.style.opacity = 1;
    arrowUp.style.cursor = "pointer";
    arrowUp.onclick = () => {
      window.scrollTo(0, 0);
    };
  }
}








var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//for slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//to show alert when you click submit at the end
function show(){
  alert("thanks");
}
