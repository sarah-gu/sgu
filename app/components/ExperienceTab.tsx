import { Dispatch, SetStateAction } from "react";

export const ExperienceTab = ({
  tabName,
  activeExperience,
  setActiveExperience,
}: {
  tabName: string;
  activeExperience: string;
  setActiveExperience: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="p-6 w-full bg-gray-100 flex flex-col">
      <div className="font-black text-xl">{tabName}</div>
      <div className="text-gray-800">tmp</div>
    </div>
  );
};
