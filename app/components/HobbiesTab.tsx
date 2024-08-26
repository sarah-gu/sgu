import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

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
        `h-full justify-center items-center flex relative cursor-pointer`,
        className
      )}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
      onClick={onClick}
    >
      <Image src={bgImg} alt="" style={{ objectFit: "cover" }} fill priority />
      {children}
    </div>
  );
};
