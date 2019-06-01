const body = document.body;
const accessOpen = document.getElementById('accessOpen');
const accessClose = document.getElementById('accessClose');
const access = document.getElementById('access');
const darkMode = document.getElementById('darkModeToggle');

accessOpen.addEventListener('click', () => openAccess(true));
accessClose.addEventListener('click', () => openAccess(false));
darkMode.addEventListener('click', () => toggleDM());

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
