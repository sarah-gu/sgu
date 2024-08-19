import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const HobbiesTab = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    bgImg: string;
    children: ReactNode;
    onClick?: () => void;
  }
) => {
  const { className, bgImg, children, onClick } = props;
  return (
    <div
      className={twMerge(
        `h-full justify-center items-center flex relative`,
        className
      )}
      style={{
        backgroundImage: `url('${bgImg}')`,
        backgroundSize: "cover",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
