import {useTranslations} from "next-intl";
import {Link} from "@/navigation";

export default function MakingOf() {
  const t = useTranslations();

  return (
    <article id="making-of" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">{t('making_of_title')}</h3>
      <p className="mt-6">
        {t('making_of_text')}<Link href='/making-of'>{ t('making_of_link') }</Link>!
      </p>
    </article>
  );
}
