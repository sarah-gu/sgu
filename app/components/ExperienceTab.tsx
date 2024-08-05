import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

export const ExperienceTab = ({
  tabName,
  tabDescription,
  imgPath,
  activeExperience,
  setActiveExperience,
}: {
  tabName: string;
  tabDescription: string;
  imgPath: string;
  activeExperience: string;
  setActiveExperience: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="p-6 w-full bg-gray-100 hover:bg-gray-200 flex flex-col shadow-md">
        <div className="font-black text-xl">{tabName}</div>
        <div className="text-gray-400">{tabDescription}</div>
      </div>
      <div className="relative w-48 h-28">
        <Image src={imgPath} layout="fill" objectFit="cover" alt="logo" />
      </div>
    </div>
  );
};
