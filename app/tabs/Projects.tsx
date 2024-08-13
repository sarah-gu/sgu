import { HobbiesLabel } from "../components/HobbiesLabel";
import { HobbiesTab } from "../components/HobbiesTab";

export const Projects = () => {
  return (
    <div className="flex flex-col w-full h-full gap-1">
      <div className="flex flex-row w-full h-1/3 gap-1">
        <HobbiesTab className="w-1/3" bgImg="/goji.png">
          <HobbiesLabel label="Goji Health" />
        </HobbiesTab>
        <HobbiesTab className="w-1/3" bgImg="/seniorscramble.png">
          <HobbiesLabel label="Senior Scramble" />
        </HobbiesTab>
        <HobbiesTab className="w-1/3" bgImg="/grazepro.png">
          <HobbiesLabel label="Graze Pro" />
        </HobbiesTab>
      </div>
      <div className="flex flex-row w-full h-1/3 gap-1">
        <HobbiesTab className="w-1/3" bgImg="/coronavoice.png">
          <HobbiesLabel label="CoronaVoice" />
        </HobbiesTab>
        <HobbiesTab className="w-1/3" bgImg="/fortunegpt.png">
          <HobbiesLabel label="Fortune GPT" />
        </HobbiesTab>
        <HobbiesTab className="w-1/3" bgImg="/fishbowl.png">
          <HobbiesLabel label="Fishbowl" />
        </HobbiesTab>
      </div>
      <div className="flex flex-row w-full h-1/3 gap-1">
        <HobbiesTab className="w-1/3" bgImg="/myAIscribe.png">
          <HobbiesLabel label="myAIScribe" />
        </HobbiesTab>
        <HobbiesTab className="w-1/3" bgImg="/birthdaycountdown.png">
          <HobbiesLabel label="Birthday Countdown" />
        </HobbiesTab>
        <HobbiesTab className="w-1/3" bgImg="/soundmatch.png">
          <HobbiesLabel label="Sound Match" />
        </HobbiesTab>
      </div>
    </div>
  );
};
