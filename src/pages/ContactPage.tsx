import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { GroundTruthBrand } from '../components/GroundTruthBrand';
import { ThemeToggle } from '../components/ThemeToggle';
import { ContactForm } from '../components/contact/ContactForm';
import '../styles/mark-two.css';
import '../styles/case-studies.css';

export function ContactPage() {
  useEffect(() => { document.title = 'Contact | Ground Truth'; }, []);
  return <div className="m2" id="top"><a className="skip-link" href="#main">Skip to content</a>
    <header className="m2-header wrap"><GroundTruthBrand href="/"/><div className="header-actions"><a className="cd-back" href="/"><ArrowLeft size={18} aria-hidden="true"/> Back to home</a><ThemeToggle /></div></header>
    <main id="main" className="wrap ct-page">
      <div className="ct-page-intro">
        <h1>Let’s <mark>talk.</mark></h1>
        <p>Tell me a little about your business and what you’re working on, and I’ll get back to you.</p>
        <ul className="ct-page-ways"><li>Ongoing advisory</li><li>Defined projects</li><li>Fractional / interim support</li></ul>
        <p className="ct-page-location">Dubai, UAE<br />Working across markets</p>
      </div>
      <ContactForm onDone={() => { location.href = '/'; }} doneLabel="Back to home" />
    </main>
  </div>;
}
