export const Hobbies = () => {
  return (
    <div className="flex flex-col w-full h-full gap-1">
      <div className="h-1/2 flex flex-row gap-1">
        <div
          className="w-2/3 h-full justify-center items-center flex relative"
          style={{
            backgroundImage: "url('/camino.png')",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 text-white flex justify-center items-center hover:bg-opacity-50">
            El Camino de Santiago
          </div>
        </div>
        <div
          className="w-1/3 h-full justify-center items-center flex relative"
          style={{
            backgroundImage: "url('/baking.png')",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 text-white flex justify-center items-center hover:bg-opacity-50">
            Baking
          </div>
        </div>
      </div>
      <div className="h-1/2 flex flex-row gap-1">
        <div
          className="w-2/5 h-full justify-center items-center flex relative"
          style={{
            backgroundImage: "url('/restaurants.png')",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 text-white flex justify-center items-center hover:bg-opacity-50">
            Restaurants
          </div>
        </div>
        <div className="flex flex-col gap-1 w-1/5 h-full">
          <div
            className="h-1/2 w-full justify-center items-center flex relative "
            style={{
              backgroundImage: "url('/climbing.png')",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 text-white flex justify-center items-center hover:bg-opacity-50">
              Climbing
            </div>
          </div>
          <div
            className="h-1/2 w-full justify-center items-center flex relative"
            style={{
              backgroundImage: "url('/biking.png')",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 text-white flex justify-center items-center hover:bg-opacity-50">
              Biking
            </div>
          </div>
        </div>
        <div
          className="w-2/5 h-full justify-center items-center flex relative"
          style={{
            backgroundImage: "url('/elephant.png')",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 text-white flex justify-center items-center hover:bg-opacity-50">
            Travel
          </div>
        </div>
      </div>
    </div>
  );
};
