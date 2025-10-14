import Link from 'next/link';
import CardLayout from './CardLayout';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="container mx-auto flex-1 px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Pair Programming List Component Activity
          </h1>
        </header>
        <section>
          <header className="mb-6 text-center">
            <h2 className="mb-1 text-xl font-semibold text-gray-800">
              Coffee Card Grid Layout
            </h2>
            <p className="text-gray-600">
              Create a set of cards and card layout component based on the
              following jsx.
            </p>
          </header>
          <CardLayout />
        </section>
      </main>
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-700">&copy; 2025 Spyz</p>
      </footer>
    </div>
  );
}
