import { MarkTwo } from './pages/MarkTwo';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { WorkPage } from './pages/WorkPage';

export default function App() {
  const path = location.pathname.replace(/\/$/, '');
  const slug = path.startsWith('/work/') ? path.slice(6) : new URLSearchParams(location.search).get('case');
  return slug ? <CaseStudyPage slug={slug}/> : path === '/work' ? <WorkPage/> : <MarkTwo />;
}
