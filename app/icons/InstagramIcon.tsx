import { useState } from "react";

export const InstagramIcon = ({ theme }: { theme: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    const link = "https://www.instagram.com/sarahwgu/";
    window.open(link, "_blank");
  };

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 60 50"
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
        d="M35.7292 13.5416H35.7496M14.2917 4.16663H34.7083C40.3463 4.16663 44.9167 8.83033 44.9167 14.5833V35.4166C44.9167 41.1696 40.3463 45.8333 34.7083 45.8333H14.2917C8.65377 45.8333 4.08334 41.1696 4.08334 35.4166V14.5833C4.08334 8.83033 8.65377 4.16663 14.2917 4.16663ZM32.6667 23.6875C32.9186 25.4213 32.6284 27.1921 31.8373 28.7479C31.0461 30.3037 29.7944 31.5654 28.26 32.3534C26.7256 33.1415 24.9868 33.4158 23.2909 33.1373C21.595 32.8588 20.0283 32.0418 18.8136 30.8024C17.599 29.563 16.7983 27.9643 16.5254 26.2337C16.2525 24.5032 16.5213 22.7289 17.2936 21.1632C18.0659 19.5976 19.3023 18.3203 20.827 17.513C22.3517 16.7057 24.0871 16.4095 25.7863 16.6666C27.5195 16.9289 29.1241 17.753 30.3631 19.0173C31.602 20.2815 32.4097 21.9189 32.6667 23.6875Z"
        stroke={`${theme === `light` ? `#1E1E1E` : `#F9FAFB`}`}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
