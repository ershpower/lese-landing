import HeroBlock from '@/app/components/hero-block/hero-block';
import Experience from '@/app/components/experience/experience';
import { Portfolio } from '@/app/components/portfolio';
import { Whom } from '@/app/components/whom';
import { WorkSteps } from '@/app/components/work-steps/work-steps';
import Price from '@/app/components/price';
import Faq from '@/app/components/faq';
import Footer from '@/app/components/footer';

export default function Home() {
  return (
    <div>
      <main>
        <HeroBlock />
        <Experience />
        <Portfolio />
        <Whom />
        {/*<WorkSteps />*/}
        {/*<Price />*/}
        {/*<Faq />*/}
        {/*<Footer />*/}
      </main>
    </div>
  );
}
