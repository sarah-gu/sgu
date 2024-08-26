import { act, Dispatch, SetStateAction } from "react";

export const ProjectModal = ({
  theme,
  activeProject,
  setActiveProject,
}: {
  theme: string;
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
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={() => setActiveProject("")}
    >
      <div
        className={`fixed inset-0 ${
          theme === "light" ? "bg-gray-900" : "bg-gray-600"
        } opacity-75`}
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col z-10 ${
          theme === "light" ? "bg-gray-200" : "bg-gray-800"
        } m-10 p-6 md:p-10 gap-2 md:gap-4 rounded-lg w-2/3 h-2/3 justify-between`}
      >
        <div className="flex flex-row justify-between border-b-2 border-pantone">
          <div className="text-xl md:text-3xl lg:text-5xl">{activeProject}</div>
          <button
            type="button"
            className={`${
              theme === "light" ? "text-gray-800" : "text-gray-200"
            } rounded-lg`}
            onClick={() => setActiveProject("")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 md:w-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          className={`text-md md:text-lg lg:text-2xl ${
            theme === "light" ? "text-gray-500" : "text-gray-400"
          }`}
        >
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
        <div
          className={`text-sm md:text-lg ${
            theme === "light" ? "text-gray-900" : "text-gray-200"
          } overflow-y-auto flex-1`}
        >
          {activeProject === "Goji Health"
            ? "Co-founded startup that uses AI to predict demand for healthcare supply chain services. Spoke with over 20 directors of supply chain at hospitals around the country to understand their pain points. Won 2nd place and $15K on the Technology track from the Columbia Venture Competition."
            : activeProject === "Senior Scramble"
            ? "Built the 2024 Columbia Senior Scramble website, following a tradition where seniors 'scramble' classmates in the last few weeks of school. Over 600 users joined and hundreds of hours of usage time was logged on the site within 2 weeks. Built using React on the frontend, Prisma, AWS, and PostgreSQL on the backend."
            : activeProject === "Graze Pro"
            ? "2023 TreeHacks project to predict rotational grazing. My team and I got robbed hours before the hackathon and built the entire app on three dorm monitors at Stanford."
            : activeProject === "FortuneGPT"
            ? "Dummy project to test OpenAI's GPT-3 API. Used the API to generate fortunes and horoscopes for users."
            : activeProject === "Birthday Countdown"
            ? "Simple project to count down to a birthday, with photos and animations that pop up across the screen. Used React and Tailwind CSS to build the site."
            : activeProject === "Sound Match"
            ? "Matching game to test users' ability to match sounds with different frequencies and tunes. Used React and Tailwind CSS to build the site."
            : activeProject === "CoronaVoice"
            ? "2020 EarthxHack project to attempt to diagnose COVID based on changes in vocal inflection. NLP model used on the backend and embedded into a webpage to test user's voices."
            : activeProject === "Fishbowl"
            ? "One of my first independent projects ever, built during COVID to bring a game called Fishbowl that my friends and I loved to play in person online. Used plain HTML, CSS, and JS to build the site."
            : activeProject === "myAIScribe"
            ? "FBU 2021 final project to transcribe handwriting in images to text, in order to share notes and study tools with clasmates. Used Apple's Core ML API to convert handwriting in images to text. Built in XCode and Objective-C."
            : ""}
        </div>
        <div className="flex flex-row justify-between">
          <button
            className="relative cursor-pointer border-2 p-2 border-pantone transition-all duration-300 hover:bg-pantone rounded-md"
            onClick={handleClick}
          >
            Github
          </button>
          <button
            className="relative cursor-pointer border-2 p-2 border-pantone transition-all duration-300 hover:bg-pantone rounded-md"
            onClick={handleClick}
          >
            Devpost
          </button>
          <button
            className="relative cursor-pointer border-2 p-2 border-pantone transition-all duration-300 hover:bg-pantone rounded-md"
            onClick={handleClick}
          >
            Website
          </button>
        </div>
      </div>
    </div>
  );
};
