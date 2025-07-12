import HeroBlock from '@/app/components/hero-block';
import Experience from '@/app/components/experience/experience';
import { Portfolio } from '@/app/components/portfolio';

export default function Home() {
  return (
    <div>
      <main>
        <HeroBlock />
        <Experience />
        <Portfolio />
      </main>
    </div>
  );
}
