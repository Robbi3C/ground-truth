import { useId, useRef, useState, type FormEvent } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import '../../styles/contact.css';

const ENDPOINT = 'https://formspree.io/f/mljjoebo';
const EMAIL = 'rob@groundtruthconsulting.co';
const LINKEDIN = 'https://www.linkedin.com/in/robertcowell/';
const topics = ['Ongoing advisory', 'A defined project', 'Fractional or interim', 'Not sure yet'];

type Values = { name: string; email: string; company: string; topic: string; message: string };
type Errors = Partial<Record<'name' | 'email', string>>;
type Status = 'idle' | 'sending' | 'sent' | 'error';

const empty: Values = { name: '', email: '', company: '', topic: '', message: '' };
// Kept outside the component so a half-written enquiry survives closing and reopening the panel.
let draft: Values = { ...empty };

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (!v.name.trim()) errors.name = 'Please add your name.';
  if (!v.email.trim()) errors.email = 'Please add your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) errors.email = 'Please check your email address.';
  return errors;
}

export function ContactForm({ onDone, doneLabel = 'Close' }: { onDone?: () => void; doneLabel?: string }) {
  const id = useId();
  const [values, setValues] = useState<Values>(draft);
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [sentName, setSentName] = useState('');
  const honeypot = useRef<HTMLInputElement>(null);
  const fields = { name: useRef<HTMLInputElement>(null), email: useRef<HTMLInputElement>(null) };

  function update(key: keyof Values, value: string) {
    const next = { ...values, [key]: value };
    draft = next;
    setValues(next);
    if (attempted) setErrors(validate(next));
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setAttempted(true);
    const found = validate(values);
    setErrors(found);
    const first = (Object.keys(found) as (keyof Errors)[])[0];
    if (first) { fields[first].current?.focus(); return; }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, _subject: `New enquiry from ${values.name.trim()}`, _gotcha: honeypot.current?.value ?? '' }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSentName(values.name.trim().split(/\s+/)[0]);
      draft = { ...empty };
      setValues(draft);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') return <div className="ct-sent" role="status">
    <p className="ct-sent-title">Thanks, {sentName}.</p>
    <p>I’ll be in touch within one working day.</p>
    {onDone && <button type="button" className="ct-submit ct-done" onClick={onDone}>{doneLabel} <ArrowRight size={18} aria-hidden="true" /></button>}
  </div>;

  const describe = (key: keyof Errors) => errors[key] ? `${id}-${key}-error` : undefined;

  return <form className="ct-form" onSubmit={submit} noValidate>
    <div className="ct-field">
      <label htmlFor={`${id}-name`}>Name</label>
      <input ref={fields.name} id={`${id}-name`} name="name" type="text" autoComplete="name" value={values.name} onChange={e => update('name', e.target.value)} aria-invalid={!!errors.name} aria-describedby={describe('name')} />
      {errors.name && <p className="ct-error" id={`${id}-name-error`}>{errors.name}</p>}
    </div>
    <div className="ct-field">
      <label htmlFor={`${id}-email`}>Work email</label>
      <input ref={fields.email} id={`${id}-email`} name="email" type="email" inputMode="email" autoComplete="email" autoCapitalize="off" spellCheck={false} value={values.email} onChange={e => update('email', e.target.value)} aria-invalid={!!errors.email} aria-describedby={describe('email')} />
      {errors.email && <p className="ct-error" id={`${id}-email-error`}>{errors.email}</p>}
    </div>
    <div className="ct-field">
      <label htmlFor={`${id}-company`}>Company <span>(optional)</span></label>
      <input id={`${id}-company`} name="company" type="text" autoComplete="organization" value={values.company} onChange={e => update('company', e.target.value)} />
    </div>
    <fieldset className="ct-field ct-topics">
      <legend>What would you like help with? <span>(optional)</span></legend>
      <div>{topics.map(topic => <label key={topic} className="ct-topic">
        <input type="radio" name="topic" value={topic} checked={values.topic === topic} onChange={() => update('topic', topic)} />
        <span>{topic}</span>
      </label>)}</div>
    </fieldset>
    <div className="ct-field">
      <label htmlFor={`${id}-message`}>What’s going on? <span>(optional)</span></label>
      <textarea id={`${id}-message`} name="message" rows={4} placeholder="A sentence or two is plenty" value={values.message} onChange={e => update('message', e.target.value)} />
    </div>
    <input ref={honeypot} className="ct-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    {status === 'error' && <p className="ct-error ct-send-error" role="alert">Your message didn’t send. Please try again, or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>}
    <button type="submit" className="ct-submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send'} <ArrowRight size={18} aria-hidden="true" /></button>
    <p className="ct-alt">Or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> <span aria-hidden="true">·</span> <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a></p>
  </form>;
}
