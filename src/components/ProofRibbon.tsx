import '../styles/proof-ribbon.css';
// Career figures and wording agreed with Robert Cowell.
const stats = [
  { value: '20+', label: 'Years in strategy & operations', unit: 'Years', detail: 'in strategy & operations' },
  { value: '11', label: 'Markets operated in', unit: 'Markets', detail: 'operated in' },
  { value: '5', label: 'Sectors', unit: 'Sectors', detail: '' },
  { value: '$200m', label: 'Operating cost responsibility', unit: 'Operating cost', detail: 'responsibility' },
];
export function ProofRibbon() {
  return <section className="proof-ribbon" id="proof" aria-label="Operating background">
    <div className="wrap"><dl className="proof-numbers">{stats.map(stat => <div key={stat.label}>
      <dt><span className="proof-unit">{stat.unit}</span>{stat.detail && <span className="proof-detail">{stat.detail}</span>}</dt>
      <dd>{stat.value.replace('+', '')}{stat.value.endsWith('+') && <span className="proof-plus">+</span>}</dd>
    </div>)}</dl></div>
  </section>;
}
