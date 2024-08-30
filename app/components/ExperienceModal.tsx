import { Dispatch, SetStateAction } from "react";

export const ExperienceModal = ({
  theme,
  activeExperience,
  setActiveExperience,
}: {
  theme: string;
  activeExperience: string;
  setActiveExperience: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={() => setActiveExperience("")}
    >
      <div
        className={`fixed inset-0 ${
          theme === "light" ? "bg-gray-900" : "bg-gray-600"
        } opacity-75`}
      ></div>{" "}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col z-10 ${
          theme === "light" ? "bg-gray-200" : "bg-gray-800"
        } m-10 p-6 md:p-10 gap-2 md:gap-4 rounded-lg w-2/3 h-2/3`}
      >
        <div className="flex flex-row justify-between">
          <div className="text-3xl md:text-5xl">{activeExperience}</div>
          <button
            type="button"
            className={`${
              theme === "light" ? "text-gray-800" : "text-gray-200"
            } rounded-lg`}
            onClick={() => setActiveExperience("")}
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
          className={`text-lg md:text-2xl ${
            theme === "light" ? "text-gray-500" : "text-gray-200"
          }  border-b-2 border-pantone`}
        >
          {activeExperience === "Citadel"
            ? "Front-End Engineer"
            : activeExperience === "Phia"
            ? "Full-Stack Engineer"
            : activeExperience === "Vivid"
            ? "Growth Engineer"
            : activeExperience === "Microsoft"
            ? "Back-End Engineer"
            : activeExperience === "Facebook"
            ? "iOS Engineer"
            : activeExperience === "MITRE"
            ? "AI/ML Engineer"
            : ""}
        </div>
        {activeExperience === "Vivid" ? (
          <div className="text-gray-500 text-sm md:text-lg italic">
            Pre-seed, three-person startup converting Figma designs to frontend
            code.
          </div>
        ) : activeExperience === "Phia" ? (
          <div className="text-gray-500 text-sm md:text-lg italic">
            Pre-seed stage, secondhand e-commerce startup led by Phoebe Gates &
            Sophia Kianni.
          </div>
        ) : (
          <></>
        )}
        <div
          className={`text-sm md:text-lg ${
            theme === "light" ? "text-gray-900" : "text-gray-200"
          } overflow-y-auto no-scrollbar`}
        >
          {activeExperience === "Citadel"
            ? `Developed a new options trading platform with a 10x speed improvement for scrolling, symbol switch, and data rendering compared to similar platforms used in the firm. \n Achieved full feature parity to existing trading UIs, implementing 20+ features such as click trade, channeling, and quote level editing. Presented platform to key stakeholders, influencing developers to use the project as a new standard for building future trading platforms. Pushed the platform to production, onboarding 5 options traders who expect to earn millions in PNL from performance upgrades.`
            : activeExperience === "Phia"
            ? "Built out pipeline for tracking purchases based on affiliate link UTM paramters, scraping data from 5+ partner networks and streaming into a BigQuery database. Set up cron job on GCP to run daily. Owned the Analytics dashboard on Amplitude, establishing user interaction tracking for 30+ metrics, such as DAU/MAU, AOV, and User Retention."
            : activeExperience === "Microsoft"
            ? "Engineered a new monitoring pipeline for Azure App Services, yielding a 30x improvement on the number of metrics logged. Synthesized data from over 2,500 servers on the cloud and wired together 4+ platforms across Azure to cleanly stream logs to a Kusto Database. Learned about cloud architecture and resource allocation for Azure apps. Deployed monitoring system to production, actively tracking all Azure App Service servers currently on the cloud."
            : activeExperience === "Vivid"
            ? "Owned the company’s onboarding workflow, building an AI-powered internal webpage to automatically link React components to their corresponding Figma designs. Designed and developed the entire user experience, prototyping in Figma and implementing with React, Typescript, and Tailwind CSS. Engaged in client meetings, investor updates, and customer validation."
            : activeExperience === "Facebook"
            ? "Independently developed a note-sharing & transcribing iOS app in XCode & Objective-C, leveraging Apple’s Core Machine Learning API to convert handwriting in image to text. Programmed functionalities to sort notes by class, search by caption, and find friends. Worked on the Core Health Radar & Detection team."
            : activeExperience === "MITRE"
            ? "2020: Implemented 10+ IR-image detection networks to produce a 93% accurate model, outperforming the needs of an external client. Leveraged frameworks in Pytorch and Tensorflow, alongside state-of-the-art networks to find the best performing object detection model. 2019: Discovered the vulnerability of the BERT AI model to an adversarial data-leaking attack, after running 15+ deep learning tests. Ran white-box simulations and found up to 70% of data was exposed. 2018: Engineered a machine learning pipeline to decipher thought, specifically designing neural network architectures to decode brainwaves from denoised EEG data to text."
            : ""}
        </div>
      </div>
    </div>
  );
};
