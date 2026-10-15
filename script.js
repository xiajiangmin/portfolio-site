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

const aiCaseTitle = document.querySelector('.d-hero h1');
if (aiCaseTitle && aiCaseTitle.textContent.includes('夏夏 AI 内容获客系统')) {
  const sections = Array.from(document.querySelectorAll('.d-section'));
  const productStructureSection = sections.find((section) => section.querySelector('.detail-label-text')?.textContent.trim() === '产品结构');

  if (productStructureSection && !document.querySelector('.d-validation-section')) {
    const style = document.createElement('style');
    style.textContent = `
      .d-validation-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:8px}
      .d-validation-card{overflow:hidden;background:#fff;border:1px solid #dedee9;border-radius:20px}
      .d-validation-card.is-wide{grid-column:1/-1}
      .d-validation-copy{padding:20px 22px 18px}
      .d-validation-copy small{display:block;color:#6955e5;font-size:11px;font-weight:800;letter-spacing:.08em;margin-bottom:10px}
      .d-validation-copy h3{margin:0 0 8px;font-size:20px;line-height:1.4;letter-spacing:-.025em}
      .d-validation-copy p{margin:0;color:#676a7e;font-size:13px;line-height:1.72}
      .d-validation-media{display:block;background:#f4f2fc;border-top:1px solid #ebeaf1;overflow:hidden}
      .d-validation-media img{display:block;width:100%;height:auto}
      .d-validation-card:not(.is-wide) .d-validation-media{height:330px;display:grid;place-items:center}
      .d-validation-card:not(.is-wide) .d-validation-media img{width:100%;height:100%;object-fit:contain;background:#f7f7fa}
      .d-validation-summary{margin:18px 0 0!important;color:#4f5164!important;font-size:14px!important;font-weight:700;line-height:1.75!important}
      @media(max-width:680px){
        .d-validation-grid{grid-template-columns:1fr}
        .d-validation-card.is-wide{grid-column:auto}
        .d-validation-card:not(.is-wide) .d-validation-media{height:auto}
        .d-validation-card:not(.is-wide) .d-validation-media img{height:auto}
      }
    `;
    document.head.appendChild(style);

    const validationSection = document.createElement('section');
    validationSection.className = 'd-wrap d-section d-validation-section';
    validationSection.innerHTML = `
      <div>
        <p class="d-section-label"><span class="detail-label-number" aria-hidden="true">06</span><span class="detail-label-text">真实业务验证</span></p>
        <h2>已经用于真实项目，<br>并带来咨询</h2>
      </div>
      <div class="d-section-copy">
        <p>围绕李时珍学校研修项目，工作台已经实际用于内容生产。内容完成后发布到小红书、公众号等渠道，并开始收到真实用户反馈和报名咨询。</p>
        <div class="d-validation-grid">
          <article class="d-validation-card is-wide">
            <div class="d-validation-copy"><small>01 / 内容生产</small><h3>工作台完成内容生产</h3><p>围绕真实招生项目，在创作台内完成内容编辑、多渠道版本和发布准备。</p></div>
            <a class="d-validation-media" href="assets/workbench-creation-real.webp" target="_blank" rel="noopener" aria-label="查看工作台内容生产截图大图"><img src="assets/workbench-creation-real.webp" alt="真实项目在夏夏 AI 工作台内完成内容生产" loading="lazy"></a>
          </article>
          <article class="d-validation-card">
            <div class="d-validation-copy"><small>02 / 真实发布</small><h3>内容已经真实发布</h3><p>生成内容已用于小红书、公众号等真实渠道，不停留在内部演示。</p></div>
            <a class="d-validation-media" href="assets/%E4%BD%9C%E5%93%81%E9%9B%86-%E5%B7%A5%E4%BD%9C%E5%8F%B0%E7%B4%A0%E6%9D%90/50a45286a58a1ef4f82d96e1b5f86e04.png" target="_blank" rel="noopener" aria-label="查看小红书真实发布截图大图"><img src="assets/%E4%BD%9C%E5%93%81%E9%9B%86-%E5%B7%A5%E4%BD%9C%E5%8F%B0%E7%B4%A0%E6%9D%90/50a45286a58a1ef4f82d96e1b5f86e04.png" alt="研修项目内容在小红书真实发布" loading="lazy"></a>
          </article>
          <article class="d-validation-card">
            <div class="d-validation-copy"><small>03 / 用户咨询</small><h3>发布后带来真实咨询</h3><p>用户看到内容后主动询问报名与收费，内容开始进入真实获客场景。</p></div>
            <a class="d-validation-media" href="assets/%E4%BD%9C%E5%93%81%E9%9B%86-%E5%B7%A5%E4%BD%9C%E5%8F%B0%E7%B4%A0%E6%9D%90/f5fe82be23ee49bf976205750e5433d8.jpg" target="_blank" rel="noopener" aria-label="查看真实用户咨询截图大图"><img src="assets/%E4%BD%9C%E5%93%81%E9%9B%86-%E5%B7%A5%E4%BD%9C%E5%8F%B0%E7%B4%A0%E6%9D%90/f5fe82be23ee49bf976205750e5433d8.jpg" alt="用户看到内容后询问报名收费" loading="lazy"></a>
          </article>
        </div>
        <p class="d-validation-summary">目前已经跑通从内容生产、实际发布到用户咨询的第一轮闭环。</p>
      </div>
    `;

    productStructureSection.insertAdjacentElement('afterend', validationSection);

    const sectionNumbers = new Map([
      ['商业交付', '07'],
      ['当前阶段', '08'],
      ['我的工作', '09']
    ]);
    document.querySelectorAll('.d-section').forEach((section) => {
      const label = section.querySelector('.detail-label-text')?.textContent.trim();
      const number = sectionNumbers.get(label);
      if (number) {
        const numberNode = section.querySelector('.detail-label-number');
        if (numberNode) numberNode.textContent = number;
      }
    });
  }
}
