// app/blog/page.tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/navbar';

const blogPosts = [
  {
    id: '1',
    title: 'Top 10 Must-Visit Attractions Near Our Hotel',
    excerpt: 'Discover the best places to visit during your stay at SolJam Hotel.',
    date: 'May 15, 2023',
    readTime: '5 min read',
    category: 'Travel Tips'
  },
  {
    id: '2',
    title: 'The Ultimate Guide to Local Cuisine',
    excerpt: 'Explore the delicious flavors of our city with our food guide.',
    date: 'April 28, 2023',
    readTime: '7 min read',
    category: 'Food & Dining'
  },
  {
    id: '3',
    title: 'Wellness and Relaxation at SolJam Spa',
    excerpt: 'Discover our range of spa treatments designed to rejuvenate your mind and body.',
    date: 'April 10, 2023',
    readTime: '4 min read',
    category: 'Wellness'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600">Stay updated with the latest news and stories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <CardHeader>
                  <span className="text-sm font-medium text-primary">{post.category}</span>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
      </main>
    </div>
  );
}