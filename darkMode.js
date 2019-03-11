const darkMode = function() {
  const bgColor = "#121212";
  const bgAccent = "#1a1a1a"
  const fontColor = "#b3b3b3"
  const headerColor = "#ffffff"

  // Set BG Color
  document.body.style.backgroundColor = bgColor;
  document.querySelectorAll(".navbar, .card-main, #footer").forEach( (el) => { 
    el.style.background = bgColor
  });

  // Set BG Accent Color
  document.querySelectorAll(".lesson-functions, .course-card, .gradient, .lesson-content__panel").forEach( (el) => {
    el.style.background = bgAccent
  });

  // Set Header Color
  document.querySelectorAll("h1, h3, h4, h5, h6, .internal-link, .nav-link, .lesson-navigation__link, .course-card-header__title, [href]:not([class]):hover, .viking-advert__brand-name, .viking-advert__pitch, .footer-link").forEach( (el) => {
    el.style.color = headerColor 
  })
  document.querySelectorAll(".lesson-navigation__circle").forEach( (el) => {
    el.style.background = headerColor
  })

  // Set Font Color
  document.querySelectorAll("p, ol, li").forEach( (el) => {
    el.style.color = fontColor
  })
}

window.addEventListener('load', darkMode, false);

// Load with Turbolinks
document.addEventListener('turbolinks:load', darkMode, false);