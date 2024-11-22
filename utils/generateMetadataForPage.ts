import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export type LocaleLayoutProps = {
  params: { locale: string };
};

export default async function generateMetadataForPage(
  path: string,
  props: LocaleLayoutProps,
): Promise<Metadata> {
  const resolvedParams = await props.params;
  const t = await getTranslations({ locale: resolvedParams.locale });
  const alternateLocale = resolvedParams.locale === 'en' ? 'de' : 'en';

  return {
    title: t('title'),
    openGraph: {
      title: t('title'),
      type: 'video.movie',
      images: '/images/sunset.png'
    },
    description: t('meta_description'),
    authors: { name: t('meta_author') },
    alternates: {
      languages: { [alternateLocale]: `/${alternateLocale}/${path}` },
    },
  };
}
