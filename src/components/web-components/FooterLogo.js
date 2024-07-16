class FooterLogo extends HTMLElement {
  static get observedAttributes() {
    return []; // No attributes to observe
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.year = 2024; // Default year
  }

  connectedCallback() {
    this.render();
    this.startAnimation();
  }

  startAnimation() {
    const inner = this.shadowRoot.querySelector('.inner');
    inner.style.animation = 'ticker 2.5s ease-in-out infinite';
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          .footer-logo {
            display: flex;
            width: 9.5rem;
            flex-direction: column;
            align-items: flex-start; 
            gap: 0.5rem;
            flex-shrink: 0;
            margin-left: 0; 
          }
  
          .logo-img {
            height: 6.1875rem;
            align-self: stretch;
          }
  
          .ticker-wrapper {
            display: flex;
            flex-direction: row;
            gap: 2px;
            padding: 0 8px;
          }
  
          .ticker {
            width: 66.01px;
            height: 16px;
            overflow: hidden;
          }
  
          .inner {
            position: relative;
            top: 1px;
            display: flex;
            align-items: center;
          }
  
          .inner img {
            padding: 0 2px;
          }
  
          .inner span {
            margin: 0 5px;
          }
  
          .inner div {
            display: flex;
            flex-direction: row;
            padding: 0 0.409rem;
            gap: 3px;
          }
  
          .copy-right-type {
            color: #000;
            font-family: Inconsolata;
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 0.03rem;
            text-transform: uppercase;
          }
  
          @keyframes ticker {
            0%, 10% {
              transform: translateX(0);
            }
            90%, 100% {
              transform: translateX(-66.01px);
            }
          }

          /* Media query for mobile devices */
          @media (max-width: 640px) {
            .footer-logo {
              align-items: center;
            }
          }
        </style>
        <div class="footer-logo">
          <img
            class="logo-img"
            src="/logo-min-footer.png"
            alt="Company Logo"
          />
          <div class="ticker-wrapper copy-right-type">
            <span>[</span>
            <div class="ticker">
              <div class="inner">
                ${Array.from({ length: 3 })
                  .map(
                    () => `
                  <div>
                    <img
                      src="/copy_right.svg"
                      alt="Copyright Icon"
                    />
                    ${this.year}
                  </div>
                `
                  )
                  .join('')}
              </div>
            </div>
            <span>]</span>
          </div>
        </div>
      `;
  }
}

customElements.define('footer-logo', FooterLogo);
