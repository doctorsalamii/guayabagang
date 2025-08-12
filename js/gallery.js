// JavaScript code for the gallery functionality

// Gallery image filenames (from images folder)
const imageFiles = [
  "1.jpg",
  "10.jpg",
  "100.jpg",
  "101.jpg",
  "102.jpg",
  "103.jpg",
  "104.jpg",
  "105.jpg",
  "106.jpg",
  "107.jpg",
  "108.jpg",
  "109.jpg",
  "11.jpg",
  "110.jpg",
  "111.jpg",
  "112.jpg",
  "113.jpg",
  "114.jpg",
  "115.jpg",
  "116.jpg",
  "117.jpg",
  "118.jpg",
  "119.jpg",
  "12.jpg",
  "120.jpg",
  "121.jpg",
  "122.jpg",
  "123.jpg",
  "124.jpg",
  "125.jpg",
  "126.jpg",
  "127.jpg",
  "128.jpg",
  "129.jpg",
  "13.jpg",
  "130.jpg",
  "131.jpg",
  "132.jpg",
  "133.jpg",
  "134.jpg",
  "135.jpg",
  "136.jpg",
  "137.jpg",
  "138.jpg",
  "139.jpg",
  "14.jpg",
  "140.jpg",
  "141.jpg",
  "142.jpg",
  "143.jpg",
  "144.jpg",
  "145.jpg",
  "146.jpg",
  "147.jpg",
  "148.jpg",
  "149.jpg",
  "15.jpg",
  "150.jpg",
  "151.jpg",
  "152.jpg",
  "153.jpg",
  "154.jpg",
  "155.jpg",
  "156.jpg",
  "157.jpg",
  "158.jpg",
  "159.jpg",
  "16.jpg",
  "160.jpg",
  "161.jpg",
  "162.jpg",
  "163.jpg",
  "164.jpg",
  "165.jpg",
  "166.jpg",
  "167.jpg",
  "168.jpg",
  "169.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "2.jpg",
  "20.jpg",
  "photopea007_orig.jpg",
];

// Path to images folder
const imageFolder = "/images/";

// Get DOM elements for gallery and modal
const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modalClose");

// Render gallery images and set up click event for modal
imageFiles.forEach((filename) => {
  const div = document.createElement("div");
  div.className = "gallery-item";
  const img = document.createElement("img");
  img.src = `${imageFolder}/${filename}`;
  img.alt = `Guayaba Gang Photo`;
  img.style.cursor = "pointer";
  img.onclick = () => {
    // Show modal with full-size image
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  };
  div.appendChild(img);
  gallery.appendChild(div);
});

// Close modal when close button is clicked
modalClose.onclick = function () {
  modal.style.display = "none";
  modalImg.src = "";
};

// Close modal when clicking outside the image
modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
    modalImg.src = "";
  }
};

// --- Blur Reveal Effect for H1 ---
// Animates each word in the header with a blur effect
function blurRevealText(element, text, delay = 350, direction = "top") {
  const words = text.split(" ");
  element.innerHTML = "";
  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word;
    span.className = "blur-reveal";
    span.style.animationDelay = i * delay + "ms";
    if (direction === "top") {
      span.style.setProperty("--blur-y", "-50px");
    } else {
      span.style.setProperty("--blur-y", "50px");
    }
    element.appendChild(span);
  });
}

// DOMContentLoaded: setup header animation and footer/gallery arrows
document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.getElementById("blur-h1");
  blurRevealText(h1, "Guayaba Gang: настоящая история без прикрас", 350, "top");

  // Стрелка "подвал" ведёт в футер, а в футере появляется стрелка "наверх"
  const toFooter = document.getElementById("to-footer");
  const toGallery = document.getElementById("to-gallery");
  toFooter.addEventListener("click", function (e) {
    e.preventDefault();
    toGallery.style.display = "inline-flex";
    document
      .getElementById("site-footer")
      .scrollIntoView({ behavior: "smooth" });
  });
  toGallery.addEventListener("click", function (e) {
    e.preventDefault();
    toGallery.style.display = "none";
    document
      .querySelector(".gallery-header")
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Прокрутка на самый верх при клике на кнопку "наверх"
document.getElementById("to-gallery").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show "to-gallery" button when scrolled down, hide when at the top
window.addEventListener("scroll", function () {
  const toGallery = document.getElementById("to-gallery");
  if (window.scrollY > 300) {
    // 300px от верха страницы
    toGallery.style.display = "inline-flex";
  } else {
    toGallery.style.display = "none";
  }
});
