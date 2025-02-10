import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Landing2 from "./Landing2";
import Sliders from "./Sliders";
import banner1 from "../../../assets/BannerText1.png";
import banner2 from "../../../assets/BannerText2.jpg";
import banner3 from "../../../assets/BannerText3.jpg";
import banner4 from "../../../assets/BannerText4.jpg";
import "./Landing.css";

function Landing({ topMargin, wishList, addCart }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,       // Auto play slides
    autoplaySpeed: 3000,  // Slide change interval (3 seconds)
  };

  return (
    <div className="w-full font-sans">
      <div className="w-full">
        <div
          className="h-fit"
          style={{
            marginTop: `${topMargin}px`,
          }}
        >
          <div className="w-full relative h-[350px] overflow-hidden">
            <Slider {...settings}>
              <div>
                <img
                  src={banner4}
                  alt="Carousel Image 1"
                  className="w-full h-[350px]"
                />
              </div>
              <div>
                <img
                  src={banner2}
                  alt="Carousel Image 2"
                  className="w-full h-[350px]"
                />
              </div>
              <div>
                <img
                  src={banner3}
                  alt="Carousel Image 3"
                  className="w-full h-[350px]"
                />
              </div>
              <div>
                <img
                  src={banner1}
                  alt="Carousel Image 4"
                  className="w-full h-[350px]"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="w-full bg-slate-200 px-6">
          <Landing2 addCart={addCart} wishList={wishList} />
          <Sliders addCart={addCart} wishList={wishList} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
