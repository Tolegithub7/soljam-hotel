import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Soljam Hotel',
  description: 'Learn more about Soljam Hotel, our story, and what makes us unique.'
};

export default function AboutPage() {
  return (
    <section className="container max-w-3xl space-y-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">About Soljam Hotel</h1>
      <p className="text-muted-foreground">
        Soljam Hotel is a contemporary seaside escape designed for travelers who value calm,
        craftsmanship, and genuine hospitality. This full-stack demo app showcases a modern hotel
        booking experience built with Next.js, Prisma, and a headless CMS.
      </p>
    </section>
  );
}
