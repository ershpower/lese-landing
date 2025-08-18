import HeroBlock from '@/app/components/hero-block/hero-block';
import Diplom2x from '@/app/components/experience/diplom2x';
import { Portfolio } from '@/app/components/portfolio';
import { Whom } from '@/app/components/whom';
import { WorkSteps } from '@/app/components/work-steps/work-steps';
import Price from '@/app/components/price';
import Faq from '@/app/components/faq';
import Footer from '@/app/components/footer/footer';
import Menu from '@/app/components/menu';

export default function Home() {
  return (
    <div className={'lg:grid lg:grid-cols-5 2xl:grid-cols-6'}>
      <nav
        className={
          'relative col-span-1 mb-10 ml-10 mt-10 hidden lg:block 2xl:col-span-1'
        }
      >
        <Menu />
      </nav>
      <main className={'col-span-4 2xl:col-span-5'}>
        <HeroBlock />
        <Diplom2x />
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
