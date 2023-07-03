let navbar = document.querySelector(".header .navbar");
let searchForm = document.querySelector(".header .search-form");
let loginForm = document.querySelector(".header .login-form");
let contactInfo = document.querySelector(".contact-info");
const loginBtn = document.querySelector("#login-btn");
const logoutLink = document.querySelector("#logout");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#login-btn").onclick = () => {
  logoutLink.style.display = "block";
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

document.querySelector("#info-btn").onclick = () => {
  contactInfo.classList.add("active");
};

document.querySelector("#close-contact-info").onclick = () => {
  contactInfo.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  logoutLink.style.display = "none";
  contactInfo.classList.remove("active");
};

const homeSlider = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  effect: "cube",
  cubeEffect: {
    slidesShadows: true,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  preloadImages: false, // Disable image preloading
  lazy: true, // Enable lazy loading of images
  watchSlidesVisibility: true, // Watch slide visibility
  watchSlidesProgress: true, // Watch slide progress
});

const reviewsSlider = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const blogsSlider = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const logoSlider = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});

const maxChars = 300; // maximum number of characters to display in the service description
const ellipsis = "..."; // ellipsis to add at the end of the truncated text

// loop through each service description and truncate the text if necessary
const serviceDescriptions = document.querySelectorAll(
  ".blogs .content p, .services .box p"
);
serviceDescriptions.forEach((description) => {
  const text = description.textContent.trim();
  if (text.length > maxChars) {
    const truncatedText = text.slice(0, maxChars) + ellipsis;
    description.textContent = truncatedText;
  }
});

const typingText = document.getElementById("typing-text");
const words = ["Construction", "Architectural"];
let currentWordIndex = 0;

function typeNextWord() {
  const currentWord = words[currentWordIndex];
  const currentWordLength = currentWord.length;
  let currentLetterIndex = 0;

  function typeNextLetter() {
    typingText.textContent = currentWord.slice(0, currentLetterIndex + 1);
    currentLetterIndex++;

    if (currentLetterIndex < currentWordLength) {
      setTimeout(typeNextLetter, 100);
    } else {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(typeNextWord, 1000);
    }
  }

  typeNextLetter();
}

typeNextWord();
