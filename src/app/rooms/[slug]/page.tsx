// app/rooms/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/navbar';

const getRoom = (slug: string) => {
  const rooms = [
    {
      id: '1',
      title: 'Deluxe Room',
      description: 'Spacious room with a king-size bed and city view',
      price: 199,
      size: '45 m²',
      maxGuests: 2,
      amenities: ['Free WiFi', 'Air Conditioning', 'TV', 'Mini Bar', 'Safe', 'Hairdryer'],
      image: '/room-1.jpg'
    },
    // Add more rooms as needed
  ];

  return rooms.find(room => room.id === slug) || null;
};

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  const room = getRoom(params.slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="h-96 bg-gray-200 rounded-lg mb-6"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-40 bg-gray-200 rounded"></div>
                <div className="h-40 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">{room.title}</h1>
              <p className="text-2xl font-semibold text-primary mb-6">${room.price} <span className="text-base font-normal text-gray-600">/ night</span></p>
              
              <p className="text-gray-700 mb-8">{room.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="text-sm text-gray-500">Size</p>
                  <p className="font-medium">{room.size}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Max Guests</p>
                  <p className="font-medium">{room.maxGuests}</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {room.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full" asChild>
                <a href="/book">Book Now</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}