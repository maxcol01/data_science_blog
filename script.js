// Function to check if page is scrolled and adjust the logo size

const checkScroll = function() {
    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("logo");
    let scrollPosition = window.scrollY;
    // Add/remove the 'scrolled' class based on scroll position
    if (scrollPosition > 20){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled")
    }

    // calculate the new font size based on scroll position
    let newSize = 3 - (scrollPosition * 0.03); // Decrease by 0.03 rem for every one pixel that we have scrolled.

    // Clamping the fontsize between 1.5rem and 3rem
    newSize = Math.max(1.5, newSize)
    newSize = Math.min(3, newSize);

    logo.style.fontSize = newSize + "rem";
}

// event listener for scroll event

window.addEventListener("scroll", checkScroll);