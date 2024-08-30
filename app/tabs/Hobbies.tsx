import { useState } from "react";
import { HobbiesLabel } from "../components/HobbiesLabel";
import { HobbiesTab } from "../components/HobbiesTab";
import { HobbiesModal } from "../components/HobbiesModal";

export const Hobbies = ({ theme }: { theme: string }) => {
  const [activeHobby, setActiveHobby] = useState<string>("");
  return (
    <>
      <div className="flex flex-col w-full h-full gap-1">
        <div className="h-1/2 flex flex-row gap-1">
          <HobbiesTab
            className="w-2/3"
            bgImg="/camino.png"
            onClick={() => {
              setActiveHobby("Camino de Santiago");
            }}
          >
            <HobbiesLabel label="Camino de Santiago" />
          </HobbiesTab>
          <HobbiesTab
            className="w-1/3"
            bgImg="/baking.png"
            onClick={() => {
              setActiveHobby("Baking");
            }}
          >
            <HobbiesLabel label="Baking" />
          </HobbiesTab>
        </div>
        <div className="h-1/2 flex flex-row gap-1">
          <HobbiesTab
            className="w-2/5"
            bgImg="/restaurants.png"
            onClick={() => {
              setActiveHobby("Restaurants");
            }}
          >
            <HobbiesLabel label="Restaurants" />
          </HobbiesTab>

          <div className="flex flex-col gap-1 w-1/5 h-full">
            <HobbiesTab
              className="h-1/2"
              bgImg="/climbing.png"
              onClick={() => {
                setActiveHobby("Climbing");
              }}
            >
              <HobbiesLabel label="Climbing" />
            </HobbiesTab>
            <HobbiesTab
              className="h-1/2"
              bgImg="/biking.png"
              onClick={() => {
                setActiveHobby("Biking");
              }}
            >
              <HobbiesLabel label="Biking" />
            </HobbiesTab>
          </div>
          <HobbiesTab
            className="w-2/5"
            bgImg="/elephant.png"
            onClick={() => {
              setActiveHobby("Travel");
            }}
          >
            <HobbiesLabel label="Travel" />
          </HobbiesTab>
        </div>
      </div>
      {activeHobby !== "" && (
        <HobbiesModal
          theme={theme}
          activeHobby={activeHobby}
          setActiveHobby={setActiveHobby}
        />
      )}
    </>
  );
};
