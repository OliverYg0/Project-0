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

// Settings Section
const root = document.querySelector(':root')
const settingsSubmitBtn = document.querySelector('.settings-submit-btn')
const borderRadiusInput = document.querySelector('#border-radius-input')

settingsSubmitBtn.addEventListener('click', () => {
    style = borderRadiusInput.value

    if (style.length > 0) {
        style += 'px'
        root.style.setProperty('--border-radius', style)
    }
})