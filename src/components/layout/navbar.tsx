// components/layout/navbar.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-primary">
          SolJam Hotel
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/rooms" className="text-sm font-medium hover:text-primary">
            Rooms
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
          <Button asChild>
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}