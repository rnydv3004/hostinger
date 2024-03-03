import Image from "next/image";
import React from "react";
import HeroImage from "../../public/images/hero.png";

export default function Hero() {
  return (
    <div
      className="flex w-full justify-center items-center overflow-hidden gap-20"
      style={{ height: `calc(100vh - 72px)` }}
    >
      {/* LEFT */}
      <div className="">
        <h1 className="font-bold text-3xl">
          Everything You Need to
          <br /> Create a Website
        </h1>
        <h2 className="font-semibold  mt-2">
          Up to <span className="text-purple-600a">75% </span> off Hosting +
          Website Builder
        </h2>

        <ul className="flex flex-col gap-1 my-7">
          <li className="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-5 h-5 text-green-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <span className="text-sm font-medium">Free Domain</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </li>

          <li className="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-5 h-5 text-green-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <span className="text-sm font-medium">Free Website Migration</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </li>

          <li className="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-5 h-5 text-green-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <span className="text-sm font-medium">24/7 Customer Support</span>
          </li>
        </ul>

        <label>
          ₹ <span className="text-5xl font-bold">149.00</span> /mo
        </label>
        <br />
        <label className="font-semibold mt-1">+ 2 Months Free</label>

        <div className="flex gap-2">
          <button className="py-2 px-4 bg-purple-700 text-white rounded-sm min-w-[220px] mt-7">
            Claim Deal
          </button>
          <label className="py-2 px-4 bg-slate-200 rounded-sm min-w-[160px] text-center text-black mt-7 font-semibold">00:18:21:27</label>
        </div>

        <label className="flex items-center gap-2 text-sm font-medium mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-5 h-5 text-blue-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
          <span>30-Day Money-Back Guarantee</span>
        </label>
      </div>

      {/* RIGHT */}
      <div className="h-full w-[55%] flex justify-center items-center">
        <Image src={HeroImage} alt={""} />
      </div>
    </div>
  );
}
