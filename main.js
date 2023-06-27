// Change navbar style on scroll event 
//
window.addEventListener('scroll', () => {
    // put the style when you scroll 0 pixels down
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// show/hide FAQ answers
//
// get all the faq questions 
const faqs = document.querySelectorAll('.faq');

// loop through the questions and add click event
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open'); //change class to faq.open on click

        // change icon
        const icon = faq.querySelector('.faq__icon i');

        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }
        else {
            icon.className = "uil uil-plus";
        }

    })
})


// show/hide nav menu 
//
// get the nav menu variables
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

// when the menu button is clicked display options
menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display ="none";
})

// close nav menu function and event listener
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display ="inline-block";
}

closeBtn.addEventListener('click', closeNav)
