import { ArrowUpRight } from 'lucide-react';

const changes: [string, string][] = [
  ['One product focus', 'Refocused the portfolio on own-brand e-scooters, exiting e-bikes and third-party brands to simplify the business and improve its commercial economics.'],
  ['Reshaping the cost base', 'Closed 18 loss-making retail stores and restructured operations, reducing fixed costs and releasing capital.'],
  ['Cash out of operations', 'Overhauled inventory, supply chain and logistics operations, releasing $3.4m in cash and delivering $1.2m in logistics savings.'],
  ['A scalable route to market', 'Shifted international expansion towards partner-led distribution, building a network of 250+ retail locations across five countries, supported by local sales and servicing capabilities.'],
];

const outcomes: [string, string][] = [
  ['$3.4m', 'Cash released from inventory, supply chain and logistics'],
  ['$1.2m', 'Logistics savings'],
  ['250+', 'Partner retail locations across five countries'],
  ['$13.5m', 'Series A funding round, completed early 2023'],
];

export function PureElectricStory({ image, alt }: { image: string; alt: string }) {
  return <>
    <section className="wrap px-grid px-hero">
      <div>
        <p className="px-label">Pure Electric case study</p>
        <h1>Seven months of <mark>runway.</mark></h1>
        <p className="px-standfirst">A fundamental business reset to create a platform for profitable growth.</p>
      </div>
      <div className="px-image"><img src={image} alt={alt}/></div>
    </section>

    <section className="wrap px-grid px-row">
      <h2>The challenge</h2>
      <div className="px-copy">
        <p className="px-lead">Pure Electric was a founder-led business with an innovative product and significant growth ambitions. But expansion into e-bikes, third-party brands and an estate of owned retail stores had created a complex, cash-intensive business model.</p>
        <p>With just seven months of runway remaining, the business needed to simplify, conserve cash and establish a credible path to profitability.</p>
      </div>
    </section>

    <section className="wrap px-grid px-row">
      <h2>The transformation</h2>
      <div className="px-copy">
        <p className="px-lead">Working with the Founder and executive team, we reset the strategy around Pure’s strongest competitive advantage: its own-brand electric scooters.</p>
        <p>This meant moving away from a multi-brand, multi-category retail model towards a focused product business with a more scalable route to market.</p>
        <p>Delivering that shift required more than changing the product portfolio. It meant aligning commercial, financial and operational priorities around a simpler business model, then leading the changes to the cost base, supply chain and routes to market.</p>
        <ul className="px-changes">{changes.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ul>
      </div>
    </section>

    <section className="px-results"><div className="wrap px-grid px-row">
      <h2>The results</h2>
      <div className="px-copy">
        <p className="px-lead">A simpler business model, lower cost base and a more scalable route to market.</p>
        <dl className="px-outcomes">{outcomes.map(([figure, label]) => <div key={figure}><dt>{figure}</dt><dd>{label}</dd></div>)}</dl>
        <p>Alongside the financial improvements, Pure achieved 32% UK market share and 130% year-on-year e-commerce growth in France.</p>
      </div>
    </div></section>

    <section className="wrap px-grid px-row px-since">
      <h2>The business since</h2>
      <div className="px-copy">
        <p>Since the transformation, Pure Electric has continued expanding internationally. By March 2024, the founder reported 800 retail outlets globally, and the company’s website listed 15 country markets as of October 2026.</p>
        <p className="px-sources">Sources: <a href="https://zagdaily.com/featured/from-500-to-800-retailers-in-3-months-pures-push-for-global-distributors/" target="_blank" rel="noreferrer">Founder interview, March 2024</a>; <a href="https://www.pureelectric.com/pages/customer-support" target="_blank" rel="noreferrer">Pure Electric market selector, checked October 2026</a>.</p>
      </div>
    </section>

    <section className="wrap px-grid px-role" aria-label="Executive role">
      <div className="px-panel">
        <dl>
          <div><dt>Role</dt><dd>Chief Operating Officer</dd></div>
          <div><dt>Sector</dt><dd>Consumer / Mobility</dd></div>
        </dl>
        <p>Work undertaken in an executive capacity at Pure Electric, before Ground Truth.</p>
      </div>
    </section>

    <section className="px-cta"><div className="wrap px-grid">
      <h2>Facing a similar reset?</h2>
      <div>
        <p>If your business needs to simplify, release cash or find a more scalable route to growth, let’s talk it through.</p>
        <a className="m2-contact-link" href="mailto:rob@groundtruthconsulting.co"><strong>rob@groundtruthconsulting.co <ArrowUpRight size={18} aria-hidden="true"/></strong></a>
      </div>
    </div></section>
  </>;
}
