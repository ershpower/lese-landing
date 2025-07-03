import Navigation from '@/app/components/navigation';
import Experience from '@/app/components/experience/experience';

export default function Home() {
  return (
    <div className="flex">
      <aside
        className={
          'min relative hidden h-full flex-shrink-0 flex-grow-0 basis-[230px] lg:block'
        }
      >
        <Navigation />
      </aside>
      <main className={'ml-10 mr-20 mt-20 flex-shrink'}>
        <Experience />
      </main>
    </div>
  );
}
