import Image from "next/image";

export const ProjectsTab = ({
  theme,
  label,
  bgImg,
  description,
  award,
  onClick,
}: {
  theme: string;
  label: string;
  bgImg: string;
  description: string;
  award?: string;
  onClick?: () => void;
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`p-1 h-full w-full flex flex-col relative cursor-pointer rounded-lg shadow-xl transition-shadow duration-300 overflow-hidden ${
        isDark ? "bg-gray-800 shadow-gray-900" : "bg-white"
      }`}
      onClick={onClick}
    >
      <h1
        className={`text-xl font-bold p-4 text-center ${
          isDark ? "text-gray-100" : "text-gray-900"
        }`}
      >
        {label}
      </h1>
      <div className={`relative w-full h-full`}>
        <Image
          src={bgImg}
          alt={label}
          style={{ objectFit: "contain" }}
          fill
          priority
        />
      </div>
      <div
        className={`p-4 flex flex-col gap-2 backdrop-blur-sm ${
          isDark ? "bg-gray-800/80" : "bg-white/80"
        }`}
      >
        {award && <p className="text-sm font-medium text-pantone">{award}</p>}
        <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          {description}
        </p>
      </div>
    </div>
  );
};
