import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo logo-text" style={{ fontSize: '1.5rem' }}>
              <span className="selin">Selin</span>
              <span className="bakt">Bakt</span>
            </div>
            <p style={{ marginTop: 12 }}>
              Handgemaakte taarten op bestelling in Amsterdam. Elk stuk gemaakt
              met verse ingrediënten en een flinke dosis liefde.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/selinbakt"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href="https://wa.me/31600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          <div>
            <h4>Navigatie</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/assortiment">Assortiment</Link></li>
              <li><Link href="/bestellen">Bestellen</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="https://wa.me/31600000000" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/selinbakt" target="_blank" rel="noopener noreferrer">
                  @selinbakt
                </a>
              </li>
              <li>
                <a href="mailto:info@selinbakt.nl">info@selinbakt.nl</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Selin Bakt · Amsterdam</p>
          <p style={{ color: 'var(--coral)' }}>Baked with love. ♥</p>
        </div>
      </div>
    </footer>
  );
}
