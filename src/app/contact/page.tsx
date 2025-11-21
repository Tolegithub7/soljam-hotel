import type { Metadata } from 'next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact | Soljam Hotel',
  description: 'Get in touch with the Soljam Hotel team.'
};

export default function ContactPage() {
  return (
    <section className="container max-w-xl space-y-6 py-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Contact us</h1>
        <p className="text-muted-foreground text-sm">
          Have a question about your stay, events, or long-term bookings? Send us a message and
          we&apos;ll get back to you.
        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="name">
            Name
          </label>
          <Input id="name" placeholder="Jane Doe" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <Button type="submit">Send message</Button>
      </form>
    </section>
  );
}
