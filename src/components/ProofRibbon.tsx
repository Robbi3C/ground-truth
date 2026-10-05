import '../styles/proof-ribbon.css';
// Illustrative design data. Replace with verified career figures before publication.
const stats = [
  { value: '20+', label: 'Years of experience', unit: 'Years', detail: 'of experience' },
  { value: '12', label: 'Countries worked across', unit: 'Countries', detail: 'worked across' },
  { value: '6', label: 'Industries', unit: 'Industries', detail: 'worked across' },
  { value: '15+', label: 'Businesses led or advised', unit: 'Businesses', detail: 'led or advised' },
];
export function ProofRibbon() {
  return <section className="proof-ribbon" id="proof" aria-label="Operating background">
    <div className="wrap"><dl className="proof-numbers">{stats.map(stat => <div key={stat.label}>
      <dt><span className="proof-unit">{stat.unit}</span><span className="proof-detail">{stat.detail}</span></dt>
      <dd>{stat.value.replace('+', '')}{stat.value.endsWith('+') && <span className="proof-plus">+</span>}</dd>
    </div>)}</dl></div>
  </section>;
}