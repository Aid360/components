import React from "react";

export default function RisksLogo() {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64.4069 3.70938L64 3.13977L63.5931 3.70938L13.5931 73.7094L13.3469 74.054L13.6464 74.3536L63.6464 124.354L64 124.707L64.3536 124.354L114.354 74.3536L114.653 74.054L114.407 73.7094L64.4069 3.70938Z"
        fill="white"
        stroke="white"
      />
      <mask
        id="mask0_50_118"
        maskUnits="userSpaceOnUse"
        x="14"
        y="4"
        width="100"
        height="120"
      >
        <path d="M64 4L114 74L64 124L14 74L64 4Z" fill="white" />
      </mask>
      <g mask="url(#mask0_50_118)">
        <rect x="14" y="4" width="100" height="120" fill="#D9D9D9" />
        <path d="M14 4H64V68.5L14 75V4Z" fill="#F0EFFF" />
        <path d="M114 4H64V68.5L114 75V4Z" fill="#C1C0D2" />
        <path d="M64 138H114V73.5L64 67V138Z" fill="#C1C0D2" />
        <path d="M64 126H114V74L64 68.5V126Z" fill="#12111E" />
        <path d="M64 126.5H14V74L64 68.5V126.5Z" fill="#1D1C2D" />
      </g>
    </svg>
  );
}
