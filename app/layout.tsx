import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ThemeProvider from '@/components/shared/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Professional Portfolio',
  description:
    'Showcasing skills, projects, and contact information with performance-first Next.js.',
  openGraph: {
    title: 'Professional Portfolio',
    description:
      'Showcasing skills, projects, and contact information with performance-first Next.js.',
    url: 'https://example.com',
    siteName: 'Portfolio',
    images: [
      {
        url: '/images/avatar.png',
        width: 800,
        height: 600,
        alt: 'Profile'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Portfolio',
    description:
      'Showcasing skills, projects, and contact information with performance-first Next.js.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-bgLight text-textLight dark:bg-bgDark dark:text-textDark`}>
        <ThemeProvider>
          <Header />
          <div className="container">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
