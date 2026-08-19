import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BottomNav } from '@/components/layout/BottomNav';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Preloader } from '@/components/ui/Preloader';

export const metadata: Metadata = {
  title: 'TECHYUVA — Digital Campus of USICT',
  description: 'Official digital campus platform for University School of Information, Communication & Technology (USICT). Discover events, important notices, announcements, clubs, and student resources.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background text-foreground font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pb-16 md:pb-0">{children}</main>
          <Footer />
          <BottomNav />
        </SmoothScroll>
      </body>
    </html>
  );
}
