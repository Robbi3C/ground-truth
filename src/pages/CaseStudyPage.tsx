import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { GroundTruthBrand } from '../components/GroundTruthBrand';
import { cases } from '../data/cases';
import { MicromobilityStory } from '../components/MicromobilityStory';
import { ThemeParkStory } from '../components/ThemeParkStory';
import { DrivingSchoolStory } from '../components/DrivingSchoolStory';
import '../styles/mark-two.css';
import '../styles/case-studies.css';

const stories: Record<string, typeof MicromobilityStory> = { 'micromobility-brand': MicromobilityStory, 'theme-park-photography': ThemeParkStory, 'driving-school-franchise': DrivingSchoolStory };
export function CaseStudyPage({ slug }: { slug: string }) {
  const item = cases.find(c => c.slug === slug);
  const Story = stories[slug];
  const back = '/work';
  useEffect(() => { document.title = item ? `${item.name} | Ground Truth` : 'Case study | Ground Truth'; }, [item]);
  if (!item || !Story) return <main className="wrap cd-page"><h1>Case study not found.</h1><a href={back}>Back to all case studies</a></main>;

  return <div className="m2" id="top"><a className="skip-link" href="#main">Skip to content</a>
    <header className="m2-header wrap"><GroundTruthBrand href="/"/><a className="cd-back" href={back}><ArrowLeft size={18} aria-hidden="true"/> All case studies</a></header>
    <main id="main" className="px-page">
      <Story image={item.image} alt={item.alt}/>
      <div className="wrap px-footer">
        <nav className="cd-other px-grid" aria-label="Other case studies">{cases.filter(c=>c.slug!==slug).map(c=><a key={c.slug} href={`/work/${c.slug}`}><span>{c.name}</span><ArrowUpRight size={20} aria-hidden="true"/></a>)}</nav>
        <a className="cd-back" href={back}><ArrowLeft size={18} aria-hidden="true"/> Back to all case studies</a>
      </div>
    </main></div>;
}
