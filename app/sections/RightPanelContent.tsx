"use client";
import { useState } from "react";
import { MenuBar } from "../types/MenuBar.type";
import { MenuHeader } from "../components/MenuHeader";
import { Experience } from "../tabs/Experience";
import { About } from "../tabs/About";
import { Hobbies } from "../tabs/Hobbies";

export const RightPanelContent = ({ theme }: { theme: string }) => {
  const [menuBar, setMenuBar] = useState<MenuBar>("About");
  return (
    <div className="flex flex-col gap-8 md:gap-16 w-full max-h-screen flex-grow">
      <MenuHeader menuBar={menuBar} setMenuBar={setMenuBar} theme={theme} />
      {menuBar === "Experience" ? (
        <Experience theme={theme} />
      ) : menuBar === "About" ? (
        <About />
      ) : menuBar === "Hobbies" ? (
        <Hobbies />
      ) : (
        <></>
      )}
    </div>
  );
};
