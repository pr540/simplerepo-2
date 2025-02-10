// import React from "react";
// import Cat1 from "../../assets/Cat1.png";
// import img1 from "../../assets/img1.png";

// function Baby() {
//   return (
//     <div className="flex flex-cols w-fit">
//       <div className="flex flex-col justify-center  w-fit h-fit text-lg bg-white px-10 pt-2">
//         <div className="bg-white w-fit px-2 ">
//           {" "}
//           <img src={img1} className="h-36 w-20" />
//         </div>
//         <div className="w-fit">
//           <ul className="w-fit">
//             <li>
//               <a>Suppliments</a>
//             </li>
//             <li>
//               <a>Multi Vitamins </a>
//             </li>
//             <li className="w-fit">
//               <a className="whitespace-nowrap">Anti Ageing & AntiOxidants</a>
//             </li>
//             <li>
//               <a>Fish Oils & Omega</a>
//             </li>
//             <li>
//               <a>Liver & Detox </a>
//             </li>
//             <li>
//               <a>Hair Skin , Nails </a>
//             </li>
//             <li>
//               <a>View All</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="flex flex-col w-fit px-10 h-fit text-lg bg-red-300">
//         <div>
//           {" "}
//           <img src={img1} className="h-36 w-20" />
//         </div>
//         <div>
//           <ul className="whitespace-nowrap">
//             <li>
//               <a>Meal Replacement</a>
//             </li>
//             <li>
//               <a>Protein Powder </a>
//             </li>
//             <li>
//               <a>Weight Loss Suppliments </a>
//             </li>
//             <li>
//               <a>Muscle Building </a>
//             </li>
//             <li>
//               <a>Low Calorie Snack </a>
//             </li>
//             <li>
//               <a>View All</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="flex bg-green-400 w-fit px-10">
//         <div>
//           <img src={img1} className="h-36 w-20" />
//         </div>
//         <div>
//           <ul className="whitespace-nowrap">
//             <li>
//               <a>Personal Care</a>
//             </li>
//             <li>
//               <a>Skin Care </a>
//             </li>
//             <li>
//               <a>Anti Aging & Antiodidnats</a>
//             </li>
//             <li>
//               <a>Sun Care </a>
//             </li>
//             <li>
//               <a>Makeup and Cosmetics </a>
//             </li>
//             <li>
//               <a>Waxing and Hair Removal </a>
//             </li>
//             <li>
//               <a>Veiw All </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Baby;

import React from "react";
import Cat1 from "../../assets/Cat1.png";
import img1 from "../../assets/img1.png";

function Baby() {
  const supplements = [
    "Supplements",
    "Multi Vitamins",
    "Anti Ageing & Antioxidants",
    "Fish Oils & Omega",
    "Liver & Detox",
    "Hair Skin, Nails",
    "View All",
  ];

  const fitness = [
    "Meal Replacement",
    "Protein Powder",
    "Weight Loss Supplements",
    "Muscle Building",
    "Low Calorie Snack",
    "Anti Aging & Antioxidants",
    "View All",
  ];

  const personalCare = [
    "Personal Care",
    "Skin Care",
    "Anti Aging & Antioxidants",
    "Sun Care",
    "Makeup and Cosmetics",
    "Waxing and Hair Removal",
    "View All",
  ];

  return (
    <div className="flex w-fit">
      <div className="flex flex-col w-fit h-fit text-lg bg-white px-10 pt-2">
        <div className="">
          <img src={img1} className="h-36 w-20" alt="Supplement Category" />
        </div>
        <div className="">
          <ul className="whitespace-nowrap">
            {supplements.map((item, index) => (
              <li key={index}>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-fit px-10 h-fit text-lg bg-red-300">
        <div>
          <img src={img1} className="h-36 w-20" alt="Fitness Category" />
        </div>
        <div>
          <ul className="whitespace-nowrap">
            {fitness.map((item, index) => (
              <li key={index}>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-fit px-10 h-fit text-lg bg-green-400">
        <div>
          <img src={img1} className="h-36 w-20" alt="Personal Care Category" />
        </div>
        <div>
          <ul className="whitespace-nowrap">
            {personalCare.map((item, index) => (
              <li key={index}>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Baby;

