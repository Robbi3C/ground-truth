import { cases } from '../data/cases';
import { ArrowUpRight } from 'lucide-react';
import '../styles/case-studies.css';

export function CaseIndex({ featured = false }: { featured?: boolean }) {
  const stories = featured ? cases.slice(0, 3) : cases;
  return <div className="cw-index">{stories.map((item, i) => <a className="cw-story" key={item.slug} href={`/work/${item.slug}`}>
    <div className={`cs-image cs-image-${i}`}><img src={item.image} alt={item.alt} loading="lazy" referrerPolicy="no-referrer" /></div>
    <div className="cw-story-copy"><span className="cw-sector">{item.sector}</span><h3>{item.name}</h3><p>{item.description}</p><span className="cw-read">Read case study <ArrowUpRight size={19} aria-hidden="true" /></span></div>
    <span className="cw-index-result">{item.result}</span>
  </a>)}</div>;
}

// Desktop and tablet show cards; phones keep the compact index rows.
function CaseCards() {
  return <div className="cw-cards">{cases.slice(0, 3).map((item, i) => <a className="cw-card" key={item.slug} href={`/work/${item.slug}`}>
    <div className={`cs-image cs-image-${i}`}><img src={item.image} alt={item.alt} loading="lazy" /></div>
    <div className="cw-card-copy">
      <span className="cw-card-sector">{item.sector}</span>
      <h3>{item.name}</h3>
      <p>{item.summary}</p>
      <div className="cw-card-metric"><div><strong>{item.metric}</strong><span>{item.metricLabel}</span></div><ArrowUpRight size={24} aria-hidden="true" /></div>
    </div>
  </a>)}</div>;
}

export function CaseStudies() {
  return <section id="work" className="cs" aria-labelledby="cs-title"><div className="wrap cs-inner">
    <header className="cw-heading"><div><h2 id="cs-title">The work behind<br /><mark>the advice.</mark></h2><p>Real business challenges. Strategic decisions. Measurable outcomes.</p></div><a className="cw-all" href="/work">Explore all case studies <ArrowUpRight size={20} aria-hidden="true" /></a></header>
    <CaseCards />
    <div className="cw-home-index"><CaseIndex featured /></div>
    <p className="cw-career-note">Selected examples of strategy, transformation and growth work undertaken in senior executive roles.</p>
  </div></section>;
}
