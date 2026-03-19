"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export const Travel = ({ theme }: { theme: string }) => {
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [fullScreenMounted, setFullScreenMounted] = useState(false);

  useEffect(() => {
    if (showFullScreen) {
      requestAnimationFrame(() => setFullScreenMounted(true));
    }
  }, [showFullScreen]);

  const handleClose = () => {
    setFullScreenMounted(false);
    setTimeout(() => setShowFullScreen(false), 200);
  };

  return (
    <>
      <div className="h-full w-full">
        <div>
          I love traveling! Most recently, I did the 4 day Salkantay Trek to
          Macchu Picchu. It was beautiful.
        </div>
        <div
          className="relative w-full h-full cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
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
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 ${
            fullScreenMounted ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/75" />
          <div
            className={`relative w-[90vw] h-[90vh] transition-transform duration-200 ${
              fullScreenMounted ? "scale-100" : "scale-95"
            }`}
          >
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
