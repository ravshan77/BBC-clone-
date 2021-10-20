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


