import { ReactNode } from "react";

export const HobbiesLabel = ({ label }: { label: string }) => (
  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 text-white flex justify-center items-center hover:bg-opacity-50">
    {label}
  </div>
);
