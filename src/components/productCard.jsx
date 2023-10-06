import React from "react";

export const ProductCard = (props) => {
  return (
    <>
      <figure className="bg-white rounded-lg shadow-lg border  mx-auto my-10 w-80 h-[400px]">
      <div className="  h-3/5 bg-gradient-to-r from-gray-800  flex items-center justify-start">
      afksldfjklsdjsadf sd f dsf sd f dsafdsfasd f asds
        </div>


        <div className="pt-6 p-2 space-y-5 flex-col justify-between">
          <div className="flex-col">
            {" "}
            <h2 className="text-2xl font-bold">Baby Bottle Sterilizer</h2>
            <p className="text-lg font-bold text-gray-400">
              Baby Emerland Solution
            </p>
          </div>
          <div className="flex justify-between">
            <span className="text-2xl font-bold">$3343</span>
            <span className="text-xl font-bold">4.5 cr+ Revenus</span>
          </div>
        </div>
      </figure>
    </>
  );
};
