export const HobbiesLabel = ({ label }: { label: string }) => (
  <div className="absolute inset-0 bg-black/40 text-white flex text-center items-center justify-center hover:bg-black/60 hover:backdrop-blur-sm transition-all duration-300">
    <span className="text-sm md:text-lg font-medium drop-shadow-lg">
      {label}
    </span>
  </div>
);
