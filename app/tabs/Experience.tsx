"use client";

import { useState } from "react";
import { ExperienceTab } from "../components/ExperienceTab";
import { ExperienceModal } from "../components/ExperienceModal";

export const Experience = ({ theme }: { theme: string }) => {
  const [activeExperience, setActiveExperience] = useState<string>("");
  return (
    <>
      <div className="flex flex-col gap-4 h-full overflow-y-auto">
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
        <ExperienceModal
          theme={theme}
          activeExperience={activeExperience}
          setActiveExperience={setActiveExperience}
        />
      )}
    </>
  );
};
