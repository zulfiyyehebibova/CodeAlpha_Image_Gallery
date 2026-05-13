const cards = document.querySelectorAll(".card");
const images = document.querySelectorAll(".card img");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function filterImages(category) {
  cards.forEach((card) => {
    if (category === "all") {
      card.classList.remove("hide");
    } else if (card.classList.contains(category)) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
}

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");

    lightboxImg.src = img.src;

    currentIndex = index;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  lightboxImg.src = images[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  lightboxImg.src = images[currentIndex].src;
});
