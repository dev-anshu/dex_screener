"use client";
import { useState } from 'react';
import Sidebar from '../ui/Sidebar'; 
import TabNavigation from '../ui/TabNavigation';
import SelectDropdown from '../ui/SelectDropdown';
import TableList from '../ui/TableList';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Uniswap', 'Pancakeswap'];

  const themeOptions = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
  ];

  const data = [
    { token: 'MEV/SOL', name: 'SOLANA MEV AI', price: '$0.000678', txns: '25,469', volume: '$9.0M', makers: '7,671', fiveM: '-4.81%', oneH: '136%', sixH: '220%', twentyFourH: '220%', liquidity: '$235K', fdv: '$6.0M' },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-4">
        <div className="flex justify-between items-center mb-4">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
          <SelectDropdown themeOptions={themeOptions} />
        </div>
        <TableList data={data} />
      </div>
    </div>
  );
}

