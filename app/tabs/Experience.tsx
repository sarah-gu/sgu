"use client";

import { useState } from "react";
import { ExperienceTab } from "../components/ExperienceTab";

export const Experience = () => {
  const [activeExperience, setActiveExperience] = useState<string>("");
  return (
    <div className="flex flex-col">
      <ExperienceTab
        tabName="Citadel"
        activeExperience={activeExperience}
        setActiveExperience={setActiveExperience}
      />
    </div>
  );
};
