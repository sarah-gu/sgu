"use client";
import { useState } from "react";
import { MenuBar } from "../types/MenuBar.type";
import { MenuHeader } from "../components/MenuHeader";
import { Experience } from "../tabs/Experience";
import { About } from "../tabs/About";
import { Hobbies } from "../tabs/Hobbies";
import { Projects } from "../tabs/Projects";
import { Contact } from "../tabs/Contact";

export const RightPanelContent = ({ theme }: { theme: string }) => {
  const [menuBar, setMenuBar] = useState<MenuBar>("About");
  return (
    <div className="flex flex-col flex-1 gap-8 md:gap-16 w-full overflow-hidden">
      <MenuHeader menuBar={menuBar} setMenuBar={setMenuBar} theme={theme} />
      {menuBar === "Experience" ? (
        <Experience theme={theme} />
      ) : menuBar === "About" ? (
        <About />
      ) : menuBar === "Hobbies" ? (
        <Hobbies theme={theme} />
      ) : menuBar === "Projects" ? (
        <Projects theme={theme} />
      ) : (
        <Contact theme={theme} />
      )}
    </div>
  );
};
