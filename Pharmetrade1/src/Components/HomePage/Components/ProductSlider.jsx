// Slider.js
import React, { useRef, useState, useEffect, useContext } from "react";
import left from "../../../assets/arrowleft.png";
import right from "../../../assets/arrowright.png";
import addcart from "../../../assets/cartw_icon.png";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import comp from "../../../assets/CompareNav2.png";
import nature from "../../../assets/img1.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addCartApi } from "../../../Api/CartApi";
import { addToWishlistApi, removeFromWishlistApi } from "../../../Api/WishList";

const ProductSlider = ({ data, Title, addCart, wishList, productList }) => {
  const user = useSelector((state)=>state.user.user);
  const wishlist = useSelector((state)=>state.wishlist.wishlist);
  const [wishlistProductIDs,setwishlistProductIDs] = useState(wishlist.map((wishItem) => wishItem.product.productID));
  const getWishlistIdByProductID = (productID) => {
    const wishlistItem = wishlist.find((item) => item.product.productID === productID);
    return wishlistItem ? wishlistItem.wishListId : null; 
  };

  const [rating, setRating] = useState(0);
  const [cartQuantities, setCartQuantities] = useState({});
  const totalStars = 5;

  const carouselContainer = useRef(null);
  const naviagte = useNavigate();
  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };


  const handleCart = async(index) => {
    if(user==null)
    {
      console.log("login to add");
      return;
    }
    const cartData = {
      customerId: user.customerId, 
      productId: data[index].productID,
      quantity: 1,
      isActive: 1,
    };
    try {
      await addCartApi(cartData);

    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleQuantityChange = (index, delta) => {
    setCartQuantities((prev) => {
      const newQuantity = (prev[index] || 0) + delta;
      if (newQuantity <= 0) {
        const updatedQuantities = { ...prev };
        delete updatedQuantities[index];
        return updatedQuantities;
      }
      return { ...prev, [index]: newQuantity };
    });
  };

  const handleClick = async (productID) => {
    if(wishlistProductIDs.includes(productID))
    {
      setwishlistProductIDs(wishlistProductIDs.filter(id => id !== productID));
      await removeFromWishlistApi(getWishlistIdByProductID(productID))
    }
    else{
      setwishlistProductIDs([...wishlistProductIDs, productID]);
      const wishListData = {
        wishListId: "0",
        productId: productID,
        customerId: user.customerId,
        isActive: 1
      } 
      await addToWishlistApi(wishListData);
    }
  };

  // const handleproductdetiails = () => {
  //   naviagte(`/detailspage/${productID}`);
  // };
  const handleProductDetails = (productID) => {
    naviagte(`/detailspage/${productID}`);
  };

  const Star = ({ filled, onClick }) => (
    <span
      onClick={onClick}
      style={{ cursor: "pointer", fontSize: "25px", color: "orange" }}
    >
      {filled ? "★" : "☆"}
    </span> 
  );
  return (
    <div className="flex mt-6 flex-col justify-center pb-4 gap-2">
      <div className="flex justify-between ml-4 font-semibold text-[22px]">
        <p>{Title}</p>

        <div className="flex justify-end mr-14 gap-2">
          <button
            className="bg-white rounded-sm p-2"
            onClick={() => navigation("left")}
          >
            <img src={left} className="w-4 h-4" />
          </button>
          <button
            className="bg-white rounded-sm p-2"
            onClick={() => navigation("right")}
          >
            <img src={right} className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="w-full p-4 flex justify-center bg-white">
        <div
          ref={carouselContainer}
          className="flex w-full gap-6 overflow-x-scroll snap-x snap-mandatory"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="snap-center border rounded-sm bg-white shrink-0"
            >
              <div className="relative bg-slate-100 m-2">
                <img
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event from bubbling to parent
                    handleClick(item.productID);
                  }}
                  src={ wishlistProductIDs.includes(item.productID) ? filledHeart : emptyHeart}
                  className="absolute h-7 w-7 right-1 p-1 cursor-pointer"
                  alt="Favorite Icon"
                />
                <img
                  src={comp}
                  className="absolute h-7 w-7 bottom-0 right-1 p-1"
                />

                {/* <img
                  src={item.imageUrl}
                  // onClick={() => naviagte(`/detailspage/${index}`)}
                  onClick={()=>handleproductdetiails}
                  alt={item.name}
                  className="h-48 w-48 object-contain rounded-lg hover:cursor-pointer"
                /> */}
                <img
                  src={item.imageUrl}
                  onClick={() => handleProductDetails(item.productID)} // Assuming item.id is the product ID
                  alt={item.name}
                  className="h-48 w-48 object-contain rounded-lg hover:cursor-pointer"
                />
              </div>
              <div className="p-2">
                <div className="flex justify-between flex-col font-medium">
                  <h2 className="text-black font-bold">{item.productName}</h2>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-black font-semibold">
                      ${item.salePrice}
                    </h3>
                    <span className="text-[10px] line-through">
                      (${item.priceName})
                    </span>
                  </div>
                </div>
                <div>
                  {Array.from({ length: totalStars }, (v, i) => (
                    <Star
                      key={i}
                      filled={i < rating}
                      onClick={() => setRating(i + 1)}
                    />
                  ))}
                </div>
                <div
                onClick={() => handleCart(index)}
                className="bg-blue-900 flex gap-1 p-1 rounded-lg justify-center items-center  cursor-pointer"
              >
                <img src={addcart} className="h-7 p-1" />
                <p className="text-white font-semibold">ADD</p>
              </div>
                {/* {cartQuantities[index] ? (
                  <div className="flex text-white justify-between items-center px-3 gap-2 mt-2">
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      disabled={(cartQuantities[index] || 0) <= 0}
                      className="bg-blue-900 w-[30px]  p-1 rounded-lg"
                    >
                      -
                    </button>
                    <span className="px-2 text-black">
                      {cartQuantities[index]}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="bg-blue-900 w-[30px]  p-1 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => handleCart(index)}
                    className="bg-blue-900 flex gap-1 p-1 rounded-lg justify-center items-center mt-2 cursor-pointer"
                  >
                    <img src={addcart} className="h-7 p-1" />
                    <p className="text-white font-semibold">ADD</p>
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
