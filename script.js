document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = String(new Date().getFullYear()); });
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', '打开导航');
    nav.classList.remove('is-open');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener('pointerdown', (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
}
const homepageProductShot = document.querySelector('.v2-featured .workbench-shot');
if (homepageProductShot) homepageProductShot.style.transform = 'none';

const validationSection = document.querySelector('.d-validation-section');
if (validationSection) {
  if (!document.querySelector('link[href="validation-polish.css"]')) {
    const polish = document.createElement('link');
    polish.rel = 'stylesheet';
    polish.href = 'validation-polish.css';
    document.head.appendChild(polish);
  }

  const intro = validationSection.querySelector('.d-validation-content > p:first-child');
  if (intro) {
    intro.textContent = '同一研修项目先在工作台完成内容编辑与预览，随后发布到小红书、公众号等渠道，并收到真实报名咨询。';
  }
}
