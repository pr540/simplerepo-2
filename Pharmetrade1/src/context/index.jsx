// import React, { createContext, useState, useCallback, useEffect } from 'react';

// // Create the App Context
// export const AppContext = createContext();

// // App Provider Component
// export const AppProvider = ({ children }) => {
//   // State to manage whether the user is logged in

//   const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('login') || null));


//   // State to manage cart items
//   const [cartItems, setCartItems] = useState([]);
//   const [wishItems, setWishItems] = useState([]);


  
//   // Function to log in the user, memoized with useCallback
//   const logIn = useCallback(() => {
//     setIsLoggedIn(
//       JSON.parse(localStorage.getItem('login') || '')
//     );
   
//   }, []);

//   // Function to log out the user, memoized with useCallback
//   const logOut = useCallback(() => {
//     setIsLoggedIn('');
//     localStorage.removeItem('login');
//   }, []);

//   // Function to fetch cart data from API, memoized with useCallback
//   const fetchCartData = useCallback(async () => {
//       try {
//         const response = await fetch(
//           `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Cart/GetCartItems?customerId=${isLoggedIn.userId}`,
//           {
//             method: "GET",
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           }
//         );

//         if (!response.ok) {
//           const errorDetails = await response.json();
//           throw new Error(
//             `Error: ${response.status} ${response.statusText
//             } - ${JSON.stringify(errorDetails)}`
//           );
//         }

//         const result = await response.json();
//         // console.log("result----", result);
//         setCartItems(result?.result || []);
        

//       } catch (error) {
//         // console.error("There was a problem with the fetch operation:", error);
//         throw error;
//       }
//   }, []);

//   // const fetchDeleteData = useCallback(async (index) => {
//   // try {
//   //   const response = await fetch(`http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Cart/Delete?CartId=${cartItems[index].cartId}`, {
//   //     method: "POST",
//   //   }
//   //   )

//   //   // if (!response.ok) {
//   //   //   const errorDetails = await response.json();
//   //   //   throw new Error(
//   //   //     `Error: ${response.status} ${response.statusText
//   //   //     } - ${JSON.stringify(errorDetails)}`
//   //   //   );
//   //   // }

//   //   const result = await response.json();
//   //   console.log("deleteresult----", result);
//   //   // setCartItems(result?.result || []);
//   //   window.location.reload()



//   // } catch (error) {
//   //   // console.error("There was a problem with the fetch operation:", error);
//   //   throw error;
//   // }
//   // }, [])



//   const fetchWishListData = useCallback(async () => {
//     try {
//       const response = await fetch(
//         `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/WishList/GetWishListItems?customerId=${isLoggedIn.userId}`,
//         {
//           method: "GET",
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       if (!response.ok) {
//         const errorDetails = await response.json();
//         throw new Error(
//           `Error: ${response.status} ${response.statusText
//           } - ${JSON.stringify(errorDetails)}`
//         );
//       }

//       const result = await response.json();
//       console.log("WishListResponse", result);
//       setWishItems(result?.result || []);
//       // return result
//       // console.log('cartResult:', cartResult);

//     } catch (error) {
//       // console.error("There was a problem with the fetch operation:", error);
//       throw error;
//     }
//   }, []);

//   useEffect(() => {
//     if (isLoggedIn) {
//       console.log("wishListItems-------", wishItems)
//       console.log('userid -> ',isLoggedIn.userId)
//       fetchCartData();
//       fetchWishListData()
//     } else {
//       setCartItems([])
//       setWishItems([])
//     }
//   }, [])
  



//   console.log("cartItemsContext--", cartItems)
//   console.log("contextwishItems--", wishItems)
//   return (

//     <AppContext.Provider value={{ isLoggedIn, logIn, logOut, cartItems, setCartItems, fetchCartData, wishItems, setWishItems, fetchWishListData }}>
//       {children}
//     </AppContext.Provider>
//   );
// };