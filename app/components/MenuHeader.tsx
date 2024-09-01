import { Dispatch, SetStateAction } from "react";
import { MenuBar } from "../types/MenuBar.type";
import { MenuTab } from "./MenuTab";

export const MenuHeader = ({
  theme,
  menuBar,
  setMenuBar,
}: {
  theme: string;
  menuBar: string;
  setMenuBar: Dispatch<SetStateAction<MenuBar>>;
}) => (
  <div className="w-full justify-between text-sm font-bold md:text-xl lg:text-2xl flex flex-row gap-2 border-t-2 md:border-t-0 md:gap-4 p-2 md:p-5 md:pl-12 md:border-l-2 border-pantone">
    <MenuTab
      menuName="About"
      menuBar={menuBar}
      setMenuBar={setMenuBar}
      theme={theme}
    />
    <MenuTab
      menuName="Experience"
      menuBar={menuBar}
      setMenuBar={setMenuBar}
      theme={theme}
    />
    <MenuTab
      menuName="Projects"
      menuBar={menuBar}
      setMenuBar={setMenuBar}
      theme={theme}
    />
    <MenuTab
      menuName="Hobbies"
      menuBar={menuBar}
      setMenuBar={setMenuBar}
      theme={theme}
    />
    <MenuTab
      menuName="Contact"
      menuBar={menuBar}
      setMenuBar={setMenuBar}
      theme={theme}
    />
  </div>
);
