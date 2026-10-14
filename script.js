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

// AI case workflow: stable two-row layout, matching the approved reference.
const aiWorkflow = document.querySelector('.d-case .d-flow');
if (aiWorkflow && aiWorkflow.children.length === 9) {
  const style = document.createElement('style');
  style.textContent = `
    .d-case .d-flow{
      position:relative;
      display:grid;
      grid-template-columns:repeat(5,minmax(0,1fr));
      column-gap:38px;
      row-gap:34px;
      padding:8px 0 4px;
      overflow:visible;
      isolation:isolate;
    }
    .d-case .d-flow-item{
      position:relative;
      z-index:2;
      min-height:126px;
      padding:18px 18px 17px;
      border:1px solid #dedee9;
      border-radius:18px;
      background:#fff;
      box-shadow:0 8px 24px rgba(70,58,140,.035);
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      justify-content:flex-start;
      box-sizing:border-box;
      transform:none !important;
    }
    .d-case .d-flow-item small{
      display:flex;
      align-items:center;
      justify-content:center;
      width:36px;
      height:36px;
      margin:0 0 20px;
      border-radius:12px;
      background:#f0edff;
      color:#6754e8;
      font-size:13px;
      font-weight:800;
      letter-spacing:0;
      line-height:1;
      flex:none;
    }
    .d-case .d-flow-item strong{
      display:block;
      margin:0;
      color:#262634;
      font-size:15px;
      font-weight:700;
      line-height:1.45;
      white-space:normal;
      word-break:keep-all;
    }
    .d-case .d-flow-item::before{display:none !important;content:none !important}
    .d-case .d-flow-item::after{
      content:'→';
      position:absolute;
      top:50%;
      right:-30px;
      transform:translateY(-50%);
      color:#9e91ed;
      font-size:25px;
      font-weight:400;
      line-height:1;
    }
    .d-case .d-flow-item:nth-child(5)::after,
    .d-case .d-flow-item:nth-child(9)::after{display:none}
    .d-case .d-flow-item:nth-child(6){grid-column:1}
    .d-case .d-flow-item:nth-child(7){grid-column:2}
    .d-case .d-flow-item:nth-child(8){grid-column:3}
    .d-case .d-flow-item:nth-child(9){grid-column:4}
    .d-case .d-flow-turn{
      position:absolute;
      z-index:1;
      inset:0;
      width:100%;
      height:100%;
      overflow:visible;
      pointer-events:none;
    }
    .d-case .d-flow-turn path{
      fill:none;
      stroke:#c9c0f6;
      stroke-width:1.7;
      vector-effect:non-scaling-stroke;
      stroke-linecap:round;
      stroke-linejoin:round;
    }
    .d-case .d-flow-turn circle{
      fill:#fff;
      stroke:#a99bee;
      stroke-width:1.5;
      vector-effect:non-scaling-stroke;
    }
    @media(max-width:1100px){
      .d-case .d-flow{column-gap:25px;row-gap:28px}
      .d-case .d-flow-item{min-height:116px;padding:16px 14px}
      .d-case .d-flow-item::after{right:-21px;font-size:21px}
      .d-case .d-flow-item strong{font-size:14px}
    }
    @media(max-width:900px){
      .d-case .d-flow{
        grid-template-columns:repeat(2,minmax(0,1fr));
        gap:14px;
        padding:0;
      }
      .d-case .d-flow-item:nth-child(n){grid-column:auto}
      .d-case .d-flow-item::after,
      .d-case .d-flow-turn{display:none}
      .d-case .d-flow-item{min-height:112px}
    }
    @media(max-width:680px){
      .d-case .d-flow{grid-template-columns:1fr;gap:12px}
      .d-case .d-flow-item{min-height:102px}
      .d-case .d-flow-item small{width:32px;height:32px;margin-bottom:14px}
    }
  `;
  document.head.appendChild(style);

  const turn = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  turn.setAttribute('class', 'd-flow-turn');
  turn.setAttribute('viewBox', '0 0 1000 300');
  turn.setAttribute('preserveAspectRatio', 'none');
  turn.setAttribute('aria-hidden', 'true');
  turn.innerHTML = '<path d="M 940 70 H 982 Q 994 70 994 83 V 142 Q 994 155 980 155 H 68 Q 48 155 48 176 V 216"/><circle cx="940" cy="70" r="4"/><circle cx="48" cy="216" r="4"/>';
  aiWorkflow.appendChild(turn);
}