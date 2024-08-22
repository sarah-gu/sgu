"use client";
import { useState } from "react";
import { HobbiesLabel } from "../components/HobbiesLabel";
import { HobbiesTab } from "../components/HobbiesTab";
import { ProjectModal } from "../components/ProjectModal";

export const Projects = ({ theme }: { theme: string }) => {
  const [activeProject, setActiveProject] = useState<string>("");
  return (
    <>
      <div className="flex flex-col w-full h-full gap-1">
        <div className="flex flex-row w-full h-1/3 gap-1">
          <HobbiesTab
            className="w-1/3"
            bgImg="/goji.png"
            onClick={() => setActiveProject("Goji Health")}
          >
            <HobbiesLabel label="Goji Health" />
          </HobbiesTab>
          <HobbiesTab
            className="w-1/3"
            bgImg="/seniorscramble.png"
            onClick={() => setActiveProject("Senior Scramble")}
          >
            <HobbiesLabel label="Senior Scramble" />
          </HobbiesTab>
          <HobbiesTab
            className="w-1/3"
            bgImg="/grazepro.png"
            onClick={() => setActiveProject("Graze Pro")}
          >
            <HobbiesLabel label="Graze Pro" />
          </HobbiesTab>
        </div>
        <div className="flex flex-row w-full h-1/3 gap-1">
          <HobbiesTab
            className="w-1/3"
            bgImg="/fortunegpt.png"
            onClick={() => setActiveProject("FortuneGPT")}
          >
            <HobbiesLabel label="Fortune GPT" />
          </HobbiesTab>

          <HobbiesTab
            className="w-1/3"
            bgImg="/birthdaycountdown.png"
            onClick={() => setActiveProject("Birthday Countdown")}
          >
            <HobbiesLabel label="Birthday Countdown" />
          </HobbiesTab>
          <HobbiesTab
            className="w-1/3"
            bgImg="/soundmatch.png"
            onClick={() => setActiveProject("Sound Match")}
          >
            <HobbiesLabel label="Sound Match" />
          </HobbiesTab>
        </div>
        <div className="flex flex-row w-full h-1/3 gap-1">
          <HobbiesTab
            className="w-1/3"
            bgImg="/coronavoice.png"
            onClick={() => setActiveProject("CoronaVoice")}
          >
            <HobbiesLabel label="CoronaVoice" />
          </HobbiesTab>
          <HobbiesTab
            className="w-1/3"
            bgImg="/fishbowl.png"
            onClick={() => setActiveProject("Fishbowl")}
          >
            <HobbiesLabel label="Fishbowl" />
          </HobbiesTab>
          <HobbiesTab
            className="w-1/3"
            bgImg="/myAIscribe.png"
            onClick={() => setActiveProject("myAIScribe")}
          >
            <HobbiesLabel label="myAIScribe" />
          </HobbiesTab>
        </div>
      </div>
      {activeProject !== "" && (
        <ProjectModal
          theme={theme}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
      )}
    </>
  );
};
