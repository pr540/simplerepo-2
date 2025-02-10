import React from "react";

function Order({ topMargin }) {
  return (
    <div className="bg-slate-200 p-12" style={{ marginTop: `${topMargin}px ` }}>
      <div className="bg-white border-1 rounded-r-md flex w-full p-4">
        <div className=" w-[50%]   my-6 ">
          <h2 className="text-2xl font-bold my-2"> Order Received</h2>

          <div className="p-4 border-b-2 bg-slate-200 border-white">
            <h4 className="text-xl">Order Number:</h4>
          </div>

          <div className="p-4 border-b-2 bg-slate-200 border-white">
            <h4 className="text-xl">Date:</h4>
          </div>

          <div className="p-4 border-b-2 bg-slate-200 border-white">
            {/* style={{ padding: '10px',borderBottom:'2px solid white' }}> */}
            <h4 className="text-xl">Total:</h4>
          </div>

          <div className="p-4 bg-slate-200">
            <h4 className="text-xl">Payment Method:</h4>
          </div>
        </div>
        <div className="w-[50%] mt-10 px-8">
          <h2 className="text-2xl font-bold mb-2 ">Order Details</h2>
          <div className="grid w-full gap-6 grid-cols-2">
            <div className="flex justify-start grid-cols-1 grid-rows-1 ">
              <h3 className="text-xl font-medium text-gray-700">Product</h3>
            </div>
            <div className="flex justify-start grid-cols-2 grid-rows-1 ">
              <h3 className="text-xl font-medium text-gray-700">Total</h3>
            </div>

            <div className="flex justify-start grid-cols-2 grid-rows-4 ">
              <h5 className="text-xl font-medium text-gray-700">Product Name</h5>
            </div>
            <div className="flex justify-start grid-cols-2 grid-rows-4 ">
              <h5 className="text-xl font-medium text-gray-700">Syrup</h5>
            </div>

            <div className="flex justify-start grid-cols-2 grid-rows-4 ">
              <h5 className="text-xl font-medium text-gray-700">Subtotal</h5>
            </div>
            <div className="flex justify-start grid-cols-2 grid-rows-4 ">
              <h5 className="text-xl font-medium text-gray-700">$:</h5>
            </div>

            <div className="flex justify-start grid-cols-2 grid-rows-4">
              <h5 className="text-xl font-medium text-gray-700">Payment Method:</h5>
            </div>
            <div className="flex justify-start grid-cols-2 grid-rows-4 ">
              <h5 className="text-xl font-medium text-gray-700 ">Check Payments</h5>
            </div>
            {/* </div>
          <div style={{ display: 'grid', width: '100%' }}> */}
            <div className="flex justify-start grid-cols-2 grid-rows-4 ">
              <h5 className="text-xl font-semibold">Total:</h5>
            </div>
            <div className="flex justify-start grid-cols-2 grid-rows-4 ">
              <h5 className="text-xl">$</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
