import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'de'];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale || 'en';

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}/common.json`)).default,
  };
});
