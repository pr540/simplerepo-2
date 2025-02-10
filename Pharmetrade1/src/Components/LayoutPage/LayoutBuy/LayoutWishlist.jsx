// import React from 'react'

// function LayoutWishlist() {
//   return (
//     <div>
//       Wishlist
//     </div>
//   )
// }

// export default LayoutWishlist

import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { RiShare2Fill } from "react-icons/ri";
// import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPinterest, FaFacebook } from "react-icons/fa";
import wrong from "../../../assets/wrong.png";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import searchimg from "../../../assets/search1.png";
import deleteicon from "../../../assets/trash.png";
import Facebook from "../../../assets/facebook1.png";
import Pintrist from "../../../assets/pinterest.png";
import email from "../../../assets/envelope.png";
import twitter from "../../../assets/twitter.png";
import cart from '../../../assets/cartw_icon.png'
import share from "../../../assets/share.png";
import cross from "../../../assets/letter-x[1].png";
import { useSelector } from "react-redux";
import { addCartApi } from "../../../Api/CartApi";
import { removeFromWishlistApi } from "../../../Api/WishList";
import { Tooltip } from "@mui/material";
function LayoutWishlist({ addCart }) {
  const [searchQuery, setSearchQuery] = useState("");
  const user = useSelector((state)=>state.user.user);
  const wishItems = useSelector((state)=>state.wishlist.wishlist);
  const [quantities, setQuantities] = useState(wishItems.map(() => 1));
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const totalStars = 5;
  const handleremove = async(wishListId) => {
    try {
      await removeFromWishlistApi(wishListId);
    } catch (error) {
      throw error;
    }
  }
  

  const handleCart = async(productID) => {
    if(user==null)
    {
      console.log("login to add");
      return;
    }
    const cartData = {
      customerId: user.customerId, 
      productId: productID,
      quantity: 1,
      isActive: 1,
    };
    try {
      await addCartApi(cartData);

    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  const Star = ({ filled, onClick }) => (
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        fontSize: "25px",
        color: "orange",
        marginLeft: "8px",
      }}
    >
      {filled ? "★" : "☆"}
    </span>
  );

  const handlePopupToggle = () => setShowPopup(!showPopup);
  const handleSharePopupToggle = () => setIsShowPopup(!isShowPopup);

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'red',
    color: "black",
    zIndex: "1",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // backgroundColor:'beige',
    border: "1px solid gray",
    // boxShadow:'1px 1px',
    borderRadius: "5px",
    color: "black",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: ` calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  console.log(wishItems);
  return (
    <div
      className="bg-gray-200  p-8 overflow-scroll"
      // style={{ marginTop: `${topMargin}px `}}
    >
      <h1 className="text-2xl mb-2 text-blue-900 font-semibold">
        PharmEtrade {">"} Wishlist
      </h1>
      <div className="w-full min-h-full bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl m-5 font-semibold">Wishlist</h1>
          <div className="flex bg-white m-5">
            <Search className="">
              <SearchIconWrapper>
                <img src={searchimg} className="w-6 absolute " />
                {/* <SearchIcon /> */}
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
        </div>

        {wishItems.length > 0 ? (
          <div className="flex flex-col gap-6">
            {wishItems.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg flex justify-evenly h-56 p-4 max-w-6xl bg-white shadow-md"
              >
                <img
                  className="h-48 w-40 rounded-lg"
                  src={item.product.imageUrl}
                  alt={item.product.productName}
                />
                <div className="flex flex-col font-medium">
                  <Link
                    to={`/detailspage/${item.product.productID}`}
                    className="hover:text-red-600"
                  >
                    <h3 className="text-xl font-semibold">
                      {/* Vitamin C(1000IU) Cap X Syrup 1000mg Nature Made */}
                      {item.product.productName}
                    </h3>
                    {/* <p className="text-xl">Cough Syrup 1000mg</p> */}
                    <p className="text-xl font-semibold">${item.product.salePrice}</p>
                  </Link>
                  <p className="pt-2 text-xl font-semibold">Manufacturer: <span className="font-normal">{item.product.manufacturer}</span> </p>
                  <p>Quantity: 1</p>
                  <div className="flex flex-col">
                    <span className="text-lg">Expires on or after :</span>
                    <p>Dec-24</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <button
                    className="text-lg font-semibold text-white bg-blue-900  items-center justify-center flex h-9 w-36 rounded-full"
                    onClick={() => handleCart(item.product.productID)}
                  >
                    <img src={cart} className="w-5 h-5 mx-1"/>
                    ADD 
                  </button>
                  <div className="flex items-center justify-between my-4 cursor-pointer">
                    <Tooltip title = "Share" placement="top">

                    <img
                      src={share}
                      className="w-6 mx-3 "
                      onClick={handleSharePopupToggle}

                    />
                    </Tooltip>
                    {/* <RiShare2Fill className="border rounded-md text-2xl w-8 hover:bg-sky-200"  /> */}
                    {isShowPopup && (
                      <div className="flex flex-col justify-start  h-full absolute inset-0 bg-transparent z-auto">
                        <div className="border w-[13%] rounded-lg bg-gray-100">
                          <div className="flex border-b justify-between p-2">
                            <div className="flex items-center">
                              <img src={email} className="text-blue-400 w-6" />
                              <p className="ml-3">Email</p>
                            </div>
                            <img
                              src={wrong}
                              onClick={handleSharePopupToggle}
                              className="w-3 h-3"
                            />
                          </div>
                          <div className="flex border-b p-2">
                            <img src={Pintrist} className="text-blue-400 w-6" />

                            {/* <FaPinterest className="text-red-500 text-2xl" /> */}
                            <p className="ml-3">Pinterest</p>
                          </div>
                          <div className="flex border-b p-2">
                            <img src={Facebook} className="text-blue-400 w-6" />
                            {/* <FaFacebook  /> */}
                            <p className="ml-3">Facebook</p>
                          </div>
                          <div className="flex border-b p-2">
                            <img src={twitter} className="text-blue-400 w-6" />
                            <p className="ml-3">Twitter</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <img
                      src={deleteicon}
                      onClick={() => handleremove(item.wishListId)}
                      className=" w-5 "
                    />
                    {/* <MdDeleteOutline className="border rounded-md text-2xl hover:bg-sky-200" /> */}
                  </div>
                  <p
                    onClick={handlePopupToggle}
                    className="hover:text-red-400 hover:underline font-semibold text-blue-900"
                  >
                    Add comment, quantity & priority
                  </p>
                  {showPopup && (
                    <div className="flex flex-col justify-center items-center h-full absolute inset-0 bg-transparent z-auto">
                      <div className="border w-[30%] rounded-lg bg-gray-100">
                        <div className="flex justify-between items-center bg-blue-900 border-b p-2">
                          <p className="font-bold text-xl text-white">
                            Add comment, quantity, priority
                          </p>
                          <img
                            src={cross}
                            className="hover:text-red-500  w-3"
                            onClick={handlePopupToggle}
                          />
                        </div>
                        <div className="flex justify-evenly my-2">
                          <img
                            className="h-32 w-24 rounded-lg"
                            src={item.src}
                            alt={item.id}
                          />
                          <div className="flex flex-col justify-end">
                            <label className="flex flex-col font-semibold">
                              Comment
                            </label>
                            <textarea
                              placeholder="Enter comments"
                              className="border text-center h-32 w-60 rounded-md flex justify-start items-start"
                            />
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="flex flex-col">
                            <span className="font-semibold ">Priority:</span>
                            <select className="p-2 border rounded-md">
                              <option>Lowest</option>
                              <option>Low</option>
                              <option>Medium</option>
                              <option>High</option>
                              <option>Highest</option>
                            </select>
                          </div>
                          <div className="flex flex-col mx-4">
                            <span className="font-semibold ">Needs</span>
                            <input className="border rounded-md w-20 p-2" />
                          </div>
                          <div className="flex flex-col mx-4">
                            <span className="font-semibold ">Has:</span>
                            <input className="border rounded-md w-20 p-2" />
                          </div>
                        </div>
                        <div className="flex justify-end my-6">
                          <button
                            className="border p-2 rounded-md hover:bg-red-500 hover:text-white "
                            onClick={handlePopupToggle}
                          >
                            Cancel
                          </button>
                          <button className="border p-2 rounded-md mx-4 w-16 bg-blue-900 text-white">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <div>
                    {Array.from({ length: totalStars }, (v, i) => (
                      <Star
                        key={i}
                        filled={i < rating}
                        onClick={() => setRating(i + 1)}
                        className="text-orange-400"
                      />
                    ))}
                    <p>
                      The rating is {rating} out of {totalStars}.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center m-8">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your wishlist is currently empty.
            </h2>
            <Link
              to="/layout"
              className="mt-5 px-8 py-3 font-bold text-white text-xl bg-blue-900 border-2 rounded-full"
            >
              RETURN TO SHOP
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default LayoutWishlist;
