import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const HobbiesTab = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    bgImg: string;
    children: ReactNode;
  }
) => {
  const { className, bgImg, children } = props;
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
    >
      {children}
    </div>
  );
};
