/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const images = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"];
const carouselContainer = document.querySelector(".carousel-container");

function createCarousel(){
  let currentIndex = 0;

  function changeImg(num){
    if(currentIndex + num < 0){
      currentIndex = images.length - 1;
    }else if(currentIndex + num === images.length){
      currentIndex = 0;
    }else {
      currentIndex += num;
    }
    carouselImg.src = images[currentIndex];
  }

  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const leftBtn = document.createElement("button");
  leftBtn.classList.add("left-button");
  leftBtn.textContent = "◄"
  leftBtn.addEventListener("click", ()=> changeImg(-1));

  const rightBtn = document.createElement("button");
  rightBtn.classList.add("right-button")
  rightBtn.textContent = "►";
  rightBtn.addEventListener("click", ()=> changeImg(1));

  const carouselImg = document.createElement("img");
  carouselImg.src = images[currentIndex];

  carousel.append(leftBtn, carouselImg, rightBtn);
  return carousel;
}

const carousel = createCarousel();
carouselContainer.appendChild(carousel);