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
  <div className="w-full justify-between text-sm md:text-xl lg:text-2xl flex flex-row gap-2 md:gap-4 py-4 md:p-5 md:border-l-2 border-pantone">
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
      menuName="Awards"
      menuBar={menuBar}
      setMenuBar={setMenuBar}
      theme={theme}
    />
  </div>
);
