import React, { useState } from "react";
import screen1 from "../assets/Icons/Screen dummy-1.png";
import screen2 from "../assets/Icons/Screen dummy-2.png";
import screen3 from "../assets/Icons/Screen dummy-3.png";
import screen4 from "../assets/Icons/Screen dummy-4.png";
import mobile from "../assets/mobile.png";

const Content = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const mobiles = [screen2, screen1, mobile, screen3, screen4];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="w-fit">
      <div className="flex justify-center items-center w-fit mt-32 relative">
        {mobiles.map((item, key) => {
          const isHovered = key === hoveredIndex;
          return (
            <div
              key={key}
              className={`transition-transform duration-300 ease-in-out ${
                isHovered ? "z-10 scale-125" : "scale-90"
              }`}
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: isHovered
                  ? "translateX(0)"
                  : `translateX(${
                      hoveredIndex !== null
                        ? key < hoveredIndex
                          ? "-50%"
                          : "50%"
                        : "0"
                    })`,
              }}
            >
              <img src={item} alt={`Mobile ${key}`} className="rounded-lg" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
