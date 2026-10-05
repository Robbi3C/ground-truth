import { useState, useRef } from 'react';
import { ArrowUpRight, ArrowRight, Compass, ChartNoAxesCombined, TrendingUp, RefreshCw, Cpu, Network } from 'lucide-react';
import '../styles/service-explorations.css';

const services = [
  { title: 'Strategy & advisory', lead: 'Set direction and make the big decisions with confidence.', body: 'I work with founders and leadership teams to test assumptions, assess strategic options and agree where to invest time, money and attention.' },
  { title: 'Business performance', lead: 'Improve the numbers that matter.', body: 'I identify what is holding back growth, margin, cash flow or productivity, then help set practical priorities and put accountability behind them.' },
  { title: 'Growth & new ventures', lead: 'Find the next opportunity worth backing.', body: 'From new markets to new products and businesses, I help test demand, build the commercial case and shape the route to launch and scale.' },
  { title: 'Business transformation', lead: 'Make a new direction work across the business.', body: 'I help reshape the operating model, align the leadership team and turn strategy into a delivery plan with clear ownership and measures of success.' },
  { title: 'AI & business adoption', lead: 'Put AI to work where it creates business value.', body: 'I assess opportunities across customer experience and operations, prioritise investment and help teams redesign workflows and adopt new ways of working.' },
  { title: 'Leadership & organisation', lead: 'Give the business room to grow beyond its current structure.', body: 'I help clarify leadership roles, strengthen accountability and move decisions to the right level, reducing bottlenecks and dependence on the founder.' },
];
const serviceIcons = [Compass, ChartNoAxesCombined, TrendingUp, RefreshCw, Cpu, Network];
const serviceActions = ['Discuss strategy', 'Discuss performance', 'Discuss growth', 'Discuss transformation', 'Discuss AI adoption', 'Discuss your organisation'];
const designs = [
  { id: 'editorial', name: 'Editorial', note: 'An open reading layout. All six services visible, with a clear hierarchy between the offer and the detail.' },
  { id: 'matrix', name: 'Colour study', note: 'Six distinct areas in a compact grid. Colour and typography carry the hierarchy.' },
  { id: 'focus', name: 'Focused', note: 'A connected service selector and reading panel. Explore with a click or the arrow keys.' },
  { id: 'cards', name: 'Icon cards', note: 'Six separate service cards. Consistent icons, clear reading order and a direct invitation for each.' },
];

export function ServiceExplorations() {
  // Focused is the selected live layout. Other render branches remain for future iteration.
  const [design] = useState(2);
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  function moveTab(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % services.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index + services.length - 1) % services.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = services.length - 1;
    else return;
    event.preventDefault(); setActive(next); tabRefs.current[next]?.focus();
  }
  const service = services[active];
  const ActiveIcon = serviceIcons[active];
  return <section id="help" className={`sx sx-${designs[design].id}`} aria-labelledby="services-title">
    {design === 0 && <div className="sx-editorial-layout wrap"><header className="sx-editorial-heading"><h2 id="services-title">Where I<br />can <mark>help.</mark></h2><a className="sx-contact" href="#contact">Let’s talk <ArrowUpRight size={18} aria-hidden="true" /></a></header><div className="sx-editorial-list">{services.map(item => <article key={item.title}><h3>{item.title}</h3><p className="sx-lead">{item.lead}</p><p className="sx-body">{item.body}</p></article>)}</div></div>}
    {design === 1 && <div className="sx-matrix-surface"><div className="wrap"><header className="sx-matrix-heading"><h2 id="services-title">Expertise for<br />your <mark>next move.</mark></h2><a className="sx-contact" href="#contact">Let’s talk <ArrowUpRight size={18} aria-hidden="true" /></a></header><div className="sx-matrix-grid">{services.map((item,index) => { const Icon = serviceIcons[index]; return <article key={item.title}><Icon className="sx-service-icon" size={30} strokeWidth={1.6} aria-hidden="true" /><h3>{item.title}</h3><p className="sx-lead">{item.lead}</p><p className="sx-body">{item.body}</p><a className="sx-service-link" href="#contact">{serviceActions[index]}<ArrowUpRight size={18} aria-hidden="true" /></a></article>; })}</div></div></div>}
    {design === 2 && <div className="sx-focus-surface"><div className="wrap"><h2 id="services-title">What needs<br />your <mark>attention?</mark></h2><div className="sx-focus-layout"><div className="sx-service-menu" role="tablist" aria-label="Explore services" aria-orientation="vertical">{services.map((item,index) => { const Icon = serviceIcons[index]; return <button key={item.title} ref={node => { tabRefs.current[index] = node; }} id={`sx-tab-${index}`} type="button" role="tab" aria-selected={active === index} tabIndex={active === index ? 0 : -1} aria-controls="sx-service-detail" onClick={() => setActive(index)} onKeyDown={event => moveTab(event,index)}><Icon className="sx-menu-icon" size={23} strokeWidth={1.6} aria-hidden="true" /><span>{item.title}</span><ArrowRight className="sx-menu-arrow" size={18} aria-hidden="true" /></button>; })}</div><article className="sx-service-detail" id="sx-service-detail" role="tabpanel" aria-labelledby={`sx-tab-${active}`} tabIndex={0}><div key={active} className="sx-detail-content"><div className="sx-detail-heading"><ActiveIcon size={36} strokeWidth={1.5} aria-hidden="true" /><h3>{service.title}</h3></div><p className="sx-lead">{service.lead}</p><p className="sx-body">{service.body}</p><a className="sx-contact" href="#contact">{serviceActions[active]}<ArrowUpRight size={18} aria-hidden="true" /></a></div></article></div></div></div>}
    {design === 3 && <div className="sx-cards-surface wrap"><header className="sx-matrix-heading"><h2 id="services-title">Where I can<br /><mark>make a difference.</mark></h2></header><div className="sx-card-grid">{services.map((item,index) => { const Icon = serviceIcons[index]; return <article className="sx-card" key={item.title}><Icon className="sx-service-icon" size={32} strokeWidth={1.6} aria-hidden="true" /><h3>{item.title}</h3><p className="sx-lead">{item.lead}</p><p className="sx-body">{item.body}</p><a className="sx-service-link" href="#contact">{serviceActions[index]}<ArrowUpRight size={18} aria-hidden="true" /></a></article>; })}</div></div>}
  </section>;
}

