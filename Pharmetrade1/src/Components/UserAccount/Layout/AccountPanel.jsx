


import React from "react";
import AccountSideBar from "./AccountSideBar";
import { Outlet } from "react-router-dom";
import SellerNav from "../../Seller/Layout/SellerNav";
// import AccountSideBar from "../UserAccount/AccountSideBar";


const AccountPanel = ({ topMargin }) => {
  return (
    
    <div className="flex flex-col items-center h-screen overflow-hidden w-screen ">
      <SellerNav />
      <div className="flex h-full Largest:w-[1550px]  w-full  overflow-hidden   ">
        <AccountSideBar />
        <div className="w-full h-full flex  justify-end  ">
          <div
            className={`medium:w-[calc(100%-256px)] h-full overflow-scroll w-[calc(100%-4rem)] `}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPanel;