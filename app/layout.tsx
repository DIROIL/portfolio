import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';
import '../i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Keumouo Tadaha Diroil James - Portfolio',
  description: 'Computer Engineer | Fullstack Developer | AI Integrator',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="container mx-auto p-4 md:p-8 max-w-4xl">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}