'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/assortiment', label: 'Assortiment' },
  { href: '/bestellen', label: 'Bestellen' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} style={{ position: 'sticky' }}>
      <div className="container navbar-inner">
        <Link href="/" className="logo-text">
          <span className="selin">Selin</span>
          <span className="bakt">Bakt</span>
        </Link>

        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/bestellen" className="nav-cta">
              Bestel nu
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
