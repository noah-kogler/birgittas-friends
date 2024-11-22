import {useTranslations} from "next-intl";
import Image from "next/image";

export default function Premiere() {
  const t = useTranslations();

  return (
    <article id="premiere" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">{t('premiere_title')}</h3>
      <p className="mt-6">
        {
          t.rich('premiere_text', {
            a: (chunks) => <a href="https://www.crossingeurope.at/film/birgittas_friends">{chunks}</a>
          })
        }
      </p>
      <Image
        src="/images/crossing_europe.jpg"
        alt="Crossing Europe"
        width={896}
        height={597}
      />
    </article>
  );
}
