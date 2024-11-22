import {useTranslations} from "next-intl";

export default function Podcast() {
  const t = useTranslations();

  return (
    <article id="podcast" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">{t('podcast_title')}</h3>
      <p className="mt-6">
        {t('podcast_text')}
      </p>
      <p>
        <iframe
          src="https://anchor.fm/erwan-borek/embed/episodes/17---Birgittas-Friends-Talk-mit-Christian-Kogler-e17un43/a-a6jhlsj"
          height="102px"
          width="400px"
          frameBorder="0"
          scrolling="no"
          className="mx-auto" />
      </p>
      <p>
        {
          t.rich('podcast_text2', {
            a1: (chunks) => <a href="https://podcasts.apple.com/at/podcast/filmseiterl/id1519078125">{chunks}</a>,
            a2: (chunks) => <a href="https://open.spotify.com/episode/333tA0RY0qfmTFG4avLB7X?si=WlT6fACbQOiSWttyGh4Zpw&dl_branch=1">{chunks}</a>,
        })
        }
      </p>
    </article>
  );
}
