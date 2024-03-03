import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="text-black h-14 w-full flex items-center justify-between px-6">
      <div className="flex items-center  gap-7">
        <Link href={"/"} className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
            />
          </svg>
          <span className="font-bold">HOSTINGER</span>
        </Link>
        <button className="flex items-center gap-2 ">
          <img className="h-6 w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/UlEQVR4nO2VPQ6CQBCF51gUngV6Qi23IKHjGkqhDQewBCw8gLh0VFs/M1sZfzoQx7wveclkt5k3OzMrQgghhPwDqASWJDRQ8QXAFnpk7ZYAh7hav6rgGq0Mf2Tee1iSLGnAuQnbbYM0PQTleRPOTBhwbkKS1DifHdr2iq4bQhzH+1lNyFIGtPKacF1fUJanII37/hbuft5Amh7RtkNIPMuOQRrra+idEQPXNwYGGwbyvEHX3V5aSM/07ucNODchjneh57XqOsQa6xCPo4Eh9h/W6JzJ+6UNfEPyTFRsYElCAwVfAGyhR9ZuiYhDXKxf1YhrtDD8kRFCCCFikDtgAlonA0la6QAAAABJRU5ErkJggg==" />
          <span className="text-sm font-medium">ENGLISH</span>
        </button>
      </div>

      {/* Navigation */}
      <ul className="flex gap-14">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={""}>Services</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={""}>Career</Link></li>
        <li><Link href={""} className="border-2 py-2 px-4 border-black rounded-sm bg-white font-semibold">Log In</Link></li>
      </ul>
    </header>
  );
}
