"use client";

import { countAtom } from "@repo/store";
import { useAtom } from "jotai";


export function Counter() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div className="p-4 border rounded-lg shadow-sm space-y-4">
      <h2 className="text-xl font-bold">Jotai Counter</h2>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          -
        </button>
        <span className="text-2xl font-mono">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );
}
