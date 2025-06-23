const openButton = document.querySelector('.menu-button_type_open');
const menu = document.querySelector('#menu');

function openMenu() {
  document.body.classList.add('page_state_menu-open');
  openButton.setAttribute('aria-expanded', 'true');
}

function closeMenu(e) {
  if (e.target !== openButton && ![...e.target.classList].includes('menu')) {
    document.body.classList.remove('page_state_menu-open');
    openButton.setAttribute('aria-expanded', 'false');
  }
}

(function setMenu() {
  openButton?.addEventListener('click', openMenu);
  document.body.addEventListener('click', (e) => {
    closeMenu(e);
  });
})();