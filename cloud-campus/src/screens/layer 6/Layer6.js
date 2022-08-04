import React from "react";

export const Layer6 = () => {
  return (
    <div className=" flex justify-center border-0 border-black py-5">
    <div className="border-0 lg:w-[80%]">
      <div className="border-0 flex-col   items-center flex-wrap">
        <p className="text-[350%] font-bold pb-6">nos partenaires  </p>
        <div className="border-0  flex-1 flex justify-center flex-wrap">
          <div className="border-2 lg:w-[25%] mx-1 my-1 flex justify-center items-center">
           <img alt="partners" src="data:image/png;base64,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"/>
           
          </div>

          <div className="border-2 lg:w-[25%] mx-1 my-1 flex justify-center items-center">
           <img alt="partners" src="data:image/png;base64,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"/>
           
          </div>

          <div className="border-2 lg:w-[25%] mx-1 my-1 flex justify-center items-center">
           <img alt="partners" src="data:image/png;base64,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"/>
           
          </div>

          <div className="border-2 lg:w-[25%] mx-1 my-1 flex justify-center items-center">
           <img alt="partners" src="data:image/png;base64,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"/>
           
          </div>

          <div className="border-2 lg:w-[25%] mx-1 my-1 flex justify-center items-center">
           <img alt="partners" src="data:image/png;base64,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"/>
           
          </div>

          <div className="border-2 lg:w-[25%] mx-1 my-1 flex justify-center items-center">
           <img alt="partners" src="data:image/png;base64,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"/>
           
          </div>

          <div className="border-2 lg:w-[25%] mx-1 my-1 flex justify-center items-center">
           <img alt="partners" src="data:image/png;base64,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"/>
           
          </div>

          <div className="border-2 lg:w-[25%] mx-1 my-1 flex justify-center items-center">
           <img alt="partners" src="data:image/png;base64,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"/>
           
          </div>

          
        
          
         
        </div>

       
      </div>
    </div>
  </div>
  );
};
