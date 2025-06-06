// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import AllProduct from "../component/AllProduct";
// import { addCartItem } from "../redux/productSlide";

// const Menu = () => {
//   const { filterby } = useParams(); // use for get parameter from url
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const productData = useSelector((state) => state.product.productList);

//   const productDisplay = productData.filter((el) => el._id === filterby)[0];
//   const handleAddCartProduct = (e) => {
//     dispatch(addCartItem(productDisplay));
//   };

//   const handleBuy = () => {
//     dispatch(addCartItem(productDisplay));
//     navigate("/cart");
//   };
//   return (
//     <div>
//       <div className="p-2 md:p-4">
//         <div className="w-full max-w-4xl m-auto md:flex bg-white">
//           <div className="max-w-sm  overflow-hidden w-full p-5">
//             <img
//               src={productDisplay.image}
//               className="hover:scale-105 transition-all h-full"
//             />
//           </div>

//           <div className="flex flex-col gap-1">
//             <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-4xl">
//               {productDisplay.name}
//             </h3>
//             <p className=" text-slate-500  font-medium text-2xl">
//               {productDisplay.category}
//             </p>
//             <p className=" font-bold md:text-2xl">
//               <span className="text-red-500 ">₹</span>
//               <span>{productDisplay.price}</span>
//             </p>
//             <div className="flex gap-3">
//               <button
//                 onClick={handleBuy}
//                 className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
//               >
//                 Buy
//               </button>
//               <button
//                 onClick={handleAddCartProduct}
//                 className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
//               >
//                 Add Cart
//               </button>
//             </div>
//             <div>
//               <p className="text-slate-600 font-medium">Description : </p>
//               <p>{productDisplay.description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <AllProduct heading={"Related Product"} />
//     </div>
//   );
// };

// export default Menu;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AllProduct from "../component/AllProduct";
import { addCartItem } from "../redux/productSlide";

const Menu = () => {
  const { filterby } = useParams(); // Get product ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.find((el) => el._id === filterby);

  const handleAddCartProduct = () => {
    if (productDisplay) dispatch(addCartItem(productDisplay));
  };

  const handleBuy = () => {
    if (productDisplay) {
      dispatch(addCartItem(productDisplay));
      navigate("/cart");
    }
  };

  // Show loading or not found if product not available
  if (!productDisplay) {
    return (
      <div className="text-center p-10 text-gray-600 text-lg">
        Loading... or Product Not Found
      </div>
    );
  }

  return (
    <div>
      <div className="p-2 md:p-4">
        <div className="w-full max-w-4xl m-auto md:flex bg-white shadow rounded">
          <div className="max-w-sm overflow-hidden w-full p-5">
            <img
              src={productDisplay.image}
              alt={productDisplay.name}
              className="hover:scale-105 transition-all h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-1 p-5">
            <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl">
              {productDisplay.name}
            </h3>
            <p className="text-slate-500 font-medium text-2xl">
              {productDisplay.category}
            </p>
            <p className="font-bold md:text-2xl">
              <span className="text-red-500">₹</span>
              {productDisplay.price}
            </p>
            <div className="flex gap-3 mt-3">
              <button
                onClick={handleBuy}
                className="bg-yellow-500 py-2 px-4 rounded hover:bg-yellow-600"
              >
                Buy
              </button>
              <button
                onClick={handleAddCartProduct}
                className="bg-yellow-500 py-2 px-4 rounded hover:bg-yellow-600"
              >
                Add to Cart
              </button>
            </div>
            <div className="mt-4">
              <p className="text-slate-600 font-medium">Description:</p>
              <p className="text-gray-700">{productDisplay.description}</p>
            </div>
          </div>
        </div>
      </div>

      <AllProduct heading={"Related Products"} />
    </div>
  );
};

export default Menu;
