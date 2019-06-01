const body = document.body;
const root = document.documentElement;
const accessOpen = document.getElementById('accessOpen');
const accessClose = document.getElementById('accessClose');
const access = document.getElementById('access');
const darkMode = document.getElementById('darkModeToggle');
const textSizes = access.querySelectorAll('.textSizeSelector');
const textSizeHandlers = [];
let currTextSelector = null;

accessOpen.addEventListener('click', () => openAccess(true));
accessClose.addEventListener('click', () => openAccess(false));
darkMode.addEventListener('click', () => toggleDM());

for (let i = 0; i < textSizes.length; i++) {
  let newHandler = new TextSizeSelectorHandler(textSizes[i]);
  console.log(newHandler);
  textSizeHandlers.push(newHandler);
}

function openAccess(open) {
  if (open) {
    access.classList.add('open');
  }
  else {
    access.classList.remove('open');
  }
}

function toggleDM() {
  darkMode.classList.toggle('toggle');
  body.classList.toggle('dark');
}

function TextSizeSelectorHandler(element) {
  this.element = element;
  this.size = this.element.getAttribute('font-size');
  this.selector = this.element.querySelector('.selector');

  this.selector.addEventListener('click', () => {
    this.changeTextSize();
  });

  this.element.querySelector('p').style.setProperty = this.size;

  this.changeTextSize = () => {
    try {
      currTextSelector.selector.classList.remove('toggle');
    } catch (e) {
      console.log(e);
    }

    currTextSelector = this;
    root.style.setProperty('--font-size', this.size);
    this.selector.classList.add('toggle');
  };

  console.log(this.element.id);
  if (this.element.id === 'defaultTextSize') {
    this.selector.click();
  }
}
