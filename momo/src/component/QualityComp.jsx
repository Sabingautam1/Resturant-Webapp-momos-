import React from "react";

const QualityComp = ({image,title,paragraph}) => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className="items-center text-center">
          <div className="flex justify-center items-center">
            <img className="" src={image} alt="quality"></img>
          </div>
          <h1 className="text-2xl mt-3 mb-4 font-semibold text-cyan-900">
           {title}
          </h1>
          <p className="text-gray-600 mb-4 w-80 px-7">
           {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default QualityComp;
