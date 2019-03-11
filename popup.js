const bgColor = "#121212";
const bgAccent = "#1a1a1a"
const fontColor = "#b3b3b3"
const headerColor = "#ffffff"

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  // Set BG Color
  chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.body.style.backgroundColor = "' + bgColor + '";'}
    ),
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.querySelectorAll(".navbar, .card-main, #footer").forEach( (el) => {el.style.background = "' + bgColor + '";})'}
    ),
    // Set BG Accent Color
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.querySelectorAll(".lesson-functions, .course-card, .gradient, .lesson-content__panel").forEach( (el) => {el.style.background = "' + bgAccent + '";})'}
    ),
    // Set Header Color
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.querySelectorAll("h1, h3, h4, h5, h6, .internal-link, .nav-link, .lesson-navigation__link, .course-card-header__title, .viking-advert__brand-name, .viking-advert__pitch, .footer-link").forEach( (el) => {el.style.color = "' + headerColor + '";})'}
    ),
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.querySelectorAll(".lesson-navigation__circle").forEach( (el) => {el.style.background = "' + headerColor + '";})'}
    ),
    // Set Font Color
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.querySelectorAll("p, ol, li").forEach( (el) => {el.style.color = "' + fontColor + '";})'}
    )
});




