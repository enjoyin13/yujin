const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
