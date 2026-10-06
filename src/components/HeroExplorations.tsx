import { ArrowDownRight } from 'lucide-react';
import { ProofRibbon } from './ProofRibbon';
import '../styles/hero-explorations.css';

export function HeroExplorations() {
  return <>
    <section className="m2-opening hx-opening hx-progress" aria-labelledby="m2-title">
      <div className="wrap hx-stage">
        <div className="hx-message"><h1 id="m2-title">Clear direction.<br />Stronger<br />performance.<br /><mark>Real progress.</mark></h1><p className="hx-body">I work with founders, CEOs and boards to sharpen strategy, improve performance and make change happen. From business transformation to new ventures and AI, I bring the judgement to make the right calls and the operating experience to put them into action.</p><div className="hx-actions"><a className="m2-button" href="#contact">Let’s talk <ArrowDownRight size={20} aria-hidden="true" /></a></div><p className="hx-remit">Strategy <span>/</span> Transformation <span>/</span> Performance</p>        </div>
        <div className="hx-visual"><img className="hx-portrait" src="/images/robert-cowell-speaking.png" alt="Robert Cowell speaking on stage" width={2244} height={2804} fetchPriority="high" /></div>
      </div>
    </section>
    <ProofRibbon />
  </>;
}