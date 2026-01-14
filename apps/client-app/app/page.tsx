"use client";

import Image from "next/image";
import { Card } from "@repo/ui/card";
// import { RecoilCounter } from "./components/RecoilCounter";
// import { useAsyncBalance } from "@repo/store/useBalance";
import { useBalance } from "@repo/store";
import { JotaiCounter } from "./components/JotaiCounter";
import { Appbar } from "@repo/ui/Appbar";
import { Button } from "@repo/ui/Button";

export default function Page() {
  const [balance, setBalance] = useBalance();

  return (
    <>
      <Appbar user={{
        name: "test"
      }} onSignin={() => { }} onSignout={() => { }} />

      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <div className="mb-12">
          <div>
            hi there, your balance is {balance}


          </div>
          <Button onClick={() => setBalance(balance + 1)}>Add</Button>

          <Button onClick={() => setBalance(balance - 1)}>Remove</Button>
        </div>
      </main>
    </>
  );
}

