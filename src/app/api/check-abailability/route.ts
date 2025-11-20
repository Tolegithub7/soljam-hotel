// app/api/check-availability/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { roomId, checkIn, checkOut, guests } = await req.json();

    // Validate input
    if (!roomId || !checkIn || !checkOut || !guests) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    // Check for existing bookings that overlap
    const conflictingBookings = await prisma.booking.findMany({
      where: {
        roomId,
        OR: [
          {
            checkIn: { lte: new Date(checkOut) },
            checkOut: { gte: new Date(checkIn) },
          },
        ],
        status: { not: 'cancelled' },
      },
    });

    if (conflictingBookings.length > 0) {
      return NextResponse.json(
        { available: false, message: 'Room not available for the selected dates' },
        { status: 200 }
      );
    }

    // Get room details for price calculation
    const room = await prisma.room.findUnique({
      where: { id: roomId },
    });

    if (!room) {
      return new NextResponse('Room not found', { status: 404 });
    }

    // Calculate total price
    const nights = Math.ceil(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)
    );
    const totalPrice = room.price * nights;

    return NextResponse.json({
      available: true,
      price: room.price,
      totalPrice,
      nights,
      room,
    });
  } catch (error) {
    console.error('Availability check failed:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}