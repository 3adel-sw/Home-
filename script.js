const slider = document.getElementById("slider");
const prevBtn = document.querySelector("button[onclick='prevSlide()']");
const nextBtn = document.querySelector("button[onclick='nextSlide()']");

const cardWidth = 460 + 12; // عرض الكارد + gap
const tolerance = 5; // هامش أمان

/* ===== تحديث الأسهم ===== */
function updateArrows() {
  // أول السلايدر
  if (slider.scrollLeft <= tolerance) {
    prevBtn.disabled = true;
    prevBtn.classList.add("opacity-40", "cursor-not-allowed");
  } else {
    prevBtn.disabled = false;
    prevBtn.classList.remove("opacity-40", "cursor-not-allowed");
  }

  // آخر السلايدر
  if (
    slider.scrollLeft + slider.clientWidth >=
    slider.scrollWidth - tolerance
  ) {
    nextBtn.disabled = true;
    nextBtn.classList.add("opacity-40", "cursor-not-allowed");
  } else {
    nextBtn.disabled = false;
    nextBtn.classList.remove("opacity-40", "cursor-not-allowed");
  }
}

/* ===== الأسهم ===== */
function nextSlide() {
  slider.scrollBy({ left: cardWidth, behavior: "smooth" });
}

function prevSlide() {
  slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
}

/* ===== Drag بالماوس ===== */
let isDown = false;
let startX = 0;
let scrollStart = 0;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX;
  scrollStart = slider.scrollLeft;
  slider.classList.add("active"); // اختياري لتغيير شكل الـ cursor
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const distance = e.pageX - startX;
  slider.scrollLeft = scrollStart - distance;
});

/* ===== Touch للموبايل ===== */
slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX;
  scrollStart = slider.scrollLeft;
});

slider.addEventListener("touchmove", (e) => {
  const distance = e.touches[0].pageX - startX;
  slider.scrollLeft = scrollStart - distance;
});

/* ===== تحديث الأسهم عند السحب ===== */
slider.addEventListener("scroll", updateArrows);

/* ===== أول تحميل ===== */
updateArrows();
