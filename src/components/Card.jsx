import { TbListDetails } from "react-icons/tb";
import { CiShoppingBasket } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addToCart, removeFromCart, increaseQuantity, decreaseQuantity}
 from "../Features/SelectedProducts/SelectedProductsSlice"
import { MdDelete } from "react-icons/md";


function Card({ product }) {
  const slicedTitle = product.title.split(" ", 3).join(" ");
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const cartItem = items.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="border-2 rounded-2xl border-dashed border-orange-500
     mt-4 p-4 flex flex-col items-center gap-2 h-100 ">
      <img className="w-40 h-90" src={product.image} alt={product.title} />
      <h1>{slicedTitle}</h1>
      <p>{product.price}</p>

      <div className="text-orange-500 flex justify-between w-full text-4xl items-center h-40">
        <Link to={`/Products/${product.id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 0 && (
            <CiShoppingBasket
              onClick={() => dispatch(addToCart(product))}
              className="cursor-pointer"
            />
          ) 
          }
      
            <div className="flex items-center gap-3 text-2xl">
              {quantity > 1 && 
              <button onClick={() => dispatch(decreaseQuantity(product.id))}>−</button>
              }
              {quantity == 1 && 
              <button onClick={() => dispatch(removeFromCart(product.id))}><MdDelete /></button>
              }
              {quantity > 0 && 
              <>
              <span>{quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
              </>
              }
            </div>
        </div>
        
      </div>
    </div>
  );
}


export default Card;
