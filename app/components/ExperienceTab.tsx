import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

export const ExperienceTab = ({
  theme,
  tabName,
  tabDescription,
  imgPath,
  activeExperience,
  setActiveExperience,
}: {
  theme: string;
  tabName: string;
  tabDescription: string;
  imgPath: string;
  activeExperience: string;
  setActiveExperience: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-row justify-between">
      <div
        className={`px-4 py-2 md:p-6 w-full ${
          theme === "light"
            ? `bg-gray-100 hover:bg-gray-200`
            : `bg-gray-800 hover:bg-gray-700`
        } flex flex-col shadow-md`}
      >
        <div className="font-black text-sm md:text-xl">{tabName}</div>
        <div className="text-gray-400 text-xs md:text-lg">{tabDescription}</div>
      </div>
      <div className="relative w-20 md:w-48 h-full shadow-md">
        <Image src={imgPath} layout="fill" objectFit="cover" alt="logo" />
      </div>
    </div>
  );
};
