import React from "react";

export const Layer1 = () => {
  return (
    <div className="h-screen bg-no-repeat bg-cover bg-[url('https://cutewallpaper.org/23/information-technology-wallpaper-hd/1055919214.jpg')]">
      <div className="border-0 flex  h-screen items-center ">
        <div className="border-0  flex-1 flex flex-row justify-center">
          <div>
            <p className="text-[350%] font-bold text-white">
              Learn From the best.
            </p>
            <p className="text-[350%] font-bold text-white">
              Learn on your schedule.
            </p>

            <p className="text-[100%] font-bold text-white">
              Discover thousands of online courses from top universities around
              the word
            </p>
            <p className="text-[100%] font-bold text-white">
              Anywhere, anytime. Enjoy risk-free with our 30-day, money-back
              guarantee.
            </p>
          </div>
        </div>

        <div className="border-0 flex-1 flex flex-row justify-center">
          <div className="border-2 rounded-full p-20">
            <img
              alt="cloud campus"
              width={600}
              src="https://cloudcampuspro.com/home/img/logocampus.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

//lg:ml-40
