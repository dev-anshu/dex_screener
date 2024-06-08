"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Hero Section */}
      <header className="bg-customPrimary text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dex Screener</h1>
          <Link href="/signin">
            <Button className="bg-white text-customPrimary font-bold">Login</Button>
          </Link>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto flex-grow p-6">
        {/* Hero Section */}
        <section className="text-center my-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to Dex Screener</h2>
          <p className="text-lg mb-8">Monitor your data and stay on top of your performance with our advanced dashboard.</p>
          <Link href="/signup">
            <Button className="bg-customPrimary text-white px-6 py-2 font-bold">Get Started</Button>
          </Link>
        </section>
        
        {/* Features Section */}
        <section className="my-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Feature One</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Feature one description goes here.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feature Two</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Feature two description goes here.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feature Three</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Feature three description goes here.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-customPrimary text-white p-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
