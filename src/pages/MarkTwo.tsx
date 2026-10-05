import { ArrowDownRight, ArrowUpRight, ArrowUp, MoveRight } from 'lucide-react';
import { useEffect } from 'react';
import { GroundTruthBrand } from '../components/GroundTruthBrand';
import { HeroExplorations } from '../components/HeroExplorations';
import { ServiceExplorations } from '../components/ServiceExplorations';
import { ExperienceAbout } from '../components/ExperienceAbout';
import '../styles/mark-two.css';

function Conversation() {
  return <section id="contact" className="m2-contact" aria-labelledby="contact-title"><div className="wrap m2-space"><div className="m2-contact-top"><h2 id="contact-title">LET&rsquo;S TALK</h2></div><div className="m2-engagement-line"><span>Ongoing advisory</span><MoveRight size={18} aria-hidden="true" /><span>Defined projects</span><MoveRight size={18} aria-hidden="true" /><span>Fractional / interim support</span></div><div className="m2-contact-bottom"><div><a className="m2-contact-link" href="mailto:rob@groundtruthconsuting.co"><strong>Email Robert <ArrowUpRight size={16} aria-hidden="true" /></strong></a></div><div><a className="m2-contact-link" href="https://www.linkedin.com/in/robertcowell/" target="_blank" rel="noopener noreferrer"><strong>Connect on LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></strong></a></div><p>Dubai, UAE<br />Working across markets</p></div></div></section>;
}

export function MarkTwo() {
  useEffect(() => { document.title = 'Ground Truth | Independent Advisory'; }, []);
  return <div className="m2" id="top"><a className="skip-link" href="#main">Skip to content</a><header className="m2-header wrap"><GroundTruthBrand /><nav aria-label="Page navigation"><a href="#help">Where I help</a><a href="#work">Experience</a><a href="#about">About</a><a href="#contact">Let’s talk <ArrowDownRight size={16} aria-hidden="true" /></a></nav></header><main id="main"><HeroExplorations /><ServiceExplorations /><ExperienceAbout /><Conversation /></main><footer className="m2-footer wrap"><span>Ground Truth</span><a href="#top">Back to top <ArrowUp size={16} aria-hidden="true" /></a></footer></div>;
}









