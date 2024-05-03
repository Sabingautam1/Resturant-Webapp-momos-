import React from "react";

const ItemComp = ({ image, title, price }) => {
  return (
    <div className="border-2 border-gray-200 pb-6 md:w-[20rem] rounded-lg sm:w-full">
      <div className="flex justify-center items-center">
        <div>
          <img src={image} alt={title} />
        </div>
      </div>
      <div className="text-center mt-2 mb-2">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p>
          रु <span className="text-2xl font-bold text-ownColor">{price}</span>
        </p>
      </div>
    </div>
  );
};

export default ItemComp;
