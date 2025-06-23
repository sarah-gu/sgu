import { useState } from "react";

export const LinkedinIcon = ({ theme }: { theme: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    const link = "https://www.linkedin.com/in/sarahwgu/";
    window.open(link, "_blank");
  };
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 55 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transition: "fill .3s ease",
      }}
    >
      <path
        d="M32.6667 16.6666C35.9156 16.6666 39.0314 17.9836 41.3287 20.3278C43.6261 22.672 44.9167 25.8514 44.9167 29.1666V43.75H36.75V29.1666C36.75 28.0616 36.3198 27.0017 35.554 26.2203C34.7883 25.4389 33.7496 25 32.6667 25C31.5837 25 30.5451 25.4389 29.7793 26.2203C29.0136 27.0017 28.5833 28.0616 28.5833 29.1666V43.75H20.4167V29.1666C20.4167 25.8514 21.7073 22.672 24.0046 20.3278C26.3019 17.9836 29.4178 16.6666 32.6667 16.6666Z"
        stroke={`${theme === `light` ? `#1E1E1E` : `#F9FAFB`}`}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.25 18.75H4.08334V43.75H12.25V18.75Z"
        stroke={`${theme === `light` ? `#1E1E1E` : `#F9FAFB`}`}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.16668 12.5C10.4218 12.5 12.25 10.6345 12.25 8.33329C12.25 6.03211 10.4218 4.16663 8.16668 4.16663C5.91151 4.16663 4.08334 6.03211 4.08334 8.33329C4.08334 10.6345 5.91151 12.5 8.16668 12.5Z"
        stroke={`${theme === `light` ? `#1E1E1E` : `#F9FAFB`}`}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
