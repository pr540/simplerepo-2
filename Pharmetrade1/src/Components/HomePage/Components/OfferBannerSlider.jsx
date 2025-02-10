import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import offersbanner1 from "../../../assets/1111.webp";
import offersbanner2 from "../../../assets/2222.webp";
import offersbanner3 from "../../../assets/3333.webp";
import offersbanner4 from "../../../assets/44444.webp";

const OffersSlider = () => {
  const offersImages = [offersbanner1, offersbanner2, offersbanner3, offersbanner4,offersbanner1, offersbanner2, offersbanner3, offersbanner4];

  // Create pairs of images
  const createImagePairs = (images) => {
    const pairs = [];
    for (let i = 0; i < images.length; i += 2) {
      pairs.push([images[i], images[i + 1]]);
    }
    return pairs;
  };

  const imagePairs = createImagePairs(offersImages);

  return (
    <Carousel
      infiniteLoop
      autoPlay
      showThumbs={false}
      showStatus={false}
      interval={2000}
      swipeable
      axis="horizontal"
    >
      {imagePairs.map((pair, index) => (
        <div key={index} className="flex justify-between gap-3">
          {pair.map((image, subIndex) => (
            image && <img src={image} alt={`Offer ${index * 2 + subIndex + 1}`} className="h-[250px] w-[47%]" key={subIndex} />
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default OffersSlider;
