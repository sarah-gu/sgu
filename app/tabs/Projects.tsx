"use client";
import React, { useState, useEffect } from "react";
import { ProjectsTab } from "../components/ProjectsTab";

const projects = [
  {
    name: "Goji Health",
    img: "/goji.png",
    award: "🏆 Winner of $15K from the Columbia Venture Competition",
    description:
      "AI-powered startup predicting demand for healthcare supply chain services. Interviewed hospital supply chain directors nationwide to validate the problem.",
    link: "https://github.com/sarah-gu/dumpling",
  },
  {
    name: "Senior Scramble",
    img: "/seniorscramble.png",
    award: "700+ Active Users in 1 Month",
    description:
      "Built Columbia's 2024 Senior Scramble site — 700+ users and hundreds of hours logged in two weeks. React, Prisma, AWS, and PostgreSQL.",
    link: "https://github.com/sarah-gu/beautiful-landing-page",
  },
  {
    name: "Graze Pro",
    img: "/grazepro.png",
    award: "🏆 Winner of TreeHacks 2023 (1000+ Participants)",
    description:
      "Rotational grazing prediction app built at TreeHacks. We got robbed hours before the hackathon and built the whole thing on three dorm monitors at Stanford.",
    link: "https://github.com/sarah-gu/graze-pro",
  },
  {
    name: "FortuneGPT",
    img: "/fortunegpt.png",
    description:
      "GPT-3 powered app that generates personalized fortunes and horoscopes.",
    link: "https://github.com/sarah-gu/openai-api-testing",
  },
  {
    name: "Birthday Countdown",
    img: "/birthdaycountdown.png",
    description:
      "Animated birthday countdown with photos and confetti effects. Built with React and Tailwind.",
    link: "https://github.com/sarah-gu/birthday-countdown",
  },
  {
    name: "Sound Match",
    img: "/soundmatch.png",
    description:
      "Audio matching game that tests your ear for different frequencies and tunes. React and Tailwind.",
    link: "https://github.com/sarah-gu/sound-match",
  },
  {
    name: "CoronaVoice",
    img: "/coronavoice.png",
    award: "🏆 Winner of EarthxHack 2020 (800+ Participants)",
    description:
      "NLP-based COVID screening tool that analyzes changes in vocal inflection to flag potential infection.",
    link: "https://github.com/neeyanthkvk/mycovidtracker",
  },
  {
    name: "Fishbowl",
    img: "/fishbowl.png",
    description:
      "One of my first projects — brought the party game Fishbowl online during COVID so friends could keep playing. Built with vanilla HTML, CSS, and JS.",
    link: "https://github.com/sarah-gu/fishbowl",
  },
  {
    name: "myAIScribe",
    img: "/myAIscribe.png",
    description:
      "iOS app that transcribes handwriting from photos into shareable text notes using Apple's Core ML. Built in Xcode with Objective-C.",
    link: "https://github.com/sarah-gu/myAIScribe",
  },
];

export const Projects = ({ theme }: { theme: string }) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayIdx, setDisplayIdx] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    if (current !== displayIdx) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayIdx(current);
        setIsTransitioning(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [current, displayIdx]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection("left");
    setCurrent((current - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection("right");
    setCurrent((current + 1) % projects.length);
  };

  const handleDot = (idx: number) => {
    if (isTransitioning || idx === current) return;
    setDirection(idx > current ? "right" : "left");
    setCurrent(idx);
  };

  const project = projects[displayIdx];
  const prevIdx = (displayIdx - 1 + projects.length) % projects.length;
  const nextIdxForPreview = (displayIdx + 1) % projects.length;
  const prevProject = projects[prevIdx];
  const nextProject = projects[nextIdxForPreview];

  const slideOffset = isTransitioning
    ? direction === "right"
      ? "-translate-x-8 opacity-0"
      : "translate-x-8 opacity-0"
    : "translate-x-0 opacity-100";

  const isDark = theme === "dark";

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <div className="w-full max-w-md h-full flex items-center justify-center relative">
        {/* Previous project preview */}
        <div
          className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[120%] w-3/5 h-3/4 z-0 pointer-events-none transition-all duration-500 ease-out"
          style={{
            opacity: isTransitioning ? 0.3 : 0.6,
            filter: "blur(1px) grayscale(40%)",
            transform: `translate(-120%, -50%) scale(${isTransitioning ? 0.8 : 0.85})`,
          }}
        >
          <ProjectsTab
            theme={theme}
            description={prevProject.description}
            label={prevProject.name}
            award={prevProject.award}
            bgImg={prevProject.img}
          />
        </div>
        {/* Next project preview */}
        <div
          className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[20%] w-3/5 h-3/4 z-0 pointer-events-none transition-all duration-500 ease-out"
          style={{
            opacity: isTransitioning ? 0.3 : 0.6,
            filter: "blur(1px) grayscale(40%)",
            transform: `translate(20%, -50%) scale(${isTransitioning ? 0.8 : 0.85})`,
          }}
        >
          <ProjectsTab
            theme={theme}
            description={nextProject.description}
            label={nextProject.name}
            award={nextProject.award}
            bgImg={nextProject.img}
          />
        </div>
        {/* Nav arrows */}
        <button
          aria-label="Previous project"
          onClick={handlePrev}
          className={`absolute left-0 z-20 rounded-full p-2 shadow-md top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-200 hover:scale-110 active:scale-95 ${
            isDark
              ? "bg-gray-800/80 hover:bg-gray-700/90 text-gray-200"
              : "bg-white/80 hover:bg-white text-gray-700"
          }`}
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
        {/* Main project with slide transition */}
        <div
          className={`w-full h-full flex items-center justify-center z-10 relative transition-all duration-300 ease-out ${slideOffset}`}
        >
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
          className={`absolute right-0 z-10 rounded-full p-2 shadow-md top-1/2 -translate-y-1/2 translate-x-1/2 transition-all duration-200 hover:scale-110 active:scale-95 ${
            isDark
              ? "bg-gray-800/80 hover:bg-gray-700/90 text-gray-200"
              : "bg-white/80 hover:bg-white text-gray-700"
          }`}
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
      {/* Dot indicators */}
      <div className="flex gap-2 mt-4">
        {projects.map((_, idx) => (
          <button
            key={idx}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-pantone w-4 h-2"
                : isDark
                  ? "bg-gray-600 hover:bg-gray-500 w-2 h-2"
                  : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
            }`}
            onClick={() => handleDot(idx)}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
