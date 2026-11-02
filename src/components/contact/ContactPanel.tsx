import { useEffect, useRef, useState, type ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ContactForm } from './ContactForm';

const isContactPath = (path: string) => path.replace(/\/$/, '') === '/contact';

/* Any same-site link to /contact opens the panel instead of navigating, so the
   visitor keeps their place. Modified clicks and direct visits still reach the page. */
export function ContactPanelProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link || link.target === '_blank' || link.origin !== location.origin || !isContactPath(link.pathname)) return;
      event.preventDefault();
      if (isContactPath(location.pathname)) document.querySelector<HTMLInputElement>('.ct-page input')?.focus();
      else setOpen(true);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return <>
    {children}
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="ct-overlay" />
        <Dialog.Content ref={panel} className="ct-panel" aria-describedby="ct-panel-intro" onOpenAutoFocus={event => {
          // Start in the first field with a mouse; on touch devices that would raise the keyboard over the intro.
          event.preventDefault();
          const first = panel.current?.querySelector<HTMLInputElement>('.ct-form input');
          if (first && matchMedia('(pointer: fine)').matches) first.focus();
          else panel.current?.focus();
        }}>
          <div className="ct-panel-head">
            <Dialog.Title className="ct-title">Let’s talk</Dialog.Title>
            <Dialog.Close className="ct-close" aria-label="Close"><X size={22} aria-hidden="true" /></Dialog.Close>
          </div>
          <Dialog.Description id="ct-panel-intro" className="ct-intro">Tell me a little about your business and what you’re working on, and I’ll get back to you.</Dialog.Description>
          <ContactForm onDone={() => setOpen(false)} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </>;
}
