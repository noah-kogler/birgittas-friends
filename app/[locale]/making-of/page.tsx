import React from 'react';
import { useTranslations } from 'next-intl';
import generateMetadataForPage, { LocaleLayoutProps } from '@/utils/generateMetadataForPage';
import type { Metadata } from 'next';
import LanguageSwitcher from "@/components/language-switcher";
import Header from "@/components/header";
import Echo360 from "@/components/echo360";
import MakingOfImage from "@/components/making-of-image";
import {Link} from "@/navigation";
import Footer from "@/components/footer";

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  return generateMetadataForPage('contact', props);
}

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="w-full min-h-full bg-img bg-imgcolor bg-imgheight bg-top max-w-img bg-no-repeat">
      <div className="mx-auto w-3/4 max-w-4xl">
        <LanguageSwitcher/>
        <Header/>
        <main className="mt-460px md:mt-560px text-center font-text text-xl">
          <article>
            <h3 className="font-header font-bold text-2.5xl">{t('making_of_title')}</h3>
            <p className="mt-20">{t('making_of_daniel')}</p>
            <Echo360 videoId="e3abf362-496e-4b7b-b8c8-d8dfd3d270f5"/>
          </article>
          <article>
            <p className="mt-20">{t('making_of_fotos')}</p>
            <MakingOfImage name="making-of-01.jpeg" alt="camera"/>
            <MakingOfImage name="making-of-02.jpeg" alt="huge story"/>
            <MakingOfImage name="making-of-03.jpeg" alt="filming"/>
            <MakingOfImage name="making-of-04.jpeg" alt="scene"/>
            <MakingOfImage name="making-of-05.jpeg" alt="hug"/>
            <MakingOfImage name="making-of-06.jpeg" alt="filming"/>
            <MakingOfImage name="making-of-07.jpeg" alt="post production"/>
          </article>
          <p className="mt-10">
            <Link href='/'>{t('back')}</Link>
          </p>
        </main>
        <Footer/>
      </div>
    </div>
  );
}
