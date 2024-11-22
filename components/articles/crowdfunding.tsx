import {useTranslations} from "next-intl";

export default function Crowdfunding() {
  const t = useTranslations();

  return (
    <article id="crowdfunding" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">{t('crowdfunding_header')}</h3>
      <p className="mt-10">
        {
          t.rich('crowdfunding_part_1', {
            a: (chunks) => <a href="http://kck.st/2ZV4ZHD" title={t('crowdfunding_link_title')}>{chunks}</a>
          })
        }
      </p>
      <div>
        <div className="mt-4 font-thin">
          {t('crowdfunding_support_title')}
        </div>
        <div className="mt-4">
          {
            t.rich('crowdfunding_support', {
              a1: (chunks) => <a href="https://wasns.org/-de-" title={t('crowdfunding_link_german_friends_title')} >{chunks}</a>,
              a2: (chunks) => <a href="https://wasns.org/-schweizer-freunde-und-freundinnen-" title={t('crowdfunding_link_swiss_friends_title')} >{chunks}</a>,
              a3: (chunks) => <a href="http://wasns.at" title={t('crowdfunding_link_austrian_friends_title')} >{chunks}</a>
            })
          }
        </div>
      </div>
    </article>
  );
}
