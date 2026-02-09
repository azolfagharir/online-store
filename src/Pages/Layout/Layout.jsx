import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";

function Layout({ children }) {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <>
      <div className="bg-orange-500 flex justify-between items-center rounded-2xl">
        <Link to="/Products">
          <h1 className="text-white font-bold p-4 text-2xl">online shop</h1>
        </Link>

        <Link to="/ShoppBox">
          <div className="relative text-white p-4 text-5xl">
            <CiShoppingCart />

            {totalQuantity > 0 && (
              <span className="absolute top-12 bg-gray-500 text-white 
                 w-6 h-6 flex items-center justify-center 
                 rounded-full text-sm">
                {totalQuantity}
              </span>
            )}
          </div>
        </Link>
      </div>

      {children}
    </>
  );
}


export default Layout;
