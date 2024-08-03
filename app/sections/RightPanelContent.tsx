"use client";
import { useState } from "react";
import { MenuBar } from "../types/MenuBar.type";
import { MenuHeader } from "../components/MenuHeader";
import { Experience } from "../tabs/Experience";

export const RightPanelContent = () => {
  const [menuBar, setMenuBar] = useState<MenuBar>("About");
  return (
    <div className="flex flex-col">
      <MenuHeader menuBar={menuBar} setMenuBar={setMenuBar} />
      <Experience />
    </div>
  );
};
