// app/rooms/[slug]/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DatePicker } from '@/components/ui/date-picker';
import { useToast } from '@/components/ui/use-toast';
import { Navbar } from '@/components/layout/navbar';

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState(1);
  const [isChecking, setIsChecking] = useState(false);

  const checkAvailability = async () => {
    if (!checkIn || !checkOut) {
      toast({
        title: 'Please select check-in and check-out dates',
        variant: 'destructive',
      });
      return;
    }

    if (checkIn >= checkOut) {
      toast({
        title: 'Check-out date must be after check-in date',
        variant: 'destructive',
      });
      return;
    }

    try {
      setIsChecking(true);
      const response = await fetch('/api/check-availability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomId: params.slug,
          checkIn: checkIn.toISOString(),
          checkOut: checkOut.toISOString(),
          guests,
        }),
      });

      const data = await response.json();

      if (data.available) {
        router.push(
          `/book?roomId=${params.slug}` +
            `&checkIn=${checkIn.toISOString()}` +
            `&checkOut=${checkOut.toISOString()}` +
            `&guests=${guests}` +
            `&totalPrice=${data.totalPrice}`
        );
      } else {
        toast({
          title: 'Room not available',
          description: data.message || 'Please select different dates',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error checking availability:', error);
      toast({
        title: 'Error',
        description: 'Failed to check availability. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Room details */}
            {/* ... existing room details ... */}

            {/* Booking form */}
            <div className="bg-white p-6 rounded-lg shadow-md h-fit sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Book Your Stay</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Check-in</label>
                  <DatePicker
                    selected={checkIn}
                    onSelect={setCheckIn}
                    placeholderText="Select check-in date"
                    minDate={new Date()}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Check-out</label>
                  <DatePicker
                    selected={checkOut}
                    onSelect={setCheckOut}
                    placeholderText="Select check-out date"
                    minDate={checkIn || new Date()}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Guests</label>
                  <Input
                    type="number"
                    min="1"
                    max={room?.maxGuests || 4}
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                    className="w-full"
                  />
                </div>

                <Button
                  onClick={checkAvailability}
                  disabled={isChecking}
                  className="w-full"
                >
                  {isChecking ? 'Checking...' : 'Check Availability'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}