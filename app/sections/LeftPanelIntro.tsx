import Image from "next/image";

export const LeftPanelIntro = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="text-6xl">Sarah Gu</div>
      <div className="text-gray-400 text-md">Software Engineer & Builder</div>
      <Image
        src="/sarahgu.jpg"
        alt="Sarah Gu PFP"
        className="object-cover"
        width={300}
        height={500}
        priority
      />
    </div>
  );
};
