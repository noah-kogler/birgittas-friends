'use client';

import React from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {Link, usePathname} from "@/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations();

  return (
    <div className="float-right mt-2">
      <Link href={pathname} locale={currentLocale === 'en' ? 'de' : 'en'} className="underline">
        {t('change-locale')}
      </Link>
    </div>
  );
}
