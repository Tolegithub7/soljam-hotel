// app/page.tsx
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center bg-gray-100">
          <div className="container text-center z-10">
            <h1 className="text-5xl font-bold mb-6">Welcome to SolJam Hotel</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience luxury and comfort in the heart of the city. Book your stay today and enjoy world-class amenities.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/book">Book Now</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/rooms">View Rooms</a>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/30" />
        </section>

        {/* Featured Rooms */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow-md">
                  <div className="h-64 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Deluxe Room {i}</h3>
                    <p className="text-gray-600 mb-4">Luxurious room with stunning views</p>
                    <Button className="w-full" asChild>
                      <a href={`/rooms/room-${i}`}>View Details</a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SolJam Hotel</h3>
              <p>Luxury redefined, comfort guaranteed.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/rooms" className="hover:underline">Rooms</a></li>
                <li><a href="/blog" className="hover:underline">Blog</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <p>123 Hotel Street</p>
              <p>City, Country</p>
              <p>Email: info@soljamhotel.com</p>
              <p>Phone: +1 234 567 890</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} SolJam Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}