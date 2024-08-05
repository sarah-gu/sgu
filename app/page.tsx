"use client";
import { useState } from "react";
import { LeftPanelIntro } from "./sections/LeftPanelIntro";
import { RightPanelContent } from "./sections/RightPanelContent";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <main
      className={`${
        theme === "light" ? `bg-white text-black` : `bg-black text-white`
      } flex flex-row h-screen w-screen p-16 lg:px-32 justify-between gap-24 lg:gap-36`}
    >
      <LeftPanelIntro theme={theme} setTheme={setTheme} />
      <RightPanelContent theme={theme} />
    </main>
  );
}
