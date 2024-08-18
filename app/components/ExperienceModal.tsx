import { Dispatch, SetStateAction } from "react";

export const ExperienceModal = ({
  activeExperience,
  setActiveExperience,
}: {
  activeExperience: string;
  setActiveExperience: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-900 opacity-75"></div>
      <div className="flex flex-col z-10 bg-gray-200 m-10 p-6 gap-4 rounded-lg">
        <div className="flex flex-row justify-between gap-24">
          <div className="text-3xl">{activeExperience}</div>
          <button
            type="button"
            className="text-lg bg-gray-200 text-gray-800 rounded-lg"
            onClick={() => setActiveExperience("")}
          >
            X
          </button>
        </div>
        <div className="text-2xl">{activeExperience}</div>
      </div>
    </div>
  );
};
