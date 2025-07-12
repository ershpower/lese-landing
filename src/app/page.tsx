import HeroBlock from '@/app/components/hero-block';
import Experience from '@/app/components/experience/experience';
import { Portfolio } from '@/app/components/portfolio';
import { Whom } from '@/app/components/whom';
import { WorkSteps } from '@/app/components/work-steps';

export default function Home() {
  return (
    <div>
      <main>
        <HeroBlock />
        <Experience />
        <Portfolio />
        <Whom />
        <WorkSteps />
      </main>
    </div>
  );
}
