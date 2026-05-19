"use client";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#060d12] text-[#e8eef2] antialiased`}>
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <p className="text-7xl font-black text-[#2d9c9b]/30">500</p>
          <h1 className="mt-4 text-2xl font-bold">Something went wrong</h1>
          <p className="mt-2 max-w-md text-white/60">
            An unexpected error occurred. Please try again or return to the homepage.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 rounded-lg bg-[#2d9c9b] px-6 py-3 font-semibold text-white hover:bg-[#2d9c9b]/90"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
