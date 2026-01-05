// Dynamic time
document.getElementById("time").innerHTML =
  "Current Time: " + new Date().toLocaleString();

// Carousel
let index = 0;
let images = document.querySelectorAll(".carousel img");

function showImage() {
  images.forEach(img => img.style.display = "none");
  images[index].style.display = "block";
  index = (index + 1) % images.length;
}

setInterval(showImage, 2000);
showImage();
