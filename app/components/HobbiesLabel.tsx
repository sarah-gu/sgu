import { ReactNode } from "react";

export const HobbiesLabel = ({ label }: { label: string }) => (
  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 text-white flex text-center items-center justify-center hover:bg-opacity-60 hover:backdrop-blur-sm transition-colors duration-300">
    {label}
  </div>
);
