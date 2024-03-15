import React,{useState} from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/MockData";
const Body = () => {
  const [listOfRestaurants,setListOfRestaurants]=useState(restaurantList);
  let listOfRestaurantsJs = [
    {
      data: {
        id: "74453",
        name: "Domino's Pizza",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        costForTwoString: "₹400 FOR TWO",
        avgRating: "3.5",
      },
    },
    {
        data: {
          id: "744538",
          name: "KFC",
          cloudinaryImageId: "bz9zkh2aqywjhpankb07",
          cuisines: ["Pizzas"],
          costForTwoString: "₹400 FOR TWO",
          avgRating: "4.4",
        },
    },
    {
        data: {
          id: "744503",
          name: "McD",
          cloudinaryImageId: "bz9zkh2aqywjhpankb07",
          cuisines: ["Pizzas"],
          costForTwoString: "₹400 FOR TWO",
          avgRating: "4.6",
        },
    },
  ];
  return (
    <>
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={(restaurant) => {
            const filteredListOfRestaurants=listOfRestaurants.filter((res)=>{
                return res.data.avgRating>4;
            })
            setListOfRestaurants(filteredListOfRestaurants)
            // console.log(listOfRestaurants)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        { listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
