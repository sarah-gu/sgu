import { Dispatch, SetStateAction } from "react";
import { MenuBar } from "../types/MenuBar.type";

export const MenuTab = ({
  theme,
  menuName,
  menuBar,
  setMenuBar,
}: {
  theme: string;
  menuName: MenuBar;
  menuBar: string;
  setMenuBar: Dispatch<SetStateAction<MenuBar>>;
}) => (
  <div
    onClick={() => setMenuBar((prevMenuBar) => menuName)}
    className="relative cursor-pointer group select-none"
  >
    {menuName}
    <div
      className={`absolute bottom-0 left-0 h-0.5 bg-pantone transition-all duration-300 ${
        menuBar === menuName ? "w-full" : "w-0 group-hover:w-full"
      }`}
    ></div>
  </div>
);
