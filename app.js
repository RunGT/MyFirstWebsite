const slideshowImg = document.querySelectorAll(".slideshow-img");

const nextImageDelay = 5000;

let currentImageCount = 0;

slideshowImg[currentImageCount].style.display = "block";

// slideshowImg[currentImageCount].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImg[currentImageCount].style.display = "none";
  //   slideshowImg[currentImageCount].style.opacity = 0;

  currentImageCount = (currentImageCount + 1) % slideshowImg.length;

  slideshowImg[currentImageCount].style.display = "block";
  //   slideshowImg[currentImageCount].style.opacity = 1;
}

// Typed message 
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "creative",
  "fun",
  "a journey",
  "challenging",
  "rewarding",
  "my new chapter",
  ". Shall I keep going?",
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// carousel slide

var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");

showSlides();

function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function currentSlide(no) {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex = no;
  slides[no - 1].style.display = "block";
}

function plusSlides(n) {
  var newslideIndex = slideIndex + n;
  if (newslideIndex < 4 && newslideIndex > 0) {
    currentSlide(newslideIndex);
  }
}
