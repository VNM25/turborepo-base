"use client";

import Image from "next/image";
import { Card } from "@repo/ui/card";
// import { RecoilCounter } from "./components/RecoilCounter";
// import { useAsyncBalance } from "@repo/store/useBalance";
import { useBalance } from "@repo/store";
import { JotaiCounter } from "./components/JotaiCounter";

export default function Page() {
  const [balance, setBalance] = useBalance();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="mb-12">
        <div>
          hi there, your balance is {balance}


        </div>
        <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setBalance(balance + 1)}>Add</button>
      </div>
    </main>
  );
}

