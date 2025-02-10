import React from "react";
import background_image from "../../../assets/homepharma.png";
import about from "../../../assets/AboutusPharma.png";

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
        <div className="w-[50%] h-full  flex justify-end  ">
          <img src={about} className="w-[450px] object-contain " />
        </div>
        <div className="w-[50%] justify-center  min-h-full flex flex-col  ">
          <div className="w-[80%] pr-20 flex flex-col  gap-5 h-[350px]">
            <h2 className="text-3xl text-blue-900 font-semibold">About Us</h2>
            <p className="w-full">
              At Pharmetrade, we are committed to transforming the
              pharmaceutical industry by creating a dynamic and interactive
              marketplace. Our platform empowers users to buy, sell, and bid on
              pharmaceutical products with ease and confidence.
            </p>
            <p>
              We prioritize transparency, security, and user satisfaction,
              ensuring that every transaction meets the highest standards of
              quality and reliability. Our mission is to facilitate a seamless
              trading experience that connects buyers and sellers worldwide,
              fostering innovation and growth in the pharmaceutical sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
