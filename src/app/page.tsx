import Navigation from '@/app/components/navigation';
import Experience from '@/app/components/experience/experience';
import MyWorks from '@/app/components/my-works';
import WorkSteps from '@/app/components/work-steps';
import { Prices } from '@/app/components/prices';
import { Whom } from '@/app/components/whom/whom';
import HeroBlock from '@/app/components/hero-block';
import Faq from '@/app/components/faq/faq';

export default function Home() {
  return (
    <div className="flex">
      <aside
        className={
          'min relative hidden h-auto flex-shrink-0 flex-grow-0 basis-[230px] xl:block'
        }
      >
        <Navigation />
      </aside>
      <main className={'ml-10 mr-20 mt-20 flex-shrink'}>
        <HeroBlock />
        <Experience />
        <MyWorks />
        <Whom />
        <WorkSteps />
        <Prices />
        <Faq />
      </main>
    </div>
  );
}
