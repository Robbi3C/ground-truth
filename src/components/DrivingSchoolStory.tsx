import { ArrowUpRight } from 'lucide-react';

const changes: [string, string[]][] = [
  ['Building a new acquisition engine', [
    'Identified an underused strategic advantage: the company’s Driving Instructor Training Academy, one of a limited number of organisations authorised to train new instructors.',
    'Rather than competing for established instructors, recruitment shifted towards career changers, including former teachers and armed forces personnel.',
    'With approximately 90% of successful trainees going on to take a franchise, the academy offered a more effective route to growing the network.',
  ]],
  ['Rethinking the economics of growth', [
    'Redesigned training pricing around the long-term value of a new franchisee, reducing the upfront cost of training in exchange for a 12-month franchise commitment following qualification.',
    'The training experience was also overhauled to improve qualification speed, pass rates and support. This included one-to-one practical tuition, VR-supported learning and experienced instructor mentors.',
    'The result was a tenfold increase in the training pipeline, creating a significantly stronger source of new franchisees.',
  ]],
  ['Rebuilding the value of the franchise', [
    'Introduced new 12- and 24-month agreements with lower monthly fees and greater vehicle choice, improving the commercial proposition for instructors while providing more predictable franchise revenue.',
    'A new digital platform enabled instructors to run their businesses directly from their cars, managing lesson availability, bookings, payments, promotions, geographic coverage, pupil progress and driving tests.',
    'The objective was to make remaining within the franchise more attractive than operating independently.',
  ]],
  ['Connecting the two sides of the business', [
    'Launched a free theory-test app that provided value to learner drivers while creating a new digital acquisition channel for the franchise network.',
    'By connecting learner acquisition with instructor availability, the business could provide one of the most important benefits instructors expected from their franchise: a reliable source of new pupils.',
  ]],
];

const outcomes: [string, string][] = [
  ['10×', 'Increase in the driving instructor training pipeline'],
  ['300%', 'Growth in new franchisee sales'],
];

export function DrivingSchoolStory({ image, alt }: { image: string; alt: string }) {
  return <>
    <section className="wrap px-grid px-hero">
      <div>
        <p className="px-label">Leading UK driving school franchise</p>
        <h1>Rethinking the franchise <mark>model.</mark></h1>
        <p className="px-standfirst">Rebuilding the engine for growth.</p>
      </div>
      <div className="px-image px-photo"><img src={image} alt={alt}/></div>
    </section>

    <section className="wrap px-grid px-row">
      <h2>The challenge</h2>
      <div className="px-copy">
        <p className="px-lead">Two of Britain’s best-known driving school brands faced a fundamental problem: instructors were leaving their franchise networks faster than new ones were joining.</p>
        <p>Recruitment focused heavily on attracting experienced instructors from competitors or independent businesses. But many instructors viewed leaving a franchise and becoming independent as natural career progression. There was little incentive to return to paying monthly franchise fees.</p>
        <p>The problem wasn’t simply ineffective recruitment. The business needed to rethink where new instructors came from and give existing franchisees compelling reasons to stay.</p>
      </div>
    </section>

    <section className="wrap px-grid px-row">
      <h2>The transformation</h2>
      <div className="px-copy">
        <p className="px-lead">Working with the leadership team, I challenged the assumptions behind the existing recruitment model and helped reshape the growth strategy around two priorities: developing a stronger pipeline of new instructors and making the franchise proposition more valuable for those already in the network.</p>
        <p>The transformation connected recruitment, training, franchise economics and digital services into a more sustainable model for growth.</p>
        <ul className="px-changes px-stack">{changes.map(([title, text]) => <li key={title}><h3>{title}</h3>{text.map(p => <p key={p}>{p}</p>)}</li>)}</ul>
      </div>
    </section>

    <section className="px-results"><div className="wrap px-grid px-row">
      <h2>The results</h2>
      <div className="px-copy">
        <dl className="px-outcomes">{outcomes.map(([figure, label]) => <div key={figure}><dt>{figure}</dt><dd>{label}</dd></div>)}</dl>
        <p>Improved training pass rates and reduced time to qualification.</p>
        <p>Redesigned franchise agreements, pricing and digital services to strengthen the value proposition.</p>
        <p>Established a new learner acquisition channel to help drive demand into the instructor network.</p>
      </div>
    </div></section>

    <section className="px-cta"><div className="wrap px-grid">
      <h2>Facing a similar growth challenge?</h2>
      <div>
        <p>Struggling with acquisition, customer retention or a proposition that no longer delivers enough value? Let’s talk about finding the underlying problem and building a better model for growth.</p>
        <a className="m2-contact-link" href="mailto:rob@groundtruthconsulting.co"><strong>rob@groundtruthconsulting.co <ArrowUpRight size={18} aria-hidden="true"/></strong></a>
      </div>
    </div></section>
  </>;
}
