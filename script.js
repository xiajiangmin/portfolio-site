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

  const publishLabel = validationSection.querySelector('.validation-step-heading span');
  if (publishLabel) publishLabel.textContent = '01 / 真实发布与反馈';

  const publishList = validationSection.querySelector('.validation-publish-list');
  const xhsCard = validationSection.querySelector('.validation-publish-xhs');
  const inquiry = validationSection.querySelector('.validation-inquiry');

  if (xhsCard && inquiry && !xhsCard.querySelector('.validation-feedback-inline')) {
    const inquiryImage = inquiry.querySelector('img');
    const feedback = document.createElement('div');
    feedback.className = 'validation-feedback-inline';
    feedback.innerHTML = `
      <div class="validation-feedback-copy">
        <span>咨询反馈</span>
        <p>发布后收到真实报名咨询</p>
        <strong>“怎么报名收费？”</strong>
      </div>
      <div class="validation-feedback-thumb"></div>
    `;
    if (inquiryImage) {
      const cloned = inquiryImage.cloneNode(true);
      cloned.removeAttribute('width');
      cloned.removeAttribute('height');
      feedback.querySelector('.validation-feedback-thumb').appendChild(cloned);
    }
    xhsCard.appendChild(feedback);
    inquiry.remove();
  }

  if (publishList) {
    const wechatCards = [...publishList.querySelectorAll('.validation-publish-item:not(.validation-publish-xhs)')];
    const secondaryImages = [
      {
        src: 'assets/作品集-工作台素材/4cc5181283a957bd6be1ed94616db39c.png',
        alt: '叶开泰研修公众号文章正文中段，包含章节、正文与配图'
      },
      {
        src: 'assets/作品集-工作台素材/753eb60113e333f9acda45e4384051c3.png',
        alt: '九资河溯源研修公众号文章正文中段，包含章节、正文与配图'
      }
    ];

    wechatCards.forEach((card, index) => {
      if (card.querySelector('.validation-wechat-preview')) return;
      const originalLink = card.querySelector('a');
      const originalImage = card.querySelector('img');
      if (!originalLink || !originalImage || !secondaryImages[index]) return;

      card.classList.add('validation-wechat-item');
      const preview = document.createElement('div');
      preview.className = 'validation-wechat-preview';

      const firstShot = document.createElement('div');
      firstShot.className = 'validation-wechat-shot is-cover';
      const firstImage = originalImage.cloneNode(true);
      firstImage.removeAttribute('width');
      firstImage.removeAttribute('height');
      firstShot.appendChild(firstImage);

      const secondShot = document.createElement('div');
      secondShot.className = 'validation-wechat-shot is-body';
      const secondImage = document.createElement('img');
      secondImage.src = secondaryImages[index].src;
      secondImage.alt = secondaryImages[index].alt;
      secondImage.loading = 'lazy';
      secondShot.appendChild(secondImage);

      preview.append(firstShot, secondShot);
      originalLink.replaceWith(preview);
    });
  }
}
