import { Dispatch, SetStateAction } from "react";
import { MenuBar } from "../types/MenuBar.type";

export const MenuTab = ({
  menuName,
  menuBar,
  setMenuBar,
}: {
  menuName: MenuBar;
  menuBar: string;
  setMenuBar: Dispatch<SetStateAction<MenuBar>>;
}) => (
  <div
    onClick={() => setMenuBar((prevMenuBar) => menuName)}
    className={`${
      menuBar === menuName ? "underline font-black" : ""
    } hover:underline`}
  >
    {menuName}
  </div>
);
