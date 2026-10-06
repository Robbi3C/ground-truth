import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { GroundTruthBrand } from '../components/GroundTruthBrand';
import { CaseIndex } from '../components/CaseStudies';
import '../styles/mark-two.css';

export function WorkPage() {
  useEffect(() => { document.title = 'Case studies | Ground Truth'; }, []);
  return <div className="m2" id="top"><a className="skip-link" href="#main">Skip to content</a>
    <header className="m2-header wrap"><GroundTruthBrand href="/"/><a className="cd-back" href="/#work"><ArrowLeft size={18} aria-hidden="true"/> Back to home</a></header>
    <main id="main" className="wrap cs work-page"><header className="cw-heading"><div><h1>The work behind<br />the advice.</h1><p>Strategy resets, international growth and stronger performance. Explore the businesses I’ve helped lead, the decisions I made and the outcomes that followed.</p><p className="cw-career-note">Executive experience, before Ground Truth.</p></div></header>
      <CaseIndex/>
      <div className="work-contact"><p>Facing a similar challenge?</p><a className="cw-all" href="/#contact">Let’s talk <ArrowUpRight size={20} aria-hidden="true"/></a></div>
    </main></div>;
}
