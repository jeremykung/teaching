const enterButton = () => {
  setTimeout(() => location.href = 'main.html', 2000)
  document.querySelector('.enter-container').style.opacity = 0;
  // location.href = 'main.html'
}

const loadQuote = () => {
  document.querySelector('.quote-wrapper').style.opacity = 1

  // One line at a time
  // document.getElementById('quote1').style.opacity = 1
  // setTimeout(() => document.getElementById('quote2').  style.opacity = 1, 1000)
  // setTimeout(() => document.getElementById('quote3').  style.opacity = 1, 2000)
  // setTimeout(() => document.getElementById('quote4').  style.opacity = 1, 3000)
  // setTimeout(() => document.getElementById('quote5').  style.opacity = 1, 4000)
  // setTimeout(() => document.getElementById('quote6').  style.opacity = 1, 5000)
  // setTimeout(() => document.getElementById('quote7').  style.opacity = 1, 6000)
  // setTimeout(() => document.getElementById('quote8').  style.opacity = 1, 7000)
  // setTimeout(() => document.getElementById('quote9').  style.opacity = 1, qTimer)
}

///////////////////////////////////////
//            Main Functions              //
///////////////////////////////////////

// Toggle Mobile Menu
const menuToggle = () => {
  document.getElementById('main-menu').classList.toggle('show-menu')
}