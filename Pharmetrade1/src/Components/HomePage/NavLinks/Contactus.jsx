


import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import location from "../../../assets/Location.png";
import call from "../../../assets/Call.png";
import mail from "../../../assets/Mail.png";

const Contactus = ({ topMargin }) => {
  return (
    <div
      className="h-screen w-full flex justify-center items-center"
      style={{
        marginTop: `${topMargin}px`,
      }}
    >
      <div className="w-full h-full flex items-center mb-8">
        <div className="w-[30%] h-full flex flex-col p-6 bg-opacity-75 rounded-lg shadow-lg">
          <h2 className="text-3xl text-blue-900 font-semibold my-4">
            Contact Us
          </h2>
          <form className="flex flex-col gap-4">
            <TextField label="Enter Name" variant="outlined" fullWidth size="small"/>
            <TextField label="Mobile Number" variant="outlined" fullWidth size="small"/>
            <TextField label="Email" variant="outlined" fullWidth  size="small"/>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
            <button className="text-white p-2 rounded-lg bg-blue-900">
              Submit
            </button>
          </form>
        </div>
        <div className="w-[30%] h-full flex flex-col mt-8 items-center bg-slate-200">
          <div className="w-[210px] flex flex-col justify-center items-center my-5">
            <img src={location} className="h-10 w-12" />
            <h2 className="text-2xl text-blue-900 font-semibold">Location</h2>
            <p className="text-[17px] w-full">5 Cold Hill Road South, Unit 27, Mendham, NJ 07945</p>
          </div>
          <div className="flex w-[200px] flex-col justify-center items-center my-5">
            <img src={call} className="h-10 w-10" />
            <h2 className="text-2xl text-blue-900 font-semibold">Call Us</h2>
            <p>1 (234) 567-891</p>
            <p>1 (234) 567-891</p>
          </div>
          <div className="flex w-[200px] flex-col justify-center items-center my-5">
            <img src={mail} className="h-7 w-7" />
            <h2 className="text-2xl text-blue-900 font-semibold">Email Address</h2>
            <p>info@pharmetrade.com</p>
            <p>info@pharmetrade.com</p>
          </div>
        </div>

        <div className="w-[40%] h-full flex justify-center p-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120287.9396004678!2d-74.69342315465147!3d40.77969971207323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1c6e4c4b5b5b5%3A0xb1ae32c5508fbc82!2s5%20Cold%20Hill%20Rd%20S%2C%20Mendham%2C%20NJ%2007945!5e0!3m2!1sen!2sus!4v1698123456789!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
