import { useState } from "react";

export const FacebookIcon = ({ theme }: { theme: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    const link = "https://www.facebook.com/sarahwgu/";
    window.open(link, "_blank");
  };
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 57 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transition: "fill .3s ease",
        fill:
          theme === "dark"
            ? isHovered
              ? "#FFEA00"
              : "#E15153"
            : isHovered
            ? "#E15153"
            : "#FFEA00",
      }}
    >
      <path
        d="M36 4.25H30C27.3478 4.25 24.8043 5.36942 22.9289 7.36199C21.0536 9.35456 20 12.0571 20 14.875V21.25H14V29.75H20V46.75H28V29.75H34L36 21.25H28V14.875C28 14.3114 28.2107 13.7709 28.5858 13.3724C28.9609 12.9739 29.4696 12.75 30 12.75H36V4.25Z"
        stroke={`${theme === `light` ? `#1E1E1E` : `#F9FAFB`}`}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
