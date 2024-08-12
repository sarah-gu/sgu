"use client";

import { useState } from "react";
import { ExperienceTab } from "../components/ExperienceTab";

export const Experience = ({ theme }: { theme: string }) => {
  const [activeExperience, setActiveExperience] = useState<string>("");
  return (
    <>
      <div className="flex flex-col gap-4 overflow-y-scroll h-full">
        <ExperienceTab
          theme={theme}
          companyName="Citadel"
          tabName="Front-End Engineer"
          tabDescription="Full-time, 2024 --; Internship, 2023"
          imgPath="/citadel.png"
          activeExperience={activeExperience}
          setActiveExperience={setActiveExperience}
        />
        <ExperienceTab
          theme={theme}
          companyName="Phia"
          tabName="Full-Stack Engineer"
          tabDescription="Part-time, 2024"
          imgPath="/phia.png"
          activeExperience={activeExperience}
          setActiveExperience={setActiveExperience}
        />
        <ExperienceTab
          theme={theme}
          companyName="Vivid"
          tabName="Growth Engineer"
          tabDescription="Internship, Spring 2023"
          imgPath="/vivid.png"
          activeExperience={activeExperience}
          setActiveExperience={setActiveExperience}
        />
        <ExperienceTab
          theme={theme}
          companyName="Microsoft"
          tabName="Back-End Engineer"
          tabDescription="Internship, 2022"
          imgPath="/microsoft.png"
          activeExperience={activeExperience}
          setActiveExperience={setActiveExperience}
        />
        <ExperienceTab
          theme={theme}
          companyName="Facebook"
          tabName="iOS Engineer"
          tabDescription="Facebook University Internship, 2021"
          imgPath="/meta.png"
          activeExperience={activeExperience}
          setActiveExperience={setActiveExperience}
        />
        <ExperienceTab
          theme={theme}
          companyName="MITRE"
          tabName="AI/ML Engineer"
          tabDescription="Internship, 2018; 2019; 2020"
          imgPath="/mitre.png"
          activeExperience={activeExperience}
          setActiveExperience={setActiveExperience}
        />
      </div>
      {activeExperience !== "" && (
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
      )}
    </>
  );
};
