var container = document.querySelector(".container_slide");
var slide = document.querySelector(".slides");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var slides = document.querySelectorAll(".item");
var slide_Width = slides[0].clientWidth;
var index = 1;
var firstclone = slides[0].cloneNode(true);
var lastclone = slides[slides.length - 1].cloneNode(true);
firstclone.id = "firstclone";
lastclone.id = "lastclone";
slide.append(firstclone);
slide.prepend(lastclone);
const interval = 2000;
var slide_in;
slide.style.transform = `translateX(-${index * slide_Width}px)`;

const start = () => {
  slide_in = setInterval(() => {
    moveNextBtn();
  }, interval);
};
const moveNextBtn = () => {
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transform = `translateX(-${index * slide_Width}px)`;
  slide.style.transition = `2.5s`;
};
const movePrevBtn = () => {
  if (index <= 0) return;
  index--;
  slide.style.transform = `translateX(-${index * slide_Width}px)`;
  slide.style.transition = `2.5s`;
};

// Xử lý logic tìm kiếm nếu cần
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const searchTerm = document.querySelector('input[name="search"]').value;
  // Thực hiện tìm kiếm với searchTerm ở đây
  console.log("Đang tìm kiếm: " + searchTerm);
});
//Next
next.addEventListener("click", moveNextBtn);
//Prev
prev.addEventListener("click", movePrevBtn);
slide.addEventListener("transitionend", () => {
  slides = document.querySelectorAll(".item");
  if (slides[index].id == firstclone.id) {
    index = 1;
    slide.style.transform = `translateX(-${index * slide_Width}px)`;
    slide.style.transition = `none`;
  }
  if (slides[index].id == lastclone.id) {
    index = slides.length - 2;
    slide.style.transform = `translateX(-${index * slide_Width}px)`;
    slide.style.transition = `none`;
  }
});
container.addEventListener("mousemove", () => {
  clearInterval(slide_in);
});
container.addEventListener("mouseleave", start);
start();
