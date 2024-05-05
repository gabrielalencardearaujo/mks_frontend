import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MKS Sistemas',
  description: 'Teste tenico para vaga de Frontend Junior',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
