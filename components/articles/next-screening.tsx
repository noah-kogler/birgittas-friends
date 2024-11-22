import {useTranslations} from "next-intl";

export default function NextScreening() {
  const t = useTranslations();

  return (
    <article id="next-screening" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">{t('next_screening_title')}</h3>
      <p className="mt-6">
        {
          t.rich('next_screening_text', {
              span1: (chunks) => <span className="font-bold">{chunks}</span>,
              span2: (chunks) => <span className="font-bold">{chunks}</span>,
              a: (chunks) => <a href="https://www.daskino.at/" className="font-bold">{chunks}</a>
          })
        }
      </p>
      <p><a href="https://www.daskino.at/film/birgittas-friends">{t('next_screening_tickets')}</a></p>
    </article>
  );
}
