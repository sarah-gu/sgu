import { HobbiesLabel } from "../components/HobbiesLabel";
import { HobbiesTab } from "../components/HobbiesTab";

export const Hobbies = () => {
  return (
    <div className="flex flex-col w-full h-full gap-1">
      <div className="h-1/2 flex flex-row gap-1">
        <HobbiesTab className="w-2/3" bgImg="/camino.png">
          <HobbiesLabel label="Camino de Santiago" />
        </HobbiesTab>
        <HobbiesTab className="w-1/3" bgImg="/baking.png">
          <HobbiesLabel label="Baking" />
        </HobbiesTab>
      </div>
      <div className="h-1/2 flex flex-row gap-1">
        <HobbiesTab className="w-2/5" bgImg="/restaurants.png">
          <HobbiesLabel label="Restaurants" />
        </HobbiesTab>

        <div className="flex flex-col gap-1 w-1/5 h-full">
          <HobbiesTab className="h-1/2" bgImg="/climbing.png">
            <HobbiesLabel label="Climbing" />
          </HobbiesTab>
          <HobbiesTab className="h-1/2" bgImg="/biking.png">
            <HobbiesLabel label="Biking" />
          </HobbiesTab>
        </div>
        <HobbiesTab className="w-2/5" bgImg="/elephant.png">
          <HobbiesLabel label="Travel" />
        </HobbiesTab>
      </div>
    </div>
  );
};
