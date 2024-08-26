"use client";
import Image from "next/image";
import { useState } from "react";
import { LeftPanelIntro } from "./sections/LeftPanelIntro";
import { RightPanelContent } from "./sections/RightPanelContent";
import { LightModeIcon } from "./icons/LightModeIcon";
import { DarkModeIcon } from "./icons/DarkModeIcon";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <main
      className={`${
        theme === "light" ? `bg-white text-black` : `bg-black text-white`
      } flex flex-col md:flex-row h-screen w-screen p-4 lg:p-16 xl:px-32 md:justify-between gap-8 md:gap-12 xl:gap-16`}
    >
      <LeftPanelIntro theme={theme} />
      <RightPanelContent theme={theme} />
      <div
        className="fixed bottom-10 right-10"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </div>
    </main>
  );
}
