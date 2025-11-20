// app/blog/[slug]/page.tsx
import { Calendar, Clock, Facebook, Linkedin, Share2, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/navbar';

const getBlogPost = (slug: string) => {
  const posts = [
    {
      id: '1',
      title: 'Top 10 Must-Visit Attractions Near Our Hotel',
      content: `
        <p>When you stay at SolJam Hotel, you're perfectly positioned to explore the best our city has to offer. Here are our top 10 must-visit attractions:</p>
        
        <h3>1. City Center Park</h3>
        <p>Just a 5-minute walk from our hotel, this urban oasis offers beautiful walking trails, picnic areas, and stunning city views.</p>
        
        <h3>2. The Metropolitan Museum</h3>
        <p>Art lovers will appreciate the extensive collection of modern and contemporary art, just a short drive away.</p>
        
        <p>And many more exciting places to explore during your stay with us!</p>
      `,
      date: 'May 15, 2023',
      readTime: '5 min read',
      category: 'Travel Tips',
      author: 'Jane Smith',
      authorRole: 'Travel Expert'
    }
  ];

  return posts.find(post => post.id === slug) || null;
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <article>
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center text-gray-500 text-sm mb-8">
              <div className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="border-t border-b border-gray-100 py-6 my-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.authorRole}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Enjoyed this article?</h3>
              <p className="text-gray-600 mb-6">Share it with your friends or leave a comment below.</p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline">Previous Post</Button>
                <Button>Next Post</Button>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
```__