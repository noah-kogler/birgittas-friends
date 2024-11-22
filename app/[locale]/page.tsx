import LanguageSwitcher from "@/components/language-switcher";
import Header from "@/components/header";
import Description from "@/components/articles/description";
import Trailer from "@/components/articles/trailer";
import NextScreening from "@/components/articles/next-screening";
import Steyr from "@/components/articles/steyr";
import Podcast from "@/components/articles/podcast";
import Freistadt from "@/components/articles/freistadt";
import Premiere from "@/components/articles/premiere";
import MakingOf from "@/components/articles/making-of";
import Credits from "@/components/articles/credits";
import Crowdfunding from "@/components/articles/crowdfunding";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full min-h-full bg-img bg-imgcolor bg-imgheight bg-top max-w-img bg-no-repeat">
      <div className="mx-auto w-3/4 max-w-4xl">
        <LanguageSwitcher/>
        <Header/>
        <main className="mt-460px md:mt-560px text-center font-text text-xl">
          <Description/>
          <Trailer/>
          <NextScreening/>
          <Steyr/>
          <Podcast/>
          <Freistadt/>
          <Premiere/>
          <MakingOf/>
          <Credits/>
          <Crowdfunding/>
        </main>
        <Footer/>
      </div>
    </div>
  );
}
