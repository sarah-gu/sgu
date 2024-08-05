import Image from "next/image";

export const LeftPanelIntro = () => {
  return (
    <div className="flex flex-col w-1/3 gap-16">
      <div className="text-5xl md:text-7xl">Sarah Gu</div>

      <Image
        src="/sarahgu.jpg"
        alt="Sarah Gu PFP"
        className="object-cover"
        width={500}
        height={700}
        priority
      />
    </div>
  );
};
