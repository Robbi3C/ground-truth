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

export function CaseStudies() {
  return <section id="work" className="cs" aria-labelledby="cs-title"><div className="wrap cs-inner">
    <header className="cw-heading"><div><h2 id="cs-title">The work behind<br /><mark>the advice.</mark></h2><p>A selection of businesses I’ve helped lead.<br />The challenges, the decisions and what changed.</p></div><a className="cw-all" href="/work">Explore all case studies <ArrowUpRight size={20} aria-hidden="true" /></a></header>
    <CaseIndex featured />
  </div></section>;
}
