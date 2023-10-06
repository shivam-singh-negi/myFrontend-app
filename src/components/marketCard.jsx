import React from 'react';

export const MarketCard = (props) => {
  return (
    <>
      <figure className= "bg-white shadow-lg border rounded-md p-8 mx-auto my-10 w-80 h-[400px]">
      
      <div className="w-28 h-28 bg-gradient-to-r from-gray-400 rounded-full  flex items-center justify-start">
  <div className="w-20 h-20 bg-green-800 rounded-full mx-auto   flex items-center justify-start ">
  <div className="w-10 h-10 bg-white rounded-full mx-auto   flex items-center justify-start ">
<img src="https://fastly.picsum.photos/id/871/200/300.jpg?hmac=wXN1u0NeBnK8vCkjkJXzoTfZn6F0JBzgOpCdmRGXsw0" alt="" />
</div>
  </div>
</div>

        <div className="pt-6 space-y-5">
          <h2 className="text-xl font-bold">
           {props.heading}
          </h2>
          <p className="text-lg font-medium  h-56 overflow-clip text-gray-400">
          {props.paragraph}
          </p>
        </div>
      </figure>
    </>
  );
};
