import Image from "next/image";
import { FacebookIcon } from "../icons/FacebookIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { Dispatch, SetStateAction } from "react";

export const LeftPanelIntro = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}) => {
  return (
    <div className="flex flex-col w-1/3 h-full justify-between">
      <div className="flex flex-col gap-16 w-full">
        <div className="text-5xl md:text-7xl">Sarah Gu</div>

        <div className="flex flex-row gap-1 items-end w-full">
          <Image
            src="/sarahgu.jpg"
            alt="Sarah Gu PFP"
            className="object-cover"
            width={500}
            height={700}
            priority
          />
          <div className="flex flex-col h-1/3 justify-end gap-1">
            <div className="h-1/6 w-12">
              <FacebookIcon />
            </div>
            <div className="h-1/6 w-12">
              <GithubIcon />
            </div>
            <div className="h-1/6 w-12">
              <InstagramIcon />
            </div>
            <div className="h-1/6 w-12">
              <LinkedinIcon />
            </div>
          </div>
        </div>
      </div>
      <Image
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src={`${theme === "light" ? `/darkmode.png` : `/lightmode.png`} `}
        width={40}
        height={40}
        alt="lightmode"
      />
    </div>
  );
};
