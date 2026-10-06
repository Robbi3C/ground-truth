import '../styles/ground-truth.css';



export function GroundTruthBrand({ href = '#top' }: { href?: string }) {
  return <a className="gt-brand" href={href} aria-label="Ground Truth, Independent Advisory">
    <span className="gt-name gt-font-plusjakartasans">ground truth</span>
    <span className="gt-stop" aria-hidden="true" />
    <span className="gt-descriptor">Independent Advisory</span>
  </a>;
}





