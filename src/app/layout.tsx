import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { SiteNavbar } from '@/components/layout/navbar';
import { SiteFooter } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Soljam Hotel',
  description: 'Luxury hotel booking experience powered by Soljam Hotel.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        <SiteNavbar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
