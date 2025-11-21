import { Metadata } from 'next';
import { HeroSection } from '@/components/layout/hero-section';

export const metadata: Metadata = {
  title: 'Soljam Hotel | Luxury Stays by the Sea',
  description:
    'Experience luxury and comfort at Soljam Hotel. Discover rooms, amenities, and exclusive offers for your next stay.',
};

export default function HomePage() {
  return <HeroSection />;
}
