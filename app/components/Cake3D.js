'use client';

import { motion } from 'framer-motion';

/* Generates a filled SVG path for the white frosting drip between tiers.
   The shape is flat at y=0 (top) and has scalloped bumps hanging downward. */
function makeFrostingPath(w, h = 16) {
  const n = Math.max(3, Math.round(w / 22));
  const bw = w / n;
  let d = `M0,0 L${w},0 `;
  for (let i = n - 1; i >= 0; i--) {
    d += `Q${i * bw + bw / 2},${h} ${i * bw},0 `;
  }
  return d + 'Z';
}

function FrostingJunction({ width, height = 15 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ display: 'block', position: 'relative', zIndex: 4, marginTop: -3 }}
    >
      <path d={makeFrostingPath(width, height)} fill="white" />
    </svg>
  );
}

function Flame({ delay }) {
  return (
    <motion.div
      animate={{
        scaleX: [1, 1.25, 0.75, 1.15, 0.9, 1],
        scaleY: [1, 0.8,  1.2,  0.85, 1.1, 1],
        rotate: [-4, 5, -3, 6, -5, -4],
      }}
      transition={{ duration: 0.65, repeat: Infinity, delay, ease: 'easeInOut' }}
      style={{
        width: 9,
        height: 15,
        background:
          'radial-gradient(ellipse at 40% 20%, #fffde0, #ffd60a 38%, #ff9500 70%, #ff4800)',
        borderRadius: '50% 50% 30% 30%',
        filter: 'drop-shadow(0 0 6px rgba(255,165,0,.9))',
        transformOrigin: 'bottom center',
      }}
    />
  );
}

function Candle({ color, delay }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Flame delay={delay} />
      <div
        style={{
          width: 9,
          height: 24,
          background: `linear-gradient(180deg, ${color}cc 0%, ${color} 100%)`,
          borderRadius: '4px 4px 3px 3px',
          boxShadow: `0 2px 8px ${color}66`,
        }}
      />
    </div>
  );
}

const PARTICLES = [
  { x: -148, y: -55,  emoji: '✨', size: 20, dur: 3.5, delay: 0    },
  { x:  128, y: -28,  emoji: '⭐', size: 16, dur: 2.8, delay: 0.5  },
  { x: -158, y:  38,  emoji: '🌸', size: 18, dur: 4.2, delay: 1.0  },
  { x:  145, y:  65,  emoji: '✨', size: 14, dur: 3.1, delay: 0.3  },
  { x:  -82, y: -115, emoji: '🍓', size: 16, dur: 3.8, delay: 0.8  },
  { x:   65, y: -105, emoji: '⭐', size: 18, dur: 2.5, delay: 1.2  },
  { x: -148, y:   -5, emoji: '🌷', size: 15, dur: 4.5, delay: 0.6  },
  { x:  142, y:  -18, emoji: '✨', size: 12, dur: 3.3, delay: 1.5  },
  { x:    4, y: -138, emoji: '🎀', size: 17, dur: 3.6, delay: 0.9  },
];

export default function Cake3D() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 430,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Orbiting particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0.85, 1, 0.6, 0],
            scale:   [0, 1, 0.92, 1.08, 0.88, 0],
            y: [0, -14, 0, -9, 2, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginLeft: p.x,
            marginTop: p.y - 20,
            fontSize: p.size,
            pointerEvents: 'none',
            zIndex: 10,
            lineHeight: 1,
          }}
        >
          {p.emoji}
        </motion.div>
      ))}

      {/* Entry animation wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.45, y: 70 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 11, stiffness: 65, delay: 0.25 }}
        style={{ position: 'relative', zIndex: 5 }}
      >
        {/* Floating animation wrapper */}
        <motion.div
          animate={{ y: [0, -22, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* Candles */}
          <div
            style={{
              display: 'flex',
              gap: 20,
              marginBottom: 6,
              alignItems: 'flex-end',
            }}
          >
            <Candle color="#FF6F61" delay={0}    />
            <Candle color="#E8A33D" delay={0.13} />
            <Candle color="#A8D5BA" delay={0.26} />
          </div>

          {/* Tier 3 — top, smallest, mint */}
          <div
            style={{
              width: 140,
              height: 58,
              background: 'linear-gradient(180deg,#c8ead6 0%,#A8D5BA 55%,#82bfa0 100%)',
              borderRadius: '10px 10px 5px 5px',
              boxShadow: '4px 7px 0 #5a9876, 0 10px 26px rgba(59,42,26,.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              padding: '0 10px',
            }}
          >
            {['🌸', '⭐', '🌸'].map((d, i) => (
              <span key={i} style={{ fontSize: 13 }}>{d}</span>
            ))}
          </div>

          <FrostingJunction width={202} height={16} />

          {/* Tier 2 — middle, mustard */}
          <div
            style={{
              width: 202,
              height: 72,
              background: 'linear-gradient(180deg,#f4c054 0%,#E8A33D 55%,#c68028 100%)',
              borderRadius: '8px 8px 5px 5px',
              boxShadow: '5px 9px 0 #9a6618, 0 12px 28px rgba(59,42,26,.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              padding: '0 14px',
              marginTop: -4,
              position: 'relative',
              zIndex: 3,
            }}
          >
            {['🍓', '🌷', '🍓', '🌷'].map((d, i) => (
              <span key={i} style={{ fontSize: 14 }}>{d}</span>
            ))}
          </div>

          <FrostingJunction width={274} height={16} />

          {/* Tier 1 — bottom, largest, coral */}
          <div
            style={{
              width: 274,
              height: 90,
              background: 'linear-gradient(180deg,#ff8474 0%,#FF6F61 55%,#d75c50 100%)',
              borderRadius: '8px 8px 5px 5px',
              boxShadow: '6px 11px 0 #b04038, 0 16px 32px rgba(59,42,26,.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              padding: '0 18px',
              marginTop: -4,
              position: 'relative',
              zIndex: 2,
            }}
          >
            {['🌸', '✨', '🎀', '✨', '🌸'].map((d, i) => (
              <span key={i} style={{ fontSize: 15 }}>{d}</span>
            ))}
          </div>

          {/* Plate */}
          <div
            style={{
              width: 310,
              height: 20,
              background: 'linear-gradient(180deg,#f2e5c8 0%,#ddd0ae 100%)',
              borderRadius: '50%',
              boxShadow: '0 6px 18px rgba(59,42,26,.2)',
              marginTop: 4,
            }}
          />
        </motion.div>

        {/* Ground shadow — stays fixed while cake floats */}
        <motion.div
          animate={{
            scaleX: [1, 0.8, 1],
            opacity: [0.45, 0.18, 0.45],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 230,
            height: 18,
            background:
              'radial-gradient(ellipse at center, rgba(59,42,26,.28) 0%, transparent 72%)',
            margin: '10px auto 0',
          }}
        />
      </motion.div>
    </div>
  );
}
