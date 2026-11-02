import { MarkTwo } from './pages/MarkTwo';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { WorkPage } from './pages/WorkPage';
import { ContactPage } from './pages/ContactPage';
import { ContactPanelProvider } from './components/contact/ContactPanel';

function Page() {
  const path = location.pathname.replace(/\/$/, '');
  const slug = path.startsWith('/work/') ? path.slice(6) : new URLSearchParams(location.search).get('case');
  if (slug) return <CaseStudyPage slug={slug}/>;
  if (path === '/work') return <WorkPage/>;
  if (path === '/contact') return <ContactPage/>;
  return <MarkTwo />;
}

export default function App() {
  return <ContactPanelProvider><Page /></ContactPanelProvider>;
}
