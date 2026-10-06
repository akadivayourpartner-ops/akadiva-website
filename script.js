const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (toggle) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('mobile-open');
  });
}
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded','false');
    nav?.classList.remove('mobile-open');
  });
});

const style = document.createElement('style');
style.textContent = `
@media(max-width:980px){
  .main-nav.mobile-open{
    display:flex;position:absolute;top:68px;left:0;right:0;background:#fff;
    flex-direction:column;padding:18px 20px;border-bottom:1px solid #dfe6ef;
    box-shadow:0 18px 35px rgba(7,26,56,.10)
  }
}`;
document.head.appendChild(style);
