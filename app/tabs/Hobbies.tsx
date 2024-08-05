export const Hobbies = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div
        className="w-1/2 h-1/2 justify-center items-center flex relative"
        style={{
          backgroundImage: "url('/camino.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 text-white flex justify-center items-center hover:bg-opacity-50">
          El Camino de Santiago
        </div>
      </div>
    </div>
  );
};
