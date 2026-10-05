
import { ArrowUpRight } from 'lucide-react';
import '../styles/case-studies.css';

// Reference imagery for design review, not evidence of a particular project or date.
// Career roles and outcomes need final factual sign-off before publication.
const cases = [
  { name: 'Pure Electric', role: 'COO', title: 'From retailer to own-brand business.', result: 'An own-brand model. Wider distribution.', body: 'I helped steer the shift to an own-brand model, aligning operations and distribution with a new commercial direction.', outcome: 'A business built around its own products and wider distribution.', image: 'https://www.pureelectric.com/cdn/shop/files/pure-electric-scooter-black-air-33486331281496.jpg?v=1723881795&width=800', alt: 'Pure Electric scooter, brand reference image' },
  { name: 'Picsolve', role: 'CEO / MD, Middle East & Asia', title: 'Growing a business across markets.', result: '20% revenue growth', body: 'I led regional operations and market expansion, with responsibility for a 500-person team.', outcome: '20% revenue growth.', image: 'https://images.squarespace-cdn.com/content/v1/5f86cf256e847f10b537db97/1602855534316-PIMHW507YOQMZJZBMZCP/picsolve_home.jpg', alt: 'Picsolve website displayed on a laptop, brand reference image' },
  { name: 'Clarks', role: 'Strategy & operations', title: 'Turning change into business value.', result: '£20m+ transformation benefits', body: 'Across performance, operations and strategy roles, I helped turn business priorities into practical operating changes.', outcome: '£20m+ in transformation benefits.', image: 'https://public-data.phoenixnhance.com/retailerDetails/2022/6/7/1290115261-148-2022-6-7.jpeg', alt: 'Clarks storefront, brand reference image' },
];
function CaseImage({ index }: { index: number }) {
  const item = cases[index];
  return <div className={`cs-image cs-image-${index}`}><img src={item.image} alt={item.alt} loading="lazy" referrerPolicy="no-referrer" /></div>;
}
function Overview({ index }: { index: number }) {
  const item = cases[index];
  return <details className="cs-overview"><summary>Read case overview <ArrowUpRight size={20} aria-hidden="true" /></summary><div><p className="cs-role">{item.role} · Executive experience</p><p>{item.body}</p><p><strong>Outcome</strong><br />{item.outcome}</p></div></details>;
}
export function CaseStudies() {
  return <section id="work" className="cs" aria-labelledby="cs-title">
    <div className="wrap cs-inner">
      <header className="cs-heading"><h2 id="cs-title">Experience behind<br /><mark>the advice.</mark></h2><p>Selected work from my executive career. The experience I bring to Ground Truth today.</p></header>
      <div className="cs-grid">{cases.map((item, i) =>
        <article className="cs-case" key={item.name}>
          <CaseImage index={i}/>
          <div className="cs-card-copy">
            <div className="cs-meta"><span>{item.name}</span><span>{item.role}</span></div>
            <h3>{item.title}</h3><p className="cs-result">{item.result}</p><Overview index={i}/>
          </div>
        </article>
      )}</div>
    </div>
  </section>;
}
