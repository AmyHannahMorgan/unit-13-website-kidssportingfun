const sandwichOpen = document.querySelector('#sandwichOpen');
const sandwichClose = document.querySelector('#sandwichClose');
const sandwichNav = document.querySelector('sandwichNav');

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
