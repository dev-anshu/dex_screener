"use client";
import { Button } from '@/components/ui/button';

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-gray-800 text-white flex flex-col items-center p-4">
      <div className="w-24 h-24 bg-gray-500 rounded-full mb-4"></div>
      <Button className="bg-gray-700 w-full py-2 rounded mb-4">Wallet /ens</Button>
      <Button className="bg-gray-700 w-full py-2 rounded mb-4">Dex Dashboard</Button>
      <Button className="bg-gray-700 w-full py-2 rounded">Logout</Button>
    </div>
  );
}
