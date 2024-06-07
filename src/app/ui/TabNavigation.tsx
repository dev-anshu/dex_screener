"use client";
import { Button } from '@/components/ui/button';

export default function TabNavigation({ activeTab, setActiveTab, tabs }: any) {
  return (
    <div className="flex space-x-4">
      {tabs.map((tab:any) => (
        <Button key={tab} onClick={() => setActiveTab(tab)} className={`py-2 px-4 ${activeTab === tab ? 'bg-gray-300' : 'bg-gray-200'}`}>
          {tab}
        </Button>
      ))}
    </div>
  );
}
