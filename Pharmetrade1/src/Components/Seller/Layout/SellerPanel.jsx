import React from "react";
import Sidebar from "./SideBar";
import SellerNav from "./SellerNav";

import { Outlet } from "react-router-dom";
import { useState } from "react";

function SellerPanel() {
  return (
    <div className="flex flex-col h-screen overflow-hidden  w-screen bg-gray-100 ">
      <SellerNav />
      <div className="flex w-screen h-full overflow-hidden   ">
        <Sidebar />
        <div className="w-full h-full  flex justify-end ">
          <div
            className={`medium:w-[calc(100%-256px)] h-full overflow-scroll w-[calc(100%-4rem)] `}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerPanel;
