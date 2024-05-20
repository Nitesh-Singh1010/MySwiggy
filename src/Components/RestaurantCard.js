import { CDN_LINK } from "../utils/Constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="res-card m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-400">
      <img src={CDN_LINK + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;


// higher order component
export const promotedRestaurantCard=(RestaurantCard)=>{
   return (props)=>{
    return(
      <div className="">
         <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
   }
}
//jsonMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
