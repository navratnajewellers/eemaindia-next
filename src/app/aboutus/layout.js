import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import '../styles/abouts.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'About Us | EEMA India',
  description: 'Event & Entertainment | Management Association',
};

export default function AboutUsLayout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
    </div>
  );
}
