import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { menuApi } from "../utils/Constants";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  // console.log(resId)
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    menuFetch();
  }, []);
  const menuFetch = async () => {
    const menuData = await fetch(menuApi + resId);
    const jsonMenu = await menuData.json();
    // console.log(jsonMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    // console.log(jsonMenu);
    setresInfo(jsonMenu);
  };

  if (resInfo == null) {
    return <Shimmer />;
  } else {
    // const { itemCards } =
    //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
    //     ?.card?.card;
    // console.log( resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
    // const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?cards.filter((c)=>
    //    c.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    // );
    const { itemCards } =
      resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card;
    // console.log( resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories =
      resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    // console.log(categories);

    const { name } = resInfo?.data?.cards[2]?.card?.card?.info;

    return (
      <div className="text-center">
        <h1 className="text-center font-bold my-6 text-2xl">{name}</h1>
        {/* category accordions */}

        {categories.map((category, index) => {
          return (
            <div className="content-center">
              <RestaurantCategory
                data={category.card?.card}
                key={category.card?.card.title}
                showListItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)} // clicking accordion will set it's index to showIndex
                setNullShowIndex={() => setShowIndex(null)} // if an accordion is already opened, clicking it again will close it
                //lifting the state up
              />
            </div>
          );
        })}
      </div>
    );
  }
};

export default RestaurantMenu;
