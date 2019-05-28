const sandwichOpen = document.querySelector('#sandwichOpen');
const sandwichClose = document.querySelector('#sandwichClose');
const sandwichNav = document.querySelector('sandwichNav');
const sandwichBars = sandwichNav.querySelectorAll('.sandwichBar')
const sandwichBarHandlers = [];

sandwichOpen.addEventListener('click', () => toggleSandwichNav(true));
sandwichClose.addEventListener('click', () => toggleSandwichNav(false));

function toggleSandwichNav(open){
  if (open) {
    sandwichNav.classList.add('open');
  }
  else {
    sandwichNav.classList.remove('open');
  }
}

function SandwichBarHandler(sandwichBar) {
  this.sandwichBar = sandwichBar;
  this.button = this.sandwichBar.querySelector('.sandwichBarButton');
  this.arrow = this.button.querySelector('.sandwichBarArrow');
  this.content = this.sandwichBar.querySelector('.sandwichBarContent');
}
