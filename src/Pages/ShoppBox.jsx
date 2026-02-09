import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../Features/SelectedProducts/SelectedProductsSlice";



function ShoppBox() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { totalQuantity } = useSelector((state) => state.cart);
  const { totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="flex justify-between">
      {items.length === 0 && (
        <p className="m-auto text-4xl mt-40">Your cart is empty</p>
      )}
      <div className="flex flex-col gap-4 mt-4 ">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-2 rounded-2xl 
          border-dashed border-orange-500 w-190 ml-110  justify-between"
          >
            <img src={item.image} alt={item.title} className="w-20" />
            <div>
              <h2>{item.title}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
            <div className="flex text-2xl mr-2">
              <button className="text-orange-500 mr-4" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              <p>{item.quantity}</p>
              <button className="text-orange-500 ml-4" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            </div>
          </div>
        ))}
        {items.length != 0 && (
          <div
            className="border-2 rounded-2xl 
          border-dashed border-orange-500 w-80 absolute text-left"
          >
            <p className="mt-4 ml-4 text-xl">total : {totalPrice.toFixed(2)}</p>
            <p className="mt-4 ml-4 text-xl">quantity : {totalQuantity}</p>
            <p className="mt-4 ml-4 text-xl">status : pending...</p>
            <button className="!bg-orange-500 rounded-2xl p-2 text-xl mt-4 mb-4 ml-4 text-xl">
              checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppBox;
