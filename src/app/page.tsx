import { Metadata } from 'next';
import { translations } from '@/data/translations';
import { JsonLd } from '@/components/JsonLd';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adrianperez.dev';
const t = translations.es;

export const metadata: Metadata = {
  title: t.meta_title,
  description: t.meta_desc,
  alternates: {
    canonical: `${siteUrl}/es`,
    languages: {
      es: `${siteUrl}/es`,
      en: `${siteUrl}/en`,
      'x-default': `${siteUrl}/es`,
    },
  },
  openGraph: {
    title: t.meta_title,
    description: t.meta_desc,
    url: `${siteUrl}/es`,
    siteName: 'Adrián Pérez Portfolio',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Adrián José Pérez Figueredo - Full-Stack Developer',
      },
    ],
    locale: 'es_ES',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: t.meta_title,
    description: t.meta_desc,
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootPage() {
  return (
    <>
      <JsonLd lang="es" />
      <Navbar lang="es" />
      <main>
        <Hero lang="es" />
        <About lang="es" />
        <Experience lang="es" />
        <Skills lang="es" />
      </main>
      <Footer lang="es" />
    </>
  );
}

