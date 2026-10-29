import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/ToastContext';
import { ScrollProgress } from '@/components/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const viewport: Viewport = {
  themeColor: '#ec4899',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adrianperez.dev'),
  title: {
    default: 'Adrián José Pérez Figueredo | Full-Stack & Backend Developer',
    template: '%s',
  },
  description:
    'Desarrollador Full-Stack con más de 10 años de experiencia. Especialista en PHP/Laravel, Node.js, NestJS, React, Vue, Angular, PostgreSQL y MySQL.',
  keywords: [
    'Adrián Pérez',
    'Full-Stack Developer',
    'Backend Developer',
    'Laravel',
    'NestJS',
    'Node.js',
    'React',
    'PostgreSQL',
    'Venezuela',
    'Remote Developer',
  ],
  authors: [{ name: 'Adrián José Pérez Figueredo' }],
  creator: 'Adrián José Pérez Figueredo',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adrián José Pérez Figueredo - Full-Stack & Backend Developer',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.removeAttribute('data-theme');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans bg-background text-foreground transition-colors duration-300">
        <ToastProvider>
          <ScrollProgress />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
