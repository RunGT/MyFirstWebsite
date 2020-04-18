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
