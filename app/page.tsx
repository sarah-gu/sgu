"use client";
import Image from "next/image";
import { useState } from "react";
import { LeftPanelIntro } from "./sections/LeftPanelIntro";
import { RightPanelContent } from "./sections/RightPanelContent";

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
      <Image
        className="fixed bottom-10 right-10"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src={`${theme === "light" ? "/darkmode_1.png" : "/lightmode_1.png"}`}
        width={40}
        height={40}
        alt="lightmode"
      />
    </main>
  );
}
