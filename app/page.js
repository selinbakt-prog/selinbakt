'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Cake3D from './components/Cake3D';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
});

const products = [
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
    alt: 'Verjaardagstaart op maat',
    tag: 'Bestseller',
    tagColor: 'var(--mustard)',
    title: 'Verjaardagstaart',
    desc: 'Volledig gepersonaliseerd met naam, thema en gewenste smaken. Meerdere formaten beschikbaar.',
    price: 'vanaf € 40',
  },
  {
    img: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=700&q=80',
    alt: 'Handgemaakte cupcakes',
    tag: 'Populair',
    tagColor: 'var(--mint)',
    tagTextColor: 'var(--dark)',
    title: 'Cupcakes',
    desc: 'Luchtig, rijkelijk versierd en beschikbaar in allerlei smaken. Perfect voor feestjes en evenementen.',
    price: '€ 36 / 12 stuks',
  },
  {
    img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80',
    alt: 'Cheesecake',
    tag: null,
    title: 'Cheesecake',
    desc: 'Romig en zacht met een knapperige bodem. Seizoensgebonden toppings beschikbaar.',
    price: '€ 35',
  },
];

const testimonials = [
  {
    stars: '★★★★★',
    quote:
      'De taart was precies wat ik voor ogen had, maar dan nog mooier. Onze gasten waren laaiend enthousiast en vroegen allemaal om het recept!',
    name: 'Laura V.',
    sub: 'Verjaardagstaart · Amsterdam',
    initial: 'L',
  },
  {
    stars: '★★★★★',
    quote:
      'Selin dacht écht mee over ons bruiloftstaart-design. Het resultaat was een kunstwerk — zo lekker als het eruitzag. Dank je wel!',
    name: 'Mariam & Jelle',
    sub: 'Bruiloftstaart · Haarlem',
    initial: 'M',
  },
  {
    stars: '★★★★★',
    quote:
      'De cupcakes voor ons bedrijfsfeest waren een hit! Lekker, mooi en op tijd bezorgd. Absoluut voor herhaling vatbaar.',
    name: 'Tom B.',
    sub: 'Cupcakes · Utrecht',
    initial: 'T',
  },
];

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">
        {/* Decorative floating dots */}
        {[
          { s: 14, c: 'var(--coral)',   t: '12%', l: '6%',  d: '0s'   },
          { s:  8, c: 'var(--mustard)', t: '22%', l: '29%', d: '.8s'  },
          { s: 18, c: 'var(--mint)',    t: '32%', l: '60%', d: '1.6s' },
          { s: 10, c: 'var(--coral)',   t: '64%', l: '80%', d: '2.4s' },
          { s: 22, c: 'var(--mustard)', t: '76%', l: '12%', d: '1.2s' },
          { s:  7, c: 'var(--cherry)',  t: '48%', l: '92%', d: '.4s'  },
          { s: 12, c: 'var(--mint)',    t: '86%', l: '50%', d: '2s'   },
        ].map((dot, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: parseFloat(dot.d) }}
            style={{
              position: 'absolute',
              top: dot.t,
              left: dot.l,
              width: dot.s,
              height: dot.s,
              borderRadius: '50%',
              background: dot.c,
              opacity: 0.38,
              pointerEvents: 'none',
            }}
          />
        ))}

        <div className="container">
          <div className="hero-inner">
            {/* Text */}
            <div>
              <motion.span
                {...fadeUp(0.1)}
                className="hero-badge"
              >
                ✦ Handgemaakt in Amsterdam
              </motion.span>

              <motion.h1 {...fadeUp(0.2)} className="hero-title">
                Baked with<br />
                <span className="highlight">love.</span>
              </motion.h1>

              <motion.p {...fadeUp(0.3)} className="hero-subtitle">
                Served with joy.
              </motion.p>

              <motion.p {...fadeUp(0.35)} className="hero-desc">
                Een tiny kitchen met big sprinkles. Wij bakken joyful, colorful cakes voor
                verjaardagen, bruiloften en elk moment dat het waard is gevierd te worden.
              </motion.p>

              <motion.div {...fadeUp(0.45)} className="btn-group">
                <Link href="/assortiment" className="btn btn-primary">
                  Bekijk assortiment
                </Link>
                <Link href="/bestellen" className="btn btn-outline">
                  Hoe bestellen?
                </Link>
              </motion.div>
            </div>

            {/* 3D Cake */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Cake3D />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <div className="features-strip">
        <div className="container">
          <div className="features-inner">
            {[
              { icon: '🎂', title: '100% op maat',       sub: 'Jouw smaak, jouw design'   },
              { icon: '🌿', title: 'Verse ingrediënten', sub: 'Geen E-nummers rommel'       },
              { icon: '📍', title: 'Amsterdam',           sub: 'Afhalen of bezorgen'        },
              { icon: '💬', title: 'Persoonlijk contact', sub: 'Via WhatsApp of DM'         },
            ].map((f) => (
              <div key={f.title} className="feature-item">
                <div className="icon">{f.icon}</div>
                <strong>{f.title}</strong>
                <small>{f.sub}</small>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRODUCTEN ── */}
      <section className="section">
        <div className="container">
          <motion.div {...fadeUp()} className="section-header">
            <span className="eyebrow">Ons aanbod</span>
            <h2>Populaire creaties</h2>
            <p>
              Van een verjaardag tot een bruiloft — voor elk moment bakken wij iets bijzonders.
            </p>
          </motion.div>

          <div className="products-grid">
            {products.map((p, i) => (
              <motion.article key={p.title} {...fadeUp(i * 0.12)} className="product-card">
                <div className="product-card-img">
                  <img src={p.img} alt={p.alt} loading="lazy" />
                  {p.tag && (
                    <span
                      className="product-tag"
                      style={{
                        background: p.tagColor,
                        color: p.tagTextColor || 'var(--white)',
                      }}
                    >
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="product-card-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="product-footer">
                    <span className="price">{p.price}</span>
                    <Link href="/bestellen" className="btn btn-primary">
                      Bestellen
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div {...fadeUp(0.15)} style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/assortiment" className="btn btn-outline">
              Volledig assortiment bekijken
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="section story-section">
        <div className="container">
          <div className="story-inner">
            <motion.div {...fadeUp()} className="story-img-wrap">
              <div className="story-img">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
                  alt="Taarten bakken met liefde"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="story-content">
              <span className="eyebrow">Ons verhaal</span>
              <h2>
                Gemaakt met <em>echte liefde</em>
              </h2>
              <p>
                Hé! Ik ben Selin, en bakken is mijn passie. Wat begon als hobby voor vrienden en
                familie is uitgegroeid tot iets wat ik graag met meer mensen wil delen.
              </p>
              <p>
                Elke taart maak ik persoonlijk, van begin tot eind. Geen massaproductie, geen
                compromissen — alleen eerlijke, lekkere creaties die jij en je gasten onthouden.
              </p>

              <div className="story-stats">
                {[
                  { num: '200+', label: 'Tevreden klanten' },
                  { num: '5★',  label: 'Gemiddelde score' },
                  { num: '100%', label: 'Op maat gemaakt' },
                ].map((s) => (
                  <div className="stat" key={s.label}>
                    <div className="stat-number">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="btn-group">
                <Link href="/bestellen" className="btn btn-primary">
                  Contact opnemen
                </Link>
                <Link href="/assortiment" className="btn btn-outline">
                  Ons werk bekijken
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section">
        <div className="container">
          <motion.div {...fadeUp()} className="section-header">
            <span className="eyebrow">Wat klanten zeggen</span>
            <h2>Gebakken met liefde, ontvangen met vreugde</h2>
            <p>Niets maakt ons blijer dan blije klanten. Lees wat zij over Selin Bakt zeggen.</p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp(i * 0.12)} className="testimonial-card">
                <div className="stars">{t.stars}</div>
                <blockquote>{t.quote}</blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initial}</div>
                  <div className="author-info">
                    <strong>{t.name}</strong>
                    <small>{t.sub}</small>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <motion.section {...fadeUp()} className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2>Make today a cake day.</h2>
          <p>
            Klaar om iets bijzonders te bestellen? Stuur ons een berichtje en we maken het
            mogelijk.
          </p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <Link href="/bestellen" className="btn btn-white">
              Bestel nu
            </Link>
            <a
              href="https://www.instagram.com/selinbakt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ color: 'rgba(255,255,255,.9)', borderColor: 'rgba(255,255,255,.4)' }}
            >
              📸 @selinbakt
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
