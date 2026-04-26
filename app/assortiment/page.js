'use client';

import Link from 'next/link';
import { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
});

const ALL_PRODUCTS = [
  {
    category: 'Taarten',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
    alt: 'Verjaardagstaart',
    title: 'Verjaardagstaart',
    desc: 'Klassiek of extravagant — volledig naar jouw wens. Buttercream, fondant of naked cake.',
    price: 'vanaf € 40',
  },
  {
    category: 'Cupcakes',
    img: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=700&q=80',
    alt: 'Cupcakes',
    title: 'Cupcakes',
    desc: 'Luchtige biscuit met rijke frosting. Minimumbestelling 6 stuks. Allerlei smaken mogelijk.',
    price: '€ 3,25 / stuk',
  },
  {
    category: 'Taarten',
    img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80',
    alt: 'Cheesecake',
    title: 'Cheesecake',
    desc: 'Romige New York-style cheesecake met knapperige bodem. Seizoenstoppings beschikbaar.',
    price: '€ 35',
  },
  {
    category: 'Kleingebak',
    img: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?auto=format&fit=crop&w=700&q=80',
    alt: 'Brownies',
    title: 'Brownies',
    desc: 'Kleverig, chocoladerijk en onweerstaanbaar. Met of zonder noten. Per 6 of 12 stuks.',
    price: '€ 18 / 6 stuks',
  },
  {
    category: 'Taarten',
    img: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=700&q=80',
    alt: 'Naked cake',
    title: 'Naked Cake',
    desc: 'Rustieke, elegante laagjestaart. Perfect voor bruiloften, babyshowers en feesten.',
    price: 'vanaf € 85',
  },
  {
    category: 'Taarten',
    img: 'https://images.unsplash.com/photo-1549399510-5b4aa56f3dbe?auto=format&fit=crop&w=700&q=80',
    alt: 'Chocoladetaart',
    title: 'Chocoladetaart',
    desc: 'Intense pure chocoladesmaak, zachte ganache en meerdere lagen. Ware traktatie.',
    price: 'vanaf € 45',
  },
];

const PRICE_ROWS = [
  { section: '🎂 Verjaardagstaarten', items: [
    ['Verjaardagstaart klein',              '±6 personen',   '€ 40'],
    ['Verjaardagstaart medium',             '±10 personen',  '€ 65'],
    ['Verjaardagstaart groot',              '±15 personen',  '€ 95'],
    ['Toeslag 3D-decoratie / fondant',      '—',             '+ € 10–25'],
  ]},
  { section: '🧁 Cupcakes', items: [
    ['Cupcakes (standaard)',                '6 stuks',       '€ 20'],
    ['Cupcakes (standaard)',                '12 stuks',      '€ 36'],
    ['Cupcakes (gepersonaliseerd)',          '12 stuks',      '€ 44'],
  ]},
  { section: '🍰 Cheesecakes & Taarten', items: [
    ['New York Cheesecake',                 '±8 personen',   '€ 35'],
    ['Chocoladetaart',                      '±6 personen',   '€ 45'],
    ['Carrot cake',                         '±8 personen',   '€ 40'],
    ['Naked cake (feest / bruiloft)',       '±15 personen',  'vanaf € 85'],
  ]},
  { section: '🍫 Kleingebak', items: [
    ['Brownies',                            '6 stuks',       '€ 18'],
    ['Brownies',                            '12 stuks',      '€ 32'],
    ['Cakepops',                            '6 stuks',       '€ 16'],
    ['Koekjes (gedecoreerd)',               '12 stuks',      '€ 28'],
  ]},
];

const CATS = ['Alles', 'Taarten', 'Cupcakes', 'Kleingebak'];

export default function Assortiment() {
  const [active, setActive] = useState('Alles');

  const filtered =
    active === 'Alles'
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === active);

  return (
    <main>
      <div className="container">
        {/* Page hero */}
        <motion.div {...fadeUp()} className="page-hero">
          <span className="eyebrow">✦ Alles op maat</span>
          <h1>Assortiment &amp; Prijzen</h1>
          <p>
            Elk product wordt vers gemaakt op jouw bestelling. Smaken, decoraties en formaten
            zijn altijd bespreekbaar.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div {...fadeUp(0.1)} className="category-nav">
          {CATS.map((cat) => (
            <button
              key={cat}
              className={`cat-pill${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Product grid */}
        <div className="products-grid" style={{ marginBottom: 72 }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                className="product-card"
              >
                <div className="product-card-img">
                  <img src={p.img} alt={p.alt} loading="lazy" />
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
          </AnimatePresence>
        </div>

        {/* Price table */}
        <motion.div {...fadeUp()} className="section-header">
          <span className="eyebrow">Overzicht</span>
          <h2>Volledige prijslijst</h2>
          <p>
            Alle prijzen zijn inclusief decoratie en verpakking. Bezorging in Amsterdam is
            mogelijk (+ € 5–10).
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          style={{
            background: 'var(--white)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow)',
            padding: '8px 0',
            marginBottom: 48,
            overflowX: 'auto',
          }}
        >
          <table className="price-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Formaat / Hoeveelheid</th>
                <th style={{ textAlign: 'right' }}>Prijs</th>
              </tr>
            </thead>
            <tbody>
              {PRICE_ROWS.map((group) => (
                <Fragment key={group.section}>
                  <tr className="cat-row">
                    <td colSpan={3}>{group.section}</td>
                  </tr>
                  {group.items.map(([name, qty, price], j) => (
                    <tr key={`${group.section}-${j}`}>
                      <td>{name}</td>
                      <td>{qty}</td>
                      <td className="td-price">{price}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="notice-box">
          <p>
            <strong>Let op:</strong> bovenstaande prijzen zijn richtprijzen. De uiteindelijke
            prijs hangt af van de decoratiewensen, het aantal lagen en eventuele speciale
            ingrediënten. Neem gerust contact op voor een persoonlijke offerte.
          </p>
          <p style={{ marginTop: 8 }}>
            <strong>Besteltermijn:</strong> minimaal <strong>5 werkdagen</strong> van tevoren.
            Bij grotere bestellingen en feesten geldt 10+ dagen.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          style={{ textAlign: 'center', margin: '56px 0' }}
        >
          <Link href="/bestellen" className="btn btn-primary btn-lg">
            Bestel nu via WhatsApp
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
