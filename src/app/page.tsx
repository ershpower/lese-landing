import HeroBlock from '@/app/components/hero-block/hero-block';
import Experience from '@/app/components/experience/experience';
import { Portfolio } from '@/app/components/portfolio';
import { Whom } from '@/app/components/whom';
import { WorkSteps } from '@/app/components/work-steps/work-steps';
import Price from '@/app/components/price';
import Faq from '@/app/components/faq';
import Footer from '@/app/components/footer/footer';
import Menu from '@/app/components/menu';

export default function Home() {
  return (
    <div className={'lg:grid lg:grid-cols-5 2xl:grid-cols-9'}>
      <nav
        className={
          'relative col-span-1 mb-10 ml-10 mt-10 hidden lg:block 2xl:col-span-1'
        }
      >
        <Menu />
      </nav>
      <main className={'col-span-4 2xl:col-span-8'}>
        <HeroBlock />
        <Experience />
        <Portfolio />
        <Whom />
        <WorkSteps />
        <Price />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}
