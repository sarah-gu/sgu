import { LeftPanelIntro } from "./sections/LeftPanelIntro";
import { RightPanelContent } from "./sections/RightPanelContent";

export default function Home() {
  return (
    <main className="flex flex-row h-screen w-screen p-16 gap-32">
      <LeftPanelIntro />
      <RightPanelContent />
    </main>
  );
}
