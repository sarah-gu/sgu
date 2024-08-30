import { Dispatch, SetStateAction } from "react";

export const HobbiesModal = ({
  theme,
  activeHobby,
  setActiveHobby,
}: {
  theme: string;
  activeHobby: string;
  setActiveHobby: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={() => setActiveHobby("")}
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
          <div className="text-xl md:text-3xl lg:text-5xl">{activeHobby}</div>
          <button
            type="button"
            className={`${
              theme === "light" ? "text-gray-800" : "text-gray-200"
            } rounded-lg`}
            onClick={() => setActiveHobby("")}
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
          {activeHobby === "Camino de Santiago" ? (
            <div>🚶🏻‍♀️ 800km Walk Across Spain"</div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`text-sm md:text-lg ${
            theme === "light" ? "text-gray-900" : "text-gray-200"
          } overflow-y-auto no-scrollbar flex-1`}
        ></div>
      </div>
    </div>
  );
};
