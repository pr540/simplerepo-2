import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/img1.png";
import { styled, alpha } from "@mui/material/styles";
import searchimg from "../../../assets/search1.png";
import InputBase from "@mui/material/InputBase";
import { useSelector } from "react-redux";


function LayoutOrderList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);
  const localData = localStorage.getItem("userId")
  // const customerId = localData?.userId;
  const orderList = useSelector((state) => state.orders)
  console.log("order---->",orderList)
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Orders/Get?customerId=${localData}`
        );
        const data = await response.json();
        if (data.statusCode === 200) {
          setOrders(data.result);
        } else {
          console.error("Failed to fetch orders:", data.message);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  // useEffect(() => {
  //   if (orderList.length > 0) {
  //     setOrders(orderList);
  //     }
  // }, [])
  const generateYears = (startYear, endYear) => {
    let years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  const YearDropdown = () => {
    const currentYear = new Date().getFullYear();
    const years = generateYears(2000, currentYear);

    return (
      <select className="border  rounded-md mx-2 shadow-md bg-slate-200">
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    );
  };

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

  return (
    <div
      className="max-w-5xl overflow-scroll  m-auto"
      // style={{marginTop: `${topMargin}px`,}}
    >
      <div className="flex justify-between items-center ">
        <h2 className="text-3xl font-semibold"> Your Orders</h2>

        <div className="flex   text-end justify-end items-center">
          {/* <div className="flex  m-5 ">
            <input
              type="text"
              placeholder="search product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-left relative h-12 w-64 bg-white border rounded-xl    p-2 "
            />
          </div> */}
          <div className="flex m-5">
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
          <button className="border rounded-full w-52 text-xl p-2 bg-blue-900 text-white">
            Search order
          </button>
        </div>
      </div>
      {/* links start */}
      <div className="flex   ">
        <button className=" border-b border-red-500  hover:text-blue-900 text-black w-60   h-9  text-xl">
          Orders
        </button>

        <button className="  border-b hover:border-red-500 hover:text-blue-900 text-black w-60   h-9 text-xl">
          {" "}
          {""}
          <Link to="/layout"> Buy Again</Link>
        </button>
        <button className="  border-b hover:border-red-500 hover:text-blue-900 text-black w-60   h-9 text-xl">
          {" "}
          {""}
          <Link to="/products"> Not Yet Shipped</Link>
        </button>

        <button className="  border-b hover:border-red-500 hover:text-red-500 text-black w-60 h-9 text-xl">
          {" "}
          {""}
          <Link to="/cancelledpage"> Cancelled Orders</Link>
        </button>
      </div>
      {/* limks end */}
      <div className="flex my-4">
        <h1>Orders Placed In</h1>
        <YearDropdown className="border rounded-lg" />
      </div>
      {/* section start */}

      {orders.map((order) => (
        <div key={order.orderId} className="border my-6 rounded-lg shadow-md">
          <div className="flex justify-between border-b pb-2 pt-2 pr-3 pl-3 bg-slate-200">
            <div>
              <h1>Order Placed</h1>
              <p>{new Date(order.orderDate).toLocaleDateString()}</p>
            </div>
            <div>
              <h1>Total</h1>
              <p>${order.totalAmount.toFixed(2)}</p>
            </div>
            <div>
              <h1>Ship To</h1>
              <p className="text-blue-900">{order.customerName}</p>
            </div>
            <div>
              <h1>Order ID</h1>
              <p className="text-blue-900">
                <Link to="/"> View Order Details | Invoice</Link>
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between pt-3 pr-3 pl-3">
              <div className="">
                <h1 className="text-xl font-semibold">Delivery Date</h1>
                <p>Package was handed to resident</p>
              </div>
              <div className="flex flex-col">
                <button className="border rounded-lg p-2 w-60 shadow-md">
                  Leave Seller Feedback
                </button>
                <button className="border rounded-lg p-2 my-2 shadow-md">
                  Write a product review
                </button>
              </div>
            </div>

            <div className="flex border-b">
              <div className="flex m-0">
                <img src={img} className="w-24 h-40 m-0 p-0" alt="product" />

                <div className="flex flex-col">
                  <p className="max-w-2xl text-sky-900">
                    {order.productDescription}
                  </p>
                  <p className="my-2 text-sm">
                    Return Window closed on{" "}
                    {new Date(order.orderDate).toLocaleDateString()}
                  </p>
                  <div className="flex my-2">
                    <button className="border rounded-lg p-2 bg-blue-900 text-white w-48 shadow-md">
                      <Link to="/products"> Buy it again</Link>
                    </button>
                    <button className="border rounded-lg p-2 mx-3 shadow-md w-48">
                      <Link to={`/detailspage/${order.productId}`}>
                        View your item
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2">
              <button className="text-blue-900">Archive order</button>
            </div>
          </div>
        </div>
      ))}
      {/* section end */}
    </div>

    // </div>
  );
}

export default LayoutOrderList;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import img from "../../../assets/img1.png";
// function OrderHistory({ topMargin }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const generateYears = (startYear, endYear) => {
//     let years = [];
//     for (let year = startYear; year <= endYear; year++) {
//       years.push(year);
//     }
//     return years;
//   };

//   const YearDropdown = () => {
//     const currentYear = new Date().getFullYear();
//     const years = generateYears(2000, currentYear);

//     return (
//       <select className="border  rounded-md mx-2 shadow-md bg-slate-200">
//         {years.map((year) => (
//           <option key={year} value={year}>
//             {year}
//           </option>
//         ))}
//       </select>
//     );
//   };

//   return (
//     <div
//       className="max-w-5xl overflow-scroll m-auto my-6"
//       style={{
//         marginTop: `${topMargin}px`,
//       }}
//     >
//       {/* <div className='w-screen h-screen'> */}

//       {/* <div className="flex my-2">
//         <p className="text-xl">Your Accounts</p>
//         <p className="text-xl text-red-400 mx-4">
//           <Link to="/orderlist">Your Orders</Link>
//         </p>
//       </div> */}

//       <div className="flex justify-between items-center ">
//         <h2 className="text-3xl font-semibold"> Your Orders</h2>

//         <div className="flex   text-end justify-end items-center">
//           <div className="flex bg-white border rounded-xl  h-12 w-64   p-2 m-5 ">
//             <input
//               type="text"
//               placeholder="search product"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="text-left relative"
//             />
//           </div>
//           <button className="border rounded-full w-52 text-xl p-2 bg-blue-900 text-white">
//             Search order
//           </button>
//         </div>
//       </div>
//       {/* links start */}
//       <div className="flex   ">
//         <button className=" border-b border-red-500  hover:text-blue-900 text-black w-60   h-9  text-xl">
//           Orders
//         </button>

//         <button className="  border-b hover:border-red-500 hover:text-blue-900 text-black w-60   h-9 text-xl">
//           {" "}
//           {""}
//           <Link to="/products"> Buy Again</Link>
//         </button>
//         <button className="  border-b hover:border-red-500 hover:text-blue-900 text-black w-60   h-9 text-xl">
//           {" "}
//           {""}
//           <Link to="/products"> Not Yet Shipped</Link>
//         </button>

//         <button className="  border-b hover:border-red-500 hover:text-red-500 text-black w-60 h-9 text-xl">
//           {" "}
//           {""}
//           <Link to="/cancelledpage"> Cancelled Orders</Link>
//         </button>
//       </div>
//       {/* limks end */}
//       <div className="flex my-4">
//         <h1>Orders Placed In</h1>
//         <YearDropdown className="border rounded-lg" />
//       </div>
//       {/* section start */}

//       <div className="border my-6 rounded-lg shadow-md">
//         <div className="flex justify-between border-b pb-2 pt-2 pr-3 pl-3 bg-slate-200">
//           <div>
//             <h1 className="">Order Placed</h1>
//             <p>7 April 2024</p>
//           </div>
//           <div>
//             <h1>Total</h1>
//             <p>$ 299.00</p>
//           </div>
//           <div>
//             <h1>Ship To</h1>
//             <p className="text-blue-900"> Customer Name</p>
//           </div>
//           <div>
//             <h1>Order ID</h1>

//             <p className="text-blue-900">
//               <Link to="/"> View Order Details | Invoice</Link>{" "}
//             </p>
//           </div>
//         </div>
//         <div className="">
//           <div className="flex justify-between pt-3 pr-3 pl-3">
//             <div className="">
//               <h1 className="text-xl font-semibold">Delivery Date</h1>
//               <p>Package was handed to resident</p>
//             </div>
//             <div className="flex flex-col">
//               <button className="border rounded-lg p-2 w-60 shadow-md">
//                 Leave Seller Feedback
//               </button>
//               <button className="border rounded-lg p-2 my-2 shadow-md">
//                 Write a product review
//               </button>
//             </div>
//           </div>

//           <div className="flex  border-b">
//             <div className="flex m-0">
//               <img src={img} className="w-24 h-40 m-0 p-0" />

//               <div className="flex flex-col   ">
//                 <p className="max-w-2xl text-sky-900">
//                   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                   Veritatis, vitae ipsa ducimus dolores qui veniam quibusdam
//                   voluptatum Lorem ipsum dolor, sit amet consectetur adipisicing
//                   elit.dolores qui veniam quibusdam voluptatum Lorem
//                 </p>
//                 <p className="my-2 text-sm">
//                   Return Window closed on 22 April 2024
//                 </p>
//                 <div className=" flex my-2">
//                   <button className="border rounded-lg p-2 bg-blue-900 text-white w-48 shadow-md">
//                     <Link to="/products"> Buy it again</Link>
//                   </button>
//                   <button className="border rounded-lg p-2 mx-3 shadow-md w-48">
//                   <Link to='/detailspage/:id'>View your item</Link>  
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="p-2">
//             <button className="text-blue-900">Archieve order</button>
//           </div>
//         </div>
//       </div>
//       {/* section end */}
//     </div>

//     // </div>
//   );
// }

// export default OrderHistory;
