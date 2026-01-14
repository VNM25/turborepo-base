"use client";

import dynamic from "next/dynamic";

export const JotaiCounter = dynamic(
  () => import("./Counter").then((mod) => mod.Counter),
  { ssr: false }
);
