import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  /* const store =useSelector((store)=>store)
  const cartItems=store.cart.items;
  same code but will result in bad performance(have subscribed to the whole store) because 
  if anything else changes in the store, this component will be affected. like if any other slice code is
  changed, this slice will be affected. Thus never subscribe to the whole store. always to portion of store
  */
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button> 
        {cartItems.length === 0 && (
          <h1>Cart is empty. Please add items to the cart.</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
