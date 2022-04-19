import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="pt-16 pb-12 bg-white">
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
            WorldSkills Germany
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight">
            Bundesleistungszentrum der Softwareentwicklung
          </h1>
          <p className="mt-2 text-xl text-gray-500">
            Diese Webseite ist derzeit in Wartung
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
