import Image from "next/image";

export const LeftPanelIntro = () => {
  return (
    <div className="flex flex-col gap-4 w-1/3">
      <div className="text-5xl md:text-7xl">Sarah Gu</div>
      <div className="text-gray-400 text-2xl pb-8">
        Software Engineer & Builder
      </div>
      <Image
        src="/sarahgu.jpg"
        alt="Sarah Gu PFP"
        className="object-cover"
        width={400}
        height={700}
        priority
      />
    </div>
  );
};
