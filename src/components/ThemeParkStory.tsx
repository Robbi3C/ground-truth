import { ArrowUpRight } from 'lucide-react';

const changes: [string, string[]][] = [
  ['A new product and revenue model', [
    'Developed a digital proposition that made photography a more valuable and seamless part of the guest experience. Higher-quality images, personalised digital collections and mobile access reduced reliance on individual printed photographs and transactional sales counters.',
    'New pricing and commercial models were designed to increase revenue and profitability per guest, while giving attraction partners a more distinctive experience.',
  ]],
  ['Building the technology to make it work', [
    'Led the development of a cloud-based platform connecting photographs taken throughout an attraction to individual guests, enabling digital access and mobile delivery.',
    'The solution combined facial recognition or QR-based photo association with existing photography equipment, point-of-sale systems and guest-facing kiosks. This required new technology and operating processes while making use of infrastructure already in place across attractions.',
  ]],
  ['Proving the model in live operations', [
    'Owned the pilot programme from planning and mobilisation through successful launch at four of the UK’s largest theme parks: Alton Towers, Chessington World of Adventures, Thorpe Park and LEGOLAND Windsor.',
    'This involved coordinating commercial, technology, partner and operational teams to introduce new products, systems and guest journeys into busy, high-volume environments without disrupting day-to-day operations.',
    'The pilots demonstrated that the new model could operate in live attractions, providing the basis for wider deployment.',
  ]],
  ['Creating a repeatable international roll-out model', [
    'Developed the operating requirements, processes and roll-out approach needed to implement the new proposition across different attractions and markets.',
    'Different versions of the digital model were implemented with major partners including Merlin, Disney and Universal. Following the UK pilots, ongoing deployment was transitioned to country-led operational teams, supported by a roadmap to convert remaining locations.',
  ]],
];

const outcomes: [string, string][] = [
  ['£6m', 'EBITDA improvement over two years from the wider transformation programme'],
];

export function ThemeParkStory({ image, alt }: { image: string; alt: string }) {
  return <>
    <section className="wrap px-grid px-hero">
      <div>
        <p className="px-label">Global theme park content provider</p>
        <h1>Reinventing attraction <mark>photography.</mark></h1>
        <p className="px-standfirst">From concept to roll-out.</p>
      </div>
      <div className="px-image px-photo"><img src={image} alt={alt}/></div>
    </section>

    <section className="wrap px-grid px-row">
      <h2>The challenge</h2>
      <div className="px-copy">
        <p className="px-lead">The business provided photography services and technology to some of the world’s largest theme parks and visitor attractions, working with partners including Merlin Entertainments, Disney and Universal.</p>
        <p>But traditional attraction photography was losing relevance. In a world where smartphones produced high-quality, instantly shareable images, printed photographs and transactional sales counters were becoming an increasingly difficult proposition.</p>
        <p>At the same time, major leisure operators were investing in more immersive, seamless guest experiences. Photography needed to become part of that experience rather than interrupt it.</p>
        <p>The opportunity was to reinvent both the product and the business model, creating a more compelling guest experience, stronger commercial returns and greater value for attraction partners.</p>
      </div>
    </section>

    <section className="wrap px-grid px-row">
      <h2>The transformation</h2>
      <div className="px-copy">
        <p className="px-lead">Working alongside the executive team, I helped challenge the existing business model and shape a new strategy built around digital products, commercial innovation and a more integrated guest experience.</p>
        <p>I then led the work to turn that strategy into a functioning proposition, bringing together commercial, product, technology and operational teams to develop the solution, prove it in live attractions and establish a repeatable approach for international roll-out.</p>
        <ul className="px-changes px-stack">{changes.map(([title, text]) => <li key={title}><h3>{title}</h3>{text.map(p => <p key={p}>{p}</p>)}</li>)}</ul>
      </div>
    </section>

    <section className="px-results"><div className="wrap px-grid px-row">
      <h2>The results</h2>
      <div className="px-copy">
        <p className="px-lead">Successfully launched the new digital proposition across four major UK theme parks.</p>
        <dl className="px-outcomes">{outcomes.map(([figure, label]) => <div key={figure}><dt>{figure}</dt><dd>{label}</dd></div>)}</dl>
        <p>Introduced new digital products, pricing and commercial models designed to improve guest experience and profitability.</p>
        <p>Established the technology, processes and operating capabilities needed for international roll-out.</p>
      </div>
    </div></section>

    <section className="px-cta"><div className="wrap px-grid">
      <h2>Facing a similar transformation?</h2>
      <div>
        <p>Rethinking your business model, developing new digital products or looking to create a better guest experience that delivers stronger commercial results? Let’s talk.</p>
        <a className="m2-contact-link" href="mailto:rob@groundtruthconsulting.co"><strong>rob@groundtruthconsulting.co <ArrowUpRight size={18} aria-hidden="true"/></strong></a>
      </div>
    </div></section>
  </>;
}
