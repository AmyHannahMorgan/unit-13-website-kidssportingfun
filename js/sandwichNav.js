const sandwichOpen = document.querySelector('#sandwichOpen');
const sandwichClose = document.querySelector('#sandwichClose');
const sandwichNav = document.querySelector('sandwichNav');
const sandwichBars = sandwichNav.querySelectorAll('.sandwichBar')
const sandwichBarHandlers = [];

sandwichOpen.addEventListener('click', () => toggleSandwichNav(true));
sandwichClose.addEventListener('click', () => toggleSandwichNav(false));

for (let i = 0; i < sandwichBars.length; i++) {
  sandwichBarHandlers.push(new SandwichBarHandler(sandwichBars[i]));
}

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

  this.button.addEventListener('click', () => {
    this.toggleOpen();
  });

  this.toggleOpen = () => {
    if (this.content !== null) {
      let currHeight = this.content.style.height;
      if (currHeight === '') {
        this.content.style.height = this.content.scrollHeight + 'px';
        this.arrow.classList.add('rotate');
      }
      else {
        this.content.style.height = '';
        this.arrow.classList.remove('rotate');
      }
    }
  };
}
