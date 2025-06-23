"use client";
import React, { useState } from "react";
import { ProjectsTab } from "../components/ProjectsTab";

const projects = [
  {
    name: "Goji Health",
    img: "/goji.png",
    award: "🏆 Winner of $15K from the Columbia Venture Competition",
    description:
      "Co-founded startup that uses AI to predict demand for healthcare supply chain services. Spoke with over 20 directors of supply chain at hospitals around the country to understand their pain points. Won $15K on the Technology track from the Columbia Venture Competition.",
    link: "https://github.com/sarah-gu/dumpling",
  },
  {
    name: "Senior Scramble",
    img: "/seniorscramble.png",
    award: "700+ Active Users in 1 Month",
    description:
      "Built the 2024 Columbia Senior Scramble website, following a tradition where seniors 'scramble' classmates in the last few weeks of school. Over 600 users joined and hundreds of hours of usage time was logged on the site within 2 weeks. Built using React on the frontend, Prisma, AWS, and PostgreSQL on the backend.",
    link: "https://github.com/sarah-gu/beautiful-landing-page",
  },
  {
    name: "Graze Pro",
    img: "/grazepro.png",
    award: "🏆 Winner of TreeHacks 2023 (1000+ Participants)",
    description:
      "2023 TreeHacks project to predict rotational grazing. My team and I got robbed hours before the hackathon and built the entire app on three dorm monitors at Stanford.",
    link: "https://github.com/sarah-gu/graze-pro",
  },
  {
    name: "FortuneGPT",
    img: "/fortunegpt.png",
    description:
      "Project leveraging OpenAI's GPT-3 API. Used the API to generate fortunes and horoscopes for users.",
    link: "https://github.com/sarah-gu/openai-api-testing",
  },
  {
    name: "Birthday Countdown",
    img: "/birthdaycountdown.png",
    description:
      "Simple project to count down to a birthday, with photos and animations that pop up across the screen. Used React and Tailwind CSS to build the site.",
    link: "https://github.com/sarah-gu/birthday-countdown",
  },
  {
    name: "Sound Match",
    img: "/soundmatch.png",
    description:
      "Matching game to test users' ability to match sounds with different frequencies and tunes. Used React and Tailwind CSS to build the site.",
    link: "https://github.com/sarah-gu/sound-match",
  },
  {
    name: "CoronaVoice",
    img: "/coronavoice.png",
    award: "🏆 Winner of EarthxHack 2020 (800+ Participants)",
    description:
      "2020 EarthxHack project to attempt to diagnose COVID based on changes in vocal inflection. NLP model used on the backend and embedded into a webpage to test user's voices.",
    link: "https://github.com/neeyanthkvk/mycovidtracker",
  },
  {
    name: "Fishbowl",
    img: "/fishbowl.png",
    description:
      "One of my first independent projects ever, built during COVID to bring a game called Fishbowl that my friends and I loved to play in person online. Used plain HTML, CSS, and JS to build the site.",
    link: "https://github.com/sarah-gu/fishbowl",
  },
  {
    name: "myAIScribe",
    img: "/myAIscribe.png",
    description:
      "FBU 2021 final project to transcribe handwriting in images to text, in order to share notes and study tools with clasmates. Used Apple's Core ML API to convert handwriting in images to text. Built in XCode and Objective-C.",
    link: "https://github.com/sarah-gu/myAIScribe",
  },
];

export const Projects = ({ theme }: { theme: string }) => {
  const [activeProject, setActiveProject] = useState<string>("");
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    const idx = (current - 1 + projects.length) % projects.length;
    setCurrent(idx);
  };

  const handleNext = () => {
    const idx = (current + 1) % projects.length;
    setCurrent(idx);
  };

  const project = projects[current];
  const prevIdx = (current - 1 + projects.length) % projects.length;
  const nextIdxForPreview = (current + 1) % projects.length;
  const prevProject = projects[prevIdx];
  const nextProject = projects[nextIdxForPreview];

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <div className="w-full max-w-md h-full flex items-center justify-center relative">
          {/* Previous project preview */}
          <div
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[120%] w-3/5 h-3/4 z-0 pointer-events-none"
            style={{
              opacity: 0.6,
              filter: "blur(1px) grayscale(40%)",
              transform: "translate(-120%, -50%) scale(0.85)",
            }}
          >
            <ProjectsTab
              theme={theme}
              description={prevProject.description}
              label={prevProject.name}
              award={project.award}
              bgImg={prevProject.img}
            />
          </div>
          {/* Next project preview */}
          <div
            className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[20%] w-3/5 h-3/4 z-0 pointer-events-none"
            style={{
              opacity: 0.6,
              filter: "blur(1px) grayscale(40%)",
              transform: "translate(20%, -50%) scale(0.85)",
            }}
          >
            <ProjectsTab
              theme={theme}
              description={nextProject.description}
              label={nextProject.name}
              award={project.award}
              bgImg={nextProject.img}
            />
          </div>
          {/* Main project */}
          <button
            aria-label="Previous project"
            onClick={handlePrev}
            className="absolute left-0 z-20 bg-white/60 dark:bg-black/60 rounded-full p-2 shadow hover:scale-110 top-1/2 -translate-y-1/2 -translate-x-1/2"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="w-full h-full flex items-center justify-center z-10 relative">
            <ProjectsTab
              theme={theme}
              description={project.description}
              award={project.award}
              label={project.name}
              bgImg={project.img}
              onClick={() => window.open(project.link, "_blank")}
            />
          </div>
          <button
            aria-label="Next project"
            onClick={handleNext}
            className="absolute right-0 z-10 bg-white/60 dark:bg-black/60 rounded-full p-2 shadow hover:scale-110 top-1/2 -translate-y-1/2 translate-x-1/2"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex gap-2 mt-4">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === current
                  ? "bg-pantone scale-125"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};
