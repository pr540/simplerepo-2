// import React from 'react';
// import background_image from "../../../assets/Demobg.jpg"

// const RequestDemo = ({ topMargin }) => {
//   return (
//     <div
//     className=" w-full  relative flex justify-center items-center"
//     style={{
//       marginTop: `${topMargin}px`,
//     }}
//   >
//     <div
//       className={`flex w-full h-screen z-[-1] top-0  absolute justify-center items-center`}
//     >
//       <img className="w-full " src={background_image} />
//     </div>

//     <div className="w-full h-screen flex">
//       <div className="w-[54%] h-full  flex justify-end  ">
//         {/* <img src={whypharma} className="w-[450px] object-contain " /> */}
//       </div>
//       <div className="w-[42%] justify-center items-center min-h-full flex   ">
        
    
//       </div>
//     </div>
//   </div>
//   )
// }

// export default RequestDemo


import React from 'react';
import { TextField, Button } from '@mui/material';
import background_image from "../../../assets/Demobg.jpg";

const RequestDemo = ({ topMargin }) => {
  return (
    <div
      className="w-full relative flex justify-center items-center"
      style={{ marginTop: `${topMargin}px` }}
    >
      <div className="flex w-full h-screen z-[-1] top-0 absolute justify-center items-center">
        <img className="w-full opacity-50" src={background_image} alt="Background" />
      </div>

      <div className="w-full h-screen flex items-center">
        <div className="w-[54%] p-20 m-4 flex flex-col gap-6">
            <h1 className='text-6xl text-black font-semibold'>Unlock Your Marketplace Potential with a Live Demo</h1>
            <p className='text-black text-xl font-medium'>See how our platform can elevate your buying and selling experience. 
                Join our live demo to explore powerful features designed for your success.</p>
        </div>
        <div className="w-[46%]  flex flex-col m-4 bg-white p-8">
          <h2 className="text-xl font-bold mb-4">SCHEDULE A LIVE DEMO TODAY</h2>
          <form className="w-full flex flex-col space-y-4">
            <div className="flex space-x-4">
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                className="flex-1"
              />
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                className="flex-1"
              />
            </div>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
            />
            <div className="flex space-x-4">
              <TextField
                label="Area Code"
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
              />
            </div>
            <TextField
              label="Company Name"
              variant="outlined"
              fullWidth
            />
            <button
              variant="contained"
              className='bg-blue-900 text-white p-2 rounded-md font-semibold'
            >
              Request Your Demo
            </button>
          </form>
          <p className="mt-4 text-gray-600 text-center">
            We don’t share your info, promise
          </p>
        </div>
      </div>
    </div>
  );
}

export default RequestDemo;

