const moreToggle = document.getElementById("moreToggle")
const bottom_header = document.getElementById("bottom_headers")
const header_bg_color = document.getElementById("header")
const sign_icon = document.getElementById("sign_icon")
const logo_bbc = document.getElementById("logo_bbc")
const search_bg = document.getElementById("search_bg")
const search_bg_input = document.getElementById("search_bg_input")
const bg_search_i = document.getElementById("bg-search-i");


moreToggle.addEventListener("click", function(){
    
    bottom_header.classList.toggle("mystyle");
    header_bg_color.classList.toggle("bg-black");
    sign_icon.classList.toggle("opacity");
    logo_bbc.classList.toggle("bg-black");
    search_bg.classList.toggle("bg-ccc");
    search_bg_input.classList.toggle("bg-ccc");
    bg_search_i.classList.toggle("bg-search-i-black")

})

// corusel js

// Select the carousel you'll need to manipulate and the buttons you'll add events to
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='Card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

// Prepare to limit the direction in which the carousel can slide, 
// and to control how much the carousel advances by each time.
// In order to slide the carousel so that only three cards are perfectly visible each time,
// you need to know the carousel width, and the margin placed on a given card in the carousel
const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

// Count the number of total cards you have
const cardCount = carousel.querySelectorAll("[data-target='Card']").length;

// Define an offset property to dynamically update by clicking the button controls
// as well as a maxX property so the carousel knows when to stop at the upper limit
let offset = 0;
const maxX = -((cardCount / 3) * carouselWidth + 
               (cardMarginRight * (cardCount / 3)) - 
               carouselWidth - cardMarginRight);


// Add the click events
leftButton.addEventListener("click", function() {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
    }
})
  
rightButton.addEventListener("click", function() {
  if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
})