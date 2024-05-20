import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  showListItems,
  setShowIndex,
  setNullShowIndex,
}) => {
  //   console.log(data);
  //   const itemArray = data?.itemCards;
  //   console.log(itemArray);
  //   console.log(data.itemCards);

  //   const [showListItems, setListItems] = useState(false);
  const handleClick = () => {
    if (showListItems) {
      setNullShowIndex();
    } else {
      setShowIndex();
    }
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-200 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div className="">
          {showListItems && <ItemList items={data?.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
