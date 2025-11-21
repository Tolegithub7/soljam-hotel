import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-900 via-sky-950 to-background text-white">
      <div className="container flex min-h-[70vh] flex-col items-start justify-center gap-6 py-16">
        <div className="max-w-xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
            Welcome to Soljam Hotel
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Seaside luxury,
            <span className="block text-sky-300">designed for slow mornings.</span>
          </h1>
          <p className="text-sm text-sky-100 md:text-base">
            Wake up to ocean views, curated experiences, and unforgettable evenings. Discover
            contemporary suites, rooftop pools, and private beachfront access.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/book">Book your stay</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/rooms">Explore rooms</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
