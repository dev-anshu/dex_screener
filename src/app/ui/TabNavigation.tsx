"use client";
import { Button } from '@/components/ui/button';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];
}


export default function TabNavigation({ activeTab, setActiveTab, tabs }: TabNavigationProps) {
  return (
    <div className="flex space-x-4">
      {tabs.map((tab:any) => (
        <Button 
          key={tab} onClick={() => setActiveTab(tab)} 
          className={`py-2 px-4 ${activeTab === tab ? 'bg-gray-300' : 'bg-gray-200'}`}>
          {tab}
        </Button>
      ))}
    </div>
  );
}
