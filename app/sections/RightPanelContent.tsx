"use client";
import { useState, useEffect, useRef } from "react";
import { MenuBar } from "../types/MenuBar.type";
import { MenuHeader } from "../components/MenuHeader";
import { Experience } from "../tabs/Experience";
import { About } from "../tabs/About";
import { Hobbies } from "../tabs/Hobbies";
import { Projects } from "../tabs/Projects";
import { Contact } from "../tabs/Contact";
import { Travel } from "../tabs/Travel";

const TabContent = ({ menuBar, theme }: { menuBar: MenuBar; theme: string }) => {
  switch (menuBar) {
    case "Experience":
      return <Experience theme={theme} />;
    case "About":
      return <About theme={theme} />;
    case "Hobbies":
      return <Hobbies theme={theme} />;
    case "Travel":
      return <Travel theme={theme} />;
    case "Projects":
      return <Projects theme={theme} />;
    default:
      return <Contact theme={theme} />;
  }
};

export const RightPanelContent = ({ theme }: { theme: string }) => {
  const [menuBar, setMenuBar] = useState<MenuBar>("About");
  const [visible, setVisible] = useState(true);
  const [displayedTab, setDisplayedTab] = useState<MenuBar>("About");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (menuBar !== displayedTab) {
      setVisible(false);
      const timer = setTimeout(() => {
        setDisplayedTab(menuBar);
        setVisible(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [menuBar, displayedTab]);

  return (
    <div className="flex flex-col flex-1 gap-8 md:gap-16 w-full overflow-hidden z-10">
      <MenuHeader menuBar={menuBar} setMenuBar={setMenuBar} theme={theme} />
      <div
        className={`flex-1 overflow-hidden transition-all duration-300 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <TabContent menuBar={displayedTab} theme={theme} />
      </div>
    </div>
  );
};
