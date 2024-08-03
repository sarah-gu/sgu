import { Dispatch, SetStateAction } from "react";
import { MenuBar } from "../types/MenuBar.type";
import { MenuTab } from "./MenuTab";

export const MenuHeader = ({
  menuBar,
  setMenuBar,
}: {
  menuBar: string;
  setMenuBar: Dispatch<SetStateAction<MenuBar>>;
}) => (
  <div className="text-lg flex flex-row gap-4 p-4 border-l-2 border-pantone">
    <MenuTab menuName="About" menuBar={menuBar} setMenuBar={setMenuBar} />
    <MenuTab menuName="Experience" menuBar={menuBar} setMenuBar={setMenuBar} />
    <MenuTab menuName="Projects" menuBar={menuBar} setMenuBar={setMenuBar} />
  </div>
);
