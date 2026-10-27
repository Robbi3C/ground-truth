import { ArrowUpRight } from 'lucide-react';

const changes: [string, string[]][] = [
  ['Refocusing the business', [
    'Shifted from a multi-brand, multi-category retailer to a focused, own-brand scooter business. Exiting non-core products and categories reduced complexity, freed up resources and concentrated investment on products with stronger commercial potential.',
  ]],
  ['Restructuring the cost base', [
    'Closed 18 loss-making retail stores and restructured operations to reduce fixed costs and capital requirements.',
    'This involved difficult commercial decisions about where the business should operate, which activities it should retain and how to build a sustainable cost structure around the new strategy.',
  ]],
  ['Releasing cash and improving efficiency', [
    'Restructured inventory, supply chain and logistics operations to release working capital, reduce operating costs and improve the economics of the business.',
    'The changes released $3.4m in cash and delivered $1.2m in logistics savings, providing greater financial flexibility during the turnaround.',
  ]],
  ['Building a scalable route to market', [
    'Replaced owned-store expansion with a partner-led distribution strategy, combining direct e-commerce with local retail and distribution partners.',
    'The network expanded to more than 250 locations across five countries, providing broader market access without the capital and fixed-cost commitments of an owned retail estate.',
  ]],
];

const outcomes: [string, string][] = [
  ['$3.4m', 'In cash released'],
  ['$1.2m', 'In logistics savings'],
  ['18', 'Loss-making retail stores exited'],
  ['250+', 'Distribution locations across five countries'],
  ['32%', 'UK market share'],
  ['130%', 'Year-on-year e-commerce growth in France'],
];

export function MicromobilityStory({ image, alt }: { image: string; alt: string }) {
  return <>
    <section className="wrap px-grid px-hero">
      <div>
        <p className="px-label">UK micromobility brand</p>
        <h1>Seven months of <mark>runway.</mark></h1>
        <p className="px-standfirst">Resetting the business for profitable growth.</p>
      </div>
      <div className="px-image"><img src={image} alt={alt}/></div>
    </section>

    <section className="wrap px-grid px-row">
      <h2>The challenge</h2>
      <div className="px-copy">
        <p className="px-lead">The business was a fast-growing, founder-led micromobility brand with an innovative range of electric scooters and ambitious international growth plans. But expansion into e-bikes, third-party products and a network of owned retail stores had created an increasingly complex and cash-intensive business.</p>
        <p>With just seven months of runway remaining, the immediate priority was to understand what was driving losses and cash burn, and establish a credible path to financial sustainability.</p>
      </div>
    </section>

    <section className="wrap px-grid px-row">
      <h2>The transformation</h2>
      <div className="px-copy">
        <p className="px-lead">Working with the Founder and executive team, I led a commercial and financial diagnostic across the product portfolio, retail channels, operating costs and working capital.</p>
        <p>The analysis exposed a business model stretched across unprofitable categories, capital-intensive third-party products and an owned retail estate that was costly to operate and difficult to scale.</p>
        <p>The resulting strategy focused on simplifying the business around its strongest competitive advantage: its own-brand electric scooters, supported by a leaner operating model and more capital-efficient routes to market.</p>
        <ul className="px-changes px-stack">{changes.map(([title, text]) => <li key={title}><h3>{title}</h3>{text.map(p => <p key={p}>{p}</p>)}</li>)}</ul>
      </div>
    </section>

    <section className="px-results"><div className="wrap px-grid px-row">
      <h2>The results</h2>
      <div className="px-copy">
        <p className="px-lead">The transformation delivered a simpler, more focused business with a lower cost base, improved cash position and a more scalable commercial model.</p>
        <p>Crucially, it established a credible path to sustainable profitability, helping underpin a successful <strong>$13.5m Series A funding round</strong> in early 2023.</p>
        <dl className="px-outcomes">{outcomes.map(([figure, label]) => <div key={figure}><dt>{figure}</dt><dd>{label}</dd></div>)}</dl>
      </div>
    </div></section>

    <section className="wrap px-grid px-row px-since">
      <h2>The business since</h2>
      <div className="px-copy">
        <p>The business has continued its international expansion. By March 2024, its founder reported 800 retail outlets globally, and its website listed 15 country markets as of October 2026.</p>
        <p>This subsequent growth followed the shift towards own-brand products and partner-led distribution.</p>      </div>
    </section>

    <section className="px-cta"><div className="wrap px-grid">
      <h2>Facing a similar challenge?</h2>
      <div>
        <p>Dealing with cash pressure, an unsustainable operating model or a growth strategy that’s no longer delivering? Let’s talk about finding a clearer path to profitability and building a business that can scale.</p>
        <a className="m2-contact-link" href="mailto:rob@groundtruthconsulting.co"><strong>rob@groundtruthconsulting.co <ArrowUpRight size={18} aria-hidden="true"/></strong></a>
      </div>
    </div></section>
  </>;
}
