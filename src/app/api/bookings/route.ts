// app/api/bookings/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { roomId, checkIn, checkOut, guests, totalPrice } = await req.json();

    // Validate input
    if (!roomId || !checkIn || !checkOut || !guests || !totalPrice) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    // Check if room is still available
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
        { success: false, message: 'Room is no longer available for the selected dates' },
        { status: 400 }
      );
    }

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        roomId,
        userId: session.user.id,
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        guests: parseInt(guests),
        totalPrice: parseFloat(totalPrice),
        status: 'confirmed',
      },
      include: {
        room: true,
      },
    });

    // TODO: Send confirmation email
    // await sendConfirmationEmail(session.user.email, booking);

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    console.error('Booking creation failed:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}