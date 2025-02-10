import React, { useEffect } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footers from "../../Footers";
import {
  fetchAllProductsApi,
  fetchOtcProductsApi,
  fetchRecentSoldProductsApi,
  fetchRxProductsApi,
} from "../../../Api/ProductApi";
import { useSelector } from "react-redux";
import { fetchAllBannersApi } from "../../../Api/BannerApi";
import { LoadingApi } from "../../../Api/HomeStaticApi";
import { getUserByCustomerIdApi } from "../../../Api/UserApi";
import { getCartItemsApi } from "../../../Api/CartApi";
import { fetchWishlistItemsApi } from "../../../Api/WishList";

const HomeLayout = ({ topDivRef, cartItems, topMargin }) => {
  // const userId = localStorage.getItem("userId");
  // useEffect(() => {
  //   const LoadAll = async (userId) => {
  //     LoadingApi(true);
  //     if(userId)
  //     {
  //       await getUserByCustomerIdApi(userId);
  //       await getCartItemsApi(userId);
  //       await fetchWishlistItemsApi(userId);
  //     }

  //     await fetchAllBannersApi();
  //     await fetchRecentSoldProductsApi(10);
  //     await fetchOtcProductsApi();
  //     await fetchRxProductsApi();
  //     await fetchAllProductsApi();
  //     LoadingApi(false);
  //   };
    
  //   const token = localStorage.getItem("token");
  //   LoadAll(userId);
  // }, [userId]);

  return (
    <div className="w-screen overflow-scroll ">
      <Nav topDivRef={topDivRef} cartItems={cartItems} />
      <div
        className="w-full flex justify-center mt-[122px]"      >
        <div className="Largest:w-[1550px]  Laptop:w-full  w-full ">
          <Outlet />
        </div>
      </div>

      <Footers />
    </div>
  );
};

export default HomeLayout;
