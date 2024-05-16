import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { menuApi } from "../utils/Constants";
const RestaurantMenu = () => {
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
    console.log(jsonMenu);
    setresInfo(jsonMenu);
  };

  if (resInfo == null) {
    return <Shimmer />;
  } else {
    const { itemCards } =
      resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card;
    // console.log(itemCards);
    const { name } = resInfo?.data?.cards[2]?.card?.card?.info;
    return (
      <div className="menu">
        <h1>{name}</h1>
        <h2>Menu</h2>
        <ul>
          <h1>Welcome to this resto</h1>
          {/* {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs : "}
              {item.card.info.price / 100}
            </li>
          ))} */}
        </ul>
      </div>
    );
  }
};

export default RestaurantMenu;
