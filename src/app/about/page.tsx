// app/about/page.tsx
import { Navbar } from '@/components/layout/navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center bg-gray-100">
          <div className="container text-center z-10">
            <h1 className="text-5xl font-bold mb-6">About SolJam Hotel</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover the perfect blend of luxury, comfort, and exceptional service.
            </p>
          </div>
          <div className="absolute inset-0 bg-black/30" />
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, SolJam Hotel has been providing exceptional hospitality to guests from around the world. 
                What started as a small boutique hotel has grown into a renowned destination for travelers seeking 
                comfort, luxury, and memorable experiences.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                Our mission is to create unforgettable experiences for our guests by providing exceptional service, 
                luxurious accommodations, and personalized attention to detail. We strive to exceed expectations 
                and make every stay special.
              </p>

              <h2>Our Team</h2>
              <p>
                Our dedicated team of hospitality professionals is committed to ensuring your stay is nothing short of 
                perfect. From our front desk staff to our housekeeping team, everyone at SolJam Hotel is here to 
                make your visit exceptional.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Luxury Accommodations',
                  description: 'Elegant rooms and suites designed for your comfort and relaxation.'
                },
                {
                  title: 'Prime Location',
                  description: 'Centrally located with easy access to the city\'s main attractions.'
                },
                {
                  title: 'Exceptional Service',
                  description: 'Dedicated staff committed to making your stay memorable.'
                }
              ].map((feature, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}