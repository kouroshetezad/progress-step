const progress = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");
const nextButton = document.querySelector(".btn#next");
const prevButton = document.querySelector(".btn#prev");
let currentActive = 1;
nextButton.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
prevButton.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
    const actives = document.querySelectorAll(".active");
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  });
  if (currentActive === 1) {
    prevButton.disabled = true;
  } else if (currentActive === 4) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}
console.log(index);
console.log(currentActive);
