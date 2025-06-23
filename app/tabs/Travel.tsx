"use client";
import { useState } from "react";
import Image from "next/image";
import { David_Libre } from "next/font/google";

export const Travel = ({ theme }: { theme: string }) => {
  const [showFullScreen, setShowFullScreen] = useState(false);

  return (
    <>
      <div className="h-full w-full">
        <div>
          I love traveling! Most recently, I did the 4 day Salkantay Trek to
          Macchu Picchu. It was beautiful.
        </div>
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={() => setShowFullScreen(true)}
        >
          <Image
            src="/map.jpeg"
            fill
            style={{ objectFit: "contain", objectPosition: "top" }}
            alt="World map showing visited countries"
          />
        </div>
      </div>

      {showFullScreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
          onClick={() => setShowFullScreen(false)}
        >
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src="/map.jpeg"
              fill
              style={{ objectFit: "contain" }}
              alt="World map showing visited countries"
            />
          </div>
        </div>
      )}
    </>
  );
};
