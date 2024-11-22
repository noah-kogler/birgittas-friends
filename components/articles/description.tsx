import {useTranslations} from "next-intl";
import {Link} from "@/navigation";

export default function Description() {
  const t = useTranslations();

  return (
    <article id="description">
      <p>{t('description_part1')}</p>
      <p>{t('description_part2')}</p>
      <p>
        {t('description_part3')}
        (<Link href='/contact'>{ t('contact_email') }</Link>).
      </p>
    </article>
  );
}
