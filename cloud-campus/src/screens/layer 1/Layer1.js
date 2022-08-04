import React from "react";

export const Layer1 = () => {
  return (
    <div className="h-screen bg-no-repeat bg-cover bg-[url('https://cutewallpaper.org/23/information-technology-wallpaper-hd/1055919214.jpg')]">
     <div className="border-0 flex justify-center">
     <div className="border-0 flex  h-screen items-center w-[80%] ">
        <div className="border-0  flex-1 flex flex-row justify-center">
          <div>
            <p className="text-[350%] font-bold text-white">
            Apprenez des meilleurs.
            </p>
            <p className="text-[350%] font-bold text-white">
            Apprenez où que vous soyez
            </p>

            <p className="text-[100%] font-bold text-white">
            Découvrez des milliers de cours en ligne des meilleures universités du monde
              le mot
            </p>
            <p className="text-[100%] font-bold text-white">
            N'importe où, n'importe quand. Profitez sans risque avec notre remboursement de 30 jours
              garantie.
            </p>
          </div>
        </div>

        <div className="border-0 flex-1 md:flex flex-row justify-center hidden ">
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
    </div>
  );
};

//lg:ml-40
