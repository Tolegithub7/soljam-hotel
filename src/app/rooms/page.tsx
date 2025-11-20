// app/book/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Navbar } from '@/components/layout/navbar';

export default function BookPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [isBooking, setIsBooking] = useState(false);

  // Get booking details from URL
  const roomId = searchParams.get('roomId');
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const guests = searchParams.get('guests');
  const totalPrice = searchParams.get('totalPrice');

  // Redirect if missing required params
  useEffect(() => {
    if (!roomId || !checkIn || !checkOut || !guests || !totalPrice) {
      router.push('/rooms');
    }
  }, [roomId, checkIn, checkOut, guests, totalPrice, router]);

  const handleBooking = async () => {
    if (status === 'unauthenticated') {
      router.push(`/auth/signin?callbackUrl=/book?${searchParams.toString()}`);
      return;
    }

    try {
      setIsBooking(true);
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomId,
          checkIn,
          checkOut,
          guests: parseInt(guests || '1'),
          totalPrice: parseFloat(totalPrice || '0'),
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Booking confirmed!',
          description: 'Your booking has been confirmed. Check your email for details.',
        });
        router.push('/my-bookings');
      } else {
        throw new Error(data.message || 'Failed to create booking');
      }
    } catch (error) {
      console.error('Booking failed:', error);
      toast({
        title: 'Booking failed',
        description: error instanceof Error ? error.message : 'Please try again',
        variant: 'destructive',
      });
    } finally {
      setIsBooking(false);
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Check-in</h3>
                  <p>{new Date(checkIn || '').toLocaleDateString()}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Check-out</h3>
                  <p>{new Date(checkOut || '').toLocaleDateString()}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Guests</h3>
                  <p>{guests}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Total Price</h3>
                  <p className="text-2xl font-bold">${totalPrice}</p>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={handleBooking}
                  disabled={isBooking}
                  className="w-full"
                  size="lg"
                >
                  {isBooking ? 'Processing...' : 'Confirm Booking'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}