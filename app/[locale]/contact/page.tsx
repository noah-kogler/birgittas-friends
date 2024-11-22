import React from 'react';
import { useTranslations } from 'next-intl';
import generateMetadataForPage, { LocaleLayoutProps } from '@/utils/generateMetadataForPage';
import type { Metadata } from 'next';
import LanguageSwitcher from "@/components/language-switcher";
import Header from "@/components/header";
import {Link} from "@/navigation";
import ContactFormWithCaptcha from "@/components/ContactFormWithCaptcha";

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  return generateMetadataForPage('contact', props);
}

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="bg-img min-h-full w-full max-w-img bg-imgcolor bg-imgheight bg-top bg-no-repeat">
      <div className="mx-auto w-3/4 max-w-4xl">
        <LanguageSwitcher />
        <Header />
        <main className="mt-460px text-center font-text text-xl md:mt-560px">
          <ContactFormWithCaptcha />
          <p className="mt-10">
            <Link href="/">{t('back')}</Link>
          </p>
        </main>
        <footer className="mt-20 pb-20 text-center font-text text-sm" />
      </div>
    </div>
  );
}
