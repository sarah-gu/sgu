import React, { useState } from "react";

export const GithubIcon = ({ theme }: { theme: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    const link = "https://github.com/sarah-gu";
    window.open(link, "_blank");
  };

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 55 50"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transition: "fill .3s ease",
        fill: "transparent",
      }}
    >
      <path
        d="M18.375 39.5833C8.16668 42.7083 8.16668 34.375 4.08334 33.3333M32.6667 45.8333V37.7708C32.7433 36.7774 32.6117 35.7787 32.2808 34.8412C31.9499 33.9037 31.4272 33.0487 30.7475 32.3333C37.1583 31.6041 43.8958 29.125 43.8958 17.75C43.8953 14.8413 42.7988 12.0441 40.8333 9.93745C41.7641 7.39267 41.6982 4.57985 40.6496 2.08328C40.6496 2.08328 38.2404 1.35412 32.6667 5.16662C27.9872 3.8725 23.0545 3.8725 18.375 5.16662C12.8013 1.35412 10.3921 2.08328 10.3921 2.08328C9.34344 4.57985 9.27764 7.39267 10.2083 9.93745C8.22819 12.0597 7.13058 14.8822 7.14584 17.8125C7.14584 29.1041 13.8833 31.5833 20.2942 32.3958C19.6225 33.1041 19.1044 33.9487 18.7738 34.8748C18.4431 35.8009 18.3072 36.7876 18.375 37.7708V45.8333"
        stroke={`${theme === `light` ? `#1E1E1E` : `#F9FAFB`}`}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
