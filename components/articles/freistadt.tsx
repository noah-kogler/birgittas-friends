import {useTranslations} from "next-intl";
import Image from "next/image";

export default function Freistadt() {
  const t = useTranslations();

  return (
    <article id="freistadt" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">
        {
          t.rich('freistadt_title', {
            a: (chunks) => <a href="https://www.filmfestivalfreistadt.at/2021/?site=movie&pId=3340">{chunks}</a>
          })
        }
      </h3>
      <p className="mt-6">
        {t('freistadt_text')}
      </p>
      <Image
        src="/images/freistadt.jpg"
        alt="Freistadt"
        width={896}
        height={597}
      />
    </article>
  );
}
