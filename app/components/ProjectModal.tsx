import { act, Dispatch, SetStateAction } from "react";

export const ProjectModal = ({
  activeProject,
  setActiveProject,
}: {
  activeProject: string;
  setActiveProject: Dispatch<SetStateAction<string>>;
}) => {
  const handleClick = () => {
    const link =
      activeProject === "Goji Health"
        ? "https://github.com/sarah-gu/dumpling"
        : activeProject === "Senior Scramble"
        ? "https://github.com/sarah-gu/beautiful-landing-page"
        : activeProject === "Graze Pro"
        ? "https://github.com/sarah-gu/graze-pro"
        : activeProject === "FortuneGPT"
        ? "https://github.com/sarah-gu/openai-api-testing"
        : activeProject === "Birthday Countdown"
        ? "https://github.com/sarah-gu/birthday-countdown"
        : activeProject === "Sound Match"
        ? "https://github.com/sarah-gu/sound-match"
        : activeProject === "CoronaVoice"
        ? "https://github.com/neeyanthkvk/mycovidtracker"
        : activeProject === "Fishbowl"
        ? "https://github.com/sarah-gu/fishbowl"
        : "https://github.com/sarah-gu/myAIScribe";
    window.open(link, "_blank");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-900 opacity-75"></div>
      <div className="flex flex-col z-10 bg-gray-200 m-10 p-6 md:p-10 gap-2 md:gap-4 rounded-lg w-1/2 h-1/2">
        <div className="flex flex-row justify-between">
          <div className="text-3xl md:text-5xl">{activeProject}</div>
          <button
            type="button"
            className="text-xl md:text-3xl bg-gray-200 text-gray-800 rounded-lg"
            onClick={() => setActiveProject("")}
          >
            X
          </button>
        </div>
        <div className="text-lg md:text-2xl text-gray-500">
          {activeProject === "Goji Health"
            ? "🏆 Winner of $15K from the Columbia Venture Competition"
            : activeProject === "Senior Scramble"
            ? "600+ Active Users in 1 Month"
            : activeProject === "Graze Pro"
            ? "🏆 Winner of TreeHacks 2023 (1000+ Participants)"
            : activeProject === "CoronaVoice"
            ? "🏆 Winner of EarthxHack 2020 (800+ Participants)"
            : ""}
        </div>
        <div className="text-sm md:text-lg text-gray-900 overflow-y-auto">
          {activeProject === "Goji Health"
            ? "Co-founded startup that uses AI to predict demand for healthcare supply chain services. Spoke with over 20 directors of supply chain at hospitals around the country to understand their pain points. Won 2nd place and $15K on the Technology track from the Columbia Venture Competition."
            : activeProject === "Senior Scramble"
            ? ""
            : activeProject === "Graze Pro"
            ? ""
            : activeProject === "FortuneGPT"
            ? ""
            : activeProject === "Birthday Countdown"
            ? ""
            : activeProject === "Sound Match"
            ? ""
            : activeProject === "CoronaVoice"
            ? ""
            : activeProject === "Fishbowl"
            ? ""
            : activeProject === "myAIScribe"
            ? ""
            : ""}
        </div>
        <button className="relative cursor-pointer group" onClick={handleClick}>
          Github
          <div
            className={`absolute bottom-0 left-0 h-0.5
              bg-pantone
            transition-all duration-300 w-0 group-hover:w-full
            `}
          ></div>
        </button>
      </div>
    </div>
  );
};
