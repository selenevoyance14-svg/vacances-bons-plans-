/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

export default function LocationsVacancesLayout({ children }: { children: ReactNode }) {
  return <>
    {children}
    <img
      src="https://ti.tradetracker.net/?c=17471&m=0&a=515442&r=&t=pi"
      width="1"
      height="1"
      alt=""
      aria-hidden="true"
      style={{ position: "absolute", width: 1, height: 1, overflow: "hidden" }}
    />
  </>;
}
