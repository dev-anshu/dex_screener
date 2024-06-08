"use client";
import { Button } from '@/components/ui/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-gray-800 text-white flex flex-col items-center p-4">
      <div className="w-full mb-4">
        <ConnectButton chainStatus="icon"/>
      </div>
      <Button className="bg-gray-700 w-full py-2 rounded mb-4">Dex Dashboard</Button>
      <Button className="bg-gray-700 w-full py-2 rounded">Logout</Button>
    </div>
  );
}
