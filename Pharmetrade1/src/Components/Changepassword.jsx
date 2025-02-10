import React, { useState } from "react";
import background_image from "../assets/homepharma.png";
import logo from "../assets/logo2.png";
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

// import Otp from './Otp';
import { Link } from "react-router-dom";
const Confirmpassword = () => {
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewpassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    const passwordRegex = /.{6,}/; // Minimum 6 characters

    if (!username) {
      errors.username = "Username is required";
    }

    if (!oldPassword) {
      errors.oldPassword = "Old password is required";
    }

    if (!newPassword) {
      errors.newPassword = "New password is required";
    } else if (!passwordRegex.test(newPassword)) {
      errors.newPassword = "New password must be at least 6 characters long";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (confirmPassword !== newPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form submitted successfully");
      // Reset form
      setUsername("");
      setOldPassword("");
      setNewpassword("");
      setConfirmpassword("");
      setErrors({});
    }
  };

  return (
    <div className="h-screen w-screen">
      <img
        src={background_image}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      <div className="w-full h-full ">
        <Link to="/">
          <img src={logo} style={{ width: "220px" }} />
        </Link>

        <div className=" h-full flex justify-center items-center">
          <div className="bg-white w-[550px] border rounded-lg  flex flex-col justify-center items-center shadow-lg">
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex justify-center  my-8"
            >
              <div className="w-full h-full flex flex-col justify-center ">
                <h2 className="font-semibold text-2xl text-blue-900 flex justify-center ">
                  Change Password
                </h2>
                {/* <div className="w-[70%] h-full flex flex-col "> */}
                <div className=" flex mt-6 items-center justify-center  my-2">
                  <TextField
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={!!errors.username}
                    helperText={errors.username}
                    size="small"
                  />
                </div>{" "}
                <div className=" flex items-center justify-center  my-2">
                  <TextField
                    label="Old Password"
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    error={!!errors.oldPassword}
                    helperText={errors.oldPassword}
                    size="small"
                  />
                </div>
                <div className=" flex items-center justify-center  my-2">
                  <TextField
                    label="New password"
                    type="New password"
                    id="New password"
                    value={newPassword}
                    onChange={(e) => setNewpassword(e.target.value)}
                    error={!!errors.Newpassword}
                    size="small"
                  />
                </div>
                <div className="flex  items-center justify-center my-2 ">
                  <TextField
                    label="Confirm password"
                    type="Confirmpassword"
                    id="Confirmpassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                    error={!!errors.Confirmpassword}
                    size="small"
                    // className="p-2 border border-gray-500 rounded-lg"
                  />
                </div>
                <div className="flex justify-center my-2">
                  <button
                    type="submit"
                    className="text-white bg-blue-900 border rounded-lg py-3 px-9 cursor-pointer font-semibold text-[18px] "
                  >
                    Submit
                  </button>
                </div>
                <div className="text-[18px] my-4 gap-1 flex justify-center">
                  Need help?{" "}
                  <span className="text-blue-900 underline">
                    Contact support
                  </span>y
                  .
                </div>
              </div>
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmpassword;
