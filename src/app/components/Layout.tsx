import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <SessionProvider>
      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl">Dex Screener</h1>
        </header>
        <main className="flex-grow p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          Dex Screener © 2024
        </footer>
      </div>
    </SessionProvider>
  );
}
