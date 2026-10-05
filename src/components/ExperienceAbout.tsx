import { ArrowUpRight } from 'lucide-react';
import { CaseStudies } from './CaseStudies';
import '../styles/experience-about.css';

export function ExperienceAbout() {
  return <><CaseStudies />
    <section className="ea-testimonials" aria-labelledby="testimonials-title">
      <div className="wrap ea-testimonials-inner">
        <h2 id="testimonials-title">In their words.</h2>
        <div className="ea-testimonial-placeholder"><p>Testimonial to follow.</p><span>Design placeholder. Quote and attribution to be supplied.</span></div>
      </div>
    </section>
    <section id="about" className="ea-about" aria-labelledby="ea-about-title">
      <div className="wrap ea-section ea-person-layout">
        <div className="ea-person-heading"><h2 id="ea-about-title">Robert Cowell. <br />The person behind <br /><mark>Ground Truth.</mark></h2><p className="ea-person-lead">You work directly<br />with me.</p></div>
        <figure className="ea-portrait"><img src="/images/robert-cowell-profile.webp" alt="Portrait of Robert Cowell" width="1101" height="1429" loading="lazy" /></figure>
        <div className="ea-person-copy"><p>My career started in analytics and performance, then moved through operations and strategy into COO and MD roles. I've worked across corporate, founder-led and PE-backed businesses in Europe, the Middle East and Asia.</p><p>I get close to the facts, challenge assumptions and make the choices clear. Then I work with you and your team to put those decisions into practice.</p><p className="ea-principle">Expect straight answers, clear ownership and enough structure to keep things moving.</p><a className="ea-cta" href="#contact">Let’s talk <ArrowUpRight size={20} aria-hidden="true" /></a></div>
      </div>
    </section>
  </>;
}




