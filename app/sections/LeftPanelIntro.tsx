import Image from "next/image";
import { FacebookIcon } from "../icons/FacebookIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export const LeftPanelIntro = ({ theme }: { theme: string }) => {
  return (
    <div className="flex flex-col w-full md:w-1/3 md:h-full z-10">
      <div className="flex flex-row md:flex-col w-full md:gap-16 justify-between items-center md:items-start">
        <div className="text-5xl md:text-7xl">Sarah Gu</div>

        <div className="flex flex-row gap-1 items-end">
          <div className="w-24 h-24 md:w-72 md:h-96 relative">
            <Image
              src="/sarahgu.jpg"
              alt="Sarah Gu PFP"
              style={{ objectFit: "cover" }}
              fill
              priority
            />
          </div>

          <div className="flex flex-col h-1/3 justify-end gap-2">
            <div className="h-1/3 md:h-1/6 w-4 md:w-8 rounded-full cursor-pointer">
              <FacebookIcon theme={theme} />
            </div>
            <div className="h-1/3 md:h-1/6 w-4 md:w-8 rounded-full cursor-pointer">
              <GithubIcon theme={theme} />
            </div>
            <div className="h-1/3 md:h-1/6 w-4 md:w-8 rounded-full cursor-pointer">
              <InstagramIcon theme={theme} />
            </div>
            <div className="h-1/3 md:h-1/6 w-4 md:w-8 rounded-full cursor-pointer">
              <LinkedinIcon theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
