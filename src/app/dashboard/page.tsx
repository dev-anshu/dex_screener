"use client"
import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Sidebar from '../ui/Sidebar';
import TabNavigation from '../ui/TabNavigation';
import SelectDropdown from '../ui/SelectDropdown';
import TableList from '../ui/TableList';
import { useRouter } from 'next/navigation';


export default function Dashboard() {

  const [activeTab, setActiveTab] = useState('All');
  const { data: session, status } = useSession();
  const router = useRouter();

  const tabs = ['All', 'Uniswap', 'Pancakeswap'];


  const themeOptions = [
    { value: "Ethereum", label: "Ethereum" },
    { value: "Polygon", label: "Polygon" },
    { value: "Arbitum", label: "Arbitum" },
  ];

  const data = [
    { token: 'MEV/SOL', name: 'SOLANA MEV AI', price: '$0.000678', txns: '25,469', volume: '$9.0M', makers: '7,671', fiveM: '-4.81%', oneH: '136%', sixH: '220%', twentyFourH: '220%', liquidity: '$235K', fdv: '$6.0M' },
  ];

//   if (status === "loading") {
//     return <p>Loading...</p>;
// }

// if (status === "unauthenticated") {
//     return <p>You are not logged in</p>;
// }
  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      return <p>You are not logged in</p>;
    }
    if (!session) {
      router.replace('/signin');
    }
  }, [session, status, router]);

  // if (status === "loading" || !session) {
  //   return <p>Loading...</p>;
  // }
  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>You are not logged in. Redirecting to sign-in page...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }


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

