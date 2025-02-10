import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import img1 from "../../assets/img1.png";

function Beauty({ topMargin }) {
  const [isPop, setIsPop] = useState(false);
  const images = [img1, img1, img1, img1, img1, img1, img1, img1];
  function Up() {
    setIsPop(true);
  }
  function Leave() {
    setIsPop(false);
  }
  return (
    <div className="grid grid-cols-4 grid-rows-2 w-96 bg-yellow-200 gap-10 p-10">
      {images.map((items, index) => (
        <div className=" w-auto">
          <div class="flex justify-center">
            <img
              src="/src/assets/img1.png"
              alt="nature-2"
              class="h-36 w-48 pl-3 bg-foots rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Beauty;
