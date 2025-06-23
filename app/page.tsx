"use client";
import Image from "next/image";
import { useState } from "react";
import { LeftPanelIntro } from "./sections/LeftPanelIntro";
import { RightPanelContent } from "./sections/RightPanelContent";
import { LightModeIcon } from "./icons/LightModeIcon";
import { DarkModeIcon } from "./icons/DarkModeIcon";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  return (
    <main
      className={`relative overflow-hidden ${
        theme === "light" ? `text-black` : `text-white`
      } flex flex-col md:flex-row h-screen w-screen p-4 lg:p-16 xl:px-32 md:justify-between gap-8 md:gap-12 xl:gap-16`}
    >
      {/* Glossy background and splotches for dark mode */}
      {theme === "dark" && (
        <>
          <div className="pointer-events-none absolute inset-0 z-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
          </div>
          <div className="pointer-events-none absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 opacity-60 blur-3xl z-0" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 opacity-50 blur-3xl z-0" />
          <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 opacity-40 blur-2xl z-0" />
        </>
      )}
      {/* Glossy background and splotches for light mode */}
      {theme === "light" && (
        <>
          <div className="pointer-events-none absolute inset-0 z-0 bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-black/2 to-transparent" />
          </div>
          <div className="pointer-events-none absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-sky-200 via-teal-200 to-green-200 opacity-60 blur-3xl z-0" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-pink-200 via-orange-200 to-yellow-200 opacity-50 blur-3xl z-0" />
          <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-100 via-lime-200 to-green-100 opacity-40 blur-2xl z-0" />
        </>
      )}
      <LeftPanelIntro theme={theme} />
      <RightPanelContent theme={theme} />
      <div
        className="fixed bottom-10 right-10 z-10"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </div>
    </main>
  );
}
