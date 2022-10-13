// Toggle for the website nav on mobile
let navActive = false;

pauseScrolling = () => {
    document.body.classList.toggle('paused-scrolling')
}

const header = document.querySelector('header')
const navToggle = document.querySelector('.nav-toggle')
const navItems = document.querySelector('.nav-items')
const navItem = document.querySelectorAll('.nav-item')
const navLinks = document.querySelectorAll('.nav-link')
const sections = document.querySelectorAll('section')
let currentLink = 0

// Change the highlighted nav link
section_count = 0
sections.forEach(section => {
  section.dataset.index = section_count
  ++section_count
})

function changeCurrentLink() {
  sections.forEach(section => {
    if (window.pageYOffset < section.offsetTop) return
    currentLink = section.dataset.index
  })

  navLinks.forEach(navLink => {
    navLink.classList.remove('current-link')
  })

  navLinks[currentLink].classList.add('current-link')
}

// show/hide header on scroll

let prevScrollpos = window.pageYOffset;

function showHideHeader() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-60px";
  }
  
  prevScrollpos = currentScrollPos;
}

toggleNav = () => {
    header.classList.toggle('nav-active')
    navToggle.classList.toggle('nav-active')
    navItems.classList.toggle('nav-active')
    navActive = !navActive
    pauseScrolling()
}

navToggle.addEventListener('click', () => {
    toggleNav()
})

navItem.forEach(element => {
    element.addEventListener('click', () => {
        changeCurrentLink()
        toggleNav()
    })
});

// Handles page scroll events
window.onscroll = function() {
  showHideHeader()
  // Changes the current nav link highlight
  changeCurrentLink()
}