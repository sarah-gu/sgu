import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

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
        `h-full justify-center items-center flex relative overflow-hidden`,
        className
      )}
    >
      <Image src={bgImg} alt="" style={{ objectFit: "cover" }} fill priority />
      {children}
    </div>
  );
};
