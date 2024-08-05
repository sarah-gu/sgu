import Image from "next/image";
import { FacebookIcon } from "../icons/FacebookIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export const LeftPanelIntro = ({ theme }: { theme: string }) => {
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
              <FacebookIcon theme={theme} />
            </div>
            <div className="h-1/6 w-12">
              <GithubIcon theme={theme} />
            </div>
            <div className="h-1/6 w-12">
              <InstagramIcon theme={theme} />
            </div>
            <div className="h-1/6 w-12">
              <LinkedinIcon theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
