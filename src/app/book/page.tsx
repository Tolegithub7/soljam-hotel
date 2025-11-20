// app/book/page.tsx
import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Navbar } from '@/components/layout/navbar';

export default function BookPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Book Your Stay</h1>
            <p className="text-gray-600">Fill in the form below to make a reservation</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="check-in">
                    Check-in Date
                  </label>
                  <div className="relative">
                    <Input id="check-in" type="date" className="pl-10" />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="check-out">
                    Check-out Date
                  </label>
                  <div className="relative">
                    <Input id="check-out" type="date" className="pl-10" />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="adults">
                    Adults
                  </label>
                  <Select>
                    <SelectTrigger id="adults">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'Adult' : 'Adults'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="children">
                    Children
                  </label>
                  <Select>
                    <SelectTrigger id="children">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'Child' : 'Children'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="room-type">
                    Room Type
                  </label>
                  <Select>
                    <SelectTrigger id="room-type">
                      <SelectValue placeholder="Select room type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deluxe">Deluxe Room</SelectItem>
                      <SelectItem value="executive">Executive Suite</SelectItem>
                      <SelectItem value="presidential">Presidential Suite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="special-requests">
                    Special Requests
                  </label>
                  <Input id="special-requests" placeholder="Any special requests?" />
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full" size="lg">
                  Book Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}