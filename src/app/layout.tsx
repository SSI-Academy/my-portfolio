import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Nama Anda - Portofolio',
  description: 'Portofolio pribadi seorang Pengembang Web & Desainer UI/UX.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="font-open-sans antialiased">{children}</body>
    </html>
  );
}
