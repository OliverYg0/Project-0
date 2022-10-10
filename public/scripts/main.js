// Toggle for the website nav on mobile
let navActive = false;

pauseScrolling = () => {
    document.body.classList.toggle('paused-scrolling')
}

const header = document.querySelector('header')
const navToggle = document.querySelector('.nav-toggle')
const navItems = document.querySelector('.nav-items')
const navItem = document.querySelectorAll('.nav-item')
const heroSec = document.querySelector('#hero')

toggleNav = () => {
    header.classList.toggle('nav-active')
    navToggle.classList.toggle('nav-active')
    navItems.classList.toggle('nav-active')
    heroSec.classList.toggle('nav-active')
    navActive = !navActive
    pauseScrolling()
}

navToggle.addEventListener('click', () => {
    toggleNav()
})

navItem.forEach(element => {
    element.addEventListener('click', () => {
        toggleNav()
    })
});

// show/hide header on scroll

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-60px";
  }
  
  prevScrollpos = currentScrollPos;
}