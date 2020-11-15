const enterButton = () => {
  setTimeout(() => location.href = 'main.html', 2000)
  document.querySelector('.enter-container').style.opacity = 0;
  // location.href = 'main.html'
}

const loadQuote = () => {
  document.querySelector('.quote-wrapper').style.opacity = 1
}

///////////////////////////////////////
//            Main Functions              //
///////////////////////////////////////

// Toggle Mobile Menu
const menuToggle = () => {
  document.getElementById('main-menu').classList.toggle('show-menu')
}

const loadMain = () => {
  setTimeout(() => {document.querySelector(".project-view").style.opacity = 1}, 0)
  setTimeout(() => {document.querySelector(".philosophy-view").style.opacity = 1}, 0)
  setTimeout(() => {document.querySelector(".journal-view").style.opacity = 1}, 0)
  setTimeout(() => {document.querySelector(".about-view").style.opacity = 1}, 0)
}