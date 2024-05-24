import React, { useState, useEffect } from "react";
import RestaurantCard, { promotedRestaurantCard } from "./RestaurantCard";
// import { restaurantList } from "../utils/MockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const isLabelled = true;
  const RestaurantCardPromoted = promotedRestaurantCard(RestaurantCard);
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
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setDisplayedListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(displayedListOfRestaurants[0]?.info)
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline. Please check your internet connection.</h1>
    );
  }
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
      <div className="filter flex">
        <div className="search p-4 m-4">
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
            className="search-btn px-4 py-1 bg-green-200 m-4 rounded-lg"
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
          className="filter-btn bg-green-200 h-10 mt-10 px-4 rounded-lg"
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
      <div className="flex flex-wrap">
        {displayedListOfRestaurants.map((restaurant) => {
          return (
            <Link to={"restaurant/" + restaurant?.info?.id}>
              {isLabelled ? (
                <RestaurantCardPromoted
                  key={restaurant?.info?.id}
                  {...restaurant?.info}
                />
              ) : (
                <RestaurantCard
                  key={restaurant?.info?.id}
                  {...restaurant?.info}
                />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
