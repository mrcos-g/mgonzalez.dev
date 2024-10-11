import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marcos Gonzalez',
  description: 'My personal portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-gray-700 leading-relaxed text-slate-400 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
