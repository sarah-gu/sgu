"use client";

import { useState } from "react";
import { Contact } from "./Contact";

export const About = ({ theme }: { theme: string }) => {
  const [showContact, setShowContact] = useState<boolean>(false);
  return (
    <div className="text-sm md:text-xl flex flex-col gap-12">
      <div className="text-md md:text-2xl">
        Hi! I&apos;m Sarah Gu, a software engineer and builder. ☺︎
      </div>
      <div>
        I&apos;m a recent graduate of Columbia University, studying Computer
        Science in the School of Engineering and now work full-time at Citadel
        Securities. In my free time, you can find me coding (like this website),
        reading, going to Solidcore, or more likely, eating!
      </div>
      <div>
        I&apos;m always looking for new opportunities to grow - please reach
        out!
      </div>
      <button
        onClick={() => setShowContact(true)}
        className="bg-pantone hover:bg-pantone/80 text-white font-bold py-2 px-4 rounded transition-colors duration-300 w-48"
      >
        Contact Me
      </button>
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
          <div className="relative w-[90vw] max-w-2xl">
            <button
              onClick={() => setShowContact(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              Close
            </button>
            <Contact theme={theme} />
          </div>
        </div>
      )}
    </div>
  );
};
