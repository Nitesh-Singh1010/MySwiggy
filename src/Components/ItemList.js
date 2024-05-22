import React from "react";
import { CDN_LINK } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  //   console.log(items);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-600 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            {" "}
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                ₹ :{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => addItemToCart(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_LINK + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
