"use client";

import { useBalance } from "@repo/store";
import { Appbar } from "@repo/ui/Appbar";
import { Button } from "@repo/ui/Button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page() {
  const [balance, setBalance] = useBalance();
  const session = useSession();

  return (
    <>
      <Appbar user={session.data?.user} onSignin={signIn} onSignout={signOut} />

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

