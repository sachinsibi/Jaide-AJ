import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JAIDE — Barbados Civil Law Intelligence',
  description:
    'JAIDE helps you understand your civil law position in Barbados. Free legal information across tenancy, employment, motor accidents, contracts, and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
