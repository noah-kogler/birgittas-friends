import Image from "next/image";
import {useTranslations} from "next-intl";
import {Link} from "@/navigation";

export default function Steyr() {
  const t = useTranslations();

  return (
    <article id="steyr" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">
        {t('steyr_title')}
      </h3>
        <p className="mt-6">
          {t('steyr_text')}
        </p>
        <p className="">
          {t('steyr_cite_title')}&nbsp;
          <Link href='/contact'>{ t('steyr_link_title') }</Link>
          {t('steyr_cite_title_end')}
        </p>
        <p className="italic">
          {t('steyr_cite')}
        </p>
        <Image
          src={`/images/steyr.png`}
          alt="Steyr"
          width={896}
          height={417}
        />
    </article>
  );
}
