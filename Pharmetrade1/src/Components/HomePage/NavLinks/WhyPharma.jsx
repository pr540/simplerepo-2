

import React from "react";
import background_image from "../../../assets/homepharma.png";
import whypharma from "../../../assets/WhyPharma.png";

const AboutUs = ({ topMargin }) => {
  return (
    <div
      className=" w-full relative flex justify-center items-center"
      style={{
        marginTop: `${topMargin}px`,
      }}
    >
      <div
        className={`flex w-full z-[-1] top-0  absolute justify-center items-center`}
      >
        <img className="w-full" src={background_image} />
      </div>

      <div className="w-full h-screen flex">
        <div className="w-[50%] h-full  flex justify-end   ">
          <img src={whypharma} className="w-[450px] object-contain " />
        </div>
        <div className="w-[50%] justify-center  min-h-full flex flex-col  ">
          <div className="w-[80%] pr-20 flex flex-col  gap-5 h-[350px]">
            <h2 className="text-3xl text-blue-900 font-semibold">Why PharmEtrade</h2>
            <p className="w-full">
            Pharmetrade revolutionizes the pharmaceutical marketplace with an
           all-in-one platform for seamless buyer and seller interactions.
           Users can list products, place bids, and communicate directly with
           sellers, ensuring a streamlined and secure transaction process.
            </p>
            <p>
            As the go-to destination for pharmaceutical trading, Pharmetrade
            offers a comprehensive solution for buying, selling, and bidding on
            products. Join us today and experience the future of pharmaceutical
            commerce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
