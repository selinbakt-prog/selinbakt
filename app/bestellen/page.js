'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
});

const STEPS = [
  {
    title: 'Stuur een berichtje',
    desc: 'Via WhatsApp of Instagram DM. Vertel wat voor taart je wil, voor hoeveel personen en wanneer je hem nodig hebt.',
  },
  {
    title: 'We bespreken de details',
    desc: 'Smaak, thema, kleuren, dieetwensen (glutenvrij, vegan) — alles bespreekbaar. Ik stuur je een offerte.',
  },
  {
    title: 'Aanbetaling',
    desc: 'Na akkoord betaal je 50% aanbetaling via Tikkie of bankoverschrijving. De bestelling is dan bevestigd.',
  },
  {
    title: 'Afhalen of bezorgen',
    desc: 'Je haalt de taart op in Amsterdam, of ik bezorg hem bij jou thuis (klein bezorgbedrag afhankelijk van afstand).',
  },
];

const FAQ = [
  {
    q: 'Hoe ver van tevoren moet ik bestellen?',
    a: 'Minimaal 5 werkdagen. Voor grote bestellingen of speciale gelegenheden: 10+ dagen.',
  },
  {
    q: 'Kan ik ook glutenvrij of vegan bestellen?',
    a: 'Ja! Geef het aan bij je bestelling en ik pas het recept aan. Kleine meerprijs mogelijk.',
  },
  {
    q: 'Bezorg je ook buiten Amsterdam?',
    a: 'In overleg mogelijk voor de regio Amsterdam (Amstelveen, Haarlem, Utrecht). Bespreek dit even via WhatsApp.',
  },
  {
    q: 'Hoe bewaar ik de taart?',
    a: 'Koelkast, afgedekt. Haal hem 30 minuten voor het serveren eruit zodat hij op temperatuur komt.',
  },
  {
    q: 'Kan ik een voorbeeld / foto meesturen?',
    a: 'Zeker! Inspiratiefoto\'s via WhatsApp zijn super welkom. Zo weet ik precies wat je bedoelt.',
  },
  {
    q: 'Wat als ik wil annuleren?',
    a: 'Tot 72 uur voor levering kun je kosteloos annuleren. Daarna vervalt de aanbetaling.',
  },
];

export default function Bestellen() {
  return (
    <main>
      <div className="container">
        {/* Page hero */}
        <motion.div {...fadeUp()} className="page-hero">
          <span className="eyebrow">✦ Persoonlijk &amp; snel</span>
          <h1>Jouw taart bestellen</h1>
          <p>
            Geen ingewikkelde formulieren. Stuur gewoon een berichtje — we bespreken samen wat
            je nodig hebt.
          </p>
        </motion.div>

        {/* Contact methods */}
        <motion.div {...fadeUp(0.1)} className="order-grid">
          <div className="order-card">
            <div className="order-icon">💬</div>
            <h3>WhatsApp</h3>
            <p>
              De snelste manier. Stuur een bericht met jouw bestelling en ik reageer zo snel
              mogelijk.
            </p>
            <a
              href="https://wa.me/31600000000?text=Hoi%20Selin!%20Ik%20wil%20graag%20een%20taart%20bestellen."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Open WhatsApp
            </a>
          </div>

          <div className="order-card">
            <div className="order-icon">📸</div>
            <h3>Instagram DM</h3>
            <p>
              Volg me op Instagram voor inspiratie en stuur een DM om een bestelling te
              plaatsen.
            </p>
            <a
              href="https://www.instagram.com/selinbakt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Naar Instagram
            </a>
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          {...fadeUp(0.1)}
          style={{ maxWidth: 640, margin: '0 auto 72px' }}
        >
          <h2
            style={{ fontSize: '1.9rem', marginBottom: 36, textAlign: 'center' }}
          >
            Hoe werkt het?
          </h2>
          <ol className="steps">
            {STEPS.map((step, i) => (
              <motion.li key={step.title} {...fadeUp(i * 0.1)}>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>

        {/* FAQ */}
        <motion.div
          {...fadeUp()}
          style={{
            background: 'rgba(168,213,186,.12)',
            border: '1.5px solid rgba(168,213,186,.4)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            marginBottom: 72,
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: 32, fontSize: '1.7rem' }}>
            Veelgestelde vragen
          </h2>
          <div className="faq-grid">
            {FAQ.map((item, i) => (
              <motion.div key={item.q} {...fadeUp(i * 0.07)} className="faq-item">
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          {...fadeUp()}
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <h2 style={{ marginBottom: 16 }}>Klaar om te bestellen?</h2>
          <p style={{ color: 'var(--muted)', marginBottom: 28 }}>
            Stuur een berichtje en ik help je verder!
          </p>
          <a
            href="https://wa.me/31600000000?text=Hoi%20Selin!%20Ik%20wil%20graag%20een%20taart%20bestellen."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            💬 Stuur een WhatsApp
          </a>
        </motion.div>
      </div>
    </main>
  );
}
