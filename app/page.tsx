import { LeftPanelIntro } from "./sections/LeftPanelIntro";
import { RightPanelContent } from "./sections/RightPanelContent";

export default function Home() {
  return (
    <main className="flex flex-row h-screen w-screen p-16 lg:px-32 justify-between gap-24 lg:gap-36">
      <LeftPanelIntro />
      <RightPanelContent />
    </main>
  );
}
