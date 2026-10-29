import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Language, translations } from '@/data/translations';
import { JsonLd } from '@/components/JsonLd';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== 'es' && lang !== 'en') {
    return {};
  }

  const currentLang = lang as Language;
  const t = translations[currentLang];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adrianperez.dev';

  return {
    title: t.meta_title,
    description: t.meta_desc,
    alternates: {
      canonical: `${siteUrl}/${currentLang}`,
      languages: {
        es: `${siteUrl}/es`,
        en: `${siteUrl}/en`,
        'x-default': `${siteUrl}/es`,
      },
    },
    openGraph: {
      title: t.meta_title,
      description: t.meta_desc,
      url: `${siteUrl}/${currentLang}`,
      siteName: 'Adrián Pérez Portfolio',
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Adrián José Pérez Figueredo - Full-Stack Developer',
        },
      ],
      locale: currentLang === 'es' ? 'es_ES' : 'en_US',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta_title,
      description: t.meta_desc,
      images: [`${siteUrl}/og-image.png`],
    },
  };
}

export default async function LocalizedPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang !== 'es' && lang !== 'en') {
    notFound();
  }

  const currentLang = lang as Language;

  return (
    <>
      <JsonLd lang={currentLang} />
      <Navbar lang={currentLang} />
      <main>
        <Hero lang={currentLang} />
        <About lang={currentLang} />
        <Experience lang={currentLang} />
        <Skills lang={currentLang} />
      </main>
      <Footer lang={currentLang} />
    </>
  );
}

