// app/rooms/page.tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/navbar';

const rooms = [
  {
    id: 1,
    title: 'Deluxe Room',
    description: 'Spacious room with a king-size bed and city view',
    price: 199,
    image: '/room-1.jpg'
  },
  {
    id: 2,
    title: 'Executive Suite',
    description: 'Luxurious suite with separate living area and balcony',
    price: 299,
    image: '/room-2.jpg'
  },
  {
    id: 3,
    title: 'Presidential Suite',
    description: 'Ultimate luxury with premium amenities and panoramic views',
    price: 499,
    image: '/room-3.jpg'
  }
];

export default function RoomsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-12 text-center">Our Rooms & Suites</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden">
                <div className="h-64 bg-gray-200"></div>
                <CardHeader>
                  <CardTitle>{room.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <p className="text-2xl font-bold">${room.price} <span className="text-sm font-normal text-gray-500">/ night</span></p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <a href={`/rooms/${room.id}`}>View Details</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}