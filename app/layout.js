import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: {
    default: 'Selin Bakt · Baked with Love',
    template: '%s · Selin Bakt',
  },
  description:
    'Handgemaakte taarten voor verjaardagen, bruiloften en elk moment dat gevierd wordt. Amsterdam.',
  openGraph: {
    title: 'Selin Bakt · Baked with Love',
    description: 'Handgemaakte taarten op bestelling in Amsterdam.',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
