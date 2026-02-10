import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { OrbitProgress } from "react-loading-indicators";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../Features/Product/ProductSlice";
import { useEffect } from "react";


function ProductDetails() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  const { id } = useParams();

  const Products = useSelector((state) => state.products.Products);

  const product = Products.find((item) => item.id === Number(id));

  // ✅ IMPORTANT: guard for async data
  if (!product)
    return (
      <OrbitProgress
        className="mt-20"
        variant="spokes"
        color="#ff6900"
        size="medium"
        text=""
        textColor=""
      />
    );

  return (
    <div className="flex ">
      <img
        className="w-60 border-2 rounded-2xl border-dashed border-orange-500 mt-8 p-4"
        src={product.image}
        alt={product.title}
      />
      <div
        className="mt-6 max-w-4xl w-250 top-0 mt-8 text-left ml-8 
      border-2 rounded-2xl border-dashed border-gray-500"
      >
        <h1 className="text-orange-500 font-bold text-2xl mt-4 ml-4">
          {product.title}
        </h1>
        <p className="mt-8  ml-4">{product.description}</p>
        <p className="mt-8 ml-4">{product.category}</p>
        <div className="mt-8 ml-4 flex justify-between ">
          <p className="font-bold ">${product.price}</p>
          <Link to="/Products">
            <button className="!bg-orange-500 rounded-2xl p-4 text-white mr-4 text-xl">
              back to shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
