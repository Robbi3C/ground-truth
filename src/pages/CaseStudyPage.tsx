import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { GroundTruthBrand } from '../components/GroundTruthBrand';
import { cases } from '../data/cases';
import { PureElectricStory } from '../components/PureElectricStory';
import '../styles/mark-two.css';
import '../styles/case-studies.css';

const context = [
  { situation: 'Pure Electric was moving from a retail-led business towards a model built around its own products. That shift changed the commercial direction of the business and the operating model needed to support it.', remit: 'As COO, my remit sat at the point where the new direction had to become an operating reality. The work connected the own-brand model with operations and distribution.', focus: 'The career summary records a shift to an own-brand model and wider distribution. The full case study will explain the sequence of decisions, the trade-offs and the changes made by the team.', questions: 'What triggered the change? Which operating decisions did you lead? What changed in cash flow, distribution and sales, over what period?' },
  { situation: 'Picsolve operated in the leisure and guest-experience sector. This case focuses on regional operations and market expansion across the Middle East and Asia.', remit: 'As CEO / MD for the region, I led operations and expansion with responsibility for a 500-person team. This was executive accountability for the business and its people.', focus: 'The career summary records 20% revenue growth. The full case study needs to connect that result to the specific commercial and operating decisions behind it.', questions: 'Which markets and sites were involved? What held growth back? Which decisions changed performance? Over what period was the 20% growth measured?' },
  { situation: 'My work at Clarks spanned performance, operations and strategy. This case brings together the operating changes associated with the transformation benefits in my career summary.', remit: 'Across those roles, I helped translate business priorities into changes in how the business operated. The final story should distinguish the work I led directly from wider programme results.', focus: 'The career summary records more than £20m in transformation benefits. To make that figure useful, the full case study needs to explain the initiatives, the measurement period and how the benefits were realised.', questions: 'Which programme should this case focus on? What was the starting problem? What did you personally lead? Were the £20m benefits annual, cumulative, realised or forecast?' },
];
export function CaseStudyPage({ slug }: { slug: string }) {
  const i = cases.findIndex(item => item.slug === slug);
  const item = cases[i];
  const back = '/work';
  useEffect(() => { document.title = item ? `${item.name} | Ground Truth` : 'Case study | Ground Truth'; }, [item]);
  if (!item) return <main className="wrap cd-page"><h1>Case study not found.</h1><a href={back}>Back to all case studies</a></main>;
  const story = context[i];
  const isPure = slug === 'pure-electric';

  return <div className="m2" id="top"><header className="m2-header wrap"><GroundTruthBrand href="/"/><a className="cd-back" href={back}><ArrowLeft size={18}/> All case studies</a></header>
    <main className="wrap cd-page">
      {!isPure && <div className="cd-draft">Case study draft · Narrative based on the existing career summary. Detailed actions, dates and results still to confirm.</div>}
      <header className="cd-heading"><h1>{item.name}</h1><p>{item.title}</p><div className="cd-meta"><span>{item.sector}</span><span>{item.role}</span><span>Executive experience, before Ground Truth</span></div></header>
      <div className="cd-layout"><article className="cd-story">{isPure ? <PureElectricStory/> : <><section><h2>The situation</h2><p>{story.situation}</p></section><section><h2>My role</h2><p>{story.remit}</p></section><section><h2>The work behind the result</h2><p>{story.focus}</p></section><section className="cd-input"><h2>To complete this story</h2><p>{story.questions}</p></section></>}</article><aside className="cd-aside"><div className={`cs-image cs-image-${i}`}><img src={item.image} alt={item.alt}/></div><p className="cd-result">{item.result}</p><p>{isPure ? 'Strategy, restructuring and distribution. Led as COO of Pure Electric, before Ground Truth.' : 'Result from the current career summary. Scope and measurement to be confirmed.'}</p></aside></div>
      <nav className="cd-other" aria-label="Other case studies">{cases.filter(c=>c.slug!==slug).map(c=><a key={c.slug} href={`/work/${c.slug}`}><span>{c.name}</span><ArrowUpRight size={20}/></a>)}</nav>
      <a className="cd-back" href={back}><ArrowLeft size={18}/> Back to all case studies</a>
    </main></div>;
}

