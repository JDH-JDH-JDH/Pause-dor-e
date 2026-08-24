const pages = [...document.querySelectorAll('.page')];
const links = [...document.querySelectorAll('.main-nav a')];
const nav = document.querySelector('.main-nav');
const toggle = document.querySelector('.menu-toggle');

function showPage() {
  const id = location.hash.slice(1) || 'bienvenue';
  const target = document.getElementById(id) || document.getElementById('bienvenue');
  pages.forEach(page => page.classList.toggle('active', page === target));
  links.forEach(link => link.classList.toggle('active', link.hash === `#${target.id}`));
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  window.scrollTo({top: 0, behavior: 'instant'});
}

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
window.addEventListener('hashchange', showPage);
showPage();

document.querySelectorAll('[data-gallery]').forEach(gallery => {
  const images = [...gallery.querySelectorAll('img')];
  const counter = gallery.querySelector('.counter');
  let index = 0;
  const render = () => {
    images.forEach((image, i) => image.classList.toggle('current', i === index));
    counter.textContent = `${index + 1} / ${images.length}`;
  };
  gallery.querySelector('.next').addEventListener('click', () => { index = (index + 1) % images.length; render(); });
  gallery.querySelector('.prev').addEventListener('click', () => { index = (index - 1 + images.length) % images.length; render(); });
  render();
});
