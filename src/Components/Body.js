import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
// import { restaurantList } from "../utils/MockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [displayedListOfRestaurants, setDisplayedListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  // console.log("hello")
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setDisplayedListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (listOfRestaurants.length == 0) {
    return (
      <>
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </>
    );
  }

  return (
    <>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="search-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res?.info?.name.includes(searchText)
              );
              setDisplayedListOfRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={(restaurant) => {
            const filteredListOfRestaurants = listOfRestaurants.filter(
              (res) => {
                return res.info.avgRating > 4.2;
              }
            );
            setDisplayedListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {displayedListOfRestaurants.map((restaurant) => {
          return (
            <Link to={"restaurant/" + restaurant?.info?.id}>
              <RestaurantCard
                key={restaurant?.info?.id}
                {...restaurant?.info}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
